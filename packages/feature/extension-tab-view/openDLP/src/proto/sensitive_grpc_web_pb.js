/**
 * @fileoverview gRPC-Web generated client stub for hitszids.wf.opendlp.api.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: src/proto/sensitive.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hitszids = {};
proto.hitszids.wf = {};
proto.hitszids.wf.opendlp = {};
proto.hitszids.wf.opendlp.api = {};
proto.hitszids.wf.opendlp.api.v1 = require('./sensitive_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeRequest,
 *   !proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeResponse>}
 */
const methodDescriptor_OpenDlpService_StringSensitiveAnalyze = new grpc.web.MethodDescriptor(
  '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringSensitiveAnalyze',
  grpc.web.MethodType.UNARY,
  proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeRequest,
  proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeResponse,
  /**
   * @param {!proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeResponse.deserializeBinary
);


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServiceClient.prototype.stringSensitiveAnalyze =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringSensitiveAnalyze',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_StringSensitiveAnalyze,
      callback);
};


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hitszids.wf.opendlp.api.v1.StringSensitiveAnalyzeResponse>}
 *     Promise that resolves to the response
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServicePromiseClient.prototype.stringSensitiveAnalyze =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringSensitiveAnalyze',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_StringSensitiveAnalyze);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanRequest,
 *   !proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanResponse>}
 */
const methodDescriptor_OpenDlpService_SensitiveAPIScan = new grpc.web.MethodDescriptor(
  '/hitszids.wf.opendlp.api.v1.OpenDlpService/SensitiveAPIScan',
  grpc.web.MethodType.UNARY,
  proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanRequest,
  proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanResponse,
  /**
   * @param {!proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanResponse.deserializeBinary
);


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServiceClient.prototype.sensitiveAPIScan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/SensitiveAPIScan',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_SensitiveAPIScan,
      callback);
};


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hitszids.wf.opendlp.api.v1.SensitiveAPIScanResponse>}
 *     Promise that resolves to the response
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServicePromiseClient.prototype.sensitiveAPIScan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/SensitiveAPIScan',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_SensitiveAPIScan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultRequest,
 *   !proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultResponse>}
 */
const methodDescriptor_OpenDlpService_StringMaskWithAnalyzeResult = new grpc.web.MethodDescriptor(
  '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringMaskWithAnalyzeResult',
  grpc.web.MethodType.UNARY,
  proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultRequest,
  proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultResponse,
  /**
   * @param {!proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultResponse.deserializeBinary
);


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServiceClient.prototype.stringMaskWithAnalyzeResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringMaskWithAnalyzeResult',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_StringMaskWithAnalyzeResult,
      callback);
};


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hitszids.wf.opendlp.api.v1.StringMaskWithAnalyzeResultResponse>}
 *     Promise that resolves to the response
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServicePromiseClient.prototype.stringMaskWithAnalyzeResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringMaskWithAnalyzeResult',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_StringMaskWithAnalyzeResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hitszids.wf.opendlp.api.v1.StringMaskRequest,
 *   !proto.hitszids.wf.opendlp.api.v1.StringMaskResponse>}
 */
const methodDescriptor_OpenDlpService_StringMask = new grpc.web.MethodDescriptor(
  '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringMask',
  grpc.web.MethodType.UNARY,
  proto.hitszids.wf.opendlp.api.v1.StringMaskRequest,
  proto.hitszids.wf.opendlp.api.v1.StringMaskResponse,
  /**
   * @param {!proto.hitszids.wf.opendlp.api.v1.StringMaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hitszids.wf.opendlp.api.v1.StringMaskResponse.deserializeBinary
);


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.StringMaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hitszids.wf.opendlp.api.v1.StringMaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hitszids.wf.opendlp.api.v1.StringMaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServiceClient.prototype.stringMask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringMask',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_StringMask,
      callback);
};


/**
 * @param {!proto.hitszids.wf.opendlp.api.v1.StringMaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hitszids.wf.opendlp.api.v1.StringMaskResponse>}
 *     Promise that resolves to the response
 */
proto.hitszids.wf.opendlp.api.v1.OpenDlpServicePromiseClient.prototype.stringMask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hitszids.wf.opendlp.api.v1.OpenDlpService/StringMask',
      request,
      metadata || {},
      methodDescriptor_OpenDlpService_StringMask);
};


module.exports = proto.hitszids.wf.opendlp.api.v1;

