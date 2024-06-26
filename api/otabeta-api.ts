/* tslint:disable */
/* eslint-disable */
/**
 * Fireblocks API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: support@fireblocks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import { convertToFireblocksResponse } from "../response/fireblocksResponse";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { assertParamExistsAndNotEmpty } from '../utils/validation_utils';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { GetOtaStatusResponse } from '../models';
// @ts-ignore
import { SetOtaStatusRequest } from '../models';
// @ts-ignore
import { SetOtaStatusResponse } from '../models';
/**
 * OTABetaApi - axios parameter creator
 * @export
 */
export const OTABetaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns current OTA status
         * @summary Returns current OTA status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOtaStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/management/ota`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enable or disable transactions to OTA
         * @summary Enable or disable transactions to OTA
         * @param {SetOtaStatusRequest} setOtaStatusRequest 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setOtaStatus: async (setOtaStatusRequest: SetOtaStatusRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExists('setOtaStatus', 'setOtaStatusRequest', setOtaStatusRequest)
            const localVarPath = `/management/ota`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(setOtaStatusRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OTABetaApi - functional programming interface
 * @export
 */
export const OTABetaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OTABetaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns current OTA status
         * @summary Returns current OTA status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOtaStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetOtaStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOtaStatus(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['OTABetaApi.getOtaStatus']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Enable or disable transactions to OTA
         * @summary Enable or disable transactions to OTA
         * @param {SetOtaStatusRequest} setOtaStatusRequest 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setOtaStatus(setOtaStatusRequest: SetOtaStatusRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SetOtaStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setOtaStatus(setOtaStatusRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['OTABetaApi.setOtaStatus']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * OTABetaApi - factory interface
 * @export
 */
export const OTABetaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OTABetaApiFp(configuration)
    return {
        /**
         * Returns current OTA status
         * @summary Returns current OTA status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOtaStatus(options?: RawAxiosRequestConfig): AxiosPromise<GetOtaStatusResponse> {
            return localVarFp.getOtaStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Enable or disable transactions to OTA
         * @summary Enable or disable transactions to OTA
         * @param {OTABetaApiSetOtaStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setOtaStatus(requestParameters: OTABetaApiSetOtaStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<SetOtaStatusResponse> {
            return localVarFp.setOtaStatus(requestParameters.setOtaStatusRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for setOtaStatus operation in OTABetaApi.
 * @export
 * @interface OTABetaApiSetOtaStatusRequest
 */
export interface OTABetaApiSetOtaStatusRequest {
    /**
     * 
     * @type {SetOtaStatusRequest}
     * @memberof OTABetaApiSetOtaStatus
     */
    readonly setOtaStatusRequest: SetOtaStatusRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof OTABetaApiSetOtaStatus
     */
    readonly idempotencyKey?: string
}

/**
 * OTABetaApi - object-oriented interface
 * @export
 * @class OTABetaApi
 * @extends {BaseAPI}
 */
export class OTABetaApi extends BaseAPI {
    /**
     * Returns current OTA status
     * @summary Returns current OTA status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OTABetaApi
     */
    public getOtaStatus() {
        return OTABetaApiFp(this.configuration).getOtaStatus().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Enable or disable transactions to OTA
     * @summary Enable or disable transactions to OTA
     * @param {OTABetaApiSetOtaStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OTABetaApi
     */
    public setOtaStatus(requestParameters: OTABetaApiSetOtaStatusRequest) {
        return OTABetaApiFp(this.configuration).setOtaStatus(requestParameters.setOtaStatusRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

