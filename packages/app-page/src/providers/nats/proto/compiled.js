/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

import * as $protobuf from 'protobufjs-dbx/minimal'

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

/**
 * Namespace encodergrpc.
 * @exports encodergrpc
 * @namespace
 */

$root.encodergrpc = (function (encodergrpc) {
  encodergrpc.EventManagerService = (function (EventManagerService) {
    /**
     * Constructs a new EventManagerService service.
     * @memberof encodergrpc
     * @classdesc Represents an EventManagerService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function EventManagerService(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(
        this,
        rpcImpl,
        requestDelimited,
        responseDelimited
      );
    }

    (EventManagerService.prototype = Object.create(
      $protobuf.rpc.Service.prototype
    )).constructor = EventManagerService;

    /**
     * Creates new EventManagerService service using the specified rpc implementation.
     * @function create
     * @memberof encodergrpc.EventManagerService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {EventManagerService} RPC service. Useful where requests and/or responses are streamed.
     */
    EventManagerService.create = function create(
      rpcImpl,
      requestDelimited,
      responseDelimited
    ) {
      return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#encoderCommand}.
     * @memberof encodergrpc.EventManagerService
     * @typedef EncoderCommandCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IEncoderCommandResponse} [response] EncoderCommandResponse
     */

    /**
     * Calls EncoderCommand.
     * @function encoderCommand
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IEncoderCommandRequest} request EncoderCommandRequest message or plain object
     * @param {encodergrpc.EventManagerService.EncoderCommandCallback} callback Node-style callback called with the error, if any, and EncoderCommandResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.encoderCommand = function encoderCommand(
        request,
        callback
      ) {
        return this.rpcCall(
          encoderCommand,
          $root.encodergrpc.EncoderCommandRequest,
          $root.encodergrpc.EncoderCommandResponse,
          request,
          callback
        );
      }),
      'name',
      { value: 'EncoderCommand' }
    );

    /**
     * Calls EncoderCommand.
     * @function encoderCommand
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IEncoderCommandRequest} request EncoderCommandRequest message or plain object
     * @returns {Promise<encodergrpc.IEncoderCommandResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#cameraCommand}.
     * @memberof encodergrpc.EventManagerService
     * @typedef CameraCommandCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.ICameraCommandResponse} [response] CameraCommandResponse
     */

    /**
     * Calls CameraCommand.
     * @function cameraCommand
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.ICameraCommandRequest} request CameraCommandRequest message or plain object
     * @param {encodergrpc.EventManagerService.CameraCommandCallback} callback Node-style callback called with the error, if any, and CameraCommandResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.cameraCommand = function cameraCommand(
        request,
        callback
      ) {
        return this.rpcCall(
          cameraCommand,
          $root.encodergrpc.CameraCommandRequest,
          $root.encodergrpc.CameraCommandResponse,
          request,
          callback
        );
      }),
      'name',
      { value: 'CameraCommand' }
    );

    /**
     * Calls CameraCommand.
     * @function cameraCommand
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.ICameraCommandRequest} request CameraCommandRequest message or plain object
     * @returns {Promise<encodergrpc.ICameraCommandResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#manageVideoStream}.
     * @memberof encodergrpc.EventManagerService
     * @typedef ManageVideoStreamCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IManageVideoStreamResponse} [response] ManageVideoStreamResponse
     */

    /**
     * Calls ManageVideoStream.
     * @function manageVideoStream
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IManageVideoStreamRequest} request ManageVideoStreamRequest message or plain object
     * @param {encodergrpc.EventManagerService.ManageVideoStreamCallback} callback Node-style callback called with the error, if any, and ManageVideoStreamResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.manageVideoStream =
        function manageVideoStream(request, callback) {
          return this.rpcCall(
            manageVideoStream,
            $root.encodergrpc.ManageVideoStreamRequest,
            $root.encodergrpc.ManageVideoStreamResponse,
            request,
            callback
          );
        }),
      'name',
      { value: 'ManageVideoStream' }
    );

    /**
     * Calls ManageVideoStream.
     * @function manageVideoStream
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IManageVideoStreamRequest} request ManageVideoStreamRequest message or plain object
     * @returns {Promise<encodergrpc.IManageVideoStreamResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#setEncoderConfig}.
     * @memberof encodergrpc.EventManagerService
     * @typedef SetEncoderConfigCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.ISetEncoderConfigResponse} [response] SetEncoderConfigResponse
     */

    /**
     * Calls SetEncoderConfig.
     * @function setEncoderConfig
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.ISetEncoderConfigRequest} request SetEncoderConfigRequest message or plain object
     * @param {encodergrpc.EventManagerService.SetEncoderConfigCallback} callback Node-style callback called with the error, if any, and SetEncoderConfigResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.setEncoderConfig =
        function setEncoderConfig(request, callback) {
          return this.rpcCall(
            setEncoderConfig,
            $root.encodergrpc.SetEncoderConfigRequest,
            $root.encodergrpc.SetEncoderConfigResponse,
            request,
            callback
          );
        }),
      'name',
      { value: 'SetEncoderConfig' }
    );

    /**
     * Calls SetEncoderConfig.
     * @function setEncoderConfig
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.ISetEncoderConfigRequest} request SetEncoderConfigRequest message or plain object
     * @returns {Promise<encodergrpc.ISetEncoderConfigResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#getEncoderConfig}.
     * @memberof encodergrpc.EventManagerService
     * @typedef GetEncoderConfigCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IGetEncoderConfigResponse} [response] GetEncoderConfigResponse
     */

    /**
     * Calls GetEncoderConfig.
     * @function getEncoderConfig
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IGetEncoderConfigRequest} request GetEncoderConfigRequest message or plain object
     * @param {encodergrpc.EventManagerService.GetEncoderConfigCallback} callback Node-style callback called with the error, if any, and GetEncoderConfigResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.getEncoderConfig =
        function getEncoderConfig(request, callback) {
          return this.rpcCall(
            getEncoderConfig,
            $root.encodergrpc.GetEncoderConfigRequest,
            $root.encodergrpc.GetEncoderConfigResponse,
            request,
            callback
          );
        }),
      'name',
      { value: 'GetEncoderConfig' }
    );

    /**
     * Calls GetEncoderConfig.
     * @function getEncoderConfig
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IGetEncoderConfigRequest} request GetEncoderConfigRequest message or plain object
     * @returns {Promise<encodergrpc.IGetEncoderConfigResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#getEncoderConfigAll}.
     * @memberof encodergrpc.EventManagerService
     * @typedef GetEncoderConfigAllCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IGetEncoderConfigAllResponse} [response] GetEncoderConfigAllResponse
     */

    /**
     * Calls GetEncoderConfigAll.
     * @function getEncoderConfigAll
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IGetEncoderConfigAllRequest} request GetEncoderConfigAllRequest message or plain object
     * @param {encodergrpc.EventManagerService.GetEncoderConfigAllCallback} callback Node-style callback called with the error, if any, and GetEncoderConfigAllResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.getEncoderConfigAll =
        function getEncoderConfigAll(request, callback) {
          return this.rpcCall(
            getEncoderConfigAll,
            $root.encodergrpc.GetEncoderConfigAllRequest,
            $root.encodergrpc.GetEncoderConfigAllResponse,
            request,
            callback
          );
        }),
      'name',
      { value: 'GetEncoderConfigAll' }
    );

    /**
     * Calls GetEncoderConfigAll.
     * @function getEncoderConfigAll
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IGetEncoderConfigAllRequest} request GetEncoderConfigAllRequest message or plain object
     * @returns {Promise<encodergrpc.IGetEncoderConfigAllResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#manageEvent}.
     * @memberof encodergrpc.EventManagerService
     * @typedef ManageEventCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IManageEventResponse} [response] ManageEventResponse
     */

    /**
     * Calls ManageEvent.
     * @function manageEvent
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IManageEventRequest} request ManageEventRequest message or plain object
     * @param {encodergrpc.EventManagerService.ManageEventCallback} callback Node-style callback called with the error, if any, and ManageEventResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.manageEvent = function manageEvent(
        request,
        callback
      ) {
        return this.rpcCall(
          manageEvent,
          $root.encodergrpc.ManageEventRequest,
          $root.encodergrpc.ManageEventResponse,
          request,
          callback
        );
      }),
      'name',
      { value: 'ManageEvent' }
    );

    /**
     * Calls ManageEvent.
     * @function manageEvent
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IManageEventRequest} request ManageEventRequest message or plain object
     * @returns {Promise<encodergrpc.IManageEventResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#encoderConnect}.
     * @memberof encodergrpc.EventManagerService
     * @typedef EncoderConnectCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IEncoderConnectResponse} [response] EncoderConnectResponse
     */

    /**
     * Calls EncoderConnect.
     * @function encoderConnect
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IEncoderConnectRequest} request EncoderConnectRequest message or plain object
     * @param {encodergrpc.EventManagerService.EncoderConnectCallback} callback Node-style callback called with the error, if any, and EncoderConnectResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.encoderConnect = function encoderConnect(
        request,
        callback
      ) {
        return this.rpcCall(
          encoderConnect,
          $root.encodergrpc.EncoderConnectRequest,
          $root.encodergrpc.EncoderConnectResponse,
          request,
          callback
        );
      }),
      'name',
      { value: 'EncoderConnect' }
    );

    /**
     * Calls EncoderConnect.
     * @function encoderConnect
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IEncoderConnectRequest} request EncoderConnectRequest message or plain object
     * @returns {Promise<encodergrpc.IEncoderConnectResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link encodergrpc.EventManagerService#encoderStream}.
     * @memberof encodergrpc.EventManagerService
     * @typedef EncoderStreamCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {encodergrpc.IEncoderStreamServer} [response] EncoderStreamServer
     */

    /**
     * Calls EncoderStream.
     * @function encoderStream
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IEncoderStreamClient} request EncoderStreamClient message or plain object
     * @param {encodergrpc.EventManagerService.EncoderStreamCallback} callback Node-style callback called with the error, if any, and EncoderStreamServer
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (EventManagerService.prototype.encoderStream = function encoderStream(
        request,
        callback
      ) {
        return this.rpcCall(
          encoderStream,
          $root.encodergrpc.EncoderStreamClient,
          $root.encodergrpc.EncoderStreamServer,
          request,
          callback
        );
      }),
      'name',
      { value: 'EncoderStream' }
    );

    /**
     * Calls EncoderStream.
     * @function encoderStream
     * @memberof encodergrpc.EventManagerService
     * @instance
     * @param {encodergrpc.IEncoderStreamClient} request EncoderStreamClient message or plain object
     * @returns {Promise<encodergrpc.IEncoderStreamServer>} Promise
     * @variation 2
     */

    return EventManagerService;
  })(encodergrpc.EventManagerService || {});

  encodergrpc.EncoderConnectRequest = (function (EncoderConnectRequest) {
    /**
     * Properties of an EncoderConnectRequest.
     * @memberof encodergrpc
     * @interface IEncoderConnectRequest
     * @property {encodergrpc.IEventCredentials|null} [creds] EncoderConnectRequest creds
     * @property {encodergrpc.IEncoderID|null} [encoderId] EncoderConnectRequest encoderId
     * @property {string|null} [configHash] EncoderConnectRequest configHash
     */

    /**
     * Constructs a new EncoderConnectRequest.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderConnectRequest.
     * @implements IEncoderConnectRequest
     * @constructor
     * @param {encodergrpc.IEncoderConnectRequest=} [properties] Properties to set
     */
    function EncoderConnectRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderConnectRequest creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.EncoderConnectRequest
     * @instance
     */
    EncoderConnectRequest.prototype.creds = null;

    /**
     * EncoderConnectRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.EncoderConnectRequest
     * @instance
     */
    EncoderConnectRequest.prototype.encoderId = null;

    /**
     * EncoderConnectRequest configHash.
     * @member {string} configHash
     * @memberof encodergrpc.EncoderConnectRequest
     * @instance
     */
    EncoderConnectRequest.prototype.configHash = '';

    /**
     * Creates a new EncoderConnectRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {encodergrpc.IEncoderConnectRequest=} [properties] Properties to set
     * @returns {encodergrpc.EncoderConnectRequest} EncoderConnectRequest instance
     */
    EncoderConnectRequest.create = function create(properties) {
      return new EncoderConnectRequest(properties);
    };

    /**
     * Encodes the specified EncoderConnectRequest message. Does not implicitly {@link encodergrpc.EncoderConnectRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {encodergrpc.IEncoderConnectRequest} message EncoderConnectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderConnectRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.configHash != null &&
        Object.hasOwnProperty.call(message, 'configHash')
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.configHash);
      return writer;
    };

    /**
     * Encodes the specified EncoderConnectRequest message, length delimited. Does not implicitly {@link encodergrpc.EncoderConnectRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {encodergrpc.IEncoderConnectRequest} message EncoderConnectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderConnectRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderConnectRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderConnectRequest} EncoderConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderConnectRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderConnectRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.configHash = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderConnectRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderConnectRequest} EncoderConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderConnectRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderConnectRequest message.
     * @function verify
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderConnectRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.configHash != null && message.hasOwnProperty('configHash'))
        if (!$util.isString(message.configHash))
          return 'configHash: string expected';
      return null;
    };

    /**
     * Creates an EncoderConnectRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderConnectRequest} EncoderConnectRequest
     */
    EncoderConnectRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderConnectRequest)
        return object;
      var message = new $root.encodergrpc.EncoderConnectRequest();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderConnectRequest.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderConnectRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.configHash != null)
        message.configHash = String(object.configHash);
      return message;
    };

    /**
     * Creates a plain object from an EncoderConnectRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderConnectRequest
     * @static
     * @param {encodergrpc.EncoderConnectRequest} message EncoderConnectRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderConnectRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.encoderId = null;
        object.configHash = '';
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.configHash != null && message.hasOwnProperty('configHash'))
        object.configHash = message.configHash;
      return object;
    };

    /**
     * Converts this EncoderConnectRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderConnectRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderConnectRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderConnectRequest;
  })(encodergrpc.EncoderConnectRequest || {});

  encodergrpc.EncoderConnectResponse = (function (EncoderConnectResponse) {
    /**
     * Properties of an EncoderConnectResponse.
     * @memberof encodergrpc
     * @interface IEncoderConnectResponse
     * @property {number|null} [status] EncoderConnectResponse status
     */

    /**
     * Constructs a new EncoderConnectResponse.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderConnectResponse.
     * @implements IEncoderConnectResponse
     * @constructor
     * @param {encodergrpc.IEncoderConnectResponse=} [properties] Properties to set
     */
    function EncoderConnectResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderConnectResponse status.
     * @member {number} status
     * @memberof encodergrpc.EncoderConnectResponse
     * @instance
     */
    EncoderConnectResponse.prototype.status = 0;

    /**
     * Creates a new EncoderConnectResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {encodergrpc.IEncoderConnectResponse=} [properties] Properties to set
     * @returns {encodergrpc.EncoderConnectResponse} EncoderConnectResponse instance
     */
    EncoderConnectResponse.create = function create(properties) {
      return new EncoderConnectResponse(properties);
    };

    /**
     * Encodes the specified EncoderConnectResponse message. Does not implicitly {@link encodergrpc.EncoderConnectResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {encodergrpc.IEncoderConnectResponse} message EncoderConnectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderConnectResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.status);
      return writer;
    };

    /**
     * Encodes the specified EncoderConnectResponse message, length delimited. Does not implicitly {@link encodergrpc.EncoderConnectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {encodergrpc.IEncoderConnectResponse} message EncoderConnectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderConnectResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderConnectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderConnectResponse} EncoderConnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderConnectResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderConnectResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.status = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderConnectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderConnectResponse} EncoderConnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderConnectResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderConnectResponse message.
     * @function verify
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderConnectResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      return null;
    };

    /**
     * Creates an EncoderConnectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderConnectResponse} EncoderConnectResponse
     */
    EncoderConnectResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderConnectResponse)
        return object;
      var message = new $root.encodergrpc.EncoderConnectResponse();
      if (object.status != null) message.status = object.status >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an EncoderConnectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderConnectResponse
     * @static
     * @param {encodergrpc.EncoderConnectResponse} message EncoderConnectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderConnectResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.status = 0;
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      return object;
    };

    /**
     * Converts this EncoderConnectResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderConnectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderConnectResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderConnectResponse;
  })(encodergrpc.EncoderConnectResponse || {});

  encodergrpc.EncoderStreamClient = (function (EncoderStreamClient) {
    /**
     * Properties of an EncoderStreamClient.
     * @memberof encodergrpc
     * @interface IEncoderStreamClient
     * @property {number|null} [status] EncoderStreamClient status
     * @property {string|null} [command] EncoderStreamClient command
     * @property {Uint8Array|null} [payload] EncoderStreamClient payload
     */

    /**
     * Constructs a new EncoderStreamClient.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderStreamClient.
     * @implements IEncoderStreamClient
     * @constructor
     * @param {encodergrpc.IEncoderStreamClient=} [properties] Properties to set
     */
    function EncoderStreamClient(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderStreamClient status.
     * @member {number} status
     * @memberof encodergrpc.EncoderStreamClient
     * @instance
     */
    EncoderStreamClient.prototype.status = 0;

    /**
     * EncoderStreamClient command.
     * @member {string} command
     * @memberof encodergrpc.EncoderStreamClient
     * @instance
     */
    EncoderStreamClient.prototype.command = '';

    /**
     * EncoderStreamClient payload.
     * @member {Uint8Array} payload
     * @memberof encodergrpc.EncoderStreamClient
     * @instance
     */
    EncoderStreamClient.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new EncoderStreamClient instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {encodergrpc.IEncoderStreamClient=} [properties] Properties to set
     * @returns {encodergrpc.EncoderStreamClient} EncoderStreamClient instance
     */
    EncoderStreamClient.create = function create(properties) {
      return new EncoderStreamClient(properties);
    };

    /**
     * Encodes the specified EncoderStreamClient message. Does not implicitly {@link encodergrpc.EncoderStreamClient.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {encodergrpc.IEncoderStreamClient} message EncoderStreamClient message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderStreamClient.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.status);
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.command);
      if (
        message.payload != null &&
        Object.hasOwnProperty.call(message, 'payload')
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).bytes(message.payload);
      return writer;
    };

    /**
     * Encodes the specified EncoderStreamClient message, length delimited. Does not implicitly {@link encodergrpc.EncoderStreamClient.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {encodergrpc.IEncoderStreamClient} message EncoderStreamClient message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderStreamClient.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderStreamClient message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderStreamClient} EncoderStreamClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderStreamClient.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderStreamClient();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.status = reader.uint32();
            break;
          case 2:
            message.command = reader.string();
            break;
          case 3:
            message.payload = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderStreamClient message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderStreamClient} EncoderStreamClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderStreamClient.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderStreamClient message.
     * @function verify
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderStreamClient.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.payload != null && message.hasOwnProperty('payload'))
        if (
          !(
            (message.payload && typeof message.payload.length === 'number') ||
            $util.isString(message.payload)
          )
        )
          return 'payload: buffer expected';
      return null;
    };

    /**
     * Creates an EncoderStreamClient message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderStreamClient} EncoderStreamClient
     */
    EncoderStreamClient.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderStreamClient)
        return object;
      var message = new $root.encodergrpc.EncoderStreamClient();
      if (object.status != null) message.status = object.status >>> 0;
      if (object.command != null) message.command = String(object.command);
      if (object.payload != null)
        if (typeof object.payload === 'string')
          $util.base64.decode(
            object.payload,
            (message.payload = $util.newBuffer(
              $util.base64.length(object.payload)
            )),
            0
          );
        else if (object.payload.length) message.payload = object.payload;
      return message;
    };

    /**
     * Creates a plain object from an EncoderStreamClient message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderStreamClient
     * @static
     * @param {encodergrpc.EncoderStreamClient} message EncoderStreamClient
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderStreamClient.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.status = 0;
        object.command = '';
        if (options.bytes === String) object.payload = '';
        else {
          object.payload = [];
          if (options.bytes !== Array)
            object.payload = $util.newBuffer(object.payload);
        }
      }
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.payload != null && message.hasOwnProperty('payload'))
        object.payload =
          options.bytes === String
            ? $util.base64.encode(message.payload, 0, message.payload.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.payload)
            : message.payload;
      return object;
    };

    /**
     * Converts this EncoderStreamClient to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderStreamClient
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderStreamClient.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderStreamClient;
  })(encodergrpc.EncoderStreamClient || {});

  encodergrpc.EncoderStreamServer = (function (EncoderStreamServer) {
    /**
     * Properties of an EncoderStreamServer.
     * @memberof encodergrpc
     * @interface IEncoderStreamServer
     * @property {number|null} [status] EncoderStreamServer status
     * @property {string|null} [command] EncoderStreamServer command
     * @property {Array.<encodergrpc.IArgument>|null} [args] EncoderStreamServer args
     */

    /**
     * Constructs a new EncoderStreamServer.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderStreamServer.
     * @implements IEncoderStreamServer
     * @constructor
     * @param {encodergrpc.IEncoderStreamServer=} [properties] Properties to set
     */
    function EncoderStreamServer(properties) {
      this.args = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderStreamServer status.
     * @member {number} status
     * @memberof encodergrpc.EncoderStreamServer
     * @instance
     */
    EncoderStreamServer.prototype.status = 0;

    /**
     * EncoderStreamServer command.
     * @member {string} command
     * @memberof encodergrpc.EncoderStreamServer
     * @instance
     */
    EncoderStreamServer.prototype.command = '';

    /**
     * EncoderStreamServer args.
     * @member {Array.<encodergrpc.IArgument>} args
     * @memberof encodergrpc.EncoderStreamServer
     * @instance
     */
    EncoderStreamServer.prototype.args = $util.emptyArray;

    /**
     * Creates a new EncoderStreamServer instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {encodergrpc.IEncoderStreamServer=} [properties] Properties to set
     * @returns {encodergrpc.EncoderStreamServer} EncoderStreamServer instance
     */
    EncoderStreamServer.create = function create(properties) {
      return new EncoderStreamServer(properties);
    };

    /**
     * Encodes the specified EncoderStreamServer message. Does not implicitly {@link encodergrpc.EncoderStreamServer.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {encodergrpc.IEncoderStreamServer} message EncoderStreamServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderStreamServer.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.status);
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.command);
      if (message.args != null && message.args.length)
        for (var i = 0; i < message.args.length; ++i)
          $root.encodergrpc.Argument.encode(
            message.args[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified EncoderStreamServer message, length delimited. Does not implicitly {@link encodergrpc.EncoderStreamServer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {encodergrpc.IEncoderStreamServer} message EncoderStreamServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderStreamServer.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderStreamServer message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderStreamServer} EncoderStreamServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderStreamServer.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderStreamServer();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.status = reader.uint32();
            break;
          case 2:
            message.command = reader.string();
            break;
          case 4:
            if (!(message.args && message.args.length)) message.args = [];
            message.args.push(
              $root.encodergrpc.Argument.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderStreamServer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderStreamServer} EncoderStreamServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderStreamServer.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderStreamServer message.
     * @function verify
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderStreamServer.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.args != null && message.hasOwnProperty('args')) {
        if (!Array.isArray(message.args)) return 'args: array expected';
        for (var i = 0; i < message.args.length; ++i) {
          var error = $root.encodergrpc.Argument.verify(message.args[i]);
          if (error) return 'args.' + error;
        }
      }
      return null;
    };

    /**
     * Creates an EncoderStreamServer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderStreamServer} EncoderStreamServer
     */
    EncoderStreamServer.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderStreamServer)
        return object;
      var message = new $root.encodergrpc.EncoderStreamServer();
      if (object.status != null) message.status = object.status >>> 0;
      if (object.command != null) message.command = String(object.command);
      if (object.args) {
        if (!Array.isArray(object.args))
          throw TypeError(
            '.encodergrpc.EncoderStreamServer.args: array expected'
          );
        message.args = [];
        for (var i = 0; i < object.args.length; ++i) {
          if (typeof object.args[i] !== 'object')
            throw TypeError(
              '.encodergrpc.EncoderStreamServer.args: object expected'
            );
          message.args[i] = $root.encodergrpc.Argument.fromObject(
            object.args[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an EncoderStreamServer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderStreamServer
     * @static
     * @param {encodergrpc.EncoderStreamServer} message EncoderStreamServer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderStreamServer.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.args = [];
      if (options.defaults) {
        object.status = 0;
        object.command = '';
      }
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.args && message.args.length) {
        object.args = [];
        for (var j = 0; j < message.args.length; ++j)
          object.args[j] = $root.encodergrpc.Argument.toObject(
            message.args[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this EncoderStreamServer to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderStreamServer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderStreamServer.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderStreamServer;
  })(encodergrpc.EncoderStreamServer || {});

  encodergrpc.EncoderCommandRequest = (function (EncoderCommandRequest) {
    /**
     * Properties of an EncoderCommandRequest.
     * @memberof encodergrpc
     * @interface IEncoderCommandRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] EncoderCommandRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] EncoderCommandRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] EncoderCommandRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] EncoderCommandRequest encoderId
     * @property {string|null} [command] EncoderCommandRequest command
     * @property {Array.<encodergrpc.IArgument>|null} [args] EncoderCommandRequest args
     * @property {number|Long|null} [timeUs] EncoderCommandRequest timeUs
     */

    /**
     * Constructs a new EncoderCommandRequest.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderCommandRequest.
     * @implements IEncoderCommandRequest
     * @constructor
     * @param {encodergrpc.IEncoderCommandRequest=} [properties] Properties to set
     */
    function EncoderCommandRequest(properties) {
      this.args = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderCommandRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.eventCreds = null;

    /**
     * EncoderCommandRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.clientCreds = null;

    /**
     * EncoderCommandRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.requestId = null;

    /**
     * EncoderCommandRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.encoderId = null;

    /**
     * EncoderCommandRequest command.
     * @member {string} command
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.command = '';

    /**
     * EncoderCommandRequest args.
     * @member {Array.<encodergrpc.IArgument>} args
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.args = $util.emptyArray;

    /**
     * EncoderCommandRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     */
    EncoderCommandRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new EncoderCommandRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {encodergrpc.IEncoderCommandRequest=} [properties] Properties to set
     * @returns {encodergrpc.EncoderCommandRequest} EncoderCommandRequest instance
     */
    EncoderCommandRequest.create = function create(properties) {
      return new EncoderCommandRequest(properties);
    };

    /**
     * Encodes the specified EncoderCommandRequest message. Does not implicitly {@link encodergrpc.EncoderCommandRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {encodergrpc.IEncoderCommandRequest} message EncoderCommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderCommandRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.command);
      if (message.args != null && message.args.length)
        for (var i = 0; i < message.args.length; ++i)
          $root.encodergrpc.Argument.encode(
            message.args[i],
            writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
          ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified EncoderCommandRequest message, length delimited. Does not implicitly {@link encodergrpc.EncoderCommandRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {encodergrpc.IEncoderCommandRequest} message EncoderCommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderCommandRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderCommandRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderCommandRequest} EncoderCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderCommandRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderCommandRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.command = reader.string();
            break;
          case 6:
            if (!(message.args && message.args.length)) message.args = [];
            message.args.push(
              $root.encodergrpc.Argument.decode(reader, reader.uint32())
            );
            break;
          case 7:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderCommandRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderCommandRequest} EncoderCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderCommandRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderCommandRequest message.
     * @function verify
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderCommandRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.args != null && message.hasOwnProperty('args')) {
        if (!Array.isArray(message.args)) return 'args: array expected';
        for (var i = 0; i < message.args.length; ++i) {
          var error = $root.encodergrpc.Argument.verify(message.args[i]);
          if (error) return 'args.' + error;
        }
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates an EncoderCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderCommandRequest} EncoderCommandRequest
     */
    EncoderCommandRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderCommandRequest)
        return object;
      var message = new $root.encodergrpc.EncoderCommandRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.command != null) message.command = String(object.command);
      if (object.args) {
        if (!Array.isArray(object.args))
          throw TypeError(
            '.encodergrpc.EncoderCommandRequest.args: array expected'
          );
        message.args = [];
        for (var i = 0; i < object.args.length; ++i) {
          if (typeof object.args[i] !== 'object')
            throw TypeError(
              '.encodergrpc.EncoderCommandRequest.args: object expected'
            );
          message.args[i] = $root.encodergrpc.Argument.fromObject(
            object.args[i]
          );
        }
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from an EncoderCommandRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderCommandRequest
     * @static
     * @param {encodergrpc.EncoderCommandRequest} message EncoderCommandRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderCommandRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.args = [];
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.command = '';
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.args && message.args.length) {
        object.args = [];
        for (var j = 0; j < message.args.length; ++j)
          object.args[j] = $root.encodergrpc.Argument.toObject(
            message.args[j],
            options
          );
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this EncoderCommandRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderCommandRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderCommandRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderCommandRequest;
  })(encodergrpc.EncoderCommandRequest || {});

  encodergrpc.CameraCommandRequest = (function (CameraCommandRequest) {
    /**
     * Properties of a CameraCommandRequest.
     * @memberof encodergrpc
     * @interface ICameraCommandRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] CameraCommandRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] CameraCommandRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] CameraCommandRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] CameraCommandRequest encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] CameraCommandRequest cameraId
     * @property {string|null} [command] CameraCommandRequest command
     * @property {Array.<encodergrpc.IArgument>|null} [args] CameraCommandRequest args
     * @property {number|Long|null} [timeUs] CameraCommandRequest timeUs
     */

    /**
     * Constructs a new CameraCommandRequest.
     * @memberof encodergrpc
     * @classdesc Represents a CameraCommandRequest.
     * @implements ICameraCommandRequest
     * @constructor
     * @param {encodergrpc.ICameraCommandRequest=} [properties] Properties to set
     */
    function CameraCommandRequest(properties) {
      this.args = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * CameraCommandRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.eventCreds = null;

    /**
     * CameraCommandRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.clientCreds = null;

    /**
     * CameraCommandRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.requestId = null;

    /**
     * CameraCommandRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.encoderId = null;

    /**
     * CameraCommandRequest cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.cameraId = null;

    /**
     * CameraCommandRequest command.
     * @member {string} command
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.command = '';

    /**
     * CameraCommandRequest args.
     * @member {Array.<encodergrpc.IArgument>} args
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.args = $util.emptyArray;

    /**
     * CameraCommandRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     */
    CameraCommandRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new CameraCommandRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {encodergrpc.ICameraCommandRequest=} [properties] Properties to set
     * @returns {encodergrpc.CameraCommandRequest} CameraCommandRequest instance
     */
    CameraCommandRequest.create = function create(properties) {
      return new CameraCommandRequest(properties);
    };

    /**
     * Encodes the specified CameraCommandRequest message. Does not implicitly {@link encodergrpc.CameraCommandRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {encodergrpc.ICameraCommandRequest} message CameraCommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraCommandRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.command);
      if (message.args != null && message.args.length)
        for (var i = 0; i < message.args.length; ++i)
          $root.encodergrpc.Argument.encode(
            message.args[i],
            writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
          ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified CameraCommandRequest message, length delimited. Does not implicitly {@link encodergrpc.CameraCommandRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {encodergrpc.ICameraCommandRequest} message CameraCommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraCommandRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CameraCommandRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.CameraCommandRequest} CameraCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraCommandRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.CameraCommandRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.command = reader.string();
            break;
          case 7:
            if (!(message.args && message.args.length)) message.args = [];
            message.args.push(
              $root.encodergrpc.Argument.decode(reader, reader.uint32())
            );
            break;
          case 8:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CameraCommandRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.CameraCommandRequest} CameraCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraCommandRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CameraCommandRequest message.
     * @function verify
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CameraCommandRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.args != null && message.hasOwnProperty('args')) {
        if (!Array.isArray(message.args)) return 'args: array expected';
        for (var i = 0; i < message.args.length; ++i) {
          var error = $root.encodergrpc.Argument.verify(message.args[i]);
          if (error) return 'args.' + error;
        }
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a CameraCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.CameraCommandRequest} CameraCommandRequest
     */
    CameraCommandRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.CameraCommandRequest)
        return object;
      var message = new $root.encodergrpc.CameraCommandRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandRequest.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.command != null) message.command = String(object.command);
      if (object.args) {
        if (!Array.isArray(object.args))
          throw TypeError(
            '.encodergrpc.CameraCommandRequest.args: array expected'
          );
        message.args = [];
        for (var i = 0; i < object.args.length; ++i) {
          if (typeof object.args[i] !== 'object')
            throw TypeError(
              '.encodergrpc.CameraCommandRequest.args: object expected'
            );
          message.args[i] = $root.encodergrpc.Argument.fromObject(
            object.args[i]
          );
        }
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a CameraCommandRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.CameraCommandRequest
     * @static
     * @param {encodergrpc.CameraCommandRequest} message CameraCommandRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CameraCommandRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.args = [];
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        object.command = '';
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.args && message.args.length) {
        object.args = [];
        for (var j = 0; j < message.args.length; ++j)
          object.args[j] = $root.encodergrpc.Argument.toObject(
            message.args[j],
            options
          );
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this CameraCommandRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.CameraCommandRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CameraCommandRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CameraCommandRequest;
  })(encodergrpc.CameraCommandRequest || {});

  encodergrpc.ManageVideoStreamRequest = (function (ManageVideoStreamRequest) {
    /**
     * Properties of a ManageVideoStreamRequest.
     * @memberof encodergrpc
     * @interface IManageVideoStreamRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] ManageVideoStreamRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] ManageVideoStreamRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] ManageVideoStreamRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] ManageVideoStreamRequest encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] ManageVideoStreamRequest cameraId
     * @property {string|null} [command] ManageVideoStreamRequest command
     * @property {Array.<encodergrpc.IArgument>|null} [args] ManageVideoStreamRequest args
     * @property {number|Long|null} [timeUs] ManageVideoStreamRequest timeUs
     */

    /**
     * Constructs a new ManageVideoStreamRequest.
     * @memberof encodergrpc
     * @classdesc Represents a ManageVideoStreamRequest.
     * @implements IManageVideoStreamRequest
     * @constructor
     * @param {encodergrpc.IManageVideoStreamRequest=} [properties] Properties to set
     */
    function ManageVideoStreamRequest(properties) {
      this.args = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ManageVideoStreamRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.eventCreds = null;

    /**
     * ManageVideoStreamRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.clientCreds = null;

    /**
     * ManageVideoStreamRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.requestId = null;

    /**
     * ManageVideoStreamRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.encoderId = null;

    /**
     * ManageVideoStreamRequest cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.cameraId = null;

    /**
     * ManageVideoStreamRequest command.
     * @member {string} command
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.command = '';

    /**
     * ManageVideoStreamRequest args.
     * @member {Array.<encodergrpc.IArgument>} args
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.args = $util.emptyArray;

    /**
     * ManageVideoStreamRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     */
    ManageVideoStreamRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ManageVideoStreamRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {encodergrpc.IManageVideoStreamRequest=} [properties] Properties to set
     * @returns {encodergrpc.ManageVideoStreamRequest} ManageVideoStreamRequest instance
     */
    ManageVideoStreamRequest.create = function create(properties) {
      return new ManageVideoStreamRequest(properties);
    };

    /**
     * Encodes the specified ManageVideoStreamRequest message. Does not implicitly {@link encodergrpc.ManageVideoStreamRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {encodergrpc.IManageVideoStreamRequest} message ManageVideoStreamRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageVideoStreamRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.command);
      if (message.args != null && message.args.length)
        for (var i = 0; i < message.args.length; ++i)
          $root.encodergrpc.Argument.encode(
            message.args[i],
            writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
          ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified ManageVideoStreamRequest message, length delimited. Does not implicitly {@link encodergrpc.ManageVideoStreamRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {encodergrpc.IManageVideoStreamRequest} message ManageVideoStreamRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageVideoStreamRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ManageVideoStreamRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.ManageVideoStreamRequest} ManageVideoStreamRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageVideoStreamRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.ManageVideoStreamRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.command = reader.string();
            break;
          case 7:
            if (!(message.args && message.args.length)) message.args = [];
            message.args.push(
              $root.encodergrpc.Argument.decode(reader, reader.uint32())
            );
            break;
          case 8:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ManageVideoStreamRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.ManageVideoStreamRequest} ManageVideoStreamRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageVideoStreamRequest.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ManageVideoStreamRequest message.
     * @function verify
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ManageVideoStreamRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.args != null && message.hasOwnProperty('args')) {
        if (!Array.isArray(message.args)) return 'args: array expected';
        for (var i = 0; i < message.args.length; ++i) {
          var error = $root.encodergrpc.Argument.verify(message.args[i]);
          if (error) return 'args.' + error;
        }
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a ManageVideoStreamRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.ManageVideoStreamRequest} ManageVideoStreamRequest
     */
    ManageVideoStreamRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.ManageVideoStreamRequest)
        return object;
      var message = new $root.encodergrpc.ManageVideoStreamRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamRequest.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.command != null) message.command = String(object.command);
      if (object.args) {
        if (!Array.isArray(object.args))
          throw TypeError(
            '.encodergrpc.ManageVideoStreamRequest.args: array expected'
          );
        message.args = [];
        for (var i = 0; i < object.args.length; ++i) {
          if (typeof object.args[i] !== 'object')
            throw TypeError(
              '.encodergrpc.ManageVideoStreamRequest.args: object expected'
            );
          message.args[i] = $root.encodergrpc.Argument.fromObject(
            object.args[i]
          );
        }
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a ManageVideoStreamRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @static
     * @param {encodergrpc.ManageVideoStreamRequest} message ManageVideoStreamRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ManageVideoStreamRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.args = [];
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        object.command = '';
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.args && message.args.length) {
        object.args = [];
        for (var j = 0; j < message.args.length; ++j)
          object.args[j] = $root.encodergrpc.Argument.toObject(
            message.args[j],
            options
          );
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this ManageVideoStreamRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.ManageVideoStreamRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ManageVideoStreamRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ManageVideoStreamRequest;
  })(encodergrpc.ManageVideoStreamRequest || {});

  encodergrpc.SetEncoderConfigRequest = (function (SetEncoderConfigRequest) {
    /**
     * Properties of a SetEncoderConfigRequest.
     * @memberof encodergrpc
     * @interface ISetEncoderConfigRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] SetEncoderConfigRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] SetEncoderConfigRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] SetEncoderConfigRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] SetEncoderConfigRequest encoderId
     * @property {number|null} [configKey] SetEncoderConfigRequest configKey
     * @property {number|Long|null} [valInt] SetEncoderConfigRequest valInt
     * @property {string|null} [valStr] SetEncoderConfigRequest valStr
     * @property {number|Long|null} [timeUs] SetEncoderConfigRequest timeUs
     */

    /**
     * Constructs a new SetEncoderConfigRequest.
     * @memberof encodergrpc
     * @classdesc Represents a SetEncoderConfigRequest.
     * @implements ISetEncoderConfigRequest
     * @constructor
     * @param {encodergrpc.ISetEncoderConfigRequest=} [properties] Properties to set
     */
    function SetEncoderConfigRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetEncoderConfigRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.eventCreds = null;

    /**
     * SetEncoderConfigRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.clientCreds = null;

    /**
     * SetEncoderConfigRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.requestId = null;

    /**
     * SetEncoderConfigRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.encoderId = null;

    /**
     * SetEncoderConfigRequest configKey.
     * @member {number} configKey
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.configKey = 0;

    /**
     * SetEncoderConfigRequest valInt.
     * @member {number|Long} valInt
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.valInt = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * SetEncoderConfigRequest valStr.
     * @member {string} valStr
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.valStr = '';

    /**
     * SetEncoderConfigRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    SetEncoderConfigRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * SetEncoderConfigRequest configVal.
     * @member {"valInt"|"valStr"|undefined} configVal
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     */
    Object.defineProperty(SetEncoderConfigRequest.prototype, 'configVal', {
      get: $util.oneOfGetter(($oneOfFields = ['valInt', 'valStr'])),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new SetEncoderConfigRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {encodergrpc.ISetEncoderConfigRequest=} [properties] Properties to set
     * @returns {encodergrpc.SetEncoderConfigRequest} SetEncoderConfigRequest instance
     */
    SetEncoderConfigRequest.create = function create(properties) {
      return new SetEncoderConfigRequest(properties);
    };

    /**
     * Encodes the specified SetEncoderConfigRequest message. Does not implicitly {@link encodergrpc.SetEncoderConfigRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {encodergrpc.ISetEncoderConfigRequest} message SetEncoderConfigRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetEncoderConfigRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.configKey);
      if (
        message.valInt != null &&
        Object.hasOwnProperty.call(message, 'valInt')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.valInt);
      if (
        message.valStr != null &&
        Object.hasOwnProperty.call(message, 'valStr')
      )
        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.valStr);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified SetEncoderConfigRequest message, length delimited. Does not implicitly {@link encodergrpc.SetEncoderConfigRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {encodergrpc.ISetEncoderConfigRequest} message SetEncoderConfigRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetEncoderConfigRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetEncoderConfigRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.SetEncoderConfigRequest} SetEncoderConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetEncoderConfigRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.SetEncoderConfigRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.configKey = reader.uint32();
            break;
          case 6:
            message.valInt = reader.int64();
            break;
          case 7:
            message.valStr = reader.string();
            break;
          case 8:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SetEncoderConfigRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.SetEncoderConfigRequest} SetEncoderConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetEncoderConfigRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetEncoderConfigRequest message.
     * @function verify
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetEncoderConfigRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      var properties = {};
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.valInt != null && message.hasOwnProperty('valInt')) {
        properties.configVal = 1;
        if (
          !$util.isInteger(message.valInt) &&
          !(
            message.valInt &&
            $util.isInteger(message.valInt.low) &&
            $util.isInteger(message.valInt.high)
          )
        )
          return 'valInt: integer|Long expected';
      }
      if (message.valStr != null && message.hasOwnProperty('valStr')) {
        if (properties.configVal === 1) return 'configVal: multiple values';
        properties.configVal = 1;
        if (!$util.isString(message.valStr)) return 'valStr: string expected';
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a SetEncoderConfigRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.SetEncoderConfigRequest} SetEncoderConfigRequest
     */
    SetEncoderConfigRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.SetEncoderConfigRequest)
        return object;
      var message = new $root.encodergrpc.SetEncoderConfigRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.valInt != null)
        if ($util.Long)
          (message.valInt = $util.Long.fromValue(
            object.valInt
          )).unsigned = false;
        else if (typeof object.valInt === 'string')
          message.valInt = parseInt(object.valInt, 10);
        else if (typeof object.valInt === 'number')
          message.valInt = object.valInt;
        else if (typeof object.valInt === 'object')
          message.valInt = new $util.LongBits(
            object.valInt.low >>> 0,
            object.valInt.high >>> 0
          ).toNumber();
      if (object.valStr != null) message.valStr = String(object.valStr);
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a SetEncoderConfigRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @static
     * @param {encodergrpc.SetEncoderConfigRequest} message SetEncoderConfigRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetEncoderConfigRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.configKey = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.valInt != null && message.hasOwnProperty('valInt')) {
        if (typeof message.valInt === 'number')
          object.valInt =
            options.longs === String ? String(message.valInt) : message.valInt;
        else
          object.valInt =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.valInt)
              : options.longs === Number
              ? new $util.LongBits(
                  message.valInt.low >>> 0,
                  message.valInt.high >>> 0
                ).toNumber()
              : message.valInt;
        if (options.oneofs) object.configVal = 'valInt';
      }
      if (message.valStr != null && message.hasOwnProperty('valStr')) {
        object.valStr = message.valStr;
        if (options.oneofs) object.configVal = 'valStr';
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this SetEncoderConfigRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.SetEncoderConfigRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetEncoderConfigRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetEncoderConfigRequest;
  })(encodergrpc.SetEncoderConfigRequest || {});

  encodergrpc.GetEventConfigAllRequest = (function (GetEventConfigAllRequest) {
    /**
     * Properties of a GetEventConfigAllRequest.
     * @memberof encodergrpc
     * @interface IGetEventConfigAllRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] GetEventConfigAllRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] GetEventConfigAllRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] GetEventConfigAllRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetEventConfigAllRequest encoderId
     * @property {number|null} [configKey] GetEventConfigAllRequest configKey
     * @property {number|Long|null} [timeUs] GetEventConfigAllRequest timeUs
     */

    /**
     * Constructs a new GetEventConfigAllRequest.
     * @memberof encodergrpc
     * @classdesc Represents a GetEventConfigAllRequest.
     * @implements IGetEventConfigAllRequest
     * @constructor
     * @param {encodergrpc.IGetEventConfigAllRequest=} [properties] Properties to set
     */
    function GetEventConfigAllRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetEventConfigAllRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     */
    GetEventConfigAllRequest.prototype.eventCreds = null;

    /**
     * GetEventConfigAllRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     */
    GetEventConfigAllRequest.prototype.clientCreds = null;

    /**
     * GetEventConfigAllRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     */
    GetEventConfigAllRequest.prototype.requestId = null;

    /**
     * GetEventConfigAllRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     */
    GetEventConfigAllRequest.prototype.encoderId = null;

    /**
     * GetEventConfigAllRequest configKey.
     * @member {number} configKey
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     */
    GetEventConfigAllRequest.prototype.configKey = 0;

    /**
     * GetEventConfigAllRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     */
    GetEventConfigAllRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetEventConfigAllRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {encodergrpc.IGetEventConfigAllRequest=} [properties] Properties to set
     * @returns {encodergrpc.GetEventConfigAllRequest} GetEventConfigAllRequest instance
     */
    GetEventConfigAllRequest.create = function create(properties) {
      return new GetEventConfigAllRequest(properties);
    };

    /**
     * Encodes the specified GetEventConfigAllRequest message. Does not implicitly {@link encodergrpc.GetEventConfigAllRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {encodergrpc.IGetEventConfigAllRequest} message GetEventConfigAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEventConfigAllRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.configKey);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetEventConfigAllRequest message, length delimited. Does not implicitly {@link encodergrpc.GetEventConfigAllRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {encodergrpc.IGetEventConfigAllRequest} message GetEventConfigAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEventConfigAllRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetEventConfigAllRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetEventConfigAllRequest} GetEventConfigAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEventConfigAllRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetEventConfigAllRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.configKey = reader.uint32();
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetEventConfigAllRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetEventConfigAllRequest} GetEventConfigAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEventConfigAllRequest.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetEventConfigAllRequest message.
     * @function verify
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetEventConfigAllRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetEventConfigAllRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetEventConfigAllRequest} GetEventConfigAllRequest
     */
    GetEventConfigAllRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetEventConfigAllRequest)
        return object;
      var message = new $root.encodergrpc.GetEventConfigAllRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetEventConfigAllRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @static
     * @param {encodergrpc.GetEventConfigAllRequest} message GetEventConfigAllRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetEventConfigAllRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.configKey = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetEventConfigAllRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetEventConfigAllRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetEventConfigAllRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetEventConfigAllRequest;
  })(encodergrpc.GetEventConfigAllRequest || {});

  encodergrpc.GetEncoderConfigRequest = (function (GetEncoderConfigRequest) {
    /**
     * Properties of a GetEncoderConfigRequest.
     * @memberof encodergrpc
     * @interface IGetEncoderConfigRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] GetEncoderConfigRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] GetEncoderConfigRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] GetEncoderConfigRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetEncoderConfigRequest encoderId
     * @property {number|null} [configKey] GetEncoderConfigRequest configKey
     * @property {number|Long|null} [timeUs] GetEncoderConfigRequest timeUs
     */

    /**
     * Constructs a new GetEncoderConfigRequest.
     * @memberof encodergrpc
     * @classdesc Represents a GetEncoderConfigRequest.
     * @implements IGetEncoderConfigRequest
     * @constructor
     * @param {encodergrpc.IGetEncoderConfigRequest=} [properties] Properties to set
     */
    function GetEncoderConfigRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetEncoderConfigRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     */
    GetEncoderConfigRequest.prototype.eventCreds = null;

    /**
     * GetEncoderConfigRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     */
    GetEncoderConfigRequest.prototype.clientCreds = null;

    /**
     * GetEncoderConfigRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     */
    GetEncoderConfigRequest.prototype.requestId = null;

    /**
     * GetEncoderConfigRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     */
    GetEncoderConfigRequest.prototype.encoderId = null;

    /**
     * GetEncoderConfigRequest configKey.
     * @member {number} configKey
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     */
    GetEncoderConfigRequest.prototype.configKey = 0;

    /**
     * GetEncoderConfigRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     */
    GetEncoderConfigRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetEncoderConfigRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {encodergrpc.IGetEncoderConfigRequest=} [properties] Properties to set
     * @returns {encodergrpc.GetEncoderConfigRequest} GetEncoderConfigRequest instance
     */
    GetEncoderConfigRequest.create = function create(properties) {
      return new GetEncoderConfigRequest(properties);
    };

    /**
     * Encodes the specified GetEncoderConfigRequest message. Does not implicitly {@link encodergrpc.GetEncoderConfigRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {encodergrpc.IGetEncoderConfigRequest} message GetEncoderConfigRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.configKey);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetEncoderConfigRequest message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {encodergrpc.IGetEncoderConfigRequest} message GetEncoderConfigRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetEncoderConfigRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetEncoderConfigRequest} GetEncoderConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetEncoderConfigRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.configKey = reader.uint32();
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetEncoderConfigRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetEncoderConfigRequest} GetEncoderConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetEncoderConfigRequest message.
     * @function verify
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetEncoderConfigRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetEncoderConfigRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetEncoderConfigRequest} GetEncoderConfigRequest
     */
    GetEncoderConfigRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetEncoderConfigRequest)
        return object;
      var message = new $root.encodergrpc.GetEncoderConfigRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetEncoderConfigRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @static
     * @param {encodergrpc.GetEncoderConfigRequest} message GetEncoderConfigRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetEncoderConfigRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.configKey = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetEncoderConfigRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetEncoderConfigRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetEncoderConfigRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetEncoderConfigRequest;
  })(encodergrpc.GetEncoderConfigRequest || {});

  encodergrpc.GetEncoderConfigAllRequest = (function (
    GetEncoderConfigAllRequest
  ) {
    /**
     * Properties of a GetEncoderConfigAllRequest.
     * @memberof encodergrpc
     * @interface IGetEncoderConfigAllRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] GetEncoderConfigAllRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] GetEncoderConfigAllRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] GetEncoderConfigAllRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetEncoderConfigAllRequest encoderId
     * @property {number|Long|null} [timeUs] GetEncoderConfigAllRequest timeUs
     */

    /**
     * Constructs a new GetEncoderConfigAllRequest.
     * @memberof encodergrpc
     * @classdesc Represents a GetEncoderConfigAllRequest.
     * @implements IGetEncoderConfigAllRequest
     * @constructor
     * @param {encodergrpc.IGetEncoderConfigAllRequest=} [properties] Properties to set
     */
    function GetEncoderConfigAllRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetEncoderConfigAllRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @instance
     */
    GetEncoderConfigAllRequest.prototype.eventCreds = null;

    /**
     * GetEncoderConfigAllRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @instance
     */
    GetEncoderConfigAllRequest.prototype.clientCreds = null;

    /**
     * GetEncoderConfigAllRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @instance
     */
    GetEncoderConfigAllRequest.prototype.requestId = null;

    /**
     * GetEncoderConfigAllRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @instance
     */
    GetEncoderConfigAllRequest.prototype.encoderId = null;

    /**
     * GetEncoderConfigAllRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @instance
     */
    GetEncoderConfigAllRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetEncoderConfigAllRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {encodergrpc.IGetEncoderConfigAllRequest=} [properties] Properties to set
     * @returns {encodergrpc.GetEncoderConfigAllRequest} GetEncoderConfigAllRequest instance
     */
    GetEncoderConfigAllRequest.create = function create(properties) {
      return new GetEncoderConfigAllRequest(properties);
    };

    /**
     * Encodes the specified GetEncoderConfigAllRequest message. Does not implicitly {@link encodergrpc.GetEncoderConfigAllRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {encodergrpc.IGetEncoderConfigAllRequest} message GetEncoderConfigAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigAllRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetEncoderConfigAllRequest message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigAllRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {encodergrpc.IGetEncoderConfigAllRequest} message GetEncoderConfigAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigAllRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetEncoderConfigAllRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetEncoderConfigAllRequest} GetEncoderConfigAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigAllRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetEncoderConfigAllRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetEncoderConfigAllRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetEncoderConfigAllRequest} GetEncoderConfigAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigAllRequest.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetEncoderConfigAllRequest message.
     * @function verify
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetEncoderConfigAllRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetEncoderConfigAllRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetEncoderConfigAllRequest} GetEncoderConfigAllRequest
     */
    GetEncoderConfigAllRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetEncoderConfigAllRequest)
        return object;
      var message = new $root.encodergrpc.GetEncoderConfigAllRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetEncoderConfigAllRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @static
     * @param {encodergrpc.GetEncoderConfigAllRequest} message GetEncoderConfigAllRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetEncoderConfigAllRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetEncoderConfigAllRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetEncoderConfigAllRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetEncoderConfigAllRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetEncoderConfigAllRequest;
  })(encodergrpc.GetEncoderConfigAllRequest || {});

  encodergrpc.GetCameraConfigRequest = (function (GetCameraConfigRequest) {
    /**
     * Properties of a GetCameraConfigRequest.
     * @memberof encodergrpc
     * @interface IGetCameraConfigRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] GetCameraConfigRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] GetCameraConfigRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] GetCameraConfigRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetCameraConfigRequest encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] GetCameraConfigRequest cameraId
     * @property {number|null} [configKey] GetCameraConfigRequest configKey
     * @property {number|Long|null} [timeUs] GetCameraConfigRequest timeUs
     */

    /**
     * Constructs a new GetCameraConfigRequest.
     * @memberof encodergrpc
     * @classdesc Represents a GetCameraConfigRequest.
     * @implements IGetCameraConfigRequest
     * @constructor
     * @param {encodergrpc.IGetCameraConfigRequest=} [properties] Properties to set
     */
    function GetCameraConfigRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetCameraConfigRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.eventCreds = null;

    /**
     * GetCameraConfigRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.clientCreds = null;

    /**
     * GetCameraConfigRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.requestId = null;

    /**
     * GetCameraConfigRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.encoderId = null;

    /**
     * GetCameraConfigRequest cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.cameraId = null;

    /**
     * GetCameraConfigRequest configKey.
     * @member {number} configKey
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.configKey = 0;

    /**
     * GetCameraConfigRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     */
    GetCameraConfigRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetCameraConfigRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {encodergrpc.IGetCameraConfigRequest=} [properties] Properties to set
     * @returns {encodergrpc.GetCameraConfigRequest} GetCameraConfigRequest instance
     */
    GetCameraConfigRequest.create = function create(properties) {
      return new GetCameraConfigRequest(properties);
    };

    /**
     * Encodes the specified GetCameraConfigRequest message. Does not implicitly {@link encodergrpc.GetCameraConfigRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {encodergrpc.IGetCameraConfigRequest} message GetCameraConfigRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).uint32(message.configKey);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetCameraConfigRequest message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {encodergrpc.IGetCameraConfigRequest} message GetCameraConfigRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCameraConfigRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetCameraConfigRequest} GetCameraConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetCameraConfigRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.configKey = reader.uint32();
            break;
          case 7:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetCameraConfigRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetCameraConfigRequest} GetCameraConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCameraConfigRequest message.
     * @function verify
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCameraConfigRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetCameraConfigRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetCameraConfigRequest} GetCameraConfigRequest
     */
    GetCameraConfigRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetCameraConfigRequest)
        return object;
      var message = new $root.encodergrpc.GetCameraConfigRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigRequest.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetCameraConfigRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetCameraConfigRequest
     * @static
     * @param {encodergrpc.GetCameraConfigRequest} message GetCameraConfigRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetCameraConfigRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        object.configKey = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetCameraConfigRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetCameraConfigRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCameraConfigRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCameraConfigRequest;
  })(encodergrpc.GetCameraConfigRequest || {});

  encodergrpc.GetCameraConfigAllRequest = (function (
    GetCameraConfigAllRequest
  ) {
    /**
     * Properties of a GetCameraConfigAllRequest.
     * @memberof encodergrpc
     * @interface IGetCameraConfigAllRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] GetCameraConfigAllRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] GetCameraConfigAllRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] GetCameraConfigAllRequest requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetCameraConfigAllRequest encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] GetCameraConfigAllRequest cameraId
     * @property {number|Long|null} [timeUs] GetCameraConfigAllRequest timeUs
     */

    /**
     * Constructs a new GetCameraConfigAllRequest.
     * @memberof encodergrpc
     * @classdesc Represents a GetCameraConfigAllRequest.
     * @implements IGetCameraConfigAllRequest
     * @constructor
     * @param {encodergrpc.IGetCameraConfigAllRequest=} [properties] Properties to set
     */
    function GetCameraConfigAllRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetCameraConfigAllRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     */
    GetCameraConfigAllRequest.prototype.eventCreds = null;

    /**
     * GetCameraConfigAllRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     */
    GetCameraConfigAllRequest.prototype.clientCreds = null;

    /**
     * GetCameraConfigAllRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     */
    GetCameraConfigAllRequest.prototype.requestId = null;

    /**
     * GetCameraConfigAllRequest encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     */
    GetCameraConfigAllRequest.prototype.encoderId = null;

    /**
     * GetCameraConfigAllRequest cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     */
    GetCameraConfigAllRequest.prototype.cameraId = null;

    /**
     * GetCameraConfigAllRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     */
    GetCameraConfigAllRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetCameraConfigAllRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {encodergrpc.IGetCameraConfigAllRequest=} [properties] Properties to set
     * @returns {encodergrpc.GetCameraConfigAllRequest} GetCameraConfigAllRequest instance
     */
    GetCameraConfigAllRequest.create = function create(properties) {
      return new GetCameraConfigAllRequest(properties);
    };

    /**
     * Encodes the specified GetCameraConfigAllRequest message. Does not implicitly {@link encodergrpc.GetCameraConfigAllRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {encodergrpc.IGetCameraConfigAllRequest} message GetCameraConfigAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigAllRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetCameraConfigAllRequest message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigAllRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {encodergrpc.IGetCameraConfigAllRequest} message GetCameraConfigAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigAllRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCameraConfigAllRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetCameraConfigAllRequest} GetCameraConfigAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigAllRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetCameraConfigAllRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetCameraConfigAllRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetCameraConfigAllRequest} GetCameraConfigAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigAllRequest.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCameraConfigAllRequest message.
     * @function verify
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCameraConfigAllRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetCameraConfigAllRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetCameraConfigAllRequest} GetCameraConfigAllRequest
     */
    GetCameraConfigAllRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetCameraConfigAllRequest)
        return object;
      var message = new $root.encodergrpc.GetCameraConfigAllRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllRequest.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllRequest.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetCameraConfigAllRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @static
     * @param {encodergrpc.GetCameraConfigAllRequest} message GetCameraConfigAllRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetCameraConfigAllRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetCameraConfigAllRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetCameraConfigAllRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCameraConfigAllRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCameraConfigAllRequest;
  })(encodergrpc.GetCameraConfigAllRequest || {});

  encodergrpc.ManageEventRequest = (function (ManageEventRequest) {
    /**
     * Properties of a ManageEventRequest.
     * @memberof encodergrpc
     * @interface IManageEventRequest
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] ManageEventRequest eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] ManageEventRequest clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] ManageEventRequest requestId
     * @property {string|null} [command] ManageEventRequest command
     * @property {Array.<encodergrpc.IArgument>|null} [args] ManageEventRequest args
     * @property {number|Long|null} [timeUs] ManageEventRequest timeUs
     */

    /**
     * Constructs a new ManageEventRequest.
     * @memberof encodergrpc
     * @classdesc Represents a ManageEventRequest.
     * @implements IManageEventRequest
     * @constructor
     * @param {encodergrpc.IManageEventRequest=} [properties] Properties to set
     */
    function ManageEventRequest(properties) {
      this.args = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ManageEventRequest eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     */
    ManageEventRequest.prototype.eventCreds = null;

    /**
     * ManageEventRequest clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     */
    ManageEventRequest.prototype.clientCreds = null;

    /**
     * ManageEventRequest requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     */
    ManageEventRequest.prototype.requestId = null;

    /**
     * ManageEventRequest command.
     * @member {string} command
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     */
    ManageEventRequest.prototype.command = '';

    /**
     * ManageEventRequest args.
     * @member {Array.<encodergrpc.IArgument>} args
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     */
    ManageEventRequest.prototype.args = $util.emptyArray;

    /**
     * ManageEventRequest timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     */
    ManageEventRequest.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ManageEventRequest instance using the specified properties.
     * @function create
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {encodergrpc.IManageEventRequest=} [properties] Properties to set
     * @returns {encodergrpc.ManageEventRequest} ManageEventRequest instance
     */
    ManageEventRequest.create = function create(properties) {
      return new ManageEventRequest(properties);
    };

    /**
     * Encodes the specified ManageEventRequest message. Does not implicitly {@link encodergrpc.ManageEventRequest.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {encodergrpc.IManageEventRequest} message ManageEventRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageEventRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.command);
      if (message.args != null && message.args.length)
        for (var i = 0; i < message.args.length; ++i)
          $root.encodergrpc.Argument.encode(
            message.args[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified ManageEventRequest message, length delimited. Does not implicitly {@link encodergrpc.ManageEventRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {encodergrpc.IManageEventRequest} message ManageEventRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageEventRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ManageEventRequest message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.ManageEventRequest} ManageEventRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageEventRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.ManageEventRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.command = reader.string();
            break;
          case 5:
            if (!(message.args && message.args.length)) message.args = [];
            message.args.push(
              $root.encodergrpc.Argument.decode(reader, reader.uint32())
            );
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ManageEventRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.ManageEventRequest} ManageEventRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageEventRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ManageEventRequest message.
     * @function verify
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ManageEventRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.args != null && message.hasOwnProperty('args')) {
        if (!Array.isArray(message.args)) return 'args: array expected';
        for (var i = 0; i < message.args.length; ++i) {
          var error = $root.encodergrpc.Argument.verify(message.args[i]);
          if (error) return 'args.' + error;
        }
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a ManageEventRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.ManageEventRequest} ManageEventRequest
     */
    ManageEventRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.ManageEventRequest) return object;
      var message = new $root.encodergrpc.ManageEventRequest();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.ManageEventRequest.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.ManageEventRequest.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageEventRequest.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.command != null) message.command = String(object.command);
      if (object.args) {
        if (!Array.isArray(object.args))
          throw TypeError(
            '.encodergrpc.ManageEventRequest.args: array expected'
          );
        message.args = [];
        for (var i = 0; i < object.args.length; ++i) {
          if (typeof object.args[i] !== 'object')
            throw TypeError(
              '.encodergrpc.ManageEventRequest.args: object expected'
            );
          message.args[i] = $root.encodergrpc.Argument.fromObject(
            object.args[i]
          );
        }
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a ManageEventRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.ManageEventRequest
     * @static
     * @param {encodergrpc.ManageEventRequest} message ManageEventRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ManageEventRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.args = [];
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.command = '';
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.args && message.args.length) {
        object.args = [];
        for (var j = 0; j < message.args.length; ++j)
          object.args[j] = $root.encodergrpc.Argument.toObject(
            message.args[j],
            options
          );
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this ManageEventRequest to JSON.
     * @function toJSON
     * @memberof encodergrpc.ManageEventRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ManageEventRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ManageEventRequest;
  })(encodergrpc.ManageEventRequest || {});

  encodergrpc.EncoderCommandResponse = (function (EncoderCommandResponse) {
    /**
     * Properties of an EncoderCommandResponse.
     * @memberof encodergrpc
     * @interface IEncoderCommandResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] EncoderCommandResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] EncoderCommandResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] EncoderCommandResponse encoderId
     * @property {number|null} [status] EncoderCommandResponse status
     * @property {string|null} [command] EncoderCommandResponse command
     * @property {Uint8Array|null} [response] EncoderCommandResponse response
     * @property {number|Long|null} [timeUs] EncoderCommandResponse timeUs
     */

    /**
     * Constructs a new EncoderCommandResponse.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderCommandResponse.
     * @implements IEncoderCommandResponse
     * @constructor
     * @param {encodergrpc.IEncoderCommandResponse=} [properties] Properties to set
     */
    function EncoderCommandResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderCommandResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.creds = null;

    /**
     * EncoderCommandResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.requestId = null;

    /**
     * EncoderCommandResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.encoderId = null;

    /**
     * EncoderCommandResponse status.
     * @member {number} status
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.status = 0;

    /**
     * EncoderCommandResponse command.
     * @member {string} command
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.command = '';

    /**
     * EncoderCommandResponse response.
     * @member {Uint8Array} response
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.response = $util.newBuffer([]);

    /**
     * EncoderCommandResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     */
    EncoderCommandResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new EncoderCommandResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {encodergrpc.IEncoderCommandResponse=} [properties] Properties to set
     * @returns {encodergrpc.EncoderCommandResponse} EncoderCommandResponse instance
     */
    EncoderCommandResponse.create = function create(properties) {
      return new EncoderCommandResponse(properties);
    };

    /**
     * Encodes the specified EncoderCommandResponse message. Does not implicitly {@link encodergrpc.EncoderCommandResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {encodergrpc.IEncoderCommandResponse} message EncoderCommandResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderCommandResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.status);
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.command);
      if (
        message.response != null &&
        Object.hasOwnProperty.call(message, 'response')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).bytes(message.response);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified EncoderCommandResponse message, length delimited. Does not implicitly {@link encodergrpc.EncoderCommandResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {encodergrpc.IEncoderCommandResponse} message EncoderCommandResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderCommandResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderCommandResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderCommandResponse} EncoderCommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderCommandResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderCommandResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.status = reader.uint32();
            break;
          case 5:
            message.command = reader.string();
            break;
          case 6:
            message.response = reader.bytes();
            break;
          case 7:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderCommandResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderCommandResponse} EncoderCommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderCommandResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderCommandResponse message.
     * @function verify
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderCommandResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.response != null && message.hasOwnProperty('response'))
        if (
          !(
            (message.response && typeof message.response.length === 'number') ||
            $util.isString(message.response)
          )
        )
          return 'response: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates an EncoderCommandResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderCommandResponse} EncoderCommandResponse
     */
    EncoderCommandResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderCommandResponse)
        return object;
      var message = new $root.encodergrpc.EncoderCommandResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.EncoderCommandResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.status != null) message.status = object.status >>> 0;
      if (object.command != null) message.command = String(object.command);
      if (object.response != null)
        if (typeof object.response === 'string')
          $util.base64.decode(
            object.response,
            (message.response = $util.newBuffer(
              $util.base64.length(object.response)
            )),
            0
          );
        else if (object.response.length) message.response = object.response;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from an EncoderCommandResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderCommandResponse
     * @static
     * @param {encodergrpc.EncoderCommandResponse} message EncoderCommandResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderCommandResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.status = 0;
        object.command = '';
        if (options.bytes === String) object.response = '';
        else {
          object.response = [];
          if (options.bytes !== Array)
            object.response = $util.newBuffer(object.response);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.response != null && message.hasOwnProperty('response'))
        object.response =
          options.bytes === String
            ? $util.base64.encode(message.response, 0, message.response.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.response)
            : message.response;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this EncoderCommandResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderCommandResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderCommandResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderCommandResponse;
  })(encodergrpc.EncoderCommandResponse || {});

  encodergrpc.CameraCommandResponse = (function (CameraCommandResponse) {
    /**
     * Properties of a CameraCommandResponse.
     * @memberof encodergrpc
     * @interface ICameraCommandResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] CameraCommandResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] CameraCommandResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] CameraCommandResponse encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] CameraCommandResponse cameraId
     * @property {number|null} [status] CameraCommandResponse status
     * @property {string|null} [command] CameraCommandResponse command
     * @property {Uint8Array|null} [response] CameraCommandResponse response
     * @property {number|Long|null} [timeUs] CameraCommandResponse timeUs
     */

    /**
     * Constructs a new CameraCommandResponse.
     * @memberof encodergrpc
     * @classdesc Represents a CameraCommandResponse.
     * @implements ICameraCommandResponse
     * @constructor
     * @param {encodergrpc.ICameraCommandResponse=} [properties] Properties to set
     */
    function CameraCommandResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * CameraCommandResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.creds = null;

    /**
     * CameraCommandResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.requestId = null;

    /**
     * CameraCommandResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.encoderId = null;

    /**
     * CameraCommandResponse cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.cameraId = null;

    /**
     * CameraCommandResponse status.
     * @member {number} status
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.status = 0;

    /**
     * CameraCommandResponse command.
     * @member {string} command
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.command = '';

    /**
     * CameraCommandResponse response.
     * @member {Uint8Array} response
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.response = $util.newBuffer([]);

    /**
     * CameraCommandResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     */
    CameraCommandResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new CameraCommandResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {encodergrpc.ICameraCommandResponse=} [properties] Properties to set
     * @returns {encodergrpc.CameraCommandResponse} CameraCommandResponse instance
     */
    CameraCommandResponse.create = function create(properties) {
      return new CameraCommandResponse(properties);
    };

    /**
     * Encodes the specified CameraCommandResponse message. Does not implicitly {@link encodergrpc.CameraCommandResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {encodergrpc.ICameraCommandResponse} message CameraCommandResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraCommandResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.status);
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.command);
      if (
        message.response != null &&
        Object.hasOwnProperty.call(message, 'response')
      )
        writer.uint32(/* id 7, wireType 2 =*/ 58).bytes(message.response);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified CameraCommandResponse message, length delimited. Does not implicitly {@link encodergrpc.CameraCommandResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {encodergrpc.ICameraCommandResponse} message CameraCommandResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraCommandResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CameraCommandResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.CameraCommandResponse} CameraCommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraCommandResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.CameraCommandResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.status = reader.uint32();
            break;
          case 6:
            message.command = reader.string();
            break;
          case 7:
            message.response = reader.bytes();
            break;
          case 8:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CameraCommandResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.CameraCommandResponse} CameraCommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraCommandResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CameraCommandResponse message.
     * @function verify
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CameraCommandResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.response != null && message.hasOwnProperty('response'))
        if (
          !(
            (message.response && typeof message.response.length === 'number') ||
            $util.isString(message.response)
          )
        )
          return 'response: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a CameraCommandResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.CameraCommandResponse} CameraCommandResponse
     */
    CameraCommandResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.CameraCommandResponse)
        return object;
      var message = new $root.encodergrpc.CameraCommandResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.CameraCommandResponse.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.status != null) message.status = object.status >>> 0;
      if (object.command != null) message.command = String(object.command);
      if (object.response != null)
        if (typeof object.response === 'string')
          $util.base64.decode(
            object.response,
            (message.response = $util.newBuffer(
              $util.base64.length(object.response)
            )),
            0
          );
        else if (object.response.length) message.response = object.response;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a CameraCommandResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.CameraCommandResponse
     * @static
     * @param {encodergrpc.CameraCommandResponse} message CameraCommandResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CameraCommandResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        object.status = 0;
        object.command = '';
        if (options.bytes === String) object.response = '';
        else {
          object.response = [];
          if (options.bytes !== Array)
            object.response = $util.newBuffer(object.response);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.response != null && message.hasOwnProperty('response'))
        object.response =
          options.bytes === String
            ? $util.base64.encode(message.response, 0, message.response.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.response)
            : message.response;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this CameraCommandResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.CameraCommandResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CameraCommandResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CameraCommandResponse;
  })(encodergrpc.CameraCommandResponse || {});

  encodergrpc.ManageVideoStreamResponse = (function (
    ManageVideoStreamResponse
  ) {
    /**
     * Properties of a ManageVideoStreamResponse.
     * @memberof encodergrpc
     * @interface IManageVideoStreamResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] ManageVideoStreamResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] ManageVideoStreamResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] ManageVideoStreamResponse encoderId
     * @property {number|null} [status] ManageVideoStreamResponse status
     * @property {string|null} [command] ManageVideoStreamResponse command
     * @property {Uint8Array|null} [response] ManageVideoStreamResponse response
     * @property {number|Long|null} [timeUs] ManageVideoStreamResponse timeUs
     */

    /**
     * Constructs a new ManageVideoStreamResponse.
     * @memberof encodergrpc
     * @classdesc Represents a ManageVideoStreamResponse.
     * @implements IManageVideoStreamResponse
     * @constructor
     * @param {encodergrpc.IManageVideoStreamResponse=} [properties] Properties to set
     */
    function ManageVideoStreamResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ManageVideoStreamResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.creds = null;

    /**
     * ManageVideoStreamResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.requestId = null;

    /**
     * ManageVideoStreamResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.encoderId = null;

    /**
     * ManageVideoStreamResponse status.
     * @member {number} status
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.status = 0;

    /**
     * ManageVideoStreamResponse command.
     * @member {string} command
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.command = '';

    /**
     * ManageVideoStreamResponse response.
     * @member {Uint8Array} response
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.response = $util.newBuffer([]);

    /**
     * ManageVideoStreamResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     */
    ManageVideoStreamResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ManageVideoStreamResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {encodergrpc.IManageVideoStreamResponse=} [properties] Properties to set
     * @returns {encodergrpc.ManageVideoStreamResponse} ManageVideoStreamResponse instance
     */
    ManageVideoStreamResponse.create = function create(properties) {
      return new ManageVideoStreamResponse(properties);
    };

    /**
     * Encodes the specified ManageVideoStreamResponse message. Does not implicitly {@link encodergrpc.ManageVideoStreamResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {encodergrpc.IManageVideoStreamResponse} message ManageVideoStreamResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageVideoStreamResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.status);
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.command);
      if (
        message.response != null &&
        Object.hasOwnProperty.call(message, 'response')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).bytes(message.response);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified ManageVideoStreamResponse message, length delimited. Does not implicitly {@link encodergrpc.ManageVideoStreamResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {encodergrpc.IManageVideoStreamResponse} message ManageVideoStreamResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageVideoStreamResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ManageVideoStreamResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.ManageVideoStreamResponse} ManageVideoStreamResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageVideoStreamResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.ManageVideoStreamResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.status = reader.uint32();
            break;
          case 5:
            message.command = reader.string();
            break;
          case 6:
            message.response = reader.bytes();
            break;
          case 7:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ManageVideoStreamResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.ManageVideoStreamResponse} ManageVideoStreamResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageVideoStreamResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ManageVideoStreamResponse message.
     * @function verify
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ManageVideoStreamResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.response != null && message.hasOwnProperty('response'))
        if (
          !(
            (message.response && typeof message.response.length === 'number') ||
            $util.isString(message.response)
          )
        )
          return 'response: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a ManageVideoStreamResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.ManageVideoStreamResponse} ManageVideoStreamResponse
     */
    ManageVideoStreamResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.ManageVideoStreamResponse)
        return object;
      var message = new $root.encodergrpc.ManageVideoStreamResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageVideoStreamResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.status != null) message.status = object.status >>> 0;
      if (object.command != null) message.command = String(object.command);
      if (object.response != null)
        if (typeof object.response === 'string')
          $util.base64.decode(
            object.response,
            (message.response = $util.newBuffer(
              $util.base64.length(object.response)
            )),
            0
          );
        else if (object.response.length) message.response = object.response;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a ManageVideoStreamResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @static
     * @param {encodergrpc.ManageVideoStreamResponse} message ManageVideoStreamResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ManageVideoStreamResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.status = 0;
        object.command = '';
        if (options.bytes === String) object.response = '';
        else {
          object.response = [];
          if (options.bytes !== Array)
            object.response = $util.newBuffer(object.response);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.response != null && message.hasOwnProperty('response'))
        object.response =
          options.bytes === String
            ? $util.base64.encode(message.response, 0, message.response.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.response)
            : message.response;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this ManageVideoStreamResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.ManageVideoStreamResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ManageVideoStreamResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ManageVideoStreamResponse;
  })(encodergrpc.ManageVideoStreamResponse || {});

  encodergrpc.GetEventConfigAllResponse = (function (
    GetEventConfigAllResponse
  ) {
    /**
     * Properties of a GetEventConfigAllResponse.
     * @memberof encodergrpc
     * @interface IGetEventConfigAllResponse
     * @property {encodergrpc.IEventCredentials|null} [eventCreds] GetEventConfigAllResponse eventCreds
     * @property {encodergrpc.IClientCredentials|null} [clientCreds] GetEventConfigAllResponse clientCreds
     * @property {encodergrpc.IRequestID|null} [requestId] GetEventConfigAllResponse requestId
     * @property {encodergrpc.IEventConfig|null} [eventConfig] GetEventConfigAllResponse eventConfig
     * @property {number|null} [configKey] GetEventConfigAllResponse configKey
     * @property {number|Long|null} [timeUs] GetEventConfigAllResponse timeUs
     */

    /**
     * Constructs a new GetEventConfigAllResponse.
     * @memberof encodergrpc
     * @classdesc Represents a GetEventConfigAllResponse.
     * @implements IGetEventConfigAllResponse
     * @constructor
     * @param {encodergrpc.IGetEventConfigAllResponse=} [properties] Properties to set
     */
    function GetEventConfigAllResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetEventConfigAllResponse eventCreds.
     * @member {encodergrpc.IEventCredentials|null|undefined} eventCreds
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     */
    GetEventConfigAllResponse.prototype.eventCreds = null;

    /**
     * GetEventConfigAllResponse clientCreds.
     * @member {encodergrpc.IClientCredentials|null|undefined} clientCreds
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     */
    GetEventConfigAllResponse.prototype.clientCreds = null;

    /**
     * GetEventConfigAllResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     */
    GetEventConfigAllResponse.prototype.requestId = null;

    /**
     * GetEventConfigAllResponse eventConfig.
     * @member {encodergrpc.IEventConfig|null|undefined} eventConfig
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     */
    GetEventConfigAllResponse.prototype.eventConfig = null;

    /**
     * GetEventConfigAllResponse configKey.
     * @member {number} configKey
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     */
    GetEventConfigAllResponse.prototype.configKey = 0;

    /**
     * GetEventConfigAllResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     */
    GetEventConfigAllResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetEventConfigAllResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {encodergrpc.IGetEventConfigAllResponse=} [properties] Properties to set
     * @returns {encodergrpc.GetEventConfigAllResponse} GetEventConfigAllResponse instance
     */
    GetEventConfigAllResponse.create = function create(properties) {
      return new GetEventConfigAllResponse(properties);
    };

    /**
     * Encodes the specified GetEventConfigAllResponse message. Does not implicitly {@link encodergrpc.GetEventConfigAllResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {encodergrpc.IGetEventConfigAllResponse} message GetEventConfigAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEventConfigAllResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.eventCreds != null &&
        Object.hasOwnProperty.call(message, 'eventCreds')
      )
        $root.encodergrpc.EventCredentials.encode(
          message.eventCreds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.clientCreds != null &&
        Object.hasOwnProperty.call(message, 'clientCreds')
      )
        $root.encodergrpc.ClientCredentials.encode(
          message.clientCreds,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.eventConfig != null &&
        Object.hasOwnProperty.call(message, 'eventConfig')
      )
        $root.encodergrpc.EventConfig.encode(
          message.eventConfig,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.configKey);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetEventConfigAllResponse message, length delimited. Does not implicitly {@link encodergrpc.GetEventConfigAllResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {encodergrpc.IGetEventConfigAllResponse} message GetEventConfigAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEventConfigAllResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetEventConfigAllResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetEventConfigAllResponse} GetEventConfigAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEventConfigAllResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetEventConfigAllResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eventCreds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.clientCreds = $root.encodergrpc.ClientCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.eventConfig = $root.encodergrpc.EventConfig.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.configKey = reader.uint32();
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetEventConfigAllResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetEventConfigAllResponse} GetEventConfigAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEventConfigAllResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetEventConfigAllResponse message.
     * @function verify
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetEventConfigAllResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds')) {
        var error = $root.encodergrpc.EventCredentials.verify(
          message.eventCreds
        );
        if (error) return 'eventCreds.' + error;
      }
      if (
        message.clientCreds != null &&
        message.hasOwnProperty('clientCreds')
      ) {
        var error = $root.encodergrpc.ClientCredentials.verify(
          message.clientCreds
        );
        if (error) return 'clientCreds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (
        message.eventConfig != null &&
        message.hasOwnProperty('eventConfig')
      ) {
        var error = $root.encodergrpc.EventConfig.verify(message.eventConfig);
        if (error) return 'eventConfig.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetEventConfigAllResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetEventConfigAllResponse} GetEventConfigAllResponse
     */
    GetEventConfigAllResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetEventConfigAllResponse)
        return object;
      var message = new $root.encodergrpc.GetEventConfigAllResponse();
      if (object.eventCreds != null) {
        if (typeof object.eventCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllResponse.eventCreds: object expected'
          );
        message.eventCreds = $root.encodergrpc.EventCredentials.fromObject(
          object.eventCreds
        );
      }
      if (object.clientCreds != null) {
        if (typeof object.clientCreds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllResponse.clientCreds: object expected'
          );
        message.clientCreds = $root.encodergrpc.ClientCredentials.fromObject(
          object.clientCreds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.eventConfig != null) {
        if (typeof object.eventConfig !== 'object')
          throw TypeError(
            '.encodergrpc.GetEventConfigAllResponse.eventConfig: object expected'
          );
        message.eventConfig = $root.encodergrpc.EventConfig.fromObject(
          object.eventConfig
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetEventConfigAllResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @static
     * @param {encodergrpc.GetEventConfigAllResponse} message GetEventConfigAllResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetEventConfigAllResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.eventCreds = null;
        object.clientCreds = null;
        object.requestId = null;
        object.eventConfig = null;
        object.configKey = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.eventCreds != null && message.hasOwnProperty('eventCreds'))
        object.eventCreds = $root.encodergrpc.EventCredentials.toObject(
          message.eventCreds,
          options
        );
      if (message.clientCreds != null && message.hasOwnProperty('clientCreds'))
        object.clientCreds = $root.encodergrpc.ClientCredentials.toObject(
          message.clientCreds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.eventConfig != null && message.hasOwnProperty('eventConfig'))
        object.eventConfig = $root.encodergrpc.EventConfig.toObject(
          message.eventConfig,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetEventConfigAllResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetEventConfigAllResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetEventConfigAllResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetEventConfigAllResponse;
  })(encodergrpc.GetEventConfigAllResponse || {});

  encodergrpc.SetEncoderConfigResponse = (function (SetEncoderConfigResponse) {
    /**
     * Properties of a SetEncoderConfigResponse.
     * @memberof encodergrpc
     * @interface ISetEncoderConfigResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] SetEncoderConfigResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] SetEncoderConfigResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] SetEncoderConfigResponse encoderId
     * @property {number|null} [status] SetEncoderConfigResponse status
     * @property {number|null} [configKey] SetEncoderConfigResponse configKey
     * @property {Uint8Array|null} [configVal] SetEncoderConfigResponse configVal
     * @property {number|Long|null} [timeUs] SetEncoderConfigResponse timeUs
     */

    /**
     * Constructs a new SetEncoderConfigResponse.
     * @memberof encodergrpc
     * @classdesc Represents a SetEncoderConfigResponse.
     * @implements ISetEncoderConfigResponse
     * @constructor
     * @param {encodergrpc.ISetEncoderConfigResponse=} [properties] Properties to set
     */
    function SetEncoderConfigResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetEncoderConfigResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.creds = null;

    /**
     * SetEncoderConfigResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.requestId = null;

    /**
     * SetEncoderConfigResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.encoderId = null;

    /**
     * SetEncoderConfigResponse status.
     * @member {number} status
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.status = 0;

    /**
     * SetEncoderConfigResponse configKey.
     * @member {number} configKey
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.configKey = 0;

    /**
     * SetEncoderConfigResponse configVal.
     * @member {Uint8Array} configVal
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.configVal = $util.newBuffer([]);

    /**
     * SetEncoderConfigResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     */
    SetEncoderConfigResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new SetEncoderConfigResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {encodergrpc.ISetEncoderConfigResponse=} [properties] Properties to set
     * @returns {encodergrpc.SetEncoderConfigResponse} SetEncoderConfigResponse instance
     */
    SetEncoderConfigResponse.create = function create(properties) {
      return new SetEncoderConfigResponse(properties);
    };

    /**
     * Encodes the specified SetEncoderConfigResponse message. Does not implicitly {@link encodergrpc.SetEncoderConfigResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {encodergrpc.ISetEncoderConfigResponse} message SetEncoderConfigResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetEncoderConfigResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.status);
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.configKey);
      if (
        message.configVal != null &&
        Object.hasOwnProperty.call(message, 'configVal')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).bytes(message.configVal);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified SetEncoderConfigResponse message, length delimited. Does not implicitly {@link encodergrpc.SetEncoderConfigResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {encodergrpc.ISetEncoderConfigResponse} message SetEncoderConfigResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetEncoderConfigResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetEncoderConfigResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.SetEncoderConfigResponse} SetEncoderConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetEncoderConfigResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.SetEncoderConfigResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.status = reader.uint32();
            break;
          case 5:
            message.configKey = reader.uint32();
            break;
          case 6:
            message.configVal = reader.bytes();
            break;
          case 7:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SetEncoderConfigResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.SetEncoderConfigResponse} SetEncoderConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetEncoderConfigResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetEncoderConfigResponse message.
     * @function verify
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetEncoderConfigResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.configVal != null && message.hasOwnProperty('configVal'))
        if (
          !(
            (message.configVal &&
              typeof message.configVal.length === 'number') ||
            $util.isString(message.configVal)
          )
        )
          return 'configVal: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a SetEncoderConfigResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.SetEncoderConfigResponse} SetEncoderConfigResponse
     */
    SetEncoderConfigResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.SetEncoderConfigResponse)
        return object;
      var message = new $root.encodergrpc.SetEncoderConfigResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.SetEncoderConfigResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.status != null) message.status = object.status >>> 0;
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.configVal != null)
        if (typeof object.configVal === 'string')
          $util.base64.decode(
            object.configVal,
            (message.configVal = $util.newBuffer(
              $util.base64.length(object.configVal)
            )),
            0
          );
        else if (object.configVal.length) message.configVal = object.configVal;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a SetEncoderConfigResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @static
     * @param {encodergrpc.SetEncoderConfigResponse} message SetEncoderConfigResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetEncoderConfigResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.status = 0;
        object.configKey = 0;
        if (options.bytes === String) object.configVal = '';
        else {
          object.configVal = [];
          if (options.bytes !== Array)
            object.configVal = $util.newBuffer(object.configVal);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.configVal != null && message.hasOwnProperty('configVal'))
        object.configVal =
          options.bytes === String
            ? $util.base64.encode(
                message.configVal,
                0,
                message.configVal.length
              )
            : options.bytes === Array
            ? Array.prototype.slice.call(message.configVal)
            : message.configVal;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this SetEncoderConfigResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.SetEncoderConfigResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetEncoderConfigResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetEncoderConfigResponse;
  })(encodergrpc.SetEncoderConfigResponse || {});

  encodergrpc.GetEncoderConfigResponse = (function (GetEncoderConfigResponse) {
    /**
     * Properties of a GetEncoderConfigResponse.
     * @memberof encodergrpc
     * @interface IGetEncoderConfigResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] GetEncoderConfigResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] GetEncoderConfigResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetEncoderConfigResponse encoderId
     * @property {number|null} [configKey] GetEncoderConfigResponse configKey
     * @property {Uint8Array|null} [configVal] GetEncoderConfigResponse configVal
     * @property {number|Long|null} [timeUs] GetEncoderConfigResponse timeUs
     */

    /**
     * Constructs a new GetEncoderConfigResponse.
     * @memberof encodergrpc
     * @classdesc Represents a GetEncoderConfigResponse.
     * @implements IGetEncoderConfigResponse
     * @constructor
     * @param {encodergrpc.IGetEncoderConfigResponse=} [properties] Properties to set
     */
    function GetEncoderConfigResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetEncoderConfigResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     */
    GetEncoderConfigResponse.prototype.creds = null;

    /**
     * GetEncoderConfigResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     */
    GetEncoderConfigResponse.prototype.requestId = null;

    /**
     * GetEncoderConfigResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     */
    GetEncoderConfigResponse.prototype.encoderId = null;

    /**
     * GetEncoderConfigResponse configKey.
     * @member {number} configKey
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     */
    GetEncoderConfigResponse.prototype.configKey = 0;

    /**
     * GetEncoderConfigResponse configVal.
     * @member {Uint8Array} configVal
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     */
    GetEncoderConfigResponse.prototype.configVal = $util.newBuffer([]);

    /**
     * GetEncoderConfigResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     */
    GetEncoderConfigResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetEncoderConfigResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {encodergrpc.IGetEncoderConfigResponse=} [properties] Properties to set
     * @returns {encodergrpc.GetEncoderConfigResponse} GetEncoderConfigResponse instance
     */
    GetEncoderConfigResponse.create = function create(properties) {
      return new GetEncoderConfigResponse(properties);
    };

    /**
     * Encodes the specified GetEncoderConfigResponse message. Does not implicitly {@link encodergrpc.GetEncoderConfigResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {encodergrpc.IGetEncoderConfigResponse} message GetEncoderConfigResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.configKey);
      if (
        message.configVal != null &&
        Object.hasOwnProperty.call(message, 'configVal')
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.configVal);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetEncoderConfigResponse message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {encodergrpc.IGetEncoderConfigResponse} message GetEncoderConfigResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetEncoderConfigResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetEncoderConfigResponse} GetEncoderConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetEncoderConfigResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.configKey = reader.uint32();
            break;
          case 5:
            message.configVal = reader.bytes();
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetEncoderConfigResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetEncoderConfigResponse} GetEncoderConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetEncoderConfigResponse message.
     * @function verify
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetEncoderConfigResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.configVal != null && message.hasOwnProperty('configVal'))
        if (
          !(
            (message.configVal &&
              typeof message.configVal.length === 'number') ||
            $util.isString(message.configVal)
          )
        )
          return 'configVal: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetEncoderConfigResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetEncoderConfigResponse} GetEncoderConfigResponse
     */
    GetEncoderConfigResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetEncoderConfigResponse)
        return object;
      var message = new $root.encodergrpc.GetEncoderConfigResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.configVal != null)
        if (typeof object.configVal === 'string')
          $util.base64.decode(
            object.configVal,
            (message.configVal = $util.newBuffer(
              $util.base64.length(object.configVal)
            )),
            0
          );
        else if (object.configVal.length) message.configVal = object.configVal;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetEncoderConfigResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @static
     * @param {encodergrpc.GetEncoderConfigResponse} message GetEncoderConfigResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetEncoderConfigResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.configKey = 0;
        if (options.bytes === String) object.configVal = '';
        else {
          object.configVal = [];
          if (options.bytes !== Array)
            object.configVal = $util.newBuffer(object.configVal);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.configVal != null && message.hasOwnProperty('configVal'))
        object.configVal =
          options.bytes === String
            ? $util.base64.encode(
                message.configVal,
                0,
                message.configVal.length
              )
            : options.bytes === Array
            ? Array.prototype.slice.call(message.configVal)
            : message.configVal;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetEncoderConfigResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetEncoderConfigResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetEncoderConfigResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetEncoderConfigResponse;
  })(encodergrpc.GetEncoderConfigResponse || {});

  encodergrpc.GetEncoderConfigAllResponse = (function (
    GetEncoderConfigAllResponse
  ) {
    /**
     * Properties of a GetEncoderConfigAllResponse.
     * @memberof encodergrpc
     * @interface IGetEncoderConfigAllResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] GetEncoderConfigAllResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] GetEncoderConfigAllResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetEncoderConfigAllResponse encoderId
     * @property {encodergrpc.IEncoderConfig|null} [encoderConfig] GetEncoderConfigAllResponse encoderConfig
     * @property {number|Long|null} [timeUs] GetEncoderConfigAllResponse timeUs
     */

    /**
     * Constructs a new GetEncoderConfigAllResponse.
     * @memberof encodergrpc
     * @classdesc Represents a GetEncoderConfigAllResponse.
     * @implements IGetEncoderConfigAllResponse
     * @constructor
     * @param {encodergrpc.IGetEncoderConfigAllResponse=} [properties] Properties to set
     */
    function GetEncoderConfigAllResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetEncoderConfigAllResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @instance
     */
    GetEncoderConfigAllResponse.prototype.creds = null;

    /**
     * GetEncoderConfigAllResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @instance
     */
    GetEncoderConfigAllResponse.prototype.requestId = null;

    /**
     * GetEncoderConfigAllResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @instance
     */
    GetEncoderConfigAllResponse.prototype.encoderId = null;

    /**
     * GetEncoderConfigAllResponse encoderConfig.
     * @member {encodergrpc.IEncoderConfig|null|undefined} encoderConfig
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @instance
     */
    GetEncoderConfigAllResponse.prototype.encoderConfig = null;

    /**
     * GetEncoderConfigAllResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @instance
     */
    GetEncoderConfigAllResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetEncoderConfigAllResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {encodergrpc.IGetEncoderConfigAllResponse=} [properties] Properties to set
     * @returns {encodergrpc.GetEncoderConfigAllResponse} GetEncoderConfigAllResponse instance
     */
    GetEncoderConfigAllResponse.create = function create(properties) {
      return new GetEncoderConfigAllResponse(properties);
    };

    /**
     * Encodes the specified GetEncoderConfigAllResponse message. Does not implicitly {@link encodergrpc.GetEncoderConfigAllResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {encodergrpc.IGetEncoderConfigAllResponse} message GetEncoderConfigAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigAllResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.encoderConfig != null &&
        Object.hasOwnProperty.call(message, 'encoderConfig')
      )
        $root.encodergrpc.EncoderConfig.encode(
          message.encoderConfig,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetEncoderConfigAllResponse message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigAllResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {encodergrpc.IGetEncoderConfigAllResponse} message GetEncoderConfigAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetEncoderConfigAllResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetEncoderConfigAllResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetEncoderConfigAllResponse} GetEncoderConfigAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigAllResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetEncoderConfigAllResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.encoderConfig = $root.encodergrpc.EncoderConfig.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetEncoderConfigAllResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetEncoderConfigAllResponse} GetEncoderConfigAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetEncoderConfigAllResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetEncoderConfigAllResponse message.
     * @function verify
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetEncoderConfigAllResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (
        message.encoderConfig != null &&
        message.hasOwnProperty('encoderConfig')
      ) {
        var error = $root.encodergrpc.EncoderConfig.verify(
          message.encoderConfig
        );
        if (error) return 'encoderConfig.' + error;
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetEncoderConfigAllResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetEncoderConfigAllResponse} GetEncoderConfigAllResponse
     */
    GetEncoderConfigAllResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetEncoderConfigAllResponse)
        return object;
      var message = new $root.encodergrpc.GetEncoderConfigAllResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.encoderConfig != null) {
        if (typeof object.encoderConfig !== 'object')
          throw TypeError(
            '.encodergrpc.GetEncoderConfigAllResponse.encoderConfig: object expected'
          );
        message.encoderConfig = $root.encodergrpc.EncoderConfig.fromObject(
          object.encoderConfig
        );
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetEncoderConfigAllResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @static
     * @param {encodergrpc.GetEncoderConfigAllResponse} message GetEncoderConfigAllResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetEncoderConfigAllResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.encoderConfig = null;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (
        message.encoderConfig != null &&
        message.hasOwnProperty('encoderConfig')
      )
        object.encoderConfig = $root.encodergrpc.EncoderConfig.toObject(
          message.encoderConfig,
          options
        );
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetEncoderConfigAllResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetEncoderConfigAllResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetEncoderConfigAllResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetEncoderConfigAllResponse;
  })(encodergrpc.GetEncoderConfigAllResponse || {});

  encodergrpc.GetCameraConfigResponse = (function (GetCameraConfigResponse) {
    /**
     * Properties of a GetCameraConfigResponse.
     * @memberof encodergrpc
     * @interface IGetCameraConfigResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] GetCameraConfigResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] GetCameraConfigResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetCameraConfigResponse encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] GetCameraConfigResponse cameraId
     * @property {number|null} [configKey] GetCameraConfigResponse configKey
     * @property {Uint8Array|null} [configVal] GetCameraConfigResponse configVal
     * @property {number|Long|null} [timeUs] GetCameraConfigResponse timeUs
     */

    /**
     * Constructs a new GetCameraConfigResponse.
     * @memberof encodergrpc
     * @classdesc Represents a GetCameraConfigResponse.
     * @implements IGetCameraConfigResponse
     * @constructor
     * @param {encodergrpc.IGetCameraConfigResponse=} [properties] Properties to set
     */
    function GetCameraConfigResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetCameraConfigResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.creds = null;

    /**
     * GetCameraConfigResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.requestId = null;

    /**
     * GetCameraConfigResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.encoderId = null;

    /**
     * GetCameraConfigResponse cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.cameraId = null;

    /**
     * GetCameraConfigResponse configKey.
     * @member {number} configKey
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.configKey = 0;

    /**
     * GetCameraConfigResponse configVal.
     * @member {Uint8Array} configVal
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.configVal = $util.newBuffer([]);

    /**
     * GetCameraConfigResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     */
    GetCameraConfigResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetCameraConfigResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {encodergrpc.IGetCameraConfigResponse=} [properties] Properties to set
     * @returns {encodergrpc.GetCameraConfigResponse} GetCameraConfigResponse instance
     */
    GetCameraConfigResponse.create = function create(properties) {
      return new GetCameraConfigResponse(properties);
    };

    /**
     * Encodes the specified GetCameraConfigResponse message. Does not implicitly {@link encodergrpc.GetCameraConfigResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {encodergrpc.IGetCameraConfigResponse} message GetCameraConfigResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.configKey != null &&
        Object.hasOwnProperty.call(message, 'configKey')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.configKey);
      if (
        message.configVal != null &&
        Object.hasOwnProperty.call(message, 'configVal')
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).bytes(message.configVal);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetCameraConfigResponse message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {encodergrpc.IGetCameraConfigResponse} message GetCameraConfigResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCameraConfigResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetCameraConfigResponse} GetCameraConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetCameraConfigResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.configKey = reader.uint32();
            break;
          case 6:
            message.configVal = reader.bytes();
            break;
          case 7:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetCameraConfigResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetCameraConfigResponse} GetCameraConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCameraConfigResponse message.
     * @function verify
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCameraConfigResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        if (!$util.isInteger(message.configKey))
          return 'configKey: integer expected';
      if (message.configVal != null && message.hasOwnProperty('configVal'))
        if (
          !(
            (message.configVal &&
              typeof message.configVal.length === 'number') ||
            $util.isString(message.configVal)
          )
        )
          return 'configVal: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetCameraConfigResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetCameraConfigResponse} GetCameraConfigResponse
     */
    GetCameraConfigResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetCameraConfigResponse)
        return object;
      var message = new $root.encodergrpc.GetCameraConfigResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigResponse.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.configKey != null) message.configKey = object.configKey >>> 0;
      if (object.configVal != null)
        if (typeof object.configVal === 'string')
          $util.base64.decode(
            object.configVal,
            (message.configVal = $util.newBuffer(
              $util.base64.length(object.configVal)
            )),
            0
          );
        else if (object.configVal.length) message.configVal = object.configVal;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetCameraConfigResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetCameraConfigResponse
     * @static
     * @param {encodergrpc.GetCameraConfigResponse} message GetCameraConfigResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetCameraConfigResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        object.configKey = 0;
        if (options.bytes === String) object.configVal = '';
        else {
          object.configVal = [];
          if (options.bytes !== Array)
            object.configVal = $util.newBuffer(object.configVal);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (message.configKey != null && message.hasOwnProperty('configKey'))
        object.configKey = message.configKey;
      if (message.configVal != null && message.hasOwnProperty('configVal'))
        object.configVal =
          options.bytes === String
            ? $util.base64.encode(
                message.configVal,
                0,
                message.configVal.length
              )
            : options.bytes === Array
            ? Array.prototype.slice.call(message.configVal)
            : message.configVal;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetCameraConfigResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetCameraConfigResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCameraConfigResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCameraConfigResponse;
  })(encodergrpc.GetCameraConfigResponse || {});

  encodergrpc.GetCameraConfigAllResponse = (function (
    GetCameraConfigAllResponse
  ) {
    /**
     * Properties of a GetCameraConfigAllResponse.
     * @memberof encodergrpc
     * @interface IGetCameraConfigAllResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] GetCameraConfigAllResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] GetCameraConfigAllResponse requestId
     * @property {encodergrpc.IEncoderID|null} [encoderId] GetCameraConfigAllResponse encoderId
     * @property {encodergrpc.ICameraID|null} [cameraId] GetCameraConfigAllResponse cameraId
     * @property {encodergrpc.ICameraConfig|null} [cameraConfig] GetCameraConfigAllResponse cameraConfig
     * @property {number|Long|null} [timeUs] GetCameraConfigAllResponse timeUs
     */

    /**
     * Constructs a new GetCameraConfigAllResponse.
     * @memberof encodergrpc
     * @classdesc Represents a GetCameraConfigAllResponse.
     * @implements IGetCameraConfigAllResponse
     * @constructor
     * @param {encodergrpc.IGetCameraConfigAllResponse=} [properties] Properties to set
     */
    function GetCameraConfigAllResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetCameraConfigAllResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     */
    GetCameraConfigAllResponse.prototype.creds = null;

    /**
     * GetCameraConfigAllResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     */
    GetCameraConfigAllResponse.prototype.requestId = null;

    /**
     * GetCameraConfigAllResponse encoderId.
     * @member {encodergrpc.IEncoderID|null|undefined} encoderId
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     */
    GetCameraConfigAllResponse.prototype.encoderId = null;

    /**
     * GetCameraConfigAllResponse cameraId.
     * @member {encodergrpc.ICameraID|null|undefined} cameraId
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     */
    GetCameraConfigAllResponse.prototype.cameraId = null;

    /**
     * GetCameraConfigAllResponse cameraConfig.
     * @member {encodergrpc.ICameraConfig|null|undefined} cameraConfig
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     */
    GetCameraConfigAllResponse.prototype.cameraConfig = null;

    /**
     * GetCameraConfigAllResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     */
    GetCameraConfigAllResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GetCameraConfigAllResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {encodergrpc.IGetCameraConfigAllResponse=} [properties] Properties to set
     * @returns {encodergrpc.GetCameraConfigAllResponse} GetCameraConfigAllResponse instance
     */
    GetCameraConfigAllResponse.create = function create(properties) {
      return new GetCameraConfigAllResponse(properties);
    };

    /**
     * Encodes the specified GetCameraConfigAllResponse message. Does not implicitly {@link encodergrpc.GetCameraConfigAllResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {encodergrpc.IGetCameraConfigAllResponse} message GetCameraConfigAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigAllResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        $root.encodergrpc.EncoderID.encode(
          message.encoderId,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        $root.encodergrpc.CameraID.encode(
          message.cameraId,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.cameraConfig != null &&
        Object.hasOwnProperty.call(message, 'cameraConfig')
      )
        $root.encodergrpc.CameraConfig.encode(
          message.cameraConfig,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified GetCameraConfigAllResponse message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigAllResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {encodergrpc.IGetCameraConfigAllResponse} message GetCameraConfigAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCameraConfigAllResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCameraConfigAllResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.GetCameraConfigAllResponse} GetCameraConfigAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigAllResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.GetCameraConfigAllResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.encoderId = $root.encodergrpc.EncoderID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.cameraId = $root.encodergrpc.CameraID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.cameraConfig = $root.encodergrpc.CameraConfig.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetCameraConfigAllResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.GetCameraConfigAllResponse} GetCameraConfigAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCameraConfigAllResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCameraConfigAllResponse message.
     * @function verify
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCameraConfigAllResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId')) {
        var error = $root.encodergrpc.EncoderID.verify(message.encoderId);
        if (error) return 'encoderId.' + error;
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId')) {
        var error = $root.encodergrpc.CameraID.verify(message.cameraId);
        if (error) return 'cameraId.' + error;
      }
      if (
        message.cameraConfig != null &&
        message.hasOwnProperty('cameraConfig')
      ) {
        var error = $root.encodergrpc.CameraConfig.verify(message.cameraConfig);
        if (error) return 'cameraConfig.' + error;
      }
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a GetCameraConfigAllResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.GetCameraConfigAllResponse} GetCameraConfigAllResponse
     */
    GetCameraConfigAllResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.GetCameraConfigAllResponse)
        return object;
      var message = new $root.encodergrpc.GetCameraConfigAllResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.encoderId != null) {
        if (typeof object.encoderId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllResponse.encoderId: object expected'
          );
        message.encoderId = $root.encodergrpc.EncoderID.fromObject(
          object.encoderId
        );
      }
      if (object.cameraId != null) {
        if (typeof object.cameraId !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllResponse.cameraId: object expected'
          );
        message.cameraId = $root.encodergrpc.CameraID.fromObject(
          object.cameraId
        );
      }
      if (object.cameraConfig != null) {
        if (typeof object.cameraConfig !== 'object')
          throw TypeError(
            '.encodergrpc.GetCameraConfigAllResponse.cameraConfig: object expected'
          );
        message.cameraConfig = $root.encodergrpc.CameraConfig.fromObject(
          object.cameraConfig
        );
      }
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GetCameraConfigAllResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @static
     * @param {encodergrpc.GetCameraConfigAllResponse} message GetCameraConfigAllResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetCameraConfigAllResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.encoderId = null;
        object.cameraId = null;
        object.cameraConfig = null;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = $root.encodergrpc.EncoderID.toObject(
          message.encoderId,
          options
        );
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = $root.encodergrpc.CameraID.toObject(
          message.cameraId,
          options
        );
      if (
        message.cameraConfig != null &&
        message.hasOwnProperty('cameraConfig')
      )
        object.cameraConfig = $root.encodergrpc.CameraConfig.toObject(
          message.cameraConfig,
          options
        );
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this GetCameraConfigAllResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.GetCameraConfigAllResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetCameraConfigAllResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetCameraConfigAllResponse;
  })(encodergrpc.GetCameraConfigAllResponse || {});

  encodergrpc.ManageEventResponse = (function (ManageEventResponse) {
    /**
     * Properties of a ManageEventResponse.
     * @memberof encodergrpc
     * @interface IManageEventResponse
     * @property {encodergrpc.IEventCredentials|null} [creds] ManageEventResponse creds
     * @property {encodergrpc.IRequestID|null} [requestId] ManageEventResponse requestId
     * @property {number|null} [status] ManageEventResponse status
     * @property {string|null} [command] ManageEventResponse command
     * @property {Uint8Array|null} [response] ManageEventResponse response
     * @property {number|Long|null} [timeUs] ManageEventResponse timeUs
     */

    /**
     * Constructs a new ManageEventResponse.
     * @memberof encodergrpc
     * @classdesc Represents a ManageEventResponse.
     * @implements IManageEventResponse
     * @constructor
     * @param {encodergrpc.IManageEventResponse=} [properties] Properties to set
     */
    function ManageEventResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ManageEventResponse creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     */
    ManageEventResponse.prototype.creds = null;

    /**
     * ManageEventResponse requestId.
     * @member {encodergrpc.IRequestID|null|undefined} requestId
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     */
    ManageEventResponse.prototype.requestId = null;

    /**
     * ManageEventResponse status.
     * @member {number} status
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     */
    ManageEventResponse.prototype.status = 0;

    /**
     * ManageEventResponse command.
     * @member {string} command
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     */
    ManageEventResponse.prototype.command = '';

    /**
     * ManageEventResponse response.
     * @member {Uint8Array} response
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     */
    ManageEventResponse.prototype.response = $util.newBuffer([]);

    /**
     * ManageEventResponse timeUs.
     * @member {number|Long} timeUs
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     */
    ManageEventResponse.prototype.timeUs = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new ManageEventResponse instance using the specified properties.
     * @function create
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {encodergrpc.IManageEventResponse=} [properties] Properties to set
     * @returns {encodergrpc.ManageEventResponse} ManageEventResponse instance
     */
    ManageEventResponse.create = function create(properties) {
      return new ManageEventResponse(properties);
    };

    /**
     * Encodes the specified ManageEventResponse message. Does not implicitly {@link encodergrpc.ManageEventResponse.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {encodergrpc.IManageEventResponse} message ManageEventResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageEventResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (
        message.requestId != null &&
        Object.hasOwnProperty.call(message, 'requestId')
      )
        $root.encodergrpc.RequestID.encode(
          message.requestId,
          writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
        ).ldelim();
      if (
        message.status != null &&
        Object.hasOwnProperty.call(message, 'status')
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.status);
      if (
        message.command != null &&
        Object.hasOwnProperty.call(message, 'command')
      )
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.command);
      if (
        message.response != null &&
        Object.hasOwnProperty.call(message, 'response')
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).bytes(message.response);
      if (
        message.timeUs != null &&
        Object.hasOwnProperty.call(message, 'timeUs')
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timeUs);
      return writer;
    };

    /**
     * Encodes the specified ManageEventResponse message, length delimited. Does not implicitly {@link encodergrpc.ManageEventResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {encodergrpc.IManageEventResponse} message ManageEventResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ManageEventResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ManageEventResponse message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.ManageEventResponse} ManageEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageEventResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.ManageEventResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.requestId = $root.encodergrpc.RequestID.decode(
              reader,
              reader.uint32()
            );
            break;
          case 3:
            message.status = reader.uint32();
            break;
          case 4:
            message.command = reader.string();
            break;
          case 5:
            message.response = reader.bytes();
            break;
          case 6:
            message.timeUs = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ManageEventResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.ManageEventResponse} ManageEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ManageEventResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ManageEventResponse message.
     * @function verify
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ManageEventResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.requestId != null && message.hasOwnProperty('requestId')) {
        var error = $root.encodergrpc.RequestID.verify(message.requestId);
        if (error) return 'requestId.' + error;
      }
      if (message.status != null && message.hasOwnProperty('status'))
        if (!$util.isInteger(message.status)) return 'status: integer expected';
      if (message.command != null && message.hasOwnProperty('command'))
        if (!$util.isString(message.command)) return 'command: string expected';
      if (message.response != null && message.hasOwnProperty('response'))
        if (
          !(
            (message.response && typeof message.response.length === 'number') ||
            $util.isString(message.response)
          )
        )
          return 'response: buffer expected';
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (
          !$util.isInteger(message.timeUs) &&
          !(
            message.timeUs &&
            $util.isInteger(message.timeUs.low) &&
            $util.isInteger(message.timeUs.high)
          )
        )
          return 'timeUs: integer|Long expected';
      return null;
    };

    /**
     * Creates a ManageEventResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.ManageEventResponse} ManageEventResponse
     */
    ManageEventResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.ManageEventResponse)
        return object;
      var message = new $root.encodergrpc.ManageEventResponse();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError(
            '.encodergrpc.ManageEventResponse.creds: object expected'
          );
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.requestId != null) {
        if (typeof object.requestId !== 'object')
          throw TypeError(
            '.encodergrpc.ManageEventResponse.requestId: object expected'
          );
        message.requestId = $root.encodergrpc.RequestID.fromObject(
          object.requestId
        );
      }
      if (object.status != null) message.status = object.status >>> 0;
      if (object.command != null) message.command = String(object.command);
      if (object.response != null)
        if (typeof object.response === 'string')
          $util.base64.decode(
            object.response,
            (message.response = $util.newBuffer(
              $util.base64.length(object.response)
            )),
            0
          );
        else if (object.response.length) message.response = object.response;
      if (object.timeUs != null)
        if ($util.Long)
          (message.timeUs = $util.Long.fromValue(
            object.timeUs
          )).unsigned = false;
        else if (typeof object.timeUs === 'string')
          message.timeUs = parseInt(object.timeUs, 10);
        else if (typeof object.timeUs === 'number')
          message.timeUs = object.timeUs;
        else if (typeof object.timeUs === 'object')
          message.timeUs = new $util.LongBits(
            object.timeUs.low >>> 0,
            object.timeUs.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a ManageEventResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.ManageEventResponse
     * @static
     * @param {encodergrpc.ManageEventResponse} message ManageEventResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ManageEventResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.creds = null;
        object.requestId = null;
        object.status = 0;
        object.command = '';
        if (options.bytes === String) object.response = '';
        else {
          object.response = [];
          if (options.bytes !== Array)
            object.response = $util.newBuffer(object.response);
        }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timeUs =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timeUs = options.longs === String ? '0' : 0;
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.requestId != null && message.hasOwnProperty('requestId'))
        object.requestId = $root.encodergrpc.RequestID.toObject(
          message.requestId,
          options
        );
      if (message.status != null && message.hasOwnProperty('status'))
        object.status = message.status;
      if (message.command != null && message.hasOwnProperty('command'))
        object.command = message.command;
      if (message.response != null && message.hasOwnProperty('response'))
        object.response =
          options.bytes === String
            ? $util.base64.encode(message.response, 0, message.response.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.response)
            : message.response;
      if (message.timeUs != null && message.hasOwnProperty('timeUs'))
        if (typeof message.timeUs === 'number')
          object.timeUs =
            options.longs === String ? String(message.timeUs) : message.timeUs;
        else
          object.timeUs =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timeUs)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timeUs.low >>> 0,
                  message.timeUs.high >>> 0
                ).toNumber()
              : message.timeUs;
      return object;
    };

    /**
     * Converts this ManageEventResponse to JSON.
     * @function toJSON
     * @memberof encodergrpc.ManageEventResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ManageEventResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ManageEventResponse;
  })(encodergrpc.ManageEventResponse || {});

  encodergrpc.EventConfig = (function (EventConfig) {
    /**
     * Properties of an EventConfig.
     * @memberof encodergrpc
     * @interface IEventConfig
     * @property {encodergrpc.IEventCredentials|null} [creds] EventConfig creds
     * @property {string|null} [state] EventConfig state
     * @property {number|Long|null} [eventStart] EventConfig eventStart
     * @property {number|Long|null} [eventStop] EventConfig eventStop
     * @property {string|null} [location] EventConfig location
     * @property {string|null} [room] EventConfig room
     * @property {Array.<encodergrpc.IOperator>|null} [operators] EventConfig operators
     * @property {Array.<encodergrpc.IEncoderConfig>|null} [encoders] EventConfig encoders
     */

    /**
     * Constructs a new EventConfig.
     * @memberof encodergrpc
     * @classdesc Represents an EventConfig.
     * @implements IEventConfig
     * @constructor
     * @param {encodergrpc.IEventConfig=} [properties] Properties to set
     */
    function EventConfig(properties) {
      this.operators = [];
      this.encoders = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventConfig creds.
     * @member {encodergrpc.IEventCredentials|null|undefined} creds
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.creds = null;

    /**
     * EventConfig state.
     * @member {string} state
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.state = '';

    /**
     * EventConfig eventStart.
     * @member {number|Long} eventStart
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.eventStart = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * EventConfig eventStop.
     * @member {number|Long} eventStop
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.eventStop = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * EventConfig location.
     * @member {string} location
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.location = '';

    /**
     * EventConfig room.
     * @member {string} room
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.room = '';

    /**
     * EventConfig operators.
     * @member {Array.<encodergrpc.IOperator>} operators
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.operators = $util.emptyArray;

    /**
     * EventConfig encoders.
     * @member {Array.<encodergrpc.IEncoderConfig>} encoders
     * @memberof encodergrpc.EventConfig
     * @instance
     */
    EventConfig.prototype.encoders = $util.emptyArray;

    /**
     * Creates a new EventConfig instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {encodergrpc.IEventConfig=} [properties] Properties to set
     * @returns {encodergrpc.EventConfig} EventConfig instance
     */
    EventConfig.create = function create(properties) {
      return new EventConfig(properties);
    };

    /**
     * Encodes the specified EventConfig message. Does not implicitly {@link encodergrpc.EventConfig.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {encodergrpc.IEventConfig} message EventConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.creds != null && Object.hasOwnProperty.call(message, 'creds'))
        $root.encodergrpc.EventCredentials.encode(
          message.creds,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      if (message.state != null && Object.hasOwnProperty.call(message, 'state'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.state);
      if (
        message.eventStart != null &&
        Object.hasOwnProperty.call(message, 'eventStart')
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.eventStart);
      if (
        message.eventStop != null &&
        Object.hasOwnProperty.call(message, 'eventStop')
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.eventStop);
      if (
        message.location != null &&
        Object.hasOwnProperty.call(message, 'location')
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.location);
      if (message.room != null && Object.hasOwnProperty.call(message, 'room'))
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.room);
      if (message.operators != null && message.operators.length)
        for (var i = 0; i < message.operators.length; ++i)
          $root.encodergrpc.Operator.encode(
            message.operators[i],
            writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
          ).ldelim();
      if (message.encoders != null && message.encoders.length)
        for (var i = 0; i < message.encoders.length; ++i)
          $root.encodergrpc.EncoderConfig.encode(
            message.encoders[i],
            writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified EventConfig message, length delimited. Does not implicitly {@link encodergrpc.EventConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {encodergrpc.IEventConfig} message EventConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventConfig message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EventConfig} EventConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EventConfig();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.creds = $root.encodergrpc.EventCredentials.decode(
              reader,
              reader.uint32()
            );
            break;
          case 2:
            message.state = reader.string();
            break;
          case 3:
            message.eventStart = reader.int64();
            break;
          case 4:
            message.eventStop = reader.int64();
            break;
          case 5:
            message.location = reader.string();
            break;
          case 6:
            message.room = reader.string();
            break;
          case 7:
            if (!(message.operators && message.operators.length))
              message.operators = [];
            message.operators.push(
              $root.encodergrpc.Operator.decode(reader, reader.uint32())
            );
            break;
          case 8:
            if (!(message.encoders && message.encoders.length))
              message.encoders = [];
            message.encoders.push(
              $root.encodergrpc.EncoderConfig.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EventConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EventConfig} EventConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventConfig message.
     * @function verify
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.creds != null && message.hasOwnProperty('creds')) {
        var error = $root.encodergrpc.EventCredentials.verify(message.creds);
        if (error) return 'creds.' + error;
      }
      if (message.state != null && message.hasOwnProperty('state'))
        if (!$util.isString(message.state)) return 'state: string expected';
      if (message.eventStart != null && message.hasOwnProperty('eventStart'))
        if (
          !$util.isInteger(message.eventStart) &&
          !(
            message.eventStart &&
            $util.isInteger(message.eventStart.low) &&
            $util.isInteger(message.eventStart.high)
          )
        )
          return 'eventStart: integer|Long expected';
      if (message.eventStop != null && message.hasOwnProperty('eventStop'))
        if (
          !$util.isInteger(message.eventStop) &&
          !(
            message.eventStop &&
            $util.isInteger(message.eventStop.low) &&
            $util.isInteger(message.eventStop.high)
          )
        )
          return 'eventStop: integer|Long expected';
      if (message.location != null && message.hasOwnProperty('location'))
        if (!$util.isString(message.location))
          return 'location: string expected';
      if (message.room != null && message.hasOwnProperty('room'))
        if (!$util.isString(message.room)) return 'room: string expected';
      if (message.operators != null && message.hasOwnProperty('operators')) {
        if (!Array.isArray(message.operators))
          return 'operators: array expected';
        for (var i = 0; i < message.operators.length; ++i) {
          var error = $root.encodergrpc.Operator.verify(message.operators[i]);
          if (error) return 'operators.' + error;
        }
      }
      if (message.encoders != null && message.hasOwnProperty('encoders')) {
        if (!Array.isArray(message.encoders)) return 'encoders: array expected';
        for (var i = 0; i < message.encoders.length; ++i) {
          var error = $root.encodergrpc.EncoderConfig.verify(
            message.encoders[i]
          );
          if (error) return 'encoders.' + error;
        }
      }
      return null;
    };

    /**
     * Creates an EventConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EventConfig} EventConfig
     */
    EventConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EventConfig) return object;
      var message = new $root.encodergrpc.EventConfig();
      if (object.creds != null) {
        if (typeof object.creds !== 'object')
          throw TypeError('.encodergrpc.EventConfig.creds: object expected');
        message.creds = $root.encodergrpc.EventCredentials.fromObject(
          object.creds
        );
      }
      if (object.state != null) message.state = String(object.state);
      if (object.eventStart != null)
        if ($util.Long)
          (message.eventStart = $util.Long.fromValue(
            object.eventStart
          )).unsigned = false;
        else if (typeof object.eventStart === 'string')
          message.eventStart = parseInt(object.eventStart, 10);
        else if (typeof object.eventStart === 'number')
          message.eventStart = object.eventStart;
        else if (typeof object.eventStart === 'object')
          message.eventStart = new $util.LongBits(
            object.eventStart.low >>> 0,
            object.eventStart.high >>> 0
          ).toNumber();
      if (object.eventStop != null)
        if ($util.Long)
          (message.eventStop = $util.Long.fromValue(
            object.eventStop
          )).unsigned = false;
        else if (typeof object.eventStop === 'string')
          message.eventStop = parseInt(object.eventStop, 10);
        else if (typeof object.eventStop === 'number')
          message.eventStop = object.eventStop;
        else if (typeof object.eventStop === 'object')
          message.eventStop = new $util.LongBits(
            object.eventStop.low >>> 0,
            object.eventStop.high >>> 0
          ).toNumber();
      if (object.location != null) message.location = String(object.location);
      if (object.room != null) message.room = String(object.room);
      if (object.operators) {
        if (!Array.isArray(object.operators))
          throw TypeError('.encodergrpc.EventConfig.operators: array expected');
        message.operators = [];
        for (var i = 0; i < object.operators.length; ++i) {
          if (typeof object.operators[i] !== 'object')
            throw TypeError(
              '.encodergrpc.EventConfig.operators: object expected'
            );
          message.operators[i] = $root.encodergrpc.Operator.fromObject(
            object.operators[i]
          );
        }
      }
      if (object.encoders) {
        if (!Array.isArray(object.encoders))
          throw TypeError('.encodergrpc.EventConfig.encoders: array expected');
        message.encoders = [];
        for (var i = 0; i < object.encoders.length; ++i) {
          if (typeof object.encoders[i] !== 'object')
            throw TypeError(
              '.encodergrpc.EventConfig.encoders: object expected'
            );
          message.encoders[i] = $root.encodergrpc.EncoderConfig.fromObject(
            object.encoders[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an EventConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EventConfig
     * @static
     * @param {encodergrpc.EventConfig} message EventConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventConfig.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) {
        object.operators = [];
        object.encoders = [];
      }
      if (options.defaults) {
        object.creds = null;
        object.state = '';
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.eventStart =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.eventStart = options.longs === String ? '0' : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.eventStop =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.eventStop = options.longs === String ? '0' : 0;
        object.location = '';
        object.room = '';
      }
      if (message.creds != null && message.hasOwnProperty('creds'))
        object.creds = $root.encodergrpc.EventCredentials.toObject(
          message.creds,
          options
        );
      if (message.state != null && message.hasOwnProperty('state'))
        object.state = message.state;
      if (message.eventStart != null && message.hasOwnProperty('eventStart'))
        if (typeof message.eventStart === 'number')
          object.eventStart =
            options.longs === String
              ? String(message.eventStart)
              : message.eventStart;
        else
          object.eventStart =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.eventStart)
              : options.longs === Number
              ? new $util.LongBits(
                  message.eventStart.low >>> 0,
                  message.eventStart.high >>> 0
                ).toNumber()
              : message.eventStart;
      if (message.eventStop != null && message.hasOwnProperty('eventStop'))
        if (typeof message.eventStop === 'number')
          object.eventStop =
            options.longs === String
              ? String(message.eventStop)
              : message.eventStop;
        else
          object.eventStop =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.eventStop)
              : options.longs === Number
              ? new $util.LongBits(
                  message.eventStop.low >>> 0,
                  message.eventStop.high >>> 0
                ).toNumber()
              : message.eventStop;
      if (message.location != null && message.hasOwnProperty('location'))
        object.location = message.location;
      if (message.room != null && message.hasOwnProperty('room'))
        object.room = message.room;
      if (message.operators && message.operators.length) {
        object.operators = [];
        for (var j = 0; j < message.operators.length; ++j)
          object.operators[j] = $root.encodergrpc.Operator.toObject(
            message.operators[j],
            options
          );
      }
      if (message.encoders && message.encoders.length) {
        object.encoders = [];
        for (var j = 0; j < message.encoders.length; ++j)
          object.encoders[j] = $root.encodergrpc.EncoderConfig.toObject(
            message.encoders[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this EventConfig to JSON.
     * @function toJSON
     * @memberof encodergrpc.EventConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventConfig;
  })(encodergrpc.EventConfig || {});

  encodergrpc.Operator = (function (Operator) {
    /**
     * Properties of an Operator.
     * @memberof encodergrpc
     * @interface IOperator
     * @property {string|null} [operatorId] Operator operatorId
     * @property {string|null} [role] Operator role
     * @property {number|Long|null} [signedIn] Operator signedIn
     * @property {number|null} [numCommands] Operator numCommands
     */

    /**
     * Constructs a new Operator.
     * @memberof encodergrpc
     * @classdesc Represents an Operator.
     * @implements IOperator
     * @constructor
     * @param {encodergrpc.IOperator=} [properties] Properties to set
     */
    function Operator(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Operator operatorId.
     * @member {string} operatorId
     * @memberof encodergrpc.Operator
     * @instance
     */
    Operator.prototype.operatorId = '';

    /**
     * Operator role.
     * @member {string} role
     * @memberof encodergrpc.Operator
     * @instance
     */
    Operator.prototype.role = '';

    /**
     * Operator signedIn.
     * @member {number|Long} signedIn
     * @memberof encodergrpc.Operator
     * @instance
     */
    Operator.prototype.signedIn = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0;

    /**
     * Operator numCommands.
     * @member {number} numCommands
     * @memberof encodergrpc.Operator
     * @instance
     */
    Operator.prototype.numCommands = 0;

    /**
     * Creates a new Operator instance using the specified properties.
     * @function create
     * @memberof encodergrpc.Operator
     * @static
     * @param {encodergrpc.IOperator=} [properties] Properties to set
     * @returns {encodergrpc.Operator} Operator instance
     */
    Operator.create = function create(properties) {
      return new Operator(properties);
    };

    /**
     * Encodes the specified Operator message. Does not implicitly {@link encodergrpc.Operator.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.Operator
     * @static
     * @param {encodergrpc.IOperator} message Operator message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Operator.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.operatorId != null &&
        Object.hasOwnProperty.call(message, 'operatorId')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.operatorId);
      if (message.role != null && Object.hasOwnProperty.call(message, 'role'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.role);
      if (
        message.signedIn != null &&
        Object.hasOwnProperty.call(message, 'signedIn')
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.signedIn);
      if (
        message.numCommands != null &&
        Object.hasOwnProperty.call(message, 'numCommands')
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.numCommands);
      return writer;
    };

    /**
     * Encodes the specified Operator message, length delimited. Does not implicitly {@link encodergrpc.Operator.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.Operator
     * @static
     * @param {encodergrpc.IOperator} message Operator message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Operator.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Operator message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.Operator
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.Operator} Operator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Operator.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.Operator();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.operatorId = reader.string();
            break;
          case 2:
            message.role = reader.string();
            break;
          case 3:
            message.signedIn = reader.uint64();
            break;
          case 4:
            message.numCommands = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Operator message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.Operator
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.Operator} Operator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Operator.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Operator message.
     * @function verify
     * @memberof encodergrpc.Operator
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Operator.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.operatorId != null && message.hasOwnProperty('operatorId'))
        if (!$util.isString(message.operatorId))
          return 'operatorId: string expected';
      if (message.role != null && message.hasOwnProperty('role'))
        if (!$util.isString(message.role)) return 'role: string expected';
      if (message.signedIn != null && message.hasOwnProperty('signedIn'))
        if (
          !$util.isInteger(message.signedIn) &&
          !(
            message.signedIn &&
            $util.isInteger(message.signedIn.low) &&
            $util.isInteger(message.signedIn.high)
          )
        )
          return 'signedIn: integer|Long expected';
      if (message.numCommands != null && message.hasOwnProperty('numCommands'))
        if (!$util.isInteger(message.numCommands))
          return 'numCommands: integer expected';
      return null;
    };

    /**
     * Creates an Operator message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.Operator
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.Operator} Operator
     */
    Operator.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.Operator) return object;
      var message = new $root.encodergrpc.Operator();
      if (object.operatorId != null)
        message.operatorId = String(object.operatorId);
      if (object.role != null) message.role = String(object.role);
      if (object.signedIn != null)
        if ($util.Long)
          (message.signedIn = $util.Long.fromValue(
            object.signedIn
          )).unsigned = true;
        else if (typeof object.signedIn === 'string')
          message.signedIn = parseInt(object.signedIn, 10);
        else if (typeof object.signedIn === 'number')
          message.signedIn = object.signedIn;
        else if (typeof object.signedIn === 'object')
          message.signedIn = new $util.LongBits(
            object.signedIn.low >>> 0,
            object.signedIn.high >>> 0
          ).toNumber(true);
      if (object.numCommands != null)
        message.numCommands = object.numCommands >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an Operator message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.Operator
     * @static
     * @param {encodergrpc.Operator} message Operator
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Operator.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.operatorId = '';
        object.role = '';
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.signedIn =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.signedIn = options.longs === String ? '0' : 0;
        object.numCommands = 0;
      }
      if (message.operatorId != null && message.hasOwnProperty('operatorId'))
        object.operatorId = message.operatorId;
      if (message.role != null && message.hasOwnProperty('role'))
        object.role = message.role;
      if (message.signedIn != null && message.hasOwnProperty('signedIn'))
        if (typeof message.signedIn === 'number')
          object.signedIn =
            options.longs === String
              ? String(message.signedIn)
              : message.signedIn;
        else
          object.signedIn =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.signedIn)
              : options.longs === Number
              ? new $util.LongBits(
                  message.signedIn.low >>> 0,
                  message.signedIn.high >>> 0
                ).toNumber(true)
              : message.signedIn;
      if (message.numCommands != null && message.hasOwnProperty('numCommands'))
        object.numCommands = message.numCommands;
      return object;
    };

    /**
     * Converts this Operator to JSON.
     * @function toJSON
     * @memberof encodergrpc.Operator
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Operator.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Operator;
  })(encodergrpc.Operator || {});

  encodergrpc.EncoderConfig = (function (EncoderConfig) {
    /**
     * Properties of an EncoderConfig.
     * @memberof encodergrpc
     * @interface IEncoderConfig
     * @property {string|null} [encoderId] EncoderConfig encoderId
     * @property {string|null} [encoderLocation] EncoderConfig encoderLocation
     * @property {Array.<encodergrpc.ICameraConfig>|null} [cameras] EncoderConfig cameras
     * @property {encodergrpc.IAudio|null} [audio] EncoderConfig audio
     */

    /**
     * Constructs a new EncoderConfig.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderConfig.
     * @implements IEncoderConfig
     * @constructor
     * @param {encodergrpc.IEncoderConfig=} [properties] Properties to set
     */
    function EncoderConfig(properties) {
      this.cameras = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderConfig encoderId.
     * @member {string} encoderId
     * @memberof encodergrpc.EncoderConfig
     * @instance
     */
    EncoderConfig.prototype.encoderId = '';

    /**
     * EncoderConfig encoderLocation.
     * @member {string} encoderLocation
     * @memberof encodergrpc.EncoderConfig
     * @instance
     */
    EncoderConfig.prototype.encoderLocation = '';

    /**
     * EncoderConfig cameras.
     * @member {Array.<encodergrpc.ICameraConfig>} cameras
     * @memberof encodergrpc.EncoderConfig
     * @instance
     */
    EncoderConfig.prototype.cameras = $util.emptyArray;

    /**
     * EncoderConfig audio.
     * @member {encodergrpc.IAudio|null|undefined} audio
     * @memberof encodergrpc.EncoderConfig
     * @instance
     */
    EncoderConfig.prototype.audio = null;

    /**
     * Creates a new EncoderConfig instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {encodergrpc.IEncoderConfig=} [properties] Properties to set
     * @returns {encodergrpc.EncoderConfig} EncoderConfig instance
     */
    EncoderConfig.create = function create(properties) {
      return new EncoderConfig(properties);
    };

    /**
     * Encodes the specified EncoderConfig message. Does not implicitly {@link encodergrpc.EncoderConfig.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {encodergrpc.IEncoderConfig} message EncoderConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.encoderId);
      if (
        message.encoderLocation != null &&
        Object.hasOwnProperty.call(message, 'encoderLocation')
      )
        writer
          .uint32(/* id 2, wireType 2 =*/ 18)
          .string(message.encoderLocation);
      if (message.cameras != null && message.cameras.length)
        for (var i = 0; i < message.cameras.length; ++i)
          $root.encodergrpc.CameraConfig.encode(
            message.cameras[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
      if (message.audio != null && Object.hasOwnProperty.call(message, 'audio'))
        $root.encodergrpc.Audio.encode(
          message.audio,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified EncoderConfig message, length delimited. Does not implicitly {@link encodergrpc.EncoderConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {encodergrpc.IEncoderConfig} message EncoderConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderConfig message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderConfig} EncoderConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderConfig();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.encoderId = reader.string();
            break;
          case 2:
            message.encoderLocation = reader.string();
            break;
          case 3:
            if (!(message.cameras && message.cameras.length))
              message.cameras = [];
            message.cameras.push(
              $root.encodergrpc.CameraConfig.decode(reader, reader.uint32())
            );
            break;
          case 4:
            message.audio = $root.encodergrpc.Audio.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderConfig} EncoderConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderConfig message.
     * @function verify
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        if (!$util.isString(message.encoderId))
          return 'encoderId: string expected';
      if (
        message.encoderLocation != null &&
        message.hasOwnProperty('encoderLocation')
      )
        if (!$util.isString(message.encoderLocation))
          return 'encoderLocation: string expected';
      if (message.cameras != null && message.hasOwnProperty('cameras')) {
        if (!Array.isArray(message.cameras)) return 'cameras: array expected';
        for (var i = 0; i < message.cameras.length; ++i) {
          var error = $root.encodergrpc.CameraConfig.verify(message.cameras[i]);
          if (error) return 'cameras.' + error;
        }
      }
      if (message.audio != null && message.hasOwnProperty('audio')) {
        var error = $root.encodergrpc.Audio.verify(message.audio);
        if (error) return 'audio.' + error;
      }
      return null;
    };

    /**
     * Creates an EncoderConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderConfig} EncoderConfig
     */
    EncoderConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderConfig) return object;
      var message = new $root.encodergrpc.EncoderConfig();
      if (object.encoderId != null)
        message.encoderId = String(object.encoderId);
      if (object.encoderLocation != null)
        message.encoderLocation = String(object.encoderLocation);
      if (object.cameras) {
        if (!Array.isArray(object.cameras))
          throw TypeError('.encodergrpc.EncoderConfig.cameras: array expected');
        message.cameras = [];
        for (var i = 0; i < object.cameras.length; ++i) {
          if (typeof object.cameras[i] !== 'object')
            throw TypeError(
              '.encodergrpc.EncoderConfig.cameras: object expected'
            );
          message.cameras[i] = $root.encodergrpc.CameraConfig.fromObject(
            object.cameras[i]
          );
        }
      }
      if (object.audio != null) {
        if (typeof object.audio !== 'object')
          throw TypeError('.encodergrpc.EncoderConfig.audio: object expected');
        message.audio = $root.encodergrpc.Audio.fromObject(object.audio);
      }
      return message;
    };

    /**
     * Creates a plain object from an EncoderConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderConfig
     * @static
     * @param {encodergrpc.EncoderConfig} message EncoderConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderConfig.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.cameras = [];
      if (options.defaults) {
        object.encoderId = '';
        object.encoderLocation = '';
        object.audio = null;
      }
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = message.encoderId;
      if (
        message.encoderLocation != null &&
        message.hasOwnProperty('encoderLocation')
      )
        object.encoderLocation = message.encoderLocation;
      if (message.cameras && message.cameras.length) {
        object.cameras = [];
        for (var j = 0; j < message.cameras.length; ++j)
          object.cameras[j] = $root.encodergrpc.CameraConfig.toObject(
            message.cameras[j],
            options
          );
      }
      if (message.audio != null && message.hasOwnProperty('audio'))
        object.audio = $root.encodergrpc.Audio.toObject(message.audio, options);
      return object;
    };

    /**
     * Converts this EncoderConfig to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderConfig;
  })(encodergrpc.EncoderConfig || {});

  encodergrpc.CameraConfig = (function (CameraConfig) {
    /**
     * Properties of a CameraConfig.
     * @memberof encodergrpc
     * @interface ICameraConfig
     * @property {string|null} [cameraId] CameraConfig cameraId
     * @property {string|null} [cameraType] CameraConfig cameraType
     * @property {encodergrpc.ICamWinSafe|null} [winsafeProperties] CameraConfig winsafeProperties
     * @property {encodergrpc.ICamLumens|null} [lumensProperties] CameraConfig lumensProperties
     */

    /**
     * Constructs a new CameraConfig.
     * @memberof encodergrpc
     * @classdesc Represents a CameraConfig.
     * @implements ICameraConfig
     * @constructor
     * @param {encodergrpc.ICameraConfig=} [properties] Properties to set
     */
    function CameraConfig(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * CameraConfig cameraId.
     * @member {string} cameraId
     * @memberof encodergrpc.CameraConfig
     * @instance
     */
    CameraConfig.prototype.cameraId = '';

    /**
     * CameraConfig cameraType.
     * @member {string} cameraType
     * @memberof encodergrpc.CameraConfig
     * @instance
     */
    CameraConfig.prototype.cameraType = '';

    /**
     * CameraConfig winsafeProperties.
     * @member {encodergrpc.ICamWinSafe|null|undefined} winsafeProperties
     * @memberof encodergrpc.CameraConfig
     * @instance
     */
    CameraConfig.prototype.winsafeProperties = null;

    /**
     * CameraConfig lumensProperties.
     * @member {encodergrpc.ICamLumens|null|undefined} lumensProperties
     * @memberof encodergrpc.CameraConfig
     * @instance
     */
    CameraConfig.prototype.lumensProperties = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * CameraConfig model.
     * @member {"winsafeProperties"|"lumensProperties"|undefined} model
     * @memberof encodergrpc.CameraConfig
     * @instance
     */
    Object.defineProperty(CameraConfig.prototype, 'model', {
      get: $util.oneOfGetter(
        ($oneOfFields = ['winsafeProperties', 'lumensProperties'])
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new CameraConfig instance using the specified properties.
     * @function create
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {encodergrpc.ICameraConfig=} [properties] Properties to set
     * @returns {encodergrpc.CameraConfig} CameraConfig instance
     */
    CameraConfig.create = function create(properties) {
      return new CameraConfig(properties);
    };

    /**
     * Encodes the specified CameraConfig message. Does not implicitly {@link encodergrpc.CameraConfig.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {encodergrpc.ICameraConfig} message CameraConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraConfig.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.cameraId);
      if (
        message.cameraType != null &&
        Object.hasOwnProperty.call(message, 'cameraType')
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.cameraType);
      if (
        message.winsafeProperties != null &&
        Object.hasOwnProperty.call(message, 'winsafeProperties')
      )
        $root.encodergrpc.CamWinSafe.encode(
          message.winsafeProperties,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.lumensProperties != null &&
        Object.hasOwnProperty.call(message, 'lumensProperties')
      )
        $root.encodergrpc.CamLumens.encode(
          message.lumensProperties,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified CameraConfig message, length delimited. Does not implicitly {@link encodergrpc.CameraConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {encodergrpc.ICameraConfig} message CameraConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraConfig.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CameraConfig message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.CameraConfig} CameraConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraConfig.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.CameraConfig();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.cameraId = reader.string();
            break;
          case 2:
            message.cameraType = reader.string();
            break;
          case 3:
            message.winsafeProperties = $root.encodergrpc.CamWinSafe.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.lumensProperties = $root.encodergrpc.CamLumens.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CameraConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.CameraConfig} CameraConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraConfig.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CameraConfig message.
     * @function verify
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CameraConfig.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      var properties = {};
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        if (!$util.isString(message.cameraId))
          return 'cameraId: string expected';
      if (message.cameraType != null && message.hasOwnProperty('cameraType'))
        if (!$util.isString(message.cameraType))
          return 'cameraType: string expected';
      if (
        message.winsafeProperties != null &&
        message.hasOwnProperty('winsafeProperties')
      ) {
        properties.model = 1;
        {
          var error = $root.encodergrpc.CamWinSafe.verify(
            message.winsafeProperties
          );
          if (error) return 'winsafeProperties.' + error;
        }
      }
      if (
        message.lumensProperties != null &&
        message.hasOwnProperty('lumensProperties')
      ) {
        if (properties.model === 1) return 'model: multiple values';
        properties.model = 1;
        {
          var error = $root.encodergrpc.CamLumens.verify(
            message.lumensProperties
          );
          if (error) return 'lumensProperties.' + error;
        }
      }
      return null;
    };

    /**
     * Creates a CameraConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.CameraConfig} CameraConfig
     */
    CameraConfig.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.CameraConfig) return object;
      var message = new $root.encodergrpc.CameraConfig();
      if (object.cameraId != null) message.cameraId = String(object.cameraId);
      if (object.cameraType != null)
        message.cameraType = String(object.cameraType);
      if (object.winsafeProperties != null) {
        if (typeof object.winsafeProperties !== 'object')
          throw TypeError(
            '.encodergrpc.CameraConfig.winsafeProperties: object expected'
          );
        message.winsafeProperties = $root.encodergrpc.CamWinSafe.fromObject(
          object.winsafeProperties
        );
      }
      if (object.lumensProperties != null) {
        if (typeof object.lumensProperties !== 'object')
          throw TypeError(
            '.encodergrpc.CameraConfig.lumensProperties: object expected'
          );
        message.lumensProperties = $root.encodergrpc.CamLumens.fromObject(
          object.lumensProperties
        );
      }
      return message;
    };

    /**
     * Creates a plain object from a CameraConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.CameraConfig
     * @static
     * @param {encodergrpc.CameraConfig} message CameraConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CameraConfig.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.cameraId = '';
        object.cameraType = '';
      }
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = message.cameraId;
      if (message.cameraType != null && message.hasOwnProperty('cameraType'))
        object.cameraType = message.cameraType;
      if (
        message.winsafeProperties != null &&
        message.hasOwnProperty('winsafeProperties')
      ) {
        object.winsafeProperties = $root.encodergrpc.CamWinSafe.toObject(
          message.winsafeProperties,
          options
        );
        if (options.oneofs) object.model = 'winsafeProperties';
      }
      if (
        message.lumensProperties != null &&
        message.hasOwnProperty('lumensProperties')
      ) {
        object.lumensProperties = $root.encodergrpc.CamLumens.toObject(
          message.lumensProperties,
          options
        );
        if (options.oneofs) object.model = 'lumensProperties';
      }
      return object;
    };

    /**
     * Converts this CameraConfig to JSON.
     * @function toJSON
     * @memberof encodergrpc.CameraConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CameraConfig.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CameraConfig;
  })(encodergrpc.CameraConfig || {});

  encodergrpc.Audio = (function (Audio) {
    /**
     * Properties of an Audio.
     * @memberof encodergrpc
     * @interface IAudio
     */

    /**
     * Constructs a new Audio.
     * @memberof encodergrpc
     * @classdesc Represents an Audio.
     * @implements IAudio
     * @constructor
     * @param {encodergrpc.IAudio=} [properties] Properties to set
     */
    function Audio(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Audio instance using the specified properties.
     * @function create
     * @memberof encodergrpc.Audio
     * @static
     * @param {encodergrpc.IAudio=} [properties] Properties to set
     * @returns {encodergrpc.Audio} Audio instance
     */
    Audio.create = function create(properties) {
      return new Audio(properties);
    };

    /**
     * Encodes the specified Audio message. Does not implicitly {@link encodergrpc.Audio.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.Audio
     * @static
     * @param {encodergrpc.IAudio} message Audio message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Audio.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified Audio message, length delimited. Does not implicitly {@link encodergrpc.Audio.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.Audio
     * @static
     * @param {encodergrpc.IAudio} message Audio message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Audio.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Audio message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.Audio
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.Audio} Audio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Audio.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.Audio();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Audio message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.Audio
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.Audio} Audio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Audio.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Audio message.
     * @function verify
     * @memberof encodergrpc.Audio
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Audio.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      return null;
    };

    /**
     * Creates an Audio message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.Audio
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.Audio} Audio
     */
    Audio.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.Audio) return object;
      return new $root.encodergrpc.Audio();
    };

    /**
     * Creates a plain object from an Audio message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.Audio
     * @static
     * @param {encodergrpc.Audio} message Audio
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Audio.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this Audio to JSON.
     * @function toJSON
     * @memberof encodergrpc.Audio
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Audio.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Audio;
  })(encodergrpc.Audio || {});

  encodergrpc.CamWinSafe = (function (CamWinSafe) {
    /**
     * Properties of a CamWinSafe.
     * @memberof encodergrpc
     * @interface ICamWinSafe
     */

    /**
     * Constructs a new CamWinSafe.
     * @memberof encodergrpc
     * @classdesc Represents a CamWinSafe.
     * @implements ICamWinSafe
     * @constructor
     * @param {encodergrpc.ICamWinSafe=} [properties] Properties to set
     */
    function CamWinSafe(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CamWinSafe instance using the specified properties.
     * @function create
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {encodergrpc.ICamWinSafe=} [properties] Properties to set
     * @returns {encodergrpc.CamWinSafe} CamWinSafe instance
     */
    CamWinSafe.create = function create(properties) {
      return new CamWinSafe(properties);
    };

    /**
     * Encodes the specified CamWinSafe message. Does not implicitly {@link encodergrpc.CamWinSafe.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {encodergrpc.ICamWinSafe} message CamWinSafe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CamWinSafe.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified CamWinSafe message, length delimited. Does not implicitly {@link encodergrpc.CamWinSafe.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {encodergrpc.ICamWinSafe} message CamWinSafe message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CamWinSafe.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CamWinSafe message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.CamWinSafe} CamWinSafe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CamWinSafe.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.CamWinSafe();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CamWinSafe message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.CamWinSafe} CamWinSafe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CamWinSafe.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CamWinSafe message.
     * @function verify
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CamWinSafe.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      return null;
    };

    /**
     * Creates a CamWinSafe message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.CamWinSafe} CamWinSafe
     */
    CamWinSafe.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.CamWinSafe) return object;
      return new $root.encodergrpc.CamWinSafe();
    };

    /**
     * Creates a plain object from a CamWinSafe message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.CamWinSafe
     * @static
     * @param {encodergrpc.CamWinSafe} message CamWinSafe
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CamWinSafe.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this CamWinSafe to JSON.
     * @function toJSON
     * @memberof encodergrpc.CamWinSafe
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CamWinSafe.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CamWinSafe;
  })(encodergrpc.CamWinSafe || {});

  encodergrpc.CamLumens = (function (CamLumens) {
    /**
     * Properties of a CamLumens.
     * @memberof encodergrpc
     * @interface ICamLumens
     */

    /**
     * Constructs a new CamLumens.
     * @memberof encodergrpc
     * @classdesc Represents a CamLumens.
     * @implements ICamLumens
     * @constructor
     * @param {encodergrpc.ICamLumens=} [properties] Properties to set
     */
    function CamLumens(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CamLumens instance using the specified properties.
     * @function create
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {encodergrpc.ICamLumens=} [properties] Properties to set
     * @returns {encodergrpc.CamLumens} CamLumens instance
     */
    CamLumens.create = function create(properties) {
      return new CamLumens(properties);
    };

    /**
     * Encodes the specified CamLumens message. Does not implicitly {@link encodergrpc.CamLumens.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {encodergrpc.ICamLumens} message CamLumens message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CamLumens.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified CamLumens message, length delimited. Does not implicitly {@link encodergrpc.CamLumens.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {encodergrpc.ICamLumens} message CamLumens message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CamLumens.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CamLumens message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.CamLumens} CamLumens
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CamLumens.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.CamLumens();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CamLumens message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.CamLumens} CamLumens
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CamLumens.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CamLumens message.
     * @function verify
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CamLumens.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      return null;
    };

    /**
     * Creates a CamLumens message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.CamLumens} CamLumens
     */
    CamLumens.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.CamLumens) return object;
      return new $root.encodergrpc.CamLumens();
    };

    /**
     * Creates a plain object from a CamLumens message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.CamLumens
     * @static
     * @param {encodergrpc.CamLumens} message CamLumens
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CamLumens.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this CamLumens to JSON.
     * @function toJSON
     * @memberof encodergrpc.CamLumens
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CamLumens.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CamLumens;
  })(encodergrpc.CamLumens || {});

  encodergrpc.EventCredentials = (function (EventCredentials) {
    /**
     * Properties of an EventCredentials.
     * @memberof encodergrpc
     * @interface IEventCredentials
     * @property {string|null} [authToken] EventCredentials authToken
     * @property {string|null} [eventUid] EventCredentials eventUid
     * @property {string|null} [custId] EventCredentials custId
     */

    /**
     * Constructs a new EventCredentials.
     * @memberof encodergrpc
     * @classdesc Represents an EventCredentials.
     * @implements IEventCredentials
     * @constructor
     * @param {encodergrpc.IEventCredentials=} [properties] Properties to set
     */
    function EventCredentials(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventCredentials authToken.
     * @member {string} authToken
     * @memberof encodergrpc.EventCredentials
     * @instance
     */
    EventCredentials.prototype.authToken = '';

    /**
     * EventCredentials eventUid.
     * @member {string} eventUid
     * @memberof encodergrpc.EventCredentials
     * @instance
     */
    EventCredentials.prototype.eventUid = '';

    /**
     * EventCredentials custId.
     * @member {string} custId
     * @memberof encodergrpc.EventCredentials
     * @instance
     */
    EventCredentials.prototype.custId = '';

    /**
     * Creates a new EventCredentials instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {encodergrpc.IEventCredentials=} [properties] Properties to set
     * @returns {encodergrpc.EventCredentials} EventCredentials instance
     */
    EventCredentials.create = function create(properties) {
      return new EventCredentials(properties);
    };

    /**
     * Encodes the specified EventCredentials message. Does not implicitly {@link encodergrpc.EventCredentials.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {encodergrpc.IEventCredentials} message EventCredentials message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventCredentials.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.authToken != null &&
        Object.hasOwnProperty.call(message, 'authToken')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.authToken);
      if (
        message.eventUid != null &&
        Object.hasOwnProperty.call(message, 'eventUid')
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.eventUid);
      if (
        message.custId != null &&
        Object.hasOwnProperty.call(message, 'custId')
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.custId);
      return writer;
    };

    /**
     * Encodes the specified EventCredentials message, length delimited. Does not implicitly {@link encodergrpc.EventCredentials.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {encodergrpc.IEventCredentials} message EventCredentials message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventCredentials.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventCredentials message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EventCredentials} EventCredentials
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventCredentials.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EventCredentials();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.authToken = reader.string();
            break;
          case 2:
            message.eventUid = reader.string();
            break;
          case 3:
            message.custId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EventCredentials message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EventCredentials} EventCredentials
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventCredentials.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventCredentials message.
     * @function verify
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventCredentials.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.authToken != null && message.hasOwnProperty('authToken'))
        if (!$util.isString(message.authToken))
          return 'authToken: string expected';
      if (message.eventUid != null && message.hasOwnProperty('eventUid'))
        if (!$util.isString(message.eventUid))
          return 'eventUid: string expected';
      if (message.custId != null && message.hasOwnProperty('custId'))
        if (!$util.isString(message.custId)) return 'custId: string expected';
      return null;
    };

    /**
     * Creates an EventCredentials message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EventCredentials} EventCredentials
     */
    EventCredentials.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EventCredentials) return object;
      var message = new $root.encodergrpc.EventCredentials();
      if (object.authToken != null)
        message.authToken = String(object.authToken);
      if (object.eventUid != null) message.eventUid = String(object.eventUid);
      if (object.custId != null) message.custId = String(object.custId);
      return message;
    };

    /**
     * Creates a plain object from an EventCredentials message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EventCredentials
     * @static
     * @param {encodergrpc.EventCredentials} message EventCredentials
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventCredentials.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.authToken = '';
        object.eventUid = '';
        object.custId = '';
      }
      if (message.authToken != null && message.hasOwnProperty('authToken'))
        object.authToken = message.authToken;
      if (message.eventUid != null && message.hasOwnProperty('eventUid'))
        object.eventUid = message.eventUid;
      if (message.custId != null && message.hasOwnProperty('custId'))
        object.custId = message.custId;
      return object;
    };

    /**
     * Converts this EventCredentials to JSON.
     * @function toJSON
     * @memberof encodergrpc.EventCredentials
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventCredentials.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventCredentials;
  })(encodergrpc.EventCredentials || {});

  encodergrpc.ClientCredentials = (function (ClientCredentials) {
    /**
     * Properties of a ClientCredentials.
     * @memberof encodergrpc
     * @interface IClientCredentials
     * @property {string|null} [clientId] ClientCredentials clientId
     */

    /**
     * Constructs a new ClientCredentials.
     * @memberof encodergrpc
     * @classdesc Represents a ClientCredentials.
     * @implements IClientCredentials
     * @constructor
     * @param {encodergrpc.IClientCredentials=} [properties] Properties to set
     */
    function ClientCredentials(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientCredentials clientId.
     * @member {string} clientId
     * @memberof encodergrpc.ClientCredentials
     * @instance
     */
    ClientCredentials.prototype.clientId = '';

    /**
     * Creates a new ClientCredentials instance using the specified properties.
     * @function create
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {encodergrpc.IClientCredentials=} [properties] Properties to set
     * @returns {encodergrpc.ClientCredentials} ClientCredentials instance
     */
    ClientCredentials.create = function create(properties) {
      return new ClientCredentials(properties);
    };

    /**
     * Encodes the specified ClientCredentials message. Does not implicitly {@link encodergrpc.ClientCredentials.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {encodergrpc.IClientCredentials} message ClientCredentials message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientCredentials.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.clientId != null &&
        Object.hasOwnProperty.call(message, 'clientId')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.clientId);
      return writer;
    };

    /**
     * Encodes the specified ClientCredentials message, length delimited. Does not implicitly {@link encodergrpc.ClientCredentials.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {encodergrpc.IClientCredentials} message ClientCredentials message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientCredentials.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientCredentials message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.ClientCredentials} ClientCredentials
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientCredentials.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.ClientCredentials();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.clientId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ClientCredentials message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.ClientCredentials} ClientCredentials
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientCredentials.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientCredentials message.
     * @function verify
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientCredentials.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.clientId != null && message.hasOwnProperty('clientId'))
        if (!$util.isString(message.clientId))
          return 'clientId: string expected';
      return null;
    };

    /**
     * Creates a ClientCredentials message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.ClientCredentials} ClientCredentials
     */
    ClientCredentials.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.ClientCredentials) return object;
      var message = new $root.encodergrpc.ClientCredentials();
      if (object.clientId != null) message.clientId = String(object.clientId);
      return message;
    };

    /**
     * Creates a plain object from a ClientCredentials message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.ClientCredentials
     * @static
     * @param {encodergrpc.ClientCredentials} message ClientCredentials
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientCredentials.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.clientId = '';
      if (message.clientId != null && message.hasOwnProperty('clientId'))
        object.clientId = message.clientId;
      return object;
    };

    /**
     * Converts this ClientCredentials to JSON.
     * @function toJSON
     * @memberof encodergrpc.ClientCredentials
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientCredentials.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientCredentials;
  })(encodergrpc.ClientCredentials || {});

  encodergrpc.RequestID = (function (RequestID) {
    /**
     * Properties of a RequestID.
     * @memberof encodergrpc
     * @interface IRequestID
     * @property {string|null} [id] RequestID id
     */

    /**
     * Constructs a new RequestID.
     * @memberof encodergrpc
     * @classdesc Represents a RequestID.
     * @implements IRequestID
     * @constructor
     * @param {encodergrpc.IRequestID=} [properties] Properties to set
     */
    function RequestID(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestID id.
     * @member {string} id
     * @memberof encodergrpc.RequestID
     * @instance
     */
    RequestID.prototype.id = '';

    /**
     * Creates a new RequestID instance using the specified properties.
     * @function create
     * @memberof encodergrpc.RequestID
     * @static
     * @param {encodergrpc.IRequestID=} [properties] Properties to set
     * @returns {encodergrpc.RequestID} RequestID instance
     */
    RequestID.create = function create(properties) {
      return new RequestID(properties);
    };

    /**
     * Encodes the specified RequestID message. Does not implicitly {@link encodergrpc.RequestID.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.RequestID
     * @static
     * @param {encodergrpc.IRequestID} message RequestID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestID.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
      return writer;
    };

    /**
     * Encodes the specified RequestID message, length delimited. Does not implicitly {@link encodergrpc.RequestID.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.RequestID
     * @static
     * @param {encodergrpc.IRequestID} message RequestID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestID.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestID message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.RequestID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.RequestID} RequestID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestID.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.RequestID();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a RequestID message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.RequestID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.RequestID} RequestID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestID.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestID message.
     * @function verify
     * @memberof encodergrpc.RequestID
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestID.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.id != null && message.hasOwnProperty('id'))
        if (!$util.isString(message.id)) return 'id: string expected';
      return null;
    };

    /**
     * Creates a RequestID message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.RequestID
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.RequestID} RequestID
     */
    RequestID.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.RequestID) return object;
      var message = new $root.encodergrpc.RequestID();
      if (object.id != null) message.id = String(object.id);
      return message;
    };

    /**
     * Creates a plain object from a RequestID message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.RequestID
     * @static
     * @param {encodergrpc.RequestID} message RequestID
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestID.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.id = '';
      if (message.id != null && message.hasOwnProperty('id'))
        object.id = message.id;
      return object;
    };

    /**
     * Converts this RequestID to JSON.
     * @function toJSON
     * @memberof encodergrpc.RequestID
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestID.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestID;
  })(encodergrpc.RequestID || {});

  encodergrpc.EncoderID = (function (EncoderID) {
    /**
     * Properties of an EncoderID.
     * @memberof encodergrpc
     * @interface IEncoderID
     * @property {string|null} [encoderId] EncoderID encoderId
     */

    /**
     * Constructs a new EncoderID.
     * @memberof encodergrpc
     * @classdesc Represents an EncoderID.
     * @implements IEncoderID
     * @constructor
     * @param {encodergrpc.IEncoderID=} [properties] Properties to set
     */
    function EncoderID(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EncoderID encoderId.
     * @member {string} encoderId
     * @memberof encodergrpc.EncoderID
     * @instance
     */
    EncoderID.prototype.encoderId = '';

    /**
     * Creates a new EncoderID instance using the specified properties.
     * @function create
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {encodergrpc.IEncoderID=} [properties] Properties to set
     * @returns {encodergrpc.EncoderID} EncoderID instance
     */
    EncoderID.create = function create(properties) {
      return new EncoderID(properties);
    };

    /**
     * Encodes the specified EncoderID message. Does not implicitly {@link encodergrpc.EncoderID.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {encodergrpc.IEncoderID} message EncoderID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderID.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.encoderId != null &&
        Object.hasOwnProperty.call(message, 'encoderId')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.encoderId);
      return writer;
    };

    /**
     * Encodes the specified EncoderID message, length delimited. Does not implicitly {@link encodergrpc.EncoderID.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {encodergrpc.IEncoderID} message EncoderID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EncoderID.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EncoderID message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.EncoderID} EncoderID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderID.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.EncoderID();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.encoderId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EncoderID message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.EncoderID} EncoderID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EncoderID.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EncoderID message.
     * @function verify
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EncoderID.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        if (!$util.isString(message.encoderId))
          return 'encoderId: string expected';
      return null;
    };

    /**
     * Creates an EncoderID message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.EncoderID} EncoderID
     */
    EncoderID.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.EncoderID) return object;
      var message = new $root.encodergrpc.EncoderID();
      if (object.encoderId != null)
        message.encoderId = String(object.encoderId);
      return message;
    };

    /**
     * Creates a plain object from an EncoderID message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.EncoderID
     * @static
     * @param {encodergrpc.EncoderID} message EncoderID
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EncoderID.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.encoderId = '';
      if (message.encoderId != null && message.hasOwnProperty('encoderId'))
        object.encoderId = message.encoderId;
      return object;
    };

    /**
     * Converts this EncoderID to JSON.
     * @function toJSON
     * @memberof encodergrpc.EncoderID
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EncoderID.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EncoderID;
  })(encodergrpc.EncoderID || {});

  encodergrpc.CameraID = (function (CameraID) {
    /**
     * Properties of a CameraID.
     * @memberof encodergrpc
     * @interface ICameraID
     * @property {string|null} [cameraId] CameraID cameraId
     */

    /**
     * Constructs a new CameraID.
     * @memberof encodergrpc
     * @classdesc Represents a CameraID.
     * @implements ICameraID
     * @constructor
     * @param {encodergrpc.ICameraID=} [properties] Properties to set
     */
    function CameraID(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * CameraID cameraId.
     * @member {string} cameraId
     * @memberof encodergrpc.CameraID
     * @instance
     */
    CameraID.prototype.cameraId = '';

    /**
     * Creates a new CameraID instance using the specified properties.
     * @function create
     * @memberof encodergrpc.CameraID
     * @static
     * @param {encodergrpc.ICameraID=} [properties] Properties to set
     * @returns {encodergrpc.CameraID} CameraID instance
     */
    CameraID.create = function create(properties) {
      return new CameraID(properties);
    };

    /**
     * Encodes the specified CameraID message. Does not implicitly {@link encodergrpc.CameraID.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.CameraID
     * @static
     * @param {encodergrpc.ICameraID} message CameraID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraID.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.cameraId != null &&
        Object.hasOwnProperty.call(message, 'cameraId')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.cameraId);
      return writer;
    };

    /**
     * Encodes the specified CameraID message, length delimited. Does not implicitly {@link encodergrpc.CameraID.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.CameraID
     * @static
     * @param {encodergrpc.ICameraID} message CameraID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CameraID.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CameraID message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.CameraID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.CameraID} CameraID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraID.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.CameraID();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.cameraId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CameraID message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.CameraID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.CameraID} CameraID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CameraID.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CameraID message.
     * @function verify
     * @memberof encodergrpc.CameraID
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CameraID.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        if (!$util.isString(message.cameraId))
          return 'cameraId: string expected';
      return null;
    };

    /**
     * Creates a CameraID message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.CameraID
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.CameraID} CameraID
     */
    CameraID.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.CameraID) return object;
      var message = new $root.encodergrpc.CameraID();
      if (object.cameraId != null) message.cameraId = String(object.cameraId);
      return message;
    };

    /**
     * Creates a plain object from a CameraID message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.CameraID
     * @static
     * @param {encodergrpc.CameraID} message CameraID
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CameraID.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.cameraId = '';
      if (message.cameraId != null && message.hasOwnProperty('cameraId'))
        object.cameraId = message.cameraId;
      return object;
    };

    /**
     * Converts this CameraID to JSON.
     * @function toJSON
     * @memberof encodergrpc.CameraID
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CameraID.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CameraID;
  })(encodergrpc.CameraID || {});

  encodergrpc.Argument = (function (Argument) {
    /**
     * Properties of an Argument.
     * @memberof encodergrpc
     * @interface IArgument
     * @property {string|null} [argName] Argument argName
     * @property {string|null} [argVal] Argument argVal
     */

    /**
     * Constructs a new Argument.
     * @memberof encodergrpc
     * @classdesc Represents an Argument.
     * @implements IArgument
     * @constructor
     * @param {encodergrpc.IArgument=} [properties] Properties to set
     */
    function Argument(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Argument argName.
     * @member {string} argName
     * @memberof encodergrpc.Argument
     * @instance
     */
    Argument.prototype.argName = '';

    /**
     * Argument argVal.
     * @member {string} argVal
     * @memberof encodergrpc.Argument
     * @instance
     */
    Argument.prototype.argVal = '';

    /**
     * Creates a new Argument instance using the specified properties.
     * @function create
     * @memberof encodergrpc.Argument
     * @static
     * @param {encodergrpc.IArgument=} [properties] Properties to set
     * @returns {encodergrpc.Argument} Argument instance
     */
    Argument.create = function create(properties) {
      return new Argument(properties);
    };

    /**
     * Encodes the specified Argument message. Does not implicitly {@link encodergrpc.Argument.verify|verify} messages.
     * @function encode
     * @memberof encodergrpc.Argument
     * @static
     * @param {encodergrpc.IArgument} message Argument message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Argument.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.argName != null &&
        Object.hasOwnProperty.call(message, 'argName')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.argName);
      if (
        message.argVal != null &&
        Object.hasOwnProperty.call(message, 'argVal')
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.argVal);
      return writer;
    };

    /**
     * Encodes the specified Argument message, length delimited. Does not implicitly {@link encodergrpc.Argument.verify|verify} messages.
     * @function encodeDelimited
     * @memberof encodergrpc.Argument
     * @static
     * @param {encodergrpc.IArgument} message Argument message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Argument.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Argument message from the specified reader or buffer.
     * @function decode
     * @memberof encodergrpc.Argument
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {encodergrpc.Argument} Argument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Argument.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.encodergrpc.Argument();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.argName = reader.string();
            break;
          case 2:
            message.argVal = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Argument message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof encodergrpc.Argument
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {encodergrpc.Argument} Argument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Argument.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Argument message.
     * @function verify
     * @memberof encodergrpc.Argument
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Argument.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.argName != null && message.hasOwnProperty('argName'))
        if (!$util.isString(message.argName)) return 'argName: string expected';
      if (message.argVal != null && message.hasOwnProperty('argVal'))
        if (!$util.isString(message.argVal)) return 'argVal: string expected';
      return null;
    };

    /**
     * Creates an Argument message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof encodergrpc.Argument
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {encodergrpc.Argument} Argument
     */
    Argument.fromObject = function fromObject(object) {
      if (object instanceof $root.encodergrpc.Argument) return object;
      var message = new $root.encodergrpc.Argument();
      if (object.argName != null) message.argName = String(object.argName);
      if (object.argVal != null) message.argVal = String(object.argVal);
      return message;
    };

    /**
     * Creates a plain object from an Argument message. Also converts values to other types if specified.
     * @function toObject
     * @memberof encodergrpc.Argument
     * @static
     * @param {encodergrpc.Argument} message Argument
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Argument.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.argName = '';
        object.argVal = '';
      }
      if (message.argName != null && message.hasOwnProperty('argName'))
        object.argName = message.argName;
      if (message.argVal != null && message.hasOwnProperty('argVal'))
        object.argVal = message.argVal;
      return object;
    };

    /**
     * Converts this Argument to JSON.
     * @function toJSON
     * @memberof encodergrpc.Argument
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Argument.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Argument;
  })(encodergrpc.Argument || {});

  return encodergrpc;
})($root.encodergrpc || {});

export default $root;
