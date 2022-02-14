import * as Long from "long";

/** Namespace encodergrpc. */
export namespace encodergrpc {

    /** Represents an EventManagerService */
    class EventManagerService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EventManagerService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EventManagerService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EventManagerService;

        /**
         * Calls EncoderCommand.
         * @param request EncoderCommandRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EncoderCommandResponse
         */
        public encoderCommand(request: encodergrpc.IEncoderCommandRequest, callback: encodergrpc.EventManagerService.EncoderCommandCallback): void;

        /**
         * Calls EncoderCommand.
         * @param request EncoderCommandRequest message or plain object
         * @returns Promise
         */
        public encoderCommand(request: encodergrpc.IEncoderCommandRequest): Promise<encodergrpc.IEncoderCommandResponse>;

        /**
         * Calls CameraCommand.
         * @param request CameraCommandRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CameraCommandResponse
         */
        public cameraCommand(request: encodergrpc.ICameraCommandRequest, callback: encodergrpc.EventManagerService.CameraCommandCallback): void;

        /**
         * Calls CameraCommand.
         * @param request CameraCommandRequest message or plain object
         * @returns Promise
         */
        public cameraCommand(request: encodergrpc.ICameraCommandRequest): Promise<encodergrpc.ICameraCommandResponse>;

        /**
         * Calls ManageVideoStream.
         * @param request ManageVideoStreamRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ManageVideoStreamResponse
         */
        public manageVideoStream(request: encodergrpc.IManageVideoStreamRequest, callback: encodergrpc.EventManagerService.ManageVideoStreamCallback): void;

        /**
         * Calls ManageVideoStream.
         * @param request ManageVideoStreamRequest message or plain object
         * @returns Promise
         */
        public manageVideoStream(request: encodergrpc.IManageVideoStreamRequest): Promise<encodergrpc.IManageVideoStreamResponse>;

        /**
         * Calls SetEncoderConfig.
         * @param request SetEncoderConfigRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SetEncoderConfigResponse
         */
        public setEncoderConfig(request: encodergrpc.ISetEncoderConfigRequest, callback: encodergrpc.EventManagerService.SetEncoderConfigCallback): void;

        /**
         * Calls SetEncoderConfig.
         * @param request SetEncoderConfigRequest message or plain object
         * @returns Promise
         */
        public setEncoderConfig(request: encodergrpc.ISetEncoderConfigRequest): Promise<encodergrpc.ISetEncoderConfigResponse>;

        /**
         * Calls GetEncoderConfig.
         * @param request GetEncoderConfigRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEncoderConfigResponse
         */
        public getEncoderConfig(request: encodergrpc.IGetEncoderConfigRequest, callback: encodergrpc.EventManagerService.GetEncoderConfigCallback): void;

        /**
         * Calls GetEncoderConfig.
         * @param request GetEncoderConfigRequest message or plain object
         * @returns Promise
         */
        public getEncoderConfig(request: encodergrpc.IGetEncoderConfigRequest): Promise<encodergrpc.IGetEncoderConfigResponse>;

        /**
         * Calls GetEncoderConfigAll.
         * @param request GetEncoderConfigAllRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEncoderConfigAllResponse
         */
        public getEncoderConfigAll(request: encodergrpc.IGetEncoderConfigAllRequest, callback: encodergrpc.EventManagerService.GetEncoderConfigAllCallback): void;

        /**
         * Calls GetEncoderConfigAll.
         * @param request GetEncoderConfigAllRequest message or plain object
         * @returns Promise
         */
        public getEncoderConfigAll(request: encodergrpc.IGetEncoderConfigAllRequest): Promise<encodergrpc.IGetEncoderConfigAllResponse>;

        /**
         * Calls ManageEvent.
         * @param request ManageEventRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ManageEventResponse
         */
        public manageEvent(request: encodergrpc.IManageEventRequest, callback: encodergrpc.EventManagerService.ManageEventCallback): void;

        /**
         * Calls ManageEvent.
         * @param request ManageEventRequest message or plain object
         * @returns Promise
         */
        public manageEvent(request: encodergrpc.IManageEventRequest): Promise<encodergrpc.IManageEventResponse>;

        /**
         * Calls EncoderConnect.
         * @param request EncoderConnectRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EncoderConnectResponse
         */
        public encoderConnect(request: encodergrpc.IEncoderConnectRequest, callback: encodergrpc.EventManagerService.EncoderConnectCallback): void;

        /**
         * Calls EncoderConnect.
         * @param request EncoderConnectRequest message or plain object
         * @returns Promise
         */
        public encoderConnect(request: encodergrpc.IEncoderConnectRequest): Promise<encodergrpc.IEncoderConnectResponse>;

        /**
         * Calls EncoderStream.
         * @param request EncoderStreamClient message or plain object
         * @param callback Node-style callback called with the error, if any, and EncoderStreamServer
         */
        public encoderStream(request: encodergrpc.IEncoderStreamClient, callback: encodergrpc.EventManagerService.EncoderStreamCallback): void;

        /**
         * Calls EncoderStream.
         * @param request EncoderStreamClient message or plain object
         * @returns Promise
         */
        public encoderStream(request: encodergrpc.IEncoderStreamClient): Promise<encodergrpc.IEncoderStreamServer>;
    }

    namespace EventManagerService {

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#encoderCommand}.
         * @param error Error, if any
         * @param [response] EncoderCommandResponse
         */
        type EncoderCommandCallback = (error: (Error|null), response?: encodergrpc.IEncoderCommandResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#cameraCommand}.
         * @param error Error, if any
         * @param [response] CameraCommandResponse
         */
        type CameraCommandCallback = (error: (Error|null), response?: encodergrpc.ICameraCommandResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#manageVideoStream}.
         * @param error Error, if any
         * @param [response] ManageVideoStreamResponse
         */
        type ManageVideoStreamCallback = (error: (Error|null), response?: encodergrpc.IManageVideoStreamResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#setEncoderConfig}.
         * @param error Error, if any
         * @param [response] SetEncoderConfigResponse
         */
        type SetEncoderConfigCallback = (error: (Error|null), response?: encodergrpc.ISetEncoderConfigResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#getEncoderConfig}.
         * @param error Error, if any
         * @param [response] GetEncoderConfigResponse
         */
        type GetEncoderConfigCallback = (error: (Error|null), response?: encodergrpc.IGetEncoderConfigResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#getEncoderConfigAll}.
         * @param error Error, if any
         * @param [response] GetEncoderConfigAllResponse
         */
        type GetEncoderConfigAllCallback = (error: (Error|null), response?: encodergrpc.IGetEncoderConfigAllResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#manageEvent}.
         * @param error Error, if any
         * @param [response] ManageEventResponse
         */
        type ManageEventCallback = (error: (Error|null), response?: encodergrpc.IManageEventResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#encoderConnect}.
         * @param error Error, if any
         * @param [response] EncoderConnectResponse
         */
        type EncoderConnectCallback = (error: (Error|null), response?: encodergrpc.IEncoderConnectResponse) => void;

        /**
         * Callback as used by {@link encodergrpc.EventManagerService#encoderStream}.
         * @param error Error, if any
         * @param [response] EncoderStreamServer
         */
        type EncoderStreamCallback = (error: (Error|null), response?: encodergrpc.IEncoderStreamServer) => void;
    }

    /** Properties of an EncoderConnectRequest. */
    interface IEncoderConnectRequest {

        /** EncoderConnectRequest creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** EncoderConnectRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** EncoderConnectRequest configHash */
        configHash?: (string|null);
    }

    /** Represents an EncoderConnectRequest. */
    class EncoderConnectRequest implements IEncoderConnectRequest {

        /**
         * Constructs a new EncoderConnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderConnectRequest);

        /** EncoderConnectRequest creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** EncoderConnectRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** EncoderConnectRequest configHash. */
        public configHash: string;

        /**
         * Creates a new EncoderConnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderConnectRequest instance
         */
        public static create(properties?: encodergrpc.IEncoderConnectRequest): encodergrpc.EncoderConnectRequest;

        /**
         * Encodes the specified EncoderConnectRequest message. Does not implicitly {@link encodergrpc.EncoderConnectRequest.verify|verify} messages.
         * @param message EncoderConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderConnectRequest message, length delimited. Does not implicitly {@link encodergrpc.EncoderConnectRequest.verify|verify} messages.
         * @param message EncoderConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderConnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderConnectRequest;

        /**
         * Decodes an EncoderConnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderConnectRequest;

        /**
         * Verifies an EncoderConnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderConnectRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderConnectRequest;

        /**
         * Creates a plain object from an EncoderConnectRequest message. Also converts values to other types if specified.
         * @param message EncoderConnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderConnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderConnectResponse. */
    interface IEncoderConnectResponse {

        /** EncoderConnectResponse status */
        status?: (number|null);
    }

    /** Represents an EncoderConnectResponse. */
    class EncoderConnectResponse implements IEncoderConnectResponse {

        /**
         * Constructs a new EncoderConnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderConnectResponse);

        /** EncoderConnectResponse status. */
        public status: number;

        /**
         * Creates a new EncoderConnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderConnectResponse instance
         */
        public static create(properties?: encodergrpc.IEncoderConnectResponse): encodergrpc.EncoderConnectResponse;

        /**
         * Encodes the specified EncoderConnectResponse message. Does not implicitly {@link encodergrpc.EncoderConnectResponse.verify|verify} messages.
         * @param message EncoderConnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderConnectResponse message, length delimited. Does not implicitly {@link encodergrpc.EncoderConnectResponse.verify|verify} messages.
         * @param message EncoderConnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderConnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderConnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderConnectResponse;

        /**
         * Decodes an EncoderConnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderConnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderConnectResponse;

        /**
         * Verifies an EncoderConnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderConnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderConnectResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderConnectResponse;

        /**
         * Creates a plain object from an EncoderConnectResponse message. Also converts values to other types if specified.
         * @param message EncoderConnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderConnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderStreamClient. */
    interface IEncoderStreamClient {

        /** EncoderStreamClient status */
        status?: (number|null);

        /** EncoderStreamClient command */
        command?: (string|null);

        /** EncoderStreamClient payload */
        payload?: (Uint8Array|null);
    }

    /** Represents an EncoderStreamClient. */
    class EncoderStreamClient implements IEncoderStreamClient {

        /**
         * Constructs a new EncoderStreamClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderStreamClient);

        /** EncoderStreamClient status. */
        public status: number;

        /** EncoderStreamClient command. */
        public command: string;

        /** EncoderStreamClient payload. */
        public payload: Uint8Array;

        /**
         * Creates a new EncoderStreamClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderStreamClient instance
         */
        public static create(properties?: encodergrpc.IEncoderStreamClient): encodergrpc.EncoderStreamClient;

        /**
         * Encodes the specified EncoderStreamClient message. Does not implicitly {@link encodergrpc.EncoderStreamClient.verify|verify} messages.
         * @param message EncoderStreamClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderStreamClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderStreamClient message, length delimited. Does not implicitly {@link encodergrpc.EncoderStreamClient.verify|verify} messages.
         * @param message EncoderStreamClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderStreamClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderStreamClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderStreamClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderStreamClient;

        /**
         * Decodes an EncoderStreamClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderStreamClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderStreamClient;

        /**
         * Verifies an EncoderStreamClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderStreamClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderStreamClient
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderStreamClient;

        /**
         * Creates a plain object from an EncoderStreamClient message. Also converts values to other types if specified.
         * @param message EncoderStreamClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderStreamClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderStreamClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderStreamServer. */
    interface IEncoderStreamServer {

        /** EncoderStreamServer status */
        status?: (number|null);

        /** EncoderStreamServer command */
        command?: (string|null);

        /** EncoderStreamServer args */
        args?: (encodergrpc.IArgument[]|null);
    }

    /** Represents an EncoderStreamServer. */
    class EncoderStreamServer implements IEncoderStreamServer {

        /**
         * Constructs a new EncoderStreamServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderStreamServer);

        /** EncoderStreamServer status. */
        public status: number;

        /** EncoderStreamServer command. */
        public command: string;

        /** EncoderStreamServer args. */
        public args: encodergrpc.IArgument[];

        /**
         * Creates a new EncoderStreamServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderStreamServer instance
         */
        public static create(properties?: encodergrpc.IEncoderStreamServer): encodergrpc.EncoderStreamServer;

        /**
         * Encodes the specified EncoderStreamServer message. Does not implicitly {@link encodergrpc.EncoderStreamServer.verify|verify} messages.
         * @param message EncoderStreamServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderStreamServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderStreamServer message, length delimited. Does not implicitly {@link encodergrpc.EncoderStreamServer.verify|verify} messages.
         * @param message EncoderStreamServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderStreamServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderStreamServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderStreamServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderStreamServer;

        /**
         * Decodes an EncoderStreamServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderStreamServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderStreamServer;

        /**
         * Verifies an EncoderStreamServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderStreamServer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderStreamServer
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderStreamServer;

        /**
         * Creates a plain object from an EncoderStreamServer message. Also converts values to other types if specified.
         * @param message EncoderStreamServer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderStreamServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderStreamServer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderCommandRequest. */
    interface IEncoderCommandRequest {

        /** EncoderCommandRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** EncoderCommandRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** EncoderCommandRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** EncoderCommandRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** EncoderCommandRequest command */
        command?: (string|null);

        /** EncoderCommandRequest args */
        args?: (encodergrpc.IArgument[]|null);

        /** EncoderCommandRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents an EncoderCommandRequest. */
    class EncoderCommandRequest implements IEncoderCommandRequest {

        /**
         * Constructs a new EncoderCommandRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderCommandRequest);

        /** EncoderCommandRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** EncoderCommandRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** EncoderCommandRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** EncoderCommandRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** EncoderCommandRequest command. */
        public command: string;

        /** EncoderCommandRequest args. */
        public args: encodergrpc.IArgument[];

        /** EncoderCommandRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new EncoderCommandRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderCommandRequest instance
         */
        public static create(properties?: encodergrpc.IEncoderCommandRequest): encodergrpc.EncoderCommandRequest;

        /**
         * Encodes the specified EncoderCommandRequest message. Does not implicitly {@link encodergrpc.EncoderCommandRequest.verify|verify} messages.
         * @param message EncoderCommandRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderCommandRequest message, length delimited. Does not implicitly {@link encodergrpc.EncoderCommandRequest.verify|verify} messages.
         * @param message EncoderCommandRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderCommandRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderCommandRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderCommandRequest;

        /**
         * Decodes an EncoderCommandRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderCommandRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderCommandRequest;

        /**
         * Verifies an EncoderCommandRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderCommandRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderCommandRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderCommandRequest;

        /**
         * Creates a plain object from an EncoderCommandRequest message. Also converts values to other types if specified.
         * @param message EncoderCommandRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderCommandRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CameraCommandRequest. */
    interface ICameraCommandRequest {

        /** CameraCommandRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** CameraCommandRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** CameraCommandRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** CameraCommandRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** CameraCommandRequest cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** CameraCommandRequest command */
        command?: (string|null);

        /** CameraCommandRequest args */
        args?: (encodergrpc.IArgument[]|null);

        /** CameraCommandRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a CameraCommandRequest. */
    class CameraCommandRequest implements ICameraCommandRequest {

        /**
         * Constructs a new CameraCommandRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ICameraCommandRequest);

        /** CameraCommandRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** CameraCommandRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** CameraCommandRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** CameraCommandRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** CameraCommandRequest cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** CameraCommandRequest command. */
        public command: string;

        /** CameraCommandRequest args. */
        public args: encodergrpc.IArgument[];

        /** CameraCommandRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new CameraCommandRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CameraCommandRequest instance
         */
        public static create(properties?: encodergrpc.ICameraCommandRequest): encodergrpc.CameraCommandRequest;

        /**
         * Encodes the specified CameraCommandRequest message. Does not implicitly {@link encodergrpc.CameraCommandRequest.verify|verify} messages.
         * @param message CameraCommandRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ICameraCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CameraCommandRequest message, length delimited. Does not implicitly {@link encodergrpc.CameraCommandRequest.verify|verify} messages.
         * @param message CameraCommandRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ICameraCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CameraCommandRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CameraCommandRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.CameraCommandRequest;

        /**
         * Decodes a CameraCommandRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CameraCommandRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.CameraCommandRequest;

        /**
         * Verifies a CameraCommandRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CameraCommandRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CameraCommandRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.CameraCommandRequest;

        /**
         * Creates a plain object from a CameraCommandRequest message. Also converts values to other types if specified.
         * @param message CameraCommandRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.CameraCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CameraCommandRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ManageVideoStreamRequest. */
    interface IManageVideoStreamRequest {

        /** ManageVideoStreamRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** ManageVideoStreamRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** ManageVideoStreamRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** ManageVideoStreamRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** ManageVideoStreamRequest cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** ManageVideoStreamRequest command */
        command?: (string|null);

        /** ManageVideoStreamRequest args */
        args?: (encodergrpc.IArgument[]|null);

        /** ManageVideoStreamRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a ManageVideoStreamRequest. */
    class ManageVideoStreamRequest implements IManageVideoStreamRequest {

        /**
         * Constructs a new ManageVideoStreamRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IManageVideoStreamRequest);

        /** ManageVideoStreamRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** ManageVideoStreamRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** ManageVideoStreamRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** ManageVideoStreamRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** ManageVideoStreamRequest cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** ManageVideoStreamRequest command. */
        public command: string;

        /** ManageVideoStreamRequest args. */
        public args: encodergrpc.IArgument[];

        /** ManageVideoStreamRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new ManageVideoStreamRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageVideoStreamRequest instance
         */
        public static create(properties?: encodergrpc.IManageVideoStreamRequest): encodergrpc.ManageVideoStreamRequest;

        /**
         * Encodes the specified ManageVideoStreamRequest message. Does not implicitly {@link encodergrpc.ManageVideoStreamRequest.verify|verify} messages.
         * @param message ManageVideoStreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IManageVideoStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManageVideoStreamRequest message, length delimited. Does not implicitly {@link encodergrpc.ManageVideoStreamRequest.verify|verify} messages.
         * @param message ManageVideoStreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IManageVideoStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManageVideoStreamRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManageVideoStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.ManageVideoStreamRequest;

        /**
         * Decodes a ManageVideoStreamRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManageVideoStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.ManageVideoStreamRequest;

        /**
         * Verifies a ManageVideoStreamRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManageVideoStreamRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageVideoStreamRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.ManageVideoStreamRequest;

        /**
         * Creates a plain object from a ManageVideoStreamRequest message. Also converts values to other types if specified.
         * @param message ManageVideoStreamRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.ManageVideoStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManageVideoStreamRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetEncoderConfigRequest. */
    interface ISetEncoderConfigRequest {

        /** SetEncoderConfigRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** SetEncoderConfigRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** SetEncoderConfigRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** SetEncoderConfigRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** SetEncoderConfigRequest configKey */
        configKey?: (number|null);

        /** SetEncoderConfigRequest valInt */
        valInt?: (number|Long|null);

        /** SetEncoderConfigRequest valStr */
        valStr?: (string|null);

        /** SetEncoderConfigRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a SetEncoderConfigRequest. */
    class SetEncoderConfigRequest implements ISetEncoderConfigRequest {

        /**
         * Constructs a new SetEncoderConfigRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ISetEncoderConfigRequest);

        /** SetEncoderConfigRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** SetEncoderConfigRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** SetEncoderConfigRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** SetEncoderConfigRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** SetEncoderConfigRequest configKey. */
        public configKey: number;

        /** SetEncoderConfigRequest valInt. */
        public valInt: (number|Long);

        /** SetEncoderConfigRequest valStr. */
        public valStr: string;

        /** SetEncoderConfigRequest timeUs. */
        public timeUs: (number|Long);

        /** SetEncoderConfigRequest configVal. */
        public configVal?: ("valInt"|"valStr");

        /**
         * Creates a new SetEncoderConfigRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetEncoderConfigRequest instance
         */
        public static create(properties?: encodergrpc.ISetEncoderConfigRequest): encodergrpc.SetEncoderConfigRequest;

        /**
         * Encodes the specified SetEncoderConfigRequest message. Does not implicitly {@link encodergrpc.SetEncoderConfigRequest.verify|verify} messages.
         * @param message SetEncoderConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ISetEncoderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetEncoderConfigRequest message, length delimited. Does not implicitly {@link encodergrpc.SetEncoderConfigRequest.verify|verify} messages.
         * @param message SetEncoderConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ISetEncoderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetEncoderConfigRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetEncoderConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.SetEncoderConfigRequest;

        /**
         * Decodes a SetEncoderConfigRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetEncoderConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.SetEncoderConfigRequest;

        /**
         * Verifies a SetEncoderConfigRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetEncoderConfigRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetEncoderConfigRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.SetEncoderConfigRequest;

        /**
         * Creates a plain object from a SetEncoderConfigRequest message. Also converts values to other types if specified.
         * @param message SetEncoderConfigRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.SetEncoderConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetEncoderConfigRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventConfigAllRequest. */
    interface IGetEventConfigAllRequest {

        /** GetEventConfigAllRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEventConfigAllRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEventConfigAllRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetEventConfigAllRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEventConfigAllRequest configKey */
        configKey?: (number|null);

        /** GetEventConfigAllRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetEventConfigAllRequest. */
    class GetEventConfigAllRequest implements IGetEventConfigAllRequest {

        /**
         * Constructs a new GetEventConfigAllRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetEventConfigAllRequest);

        /** GetEventConfigAllRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEventConfigAllRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEventConfigAllRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetEventConfigAllRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEventConfigAllRequest configKey. */
        public configKey: number;

        /** GetEventConfigAllRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetEventConfigAllRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventConfigAllRequest instance
         */
        public static create(properties?: encodergrpc.IGetEventConfigAllRequest): encodergrpc.GetEventConfigAllRequest;

        /**
         * Encodes the specified GetEventConfigAllRequest message. Does not implicitly {@link encodergrpc.GetEventConfigAllRequest.verify|verify} messages.
         * @param message GetEventConfigAllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetEventConfigAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventConfigAllRequest message, length delimited. Does not implicitly {@link encodergrpc.GetEventConfigAllRequest.verify|verify} messages.
         * @param message GetEventConfigAllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetEventConfigAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventConfigAllRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventConfigAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetEventConfigAllRequest;

        /**
         * Decodes a GetEventConfigAllRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventConfigAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetEventConfigAllRequest;

        /**
         * Verifies a GetEventConfigAllRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventConfigAllRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventConfigAllRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetEventConfigAllRequest;

        /**
         * Creates a plain object from a GetEventConfigAllRequest message. Also converts values to other types if specified.
         * @param message GetEventConfigAllRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetEventConfigAllRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventConfigAllRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEncoderConfigRequest. */
    interface IGetEncoderConfigRequest {

        /** GetEncoderConfigRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEncoderConfigRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigRequest configKey */
        configKey?: (number|null);

        /** GetEncoderConfigRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetEncoderConfigRequest. */
    class GetEncoderConfigRequest implements IGetEncoderConfigRequest {

        /**
         * Constructs a new GetEncoderConfigRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetEncoderConfigRequest);

        /** GetEncoderConfigRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEncoderConfigRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigRequest configKey. */
        public configKey: number;

        /** GetEncoderConfigRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetEncoderConfigRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEncoderConfigRequest instance
         */
        public static create(properties?: encodergrpc.IGetEncoderConfigRequest): encodergrpc.GetEncoderConfigRequest;

        /**
         * Encodes the specified GetEncoderConfigRequest message. Does not implicitly {@link encodergrpc.GetEncoderConfigRequest.verify|verify} messages.
         * @param message GetEncoderConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetEncoderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEncoderConfigRequest message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigRequest.verify|verify} messages.
         * @param message GetEncoderConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetEncoderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEncoderConfigRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEncoderConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetEncoderConfigRequest;

        /**
         * Decodes a GetEncoderConfigRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEncoderConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetEncoderConfigRequest;

        /**
         * Verifies a GetEncoderConfigRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEncoderConfigRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEncoderConfigRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetEncoderConfigRequest;

        /**
         * Creates a plain object from a GetEncoderConfigRequest message. Also converts values to other types if specified.
         * @param message GetEncoderConfigRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetEncoderConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEncoderConfigRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEncoderConfigAllRequest. */
    interface IGetEncoderConfigAllRequest {

        /** GetEncoderConfigAllRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigAllRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEncoderConfigAllRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigAllRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigAllRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetEncoderConfigAllRequest. */
    class GetEncoderConfigAllRequest implements IGetEncoderConfigAllRequest {

        /**
         * Constructs a new GetEncoderConfigAllRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetEncoderConfigAllRequest);

        /** GetEncoderConfigAllRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigAllRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEncoderConfigAllRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigAllRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigAllRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetEncoderConfigAllRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEncoderConfigAllRequest instance
         */
        public static create(properties?: encodergrpc.IGetEncoderConfigAllRequest): encodergrpc.GetEncoderConfigAllRequest;

        /**
         * Encodes the specified GetEncoderConfigAllRequest message. Does not implicitly {@link encodergrpc.GetEncoderConfigAllRequest.verify|verify} messages.
         * @param message GetEncoderConfigAllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetEncoderConfigAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEncoderConfigAllRequest message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigAllRequest.verify|verify} messages.
         * @param message GetEncoderConfigAllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetEncoderConfigAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEncoderConfigAllRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEncoderConfigAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetEncoderConfigAllRequest;

        /**
         * Decodes a GetEncoderConfigAllRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEncoderConfigAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetEncoderConfigAllRequest;

        /**
         * Verifies a GetEncoderConfigAllRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEncoderConfigAllRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEncoderConfigAllRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetEncoderConfigAllRequest;

        /**
         * Creates a plain object from a GetEncoderConfigAllRequest message. Also converts values to other types if specified.
         * @param message GetEncoderConfigAllRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetEncoderConfigAllRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEncoderConfigAllRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCameraConfigRequest. */
    interface IGetCameraConfigRequest {

        /** GetCameraConfigRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetCameraConfigRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigRequest cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigRequest configKey */
        configKey?: (number|null);

        /** GetCameraConfigRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetCameraConfigRequest. */
    class GetCameraConfigRequest implements IGetCameraConfigRequest {

        /**
         * Constructs a new GetCameraConfigRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetCameraConfigRequest);

        /** GetCameraConfigRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetCameraConfigRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigRequest cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigRequest configKey. */
        public configKey: number;

        /** GetCameraConfigRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetCameraConfigRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCameraConfigRequest instance
         */
        public static create(properties?: encodergrpc.IGetCameraConfigRequest): encodergrpc.GetCameraConfigRequest;

        /**
         * Encodes the specified GetCameraConfigRequest message. Does not implicitly {@link encodergrpc.GetCameraConfigRequest.verify|verify} messages.
         * @param message GetCameraConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetCameraConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCameraConfigRequest message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigRequest.verify|verify} messages.
         * @param message GetCameraConfigRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetCameraConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCameraConfigRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCameraConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetCameraConfigRequest;

        /**
         * Decodes a GetCameraConfigRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCameraConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetCameraConfigRequest;

        /**
         * Verifies a GetCameraConfigRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCameraConfigRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCameraConfigRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetCameraConfigRequest;

        /**
         * Creates a plain object from a GetCameraConfigRequest message. Also converts values to other types if specified.
         * @param message GetCameraConfigRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetCameraConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCameraConfigRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCameraConfigAllRequest. */
    interface IGetCameraConfigAllRequest {

        /** GetCameraConfigAllRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigAllRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetCameraConfigAllRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigAllRequest encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigAllRequest cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigAllRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetCameraConfigAllRequest. */
    class GetCameraConfigAllRequest implements IGetCameraConfigAllRequest {

        /**
         * Constructs a new GetCameraConfigAllRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetCameraConfigAllRequest);

        /** GetCameraConfigAllRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigAllRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetCameraConfigAllRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigAllRequest encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigAllRequest cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigAllRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetCameraConfigAllRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCameraConfigAllRequest instance
         */
        public static create(properties?: encodergrpc.IGetCameraConfigAllRequest): encodergrpc.GetCameraConfigAllRequest;

        /**
         * Encodes the specified GetCameraConfigAllRequest message. Does not implicitly {@link encodergrpc.GetCameraConfigAllRequest.verify|verify} messages.
         * @param message GetCameraConfigAllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetCameraConfigAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCameraConfigAllRequest message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigAllRequest.verify|verify} messages.
         * @param message GetCameraConfigAllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetCameraConfigAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCameraConfigAllRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCameraConfigAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetCameraConfigAllRequest;

        /**
         * Decodes a GetCameraConfigAllRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCameraConfigAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetCameraConfigAllRequest;

        /**
         * Verifies a GetCameraConfigAllRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCameraConfigAllRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCameraConfigAllRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetCameraConfigAllRequest;

        /**
         * Creates a plain object from a GetCameraConfigAllRequest message. Also converts values to other types if specified.
         * @param message GetCameraConfigAllRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetCameraConfigAllRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCameraConfigAllRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ManageEventRequest. */
    interface IManageEventRequest {

        /** ManageEventRequest eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** ManageEventRequest clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** ManageEventRequest requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** ManageEventRequest command */
        command?: (string|null);

        /** ManageEventRequest args */
        args?: (encodergrpc.IArgument[]|null);

        /** ManageEventRequest timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a ManageEventRequest. */
    class ManageEventRequest implements IManageEventRequest {

        /**
         * Constructs a new ManageEventRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IManageEventRequest);

        /** ManageEventRequest eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** ManageEventRequest clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** ManageEventRequest requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** ManageEventRequest command. */
        public command: string;

        /** ManageEventRequest args. */
        public args: encodergrpc.IArgument[];

        /** ManageEventRequest timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new ManageEventRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageEventRequest instance
         */
        public static create(properties?: encodergrpc.IManageEventRequest): encodergrpc.ManageEventRequest;

        /**
         * Encodes the specified ManageEventRequest message. Does not implicitly {@link encodergrpc.ManageEventRequest.verify|verify} messages.
         * @param message ManageEventRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IManageEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManageEventRequest message, length delimited. Does not implicitly {@link encodergrpc.ManageEventRequest.verify|verify} messages.
         * @param message ManageEventRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IManageEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManageEventRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManageEventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.ManageEventRequest;

        /**
         * Decodes a ManageEventRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManageEventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.ManageEventRequest;

        /**
         * Verifies a ManageEventRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManageEventRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageEventRequest
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.ManageEventRequest;

        /**
         * Creates a plain object from a ManageEventRequest message. Also converts values to other types if specified.
         * @param message ManageEventRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.ManageEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManageEventRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderCommandResponse. */
    interface IEncoderCommandResponse {

        /** EncoderCommandResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** EncoderCommandResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** EncoderCommandResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** EncoderCommandResponse status */
        status?: (number|null);

        /** EncoderCommandResponse command */
        command?: (string|null);

        /** EncoderCommandResponse response */
        response?: (Uint8Array|null);

        /** EncoderCommandResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents an EncoderCommandResponse. */
    class EncoderCommandResponse implements IEncoderCommandResponse {

        /**
         * Constructs a new EncoderCommandResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderCommandResponse);

        /** EncoderCommandResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** EncoderCommandResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** EncoderCommandResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** EncoderCommandResponse status. */
        public status: number;

        /** EncoderCommandResponse command. */
        public command: string;

        /** EncoderCommandResponse response. */
        public response: Uint8Array;

        /** EncoderCommandResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new EncoderCommandResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderCommandResponse instance
         */
        public static create(properties?: encodergrpc.IEncoderCommandResponse): encodergrpc.EncoderCommandResponse;

        /**
         * Encodes the specified EncoderCommandResponse message. Does not implicitly {@link encodergrpc.EncoderCommandResponse.verify|verify} messages.
         * @param message EncoderCommandResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderCommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderCommandResponse message, length delimited. Does not implicitly {@link encodergrpc.EncoderCommandResponse.verify|verify} messages.
         * @param message EncoderCommandResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderCommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderCommandResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderCommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderCommandResponse;

        /**
         * Decodes an EncoderCommandResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderCommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderCommandResponse;

        /**
         * Verifies an EncoderCommandResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderCommandResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderCommandResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderCommandResponse;

        /**
         * Creates a plain object from an EncoderCommandResponse message. Also converts values to other types if specified.
         * @param message EncoderCommandResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderCommandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderCommandResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CameraCommandResponse. */
    interface ICameraCommandResponse {

        /** CameraCommandResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** CameraCommandResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** CameraCommandResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** CameraCommandResponse cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** CameraCommandResponse status */
        status?: (number|null);

        /** CameraCommandResponse command */
        command?: (string|null);

        /** CameraCommandResponse response */
        response?: (Uint8Array|null);

        /** CameraCommandResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a CameraCommandResponse. */
    class CameraCommandResponse implements ICameraCommandResponse {

        /**
         * Constructs a new CameraCommandResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ICameraCommandResponse);

        /** CameraCommandResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** CameraCommandResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** CameraCommandResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** CameraCommandResponse cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** CameraCommandResponse status. */
        public status: number;

        /** CameraCommandResponse command. */
        public command: string;

        /** CameraCommandResponse response. */
        public response: Uint8Array;

        /** CameraCommandResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new CameraCommandResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CameraCommandResponse instance
         */
        public static create(properties?: encodergrpc.ICameraCommandResponse): encodergrpc.CameraCommandResponse;

        /**
         * Encodes the specified CameraCommandResponse message. Does not implicitly {@link encodergrpc.CameraCommandResponse.verify|verify} messages.
         * @param message CameraCommandResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ICameraCommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CameraCommandResponse message, length delimited. Does not implicitly {@link encodergrpc.CameraCommandResponse.verify|verify} messages.
         * @param message CameraCommandResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ICameraCommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CameraCommandResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CameraCommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.CameraCommandResponse;

        /**
         * Decodes a CameraCommandResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CameraCommandResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.CameraCommandResponse;

        /**
         * Verifies a CameraCommandResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CameraCommandResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CameraCommandResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.CameraCommandResponse;

        /**
         * Creates a plain object from a CameraCommandResponse message. Also converts values to other types if specified.
         * @param message CameraCommandResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.CameraCommandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CameraCommandResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ManageVideoStreamResponse. */
    interface IManageVideoStreamResponse {

        /** ManageVideoStreamResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** ManageVideoStreamResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** ManageVideoStreamResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** ManageVideoStreamResponse status */
        status?: (number|null);

        /** ManageVideoStreamResponse command */
        command?: (string|null);

        /** ManageVideoStreamResponse response */
        response?: (Uint8Array|null);

        /** ManageVideoStreamResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a ManageVideoStreamResponse. */
    class ManageVideoStreamResponse implements IManageVideoStreamResponse {

        /**
         * Constructs a new ManageVideoStreamResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IManageVideoStreamResponse);

        /** ManageVideoStreamResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** ManageVideoStreamResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** ManageVideoStreamResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** ManageVideoStreamResponse status. */
        public status: number;

        /** ManageVideoStreamResponse command. */
        public command: string;

        /** ManageVideoStreamResponse response. */
        public response: Uint8Array;

        /** ManageVideoStreamResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new ManageVideoStreamResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageVideoStreamResponse instance
         */
        public static create(properties?: encodergrpc.IManageVideoStreamResponse): encodergrpc.ManageVideoStreamResponse;

        /**
         * Encodes the specified ManageVideoStreamResponse message. Does not implicitly {@link encodergrpc.ManageVideoStreamResponse.verify|verify} messages.
         * @param message ManageVideoStreamResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IManageVideoStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManageVideoStreamResponse message, length delimited. Does not implicitly {@link encodergrpc.ManageVideoStreamResponse.verify|verify} messages.
         * @param message ManageVideoStreamResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IManageVideoStreamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManageVideoStreamResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManageVideoStreamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.ManageVideoStreamResponse;

        /**
         * Decodes a ManageVideoStreamResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManageVideoStreamResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.ManageVideoStreamResponse;

        /**
         * Verifies a ManageVideoStreamResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManageVideoStreamResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageVideoStreamResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.ManageVideoStreamResponse;

        /**
         * Creates a plain object from a ManageVideoStreamResponse message. Also converts values to other types if specified.
         * @param message ManageVideoStreamResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.ManageVideoStreamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManageVideoStreamResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventConfigAllResponse. */
    interface IGetEventConfigAllResponse {

        /** GetEventConfigAllResponse eventCreds */
        eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEventConfigAllResponse clientCreds */
        clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEventConfigAllResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetEventConfigAllResponse eventConfig */
        eventConfig?: (encodergrpc.IEventConfig|null);

        /** GetEventConfigAllResponse configKey */
        configKey?: (number|null);

        /** GetEventConfigAllResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetEventConfigAllResponse. */
    class GetEventConfigAllResponse implements IGetEventConfigAllResponse {

        /**
         * Constructs a new GetEventConfigAllResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetEventConfigAllResponse);

        /** GetEventConfigAllResponse eventCreds. */
        public eventCreds?: (encodergrpc.IEventCredentials|null);

        /** GetEventConfigAllResponse clientCreds. */
        public clientCreds?: (encodergrpc.IClientCredentials|null);

        /** GetEventConfigAllResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetEventConfigAllResponse eventConfig. */
        public eventConfig?: (encodergrpc.IEventConfig|null);

        /** GetEventConfigAllResponse configKey. */
        public configKey: number;

        /** GetEventConfigAllResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetEventConfigAllResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventConfigAllResponse instance
         */
        public static create(properties?: encodergrpc.IGetEventConfigAllResponse): encodergrpc.GetEventConfigAllResponse;

        /**
         * Encodes the specified GetEventConfigAllResponse message. Does not implicitly {@link encodergrpc.GetEventConfigAllResponse.verify|verify} messages.
         * @param message GetEventConfigAllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetEventConfigAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventConfigAllResponse message, length delimited. Does not implicitly {@link encodergrpc.GetEventConfigAllResponse.verify|verify} messages.
         * @param message GetEventConfigAllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetEventConfigAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventConfigAllResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventConfigAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetEventConfigAllResponse;

        /**
         * Decodes a GetEventConfigAllResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventConfigAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetEventConfigAllResponse;

        /**
         * Verifies a GetEventConfigAllResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventConfigAllResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventConfigAllResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetEventConfigAllResponse;

        /**
         * Creates a plain object from a GetEventConfigAllResponse message. Also converts values to other types if specified.
         * @param message GetEventConfigAllResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetEventConfigAllResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventConfigAllResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetEncoderConfigResponse. */
    interface ISetEncoderConfigResponse {

        /** SetEncoderConfigResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** SetEncoderConfigResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** SetEncoderConfigResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** SetEncoderConfigResponse status */
        status?: (number|null);

        /** SetEncoderConfigResponse configKey */
        configKey?: (number|null);

        /** SetEncoderConfigResponse configVal */
        configVal?: (Uint8Array|null);

        /** SetEncoderConfigResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a SetEncoderConfigResponse. */
    class SetEncoderConfigResponse implements ISetEncoderConfigResponse {

        /**
         * Constructs a new SetEncoderConfigResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ISetEncoderConfigResponse);

        /** SetEncoderConfigResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** SetEncoderConfigResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** SetEncoderConfigResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** SetEncoderConfigResponse status. */
        public status: number;

        /** SetEncoderConfigResponse configKey. */
        public configKey: number;

        /** SetEncoderConfigResponse configVal. */
        public configVal: Uint8Array;

        /** SetEncoderConfigResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new SetEncoderConfigResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetEncoderConfigResponse instance
         */
        public static create(properties?: encodergrpc.ISetEncoderConfigResponse): encodergrpc.SetEncoderConfigResponse;

        /**
         * Encodes the specified SetEncoderConfigResponse message. Does not implicitly {@link encodergrpc.SetEncoderConfigResponse.verify|verify} messages.
         * @param message SetEncoderConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ISetEncoderConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetEncoderConfigResponse message, length delimited. Does not implicitly {@link encodergrpc.SetEncoderConfigResponse.verify|verify} messages.
         * @param message SetEncoderConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ISetEncoderConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetEncoderConfigResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetEncoderConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.SetEncoderConfigResponse;

        /**
         * Decodes a SetEncoderConfigResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetEncoderConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.SetEncoderConfigResponse;

        /**
         * Verifies a SetEncoderConfigResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetEncoderConfigResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetEncoderConfigResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.SetEncoderConfigResponse;

        /**
         * Creates a plain object from a SetEncoderConfigResponse message. Also converts values to other types if specified.
         * @param message SetEncoderConfigResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.SetEncoderConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetEncoderConfigResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEncoderConfigResponse. */
    interface IGetEncoderConfigResponse {

        /** GetEncoderConfigResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigResponse configKey */
        configKey?: (number|null);

        /** GetEncoderConfigResponse configVal */
        configVal?: (Uint8Array|null);

        /** GetEncoderConfigResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetEncoderConfigResponse. */
    class GetEncoderConfigResponse implements IGetEncoderConfigResponse {

        /**
         * Constructs a new GetEncoderConfigResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetEncoderConfigResponse);

        /** GetEncoderConfigResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigResponse configKey. */
        public configKey: number;

        /** GetEncoderConfigResponse configVal. */
        public configVal: Uint8Array;

        /** GetEncoderConfigResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetEncoderConfigResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEncoderConfigResponse instance
         */
        public static create(properties?: encodergrpc.IGetEncoderConfigResponse): encodergrpc.GetEncoderConfigResponse;

        /**
         * Encodes the specified GetEncoderConfigResponse message. Does not implicitly {@link encodergrpc.GetEncoderConfigResponse.verify|verify} messages.
         * @param message GetEncoderConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetEncoderConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEncoderConfigResponse message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigResponse.verify|verify} messages.
         * @param message GetEncoderConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetEncoderConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEncoderConfigResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEncoderConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetEncoderConfigResponse;

        /**
         * Decodes a GetEncoderConfigResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEncoderConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetEncoderConfigResponse;

        /**
         * Verifies a GetEncoderConfigResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEncoderConfigResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEncoderConfigResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetEncoderConfigResponse;

        /**
         * Creates a plain object from a GetEncoderConfigResponse message. Also converts values to other types if specified.
         * @param message GetEncoderConfigResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetEncoderConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEncoderConfigResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEncoderConfigAllResponse. */
    interface IGetEncoderConfigAllResponse {

        /** GetEncoderConfigAllResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigAllResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigAllResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigAllResponse encoderConfig */
        encoderConfig?: (encodergrpc.IEncoderConfig|null);

        /** GetEncoderConfigAllResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetEncoderConfigAllResponse. */
    class GetEncoderConfigAllResponse implements IGetEncoderConfigAllResponse {

        /**
         * Constructs a new GetEncoderConfigAllResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetEncoderConfigAllResponse);

        /** GetEncoderConfigAllResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** GetEncoderConfigAllResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetEncoderConfigAllResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetEncoderConfigAllResponse encoderConfig. */
        public encoderConfig?: (encodergrpc.IEncoderConfig|null);

        /** GetEncoderConfigAllResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetEncoderConfigAllResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEncoderConfigAllResponse instance
         */
        public static create(properties?: encodergrpc.IGetEncoderConfigAllResponse): encodergrpc.GetEncoderConfigAllResponse;

        /**
         * Encodes the specified GetEncoderConfigAllResponse message. Does not implicitly {@link encodergrpc.GetEncoderConfigAllResponse.verify|verify} messages.
         * @param message GetEncoderConfigAllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetEncoderConfigAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEncoderConfigAllResponse message, length delimited. Does not implicitly {@link encodergrpc.GetEncoderConfigAllResponse.verify|verify} messages.
         * @param message GetEncoderConfigAllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetEncoderConfigAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEncoderConfigAllResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEncoderConfigAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetEncoderConfigAllResponse;

        /**
         * Decodes a GetEncoderConfigAllResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEncoderConfigAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetEncoderConfigAllResponse;

        /**
         * Verifies a GetEncoderConfigAllResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEncoderConfigAllResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEncoderConfigAllResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetEncoderConfigAllResponse;

        /**
         * Creates a plain object from a GetEncoderConfigAllResponse message. Also converts values to other types if specified.
         * @param message GetEncoderConfigAllResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetEncoderConfigAllResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEncoderConfigAllResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCameraConfigResponse. */
    interface IGetCameraConfigResponse {

        /** GetCameraConfigResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigResponse cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigResponse configKey */
        configKey?: (number|null);

        /** GetCameraConfigResponse configVal */
        configVal?: (Uint8Array|null);

        /** GetCameraConfigResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetCameraConfigResponse. */
    class GetCameraConfigResponse implements IGetCameraConfigResponse {

        /**
         * Constructs a new GetCameraConfigResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetCameraConfigResponse);

        /** GetCameraConfigResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigResponse cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigResponse configKey. */
        public configKey: number;

        /** GetCameraConfigResponse configVal. */
        public configVal: Uint8Array;

        /** GetCameraConfigResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetCameraConfigResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCameraConfigResponse instance
         */
        public static create(properties?: encodergrpc.IGetCameraConfigResponse): encodergrpc.GetCameraConfigResponse;

        /**
         * Encodes the specified GetCameraConfigResponse message. Does not implicitly {@link encodergrpc.GetCameraConfigResponse.verify|verify} messages.
         * @param message GetCameraConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetCameraConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCameraConfigResponse message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigResponse.verify|verify} messages.
         * @param message GetCameraConfigResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetCameraConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCameraConfigResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCameraConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetCameraConfigResponse;

        /**
         * Decodes a GetCameraConfigResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCameraConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetCameraConfigResponse;

        /**
         * Verifies a GetCameraConfigResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCameraConfigResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCameraConfigResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetCameraConfigResponse;

        /**
         * Creates a plain object from a GetCameraConfigResponse message. Also converts values to other types if specified.
         * @param message GetCameraConfigResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetCameraConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCameraConfigResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCameraConfigAllResponse. */
    interface IGetCameraConfigAllResponse {

        /** GetCameraConfigAllResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigAllResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigAllResponse encoderId */
        encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigAllResponse cameraId */
        cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigAllResponse cameraConfig */
        cameraConfig?: (encodergrpc.ICameraConfig|null);

        /** GetCameraConfigAllResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a GetCameraConfigAllResponse. */
    class GetCameraConfigAllResponse implements IGetCameraConfigAllResponse {

        /**
         * Constructs a new GetCameraConfigAllResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IGetCameraConfigAllResponse);

        /** GetCameraConfigAllResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** GetCameraConfigAllResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** GetCameraConfigAllResponse encoderId. */
        public encoderId?: (encodergrpc.IEncoderID|null);

        /** GetCameraConfigAllResponse cameraId. */
        public cameraId?: (encodergrpc.ICameraID|null);

        /** GetCameraConfigAllResponse cameraConfig. */
        public cameraConfig?: (encodergrpc.ICameraConfig|null);

        /** GetCameraConfigAllResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new GetCameraConfigAllResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCameraConfigAllResponse instance
         */
        public static create(properties?: encodergrpc.IGetCameraConfigAllResponse): encodergrpc.GetCameraConfigAllResponse;

        /**
         * Encodes the specified GetCameraConfigAllResponse message. Does not implicitly {@link encodergrpc.GetCameraConfigAllResponse.verify|verify} messages.
         * @param message GetCameraConfigAllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IGetCameraConfigAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCameraConfigAllResponse message, length delimited. Does not implicitly {@link encodergrpc.GetCameraConfigAllResponse.verify|verify} messages.
         * @param message GetCameraConfigAllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IGetCameraConfigAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCameraConfigAllResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCameraConfigAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.GetCameraConfigAllResponse;

        /**
         * Decodes a GetCameraConfigAllResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCameraConfigAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.GetCameraConfigAllResponse;

        /**
         * Verifies a GetCameraConfigAllResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCameraConfigAllResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCameraConfigAllResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.GetCameraConfigAllResponse;

        /**
         * Creates a plain object from a GetCameraConfigAllResponse message. Also converts values to other types if specified.
         * @param message GetCameraConfigAllResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.GetCameraConfigAllResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCameraConfigAllResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ManageEventResponse. */
    interface IManageEventResponse {

        /** ManageEventResponse creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** ManageEventResponse requestId */
        requestId?: (encodergrpc.IRequestID|null);

        /** ManageEventResponse status */
        status?: (number|null);

        /** ManageEventResponse command */
        command?: (string|null);

        /** ManageEventResponse response */
        response?: (Uint8Array|null);

        /** ManageEventResponse timeUs */
        timeUs?: (number|Long|null);
    }

    /** Represents a ManageEventResponse. */
    class ManageEventResponse implements IManageEventResponse {

        /**
         * Constructs a new ManageEventResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IManageEventResponse);

        /** ManageEventResponse creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** ManageEventResponse requestId. */
        public requestId?: (encodergrpc.IRequestID|null);

        /** ManageEventResponse status. */
        public status: number;

        /** ManageEventResponse command. */
        public command: string;

        /** ManageEventResponse response. */
        public response: Uint8Array;

        /** ManageEventResponse timeUs. */
        public timeUs: (number|Long);

        /**
         * Creates a new ManageEventResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageEventResponse instance
         */
        public static create(properties?: encodergrpc.IManageEventResponse): encodergrpc.ManageEventResponse;

        /**
         * Encodes the specified ManageEventResponse message. Does not implicitly {@link encodergrpc.ManageEventResponse.verify|verify} messages.
         * @param message ManageEventResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IManageEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManageEventResponse message, length delimited. Does not implicitly {@link encodergrpc.ManageEventResponse.verify|verify} messages.
         * @param message ManageEventResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IManageEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManageEventResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManageEventResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.ManageEventResponse;

        /**
         * Decodes a ManageEventResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManageEventResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.ManageEventResponse;

        /**
         * Verifies a ManageEventResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManageEventResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageEventResponse
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.ManageEventResponse;

        /**
         * Creates a plain object from a ManageEventResponse message. Also converts values to other types if specified.
         * @param message ManageEventResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.ManageEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManageEventResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventConfig. */
    interface IEventConfig {

        /** EventConfig creds */
        creds?: (encodergrpc.IEventCredentials|null);

        /** EventConfig state */
        state?: (string|null);

        /** EventConfig eventStart */
        eventStart?: (number|Long|null);

        /** EventConfig eventStop */
        eventStop?: (number|Long|null);

        /** EventConfig location */
        location?: (string|null);

        /** EventConfig room */
        room?: (string|null);

        /** EventConfig operators */
        operators?: (encodergrpc.IOperator[]|null);

        /** EventConfig encoders */
        encoders?: (encodergrpc.IEncoderConfig[]|null);
    }

    /** Represents an EventConfig. */
    class EventConfig implements IEventConfig {

        /**
         * Constructs a new EventConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEventConfig);

        /** EventConfig creds. */
        public creds?: (encodergrpc.IEventCredentials|null);

        /** EventConfig state. */
        public state: string;

        /** EventConfig eventStart. */
        public eventStart: (number|Long);

        /** EventConfig eventStop. */
        public eventStop: (number|Long);

        /** EventConfig location. */
        public location: string;

        /** EventConfig room. */
        public room: string;

        /** EventConfig operators. */
        public operators: encodergrpc.IOperator[];

        /** EventConfig encoders. */
        public encoders: encodergrpc.IEncoderConfig[];

        /**
         * Creates a new EventConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventConfig instance
         */
        public static create(properties?: encodergrpc.IEventConfig): encodergrpc.EventConfig;

        /**
         * Encodes the specified EventConfig message. Does not implicitly {@link encodergrpc.EventConfig.verify|verify} messages.
         * @param message EventConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEventConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventConfig message, length delimited. Does not implicitly {@link encodergrpc.EventConfig.verify|verify} messages.
         * @param message EventConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEventConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EventConfig;

        /**
         * Decodes an EventConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EventConfig;

        /**
         * Verifies an EventConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventConfig
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EventConfig;

        /**
         * Creates a plain object from an EventConfig message. Also converts values to other types if specified.
         * @param message EventConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EventConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Operator. */
    interface IOperator {

        /** Operator operatorId */
        operatorId?: (string|null);

        /** Operator role */
        role?: (string|null);

        /** Operator signedIn */
        signedIn?: (number|Long|null);

        /** Operator numCommands */
        numCommands?: (number|null);
    }

    /** Represents an Operator. */
    class Operator implements IOperator {

        /**
         * Constructs a new Operator.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IOperator);

        /** Operator operatorId. */
        public operatorId: string;

        /** Operator role. */
        public role: string;

        /** Operator signedIn. */
        public signedIn: (number|Long);

        /** Operator numCommands. */
        public numCommands: number;

        /**
         * Creates a new Operator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operator instance
         */
        public static create(properties?: encodergrpc.IOperator): encodergrpc.Operator;

        /**
         * Encodes the specified Operator message. Does not implicitly {@link encodergrpc.Operator.verify|verify} messages.
         * @param message Operator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IOperator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Operator message, length delimited. Does not implicitly {@link encodergrpc.Operator.verify|verify} messages.
         * @param message Operator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IOperator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Operator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Operator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.Operator;

        /**
         * Decodes an Operator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Operator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.Operator;

        /**
         * Verifies an Operator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Operator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operator
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.Operator;

        /**
         * Creates a plain object from an Operator message. Also converts values to other types if specified.
         * @param message Operator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.Operator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Operator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderConfig. */
    interface IEncoderConfig {

        /** EncoderConfig encoderId */
        encoderId?: (string|null);

        /** EncoderConfig encoderLocation */
        encoderLocation?: (string|null);

        /** EncoderConfig cameras */
        cameras?: (encodergrpc.ICameraConfig[]|null);

        /** EncoderConfig audio */
        audio?: (encodergrpc.IAudio|null);
    }

    /** Represents an EncoderConfig. */
    class EncoderConfig implements IEncoderConfig {

        /**
         * Constructs a new EncoderConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderConfig);

        /** EncoderConfig encoderId. */
        public encoderId: string;

        /** EncoderConfig encoderLocation. */
        public encoderLocation: string;

        /** EncoderConfig cameras. */
        public cameras: encodergrpc.ICameraConfig[];

        /** EncoderConfig audio. */
        public audio?: (encodergrpc.IAudio|null);

        /**
         * Creates a new EncoderConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderConfig instance
         */
        public static create(properties?: encodergrpc.IEncoderConfig): encodergrpc.EncoderConfig;

        /**
         * Encodes the specified EncoderConfig message. Does not implicitly {@link encodergrpc.EncoderConfig.verify|verify} messages.
         * @param message EncoderConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderConfig message, length delimited. Does not implicitly {@link encodergrpc.EncoderConfig.verify|verify} messages.
         * @param message EncoderConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderConfig;

        /**
         * Decodes an EncoderConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderConfig;

        /**
         * Verifies an EncoderConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderConfig
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderConfig;

        /**
         * Creates a plain object from an EncoderConfig message. Also converts values to other types if specified.
         * @param message EncoderConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CameraConfig. */
    interface ICameraConfig {

        /** CameraConfig cameraId */
        cameraId?: (string|null);

        /** CameraConfig cameraType */
        cameraType?: (string|null);

        /** CameraConfig winsafeProperties */
        winsafeProperties?: (encodergrpc.ICamWinSafe|null);

        /** CameraConfig lumensProperties */
        lumensProperties?: (encodergrpc.ICamLumens|null);
    }

    /** Represents a CameraConfig. */
    class CameraConfig implements ICameraConfig {

        /**
         * Constructs a new CameraConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ICameraConfig);

        /** CameraConfig cameraId. */
        public cameraId: string;

        /** CameraConfig cameraType. */
        public cameraType: string;

        /** CameraConfig winsafeProperties. */
        public winsafeProperties?: (encodergrpc.ICamWinSafe|null);

        /** CameraConfig lumensProperties. */
        public lumensProperties?: (encodergrpc.ICamLumens|null);

        /** CameraConfig model. */
        public model?: ("winsafeProperties"|"lumensProperties");

        /**
         * Creates a new CameraConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CameraConfig instance
         */
        public static create(properties?: encodergrpc.ICameraConfig): encodergrpc.CameraConfig;

        /**
         * Encodes the specified CameraConfig message. Does not implicitly {@link encodergrpc.CameraConfig.verify|verify} messages.
         * @param message CameraConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ICameraConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CameraConfig message, length delimited. Does not implicitly {@link encodergrpc.CameraConfig.verify|verify} messages.
         * @param message CameraConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ICameraConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CameraConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CameraConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.CameraConfig;

        /**
         * Decodes a CameraConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CameraConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.CameraConfig;

        /**
         * Verifies a CameraConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CameraConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CameraConfig
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.CameraConfig;

        /**
         * Creates a plain object from a CameraConfig message. Also converts values to other types if specified.
         * @param message CameraConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.CameraConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CameraConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Audio. */
    interface IAudio {
    }

    /** Represents an Audio. */
    class Audio implements IAudio {

        /**
         * Constructs a new Audio.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IAudio);

        /**
         * Creates a new Audio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Audio instance
         */
        public static create(properties?: encodergrpc.IAudio): encodergrpc.Audio;

        /**
         * Encodes the specified Audio message. Does not implicitly {@link encodergrpc.Audio.verify|verify} messages.
         * @param message Audio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Audio message, length delimited. Does not implicitly {@link encodergrpc.Audio.verify|verify} messages.
         * @param message Audio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Audio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Audio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.Audio;

        /**
         * Decodes an Audio message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Audio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.Audio;

        /**
         * Verifies an Audio message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Audio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Audio
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.Audio;

        /**
         * Creates a plain object from an Audio message. Also converts values to other types if specified.
         * @param message Audio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.Audio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Audio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CamWinSafe. */
    interface ICamWinSafe {
    }

    /** Represents a CamWinSafe. */
    class CamWinSafe implements ICamWinSafe {

        /**
         * Constructs a new CamWinSafe.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ICamWinSafe);

        /**
         * Creates a new CamWinSafe instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CamWinSafe instance
         */
        public static create(properties?: encodergrpc.ICamWinSafe): encodergrpc.CamWinSafe;

        /**
         * Encodes the specified CamWinSafe message. Does not implicitly {@link encodergrpc.CamWinSafe.verify|verify} messages.
         * @param message CamWinSafe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ICamWinSafe, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CamWinSafe message, length delimited. Does not implicitly {@link encodergrpc.CamWinSafe.verify|verify} messages.
         * @param message CamWinSafe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ICamWinSafe, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CamWinSafe message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CamWinSafe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.CamWinSafe;

        /**
         * Decodes a CamWinSafe message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CamWinSafe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.CamWinSafe;

        /**
         * Verifies a CamWinSafe message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CamWinSafe message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CamWinSafe
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.CamWinSafe;

        /**
         * Creates a plain object from a CamWinSafe message. Also converts values to other types if specified.
         * @param message CamWinSafe
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.CamWinSafe, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CamWinSafe to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CamLumens. */
    interface ICamLumens {
    }

    /** Represents a CamLumens. */
    class CamLumens implements ICamLumens {

        /**
         * Constructs a new CamLumens.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ICamLumens);

        /**
         * Creates a new CamLumens instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CamLumens instance
         */
        public static create(properties?: encodergrpc.ICamLumens): encodergrpc.CamLumens;

        /**
         * Encodes the specified CamLumens message. Does not implicitly {@link encodergrpc.CamLumens.verify|verify} messages.
         * @param message CamLumens message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ICamLumens, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CamLumens message, length delimited. Does not implicitly {@link encodergrpc.CamLumens.verify|verify} messages.
         * @param message CamLumens message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ICamLumens, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CamLumens message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CamLumens
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.CamLumens;

        /**
         * Decodes a CamLumens message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CamLumens
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.CamLumens;

        /**
         * Verifies a CamLumens message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CamLumens message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CamLumens
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.CamLumens;

        /**
         * Creates a plain object from a CamLumens message. Also converts values to other types if specified.
         * @param message CamLumens
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.CamLumens, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CamLumens to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventCredentials. */
    interface IEventCredentials {

        /** EventCredentials authToken */
        authToken?: (string|null);

        /** EventCredentials eventUid */
        eventUid?: (string|null);

        /** EventCredentials custId */
        custId?: (string|null);
    }

    /** Represents an EventCredentials. */
    class EventCredentials implements IEventCredentials {

        /**
         * Constructs a new EventCredentials.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEventCredentials);

        /** EventCredentials authToken. */
        public authToken: string;

        /** EventCredentials eventUid. */
        public eventUid: string;

        /** EventCredentials custId. */
        public custId: string;

        /**
         * Creates a new EventCredentials instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventCredentials instance
         */
        public static create(properties?: encodergrpc.IEventCredentials): encodergrpc.EventCredentials;

        /**
         * Encodes the specified EventCredentials message. Does not implicitly {@link encodergrpc.EventCredentials.verify|verify} messages.
         * @param message EventCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEventCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventCredentials message, length delimited. Does not implicitly {@link encodergrpc.EventCredentials.verify|verify} messages.
         * @param message EventCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEventCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventCredentials message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EventCredentials;

        /**
         * Decodes an EventCredentials message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EventCredentials;

        /**
         * Verifies an EventCredentials message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventCredentials message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventCredentials
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EventCredentials;

        /**
         * Creates a plain object from an EventCredentials message. Also converts values to other types if specified.
         * @param message EventCredentials
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EventCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventCredentials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientCredentials. */
    interface IClientCredentials {

        /** ClientCredentials clientId */
        clientId?: (string|null);
    }

    /** Represents a ClientCredentials. */
    class ClientCredentials implements IClientCredentials {

        /**
         * Constructs a new ClientCredentials.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IClientCredentials);

        /** ClientCredentials clientId. */
        public clientId: string;

        /**
         * Creates a new ClientCredentials instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientCredentials instance
         */
        public static create(properties?: encodergrpc.IClientCredentials): encodergrpc.ClientCredentials;

        /**
         * Encodes the specified ClientCredentials message. Does not implicitly {@link encodergrpc.ClientCredentials.verify|verify} messages.
         * @param message ClientCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IClientCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientCredentials message, length delimited. Does not implicitly {@link encodergrpc.ClientCredentials.verify|verify} messages.
         * @param message ClientCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IClientCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientCredentials message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.ClientCredentials;

        /**
         * Decodes a ClientCredentials message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.ClientCredentials;

        /**
         * Verifies a ClientCredentials message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientCredentials message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientCredentials
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.ClientCredentials;

        /**
         * Creates a plain object from a ClientCredentials message. Also converts values to other types if specified.
         * @param message ClientCredentials
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.ClientCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientCredentials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestID. */
    interface IRequestID {

        /** RequestID id */
        id?: (string|null);
    }

    /** Represents a RequestID. */
    class RequestID implements IRequestID {

        /**
         * Constructs a new RequestID.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IRequestID);

        /** RequestID id. */
        public id: string;

        /**
         * Creates a new RequestID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestID instance
         */
        public static create(properties?: encodergrpc.IRequestID): encodergrpc.RequestID;

        /**
         * Encodes the specified RequestID message. Does not implicitly {@link encodergrpc.RequestID.verify|verify} messages.
         * @param message RequestID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IRequestID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestID message, length delimited. Does not implicitly {@link encodergrpc.RequestID.verify|verify} messages.
         * @param message RequestID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IRequestID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.RequestID;

        /**
         * Decodes a RequestID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.RequestID;

        /**
         * Verifies a RequestID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestID
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.RequestID;

        /**
         * Creates a plain object from a RequestID message. Also converts values to other types if specified.
         * @param message RequestID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.RequestID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EncoderID. */
    interface IEncoderID {

        /** EncoderID encoderId */
        encoderId?: (string|null);
    }

    /** Represents an EncoderID. */
    class EncoderID implements IEncoderID {

        /**
         * Constructs a new EncoderID.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IEncoderID);

        /** EncoderID encoderId. */
        public encoderId: string;

        /**
         * Creates a new EncoderID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncoderID instance
         */
        public static create(properties?: encodergrpc.IEncoderID): encodergrpc.EncoderID;

        /**
         * Encodes the specified EncoderID message. Does not implicitly {@link encodergrpc.EncoderID.verify|verify} messages.
         * @param message EncoderID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IEncoderID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncoderID message, length delimited. Does not implicitly {@link encodergrpc.EncoderID.verify|verify} messages.
         * @param message EncoderID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IEncoderID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncoderID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncoderID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.EncoderID;

        /**
         * Decodes an EncoderID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncoderID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.EncoderID;

        /**
         * Verifies an EncoderID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncoderID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncoderID
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.EncoderID;

        /**
         * Creates a plain object from an EncoderID message. Also converts values to other types if specified.
         * @param message EncoderID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.EncoderID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncoderID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CameraID. */
    interface ICameraID {

        /** CameraID cameraId */
        cameraId?: (string|null);
    }

    /** Represents a CameraID. */
    class CameraID implements ICameraID {

        /**
         * Constructs a new CameraID.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.ICameraID);

        /** CameraID cameraId. */
        public cameraId: string;

        /**
         * Creates a new CameraID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CameraID instance
         */
        public static create(properties?: encodergrpc.ICameraID): encodergrpc.CameraID;

        /**
         * Encodes the specified CameraID message. Does not implicitly {@link encodergrpc.CameraID.verify|verify} messages.
         * @param message CameraID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.ICameraID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CameraID message, length delimited. Does not implicitly {@link encodergrpc.CameraID.verify|verify} messages.
         * @param message CameraID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.ICameraID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CameraID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CameraID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.CameraID;

        /**
         * Decodes a CameraID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CameraID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.CameraID;

        /**
         * Verifies a CameraID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CameraID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CameraID
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.CameraID;

        /**
         * Creates a plain object from a CameraID message. Also converts values to other types if specified.
         * @param message CameraID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.CameraID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CameraID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Argument. */
    interface IArgument {

        /** Argument argName */
        argName?: (string|null);

        /** Argument argVal */
        argVal?: (string|null);
    }

    /** Represents an Argument. */
    class Argument implements IArgument {

        /**
         * Constructs a new Argument.
         * @param [properties] Properties to set
         */
        constructor(properties?: encodergrpc.IArgument);

        /** Argument argName. */
        public argName: string;

        /** Argument argVal. */
        public argVal: string;

        /**
         * Creates a new Argument instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Argument instance
         */
        public static create(properties?: encodergrpc.IArgument): encodergrpc.Argument;

        /**
         * Encodes the specified Argument message. Does not implicitly {@link encodergrpc.Argument.verify|verify} messages.
         * @param message Argument message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: encodergrpc.IArgument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Argument message, length delimited. Does not implicitly {@link encodergrpc.Argument.verify|verify} messages.
         * @param message Argument message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: encodergrpc.IArgument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Argument message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Argument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): encodergrpc.Argument;

        /**
         * Decodes an Argument message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Argument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): encodergrpc.Argument;

        /**
         * Verifies an Argument message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Argument message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Argument
         */
        public static fromObject(object: { [k: string]: any }): encodergrpc.Argument;

        /**
         * Creates a plain object from an Argument message. Also converts values to other types if specified.
         * @param message Argument
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: encodergrpc.Argument, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Argument to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
