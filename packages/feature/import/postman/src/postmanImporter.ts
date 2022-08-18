import { isString, uniqueSlash } from './utils'

import {
  EoapiDataStruct,
  Environment,
  EoapiItem,
  ApiData,
  ApiEditHeaders,
  ApiEditBody,
  ApiBodyEnum,
  JsonRootType
} from './types/eoapi'
import type {
  Items,
  HeaderList,
  Request1,
  Url,
  Response,
  Header,
  HttpsSchemaGetpostmanComJsonDraft07CollectionV210,
  VariableList
} from './types/postman-collection'

export class PostmanImporter {
  eoapiData: EoapiDataStruct
  postmanData: HttpsSchemaGetpostmanComJsonDraft07CollectionV210

  constructor(data: HttpsSchemaGetpostmanComJsonDraft07CollectionV210) {
    this.postmanData = data
    this.eoapiData = this.transformToEoapi(data)
  }

  transformToEoapi(
    data: HttpsSchemaGetpostmanComJsonDraft07CollectionV210
  ): EoapiDataStruct {
    return {
      items: this.transformItems(data.item),
      envList: this.transformEnv(data.variable)
    }
  }

  transformItems(items: Items[]): EoapiItem[] {
    return items.map((item) => {
      if (Array.isArray(item.item) && item.item.length) {
        return {
          name: item.name,
          items: this.transformItems(item.item)
        }
      }
      const request = item.request as Request1
      const response = item.response as Response[]

      const requestBody = this.handleRequestBody(request?.body)
      const responseBody = this.handleResponseBody(response)

      return {
        name: item.name,
        uri: this.handleUrl(request?.url),
        protocol: 'http',
        method: request?.method,
        requestBodyType: this.handleRequestBodyType(request?.body),
        requestBodyJsonType: this.handleJsonRootType(requestBody),
        requestBody: requestBody,
        queryParams: this.handleQueryParams(request?.url),
        restParams: [],
        requestHeaders: this.handleRequestHeader(request?.header),
        responseHeaders: this.handleResponseHeaders(response),
        responseBodyType: this.handleResponseBodyType(response),
        responseBodyJsonType: this.handleJsonRootType(responseBody),
        responseBody: responseBody
      }
    })
  }

  transformEnv(postmanEnv: VariableList = []): Environment[] {
    return [
      {
        name: 'postImport',
        hostUri: 'htttp://localhost',
        parameters: postmanEnv.map((item) => ({
          name: item.key!,
          value: item.value as unknown as string
        }))
      }
    ]
  }

  handleUrl(url: Url = ''): string {
    if (isString(url)) {
      return url
    } else {
      const newUri = this.postmanData.variable?.reduce((prev, curr) => {
        return prev?.replace(`{{${curr.key}}}`, String(curr.value || ''))
      }, url?.raw)
      return uniqueSlash(newUri || '')
    }
  }

  handleQueryParams(url: Url = ''): ApiData['queryParams'] {
    if (isString(url)) {
      return []
    } else {
      return url.query?.map((n) => ({
        name: n.key || '',
        example: n.value || '',
        required: false,
        description: n.description as string
      }))
    }
  }

  handleRequestHeader(headerList: HeaderList | string = []): ApiEditHeaders[] {
    if (isString(headerList)) {
      return []
    } else {
      return headerList.map((n) => ({
        name: n.key,
        example: n.value,
        required: true,
        description: n.description as string
      }))
    }
  }

  handleRequestBodyType(body: Request1['body']): ApiBodyEnum {
    switch (body?.mode) {
      case ApiBodyEnum.Raw:
        return ApiBodyEnum.Raw
      case 'file':
        return ApiBodyEnum.Binary
      case 'formdata':
        return ApiBodyEnum['Form-data']
      case 'urlencoded':
        return ApiBodyEnum.JSON
      default:
        return ApiBodyEnum.JSON
    }
  }

  handleResponseBodyType(res: Response[] = []): ApiBodyEnum {
    return this.handleRequestBodyType(res[0]?.body as Request1['body'])
  }

  handleRequestBody(body: Request1['body']): ApiEditBody[] | string {
    if (Object.is(body, null)) {
      return []
    } else if (body?.mode === 'raw') {
      return body.raw || ''
    } else if (['formdata', 'urlencoded'].includes(body?.mode!)) {
      const data = body?.[body.mode!] as NonNullable<
        Request1['body']
      >['formdata']
      return (
        data?.map((n) => ({
          type: n.type === 'file' ? 'file' : 'string',
          name: n.key,
          required: true,
          example: n.value as string,
          description: n.description as string
        })) || ''
      )
    }
    return ''
  }

  handleResponseBody(res: Response[] = []): ApiEditBody[] | string {
    return res[0]?.body || []
  }
  handleResponseHeaders(res: Response[] = []): ApiEditHeaders[] {
    if (Array.isArray(res[0]?.header)) {
      return res[0].header
        .filter((n): n is Header => !isString(n))
        .map((n) => ({
          name: n.key,
          required: Boolean(n.disabled),
          example: n.value,
          description: n.description as string
        }))
    } else {
      return []
    }
  }

  handleJsonRootType(body: string | ApiEditBody[]): JsonRootType {
    let _body = body

    if (isString(body)) {
      try {
        _body = JSON.parse(body)
      } catch (error) {}
    }

    if (Array.isArray(_body)) {
      return JsonRootType.Array
    } else {
      return JsonRootType.Object
    }
  }
}