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

import {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {Configuration} from "../configuration";
import {HttpClient} from "../utils/http-client";

// Some imports not used depending on template conditions
// @ts-ignore
import { assertParamExists, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

// @ts-ignore
import { ResendWebhooksForTransactionRequest } from '../models';
// @ts-ignore
import { ResendWebhooksResponse } from '../models';



    /**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Resends all failed webhook notifications.
         * @summary Resend failed webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendWebhooks: async (): Promise<AxiosRequestConfig> => {
            const localVarPath = `/webhooks/resend`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'POST'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
        /**
         * Resends failed webhook notifications for a transaction by ID.
         * @summary Resend failed webhooks for a transaction by ID
         * @param {ResendWebhooksForTransactionRequest} resendWebhooksForTransactionRequest 
         * @param {string} txId The ID of the transaction for webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendWebhooksForTransaction: async (resendWebhooksForTransactionRequest: ResendWebhooksForTransactionRequest, txId: string, ): Promise<AxiosRequestConfig> => {
            // verify required parameter 'resendWebhooksForTransactionRequest' is not null or undefined
            assertParamExists('resendWebhooksForTransaction', 'resendWebhooksForTransactionRequest', resendWebhooksForTransactionRequest)
            // verify required parameter 'txId' is not null or undefined
            assertParamExists('resendWebhooksForTransaction', 'txId', txId)
            const localVarPath = `/webhooks/resend/{txId}`
                .replace(`{${"txId"}}`, encodeURIComponent(String(txId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'POST'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            localVarRequestOptions.data = resendWebhooksForTransactionRequest as any;

            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(httpClient: HttpClient) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(httpClient.configuration)
    return {
        /**
         * Resends all failed webhook notifications.
         * @summary Resend failed webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendWebhooks(): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResendWebhooksResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendWebhooks();
            return httpClient.request(localVarAxiosArgs);
        },
        /**
         * Resends failed webhook notifications for a transaction by ID.
         * @summary Resend failed webhooks for a transaction by ID
         * @param {ResendWebhooksForTransactionRequest} resendWebhooksForTransactionRequest 
         * @param {string} txId The ID of the transaction for webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendWebhooksForTransaction(resendWebhooksForTransactionRequest: ResendWebhooksForTransactionRequest, txId: string, ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendWebhooksForTransaction(resendWebhooksForTransactionRequest, txId, );
            return httpClient.request(localVarAxiosArgs);
        },
    }
};

/**
 * Request parameters for resendWebhooksForTransaction operation in WebhooksApi.
 * @export
 * @interface WebhooksApiResendWebhooksForTransactionRequest
 */
export interface WebhooksApiResendWebhooksForTransactionRequest {
    /**
     * 
     * @type {ResendWebhooksForTransactionRequest}
     * @memberof WebhooksApiResendWebhooksForTransaction
     */
    readonly resendWebhooksForTransactionRequest: ResendWebhooksForTransactionRequest

    /**
     * The ID of the transaction for webhooks
     * @type {string}
     * @memberof WebhooksApiResendWebhooksForTransaction
     */
    readonly txId: string
}

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Resends all failed webhook notifications.
     * @summary Resend failed webhooks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public resendWebhooks() {
        return WebhooksApiFp(this.httpClient).resendWebhooks();
    }

    /**
     * Resends failed webhook notifications for a transaction by ID.
     * @summary Resend failed webhooks for a transaction by ID
     * @param {WebhooksApiResendWebhooksForTransactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public resendWebhooksForTransaction(requestParameters: WebhooksApiResendWebhooksForTransactionRequest, ) {
        return WebhooksApiFp(this.httpClient).resendWebhooksForTransaction(requestParameters.resendWebhooksForTransactionRequest, requestParameters.txId, );
    }
}