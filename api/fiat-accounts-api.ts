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
import { DepositFundsFromLinkedDDAResponse } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { FiatAccount } from '../models';
// @ts-ignore
import { Funds } from '../models';
// @ts-ignore
import { GetFiatAccountsResponse } from '../models';
// @ts-ignore
import { RedeemFundsToLinkedDDAResponse } from '../models';
/**
 * FiatAccountsApi - axios parameter creator
 * @export
 */
export const FiatAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deposits funds from the linked DDA.
         * @summary Deposit funds from DDA
         * @param {string} accountId The ID of the fiat account to use
         * @param {Funds} [funds] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        depositFundsFromLinkedDDA: async (accountId: string, funds?: Funds, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('depositFundsFromLinkedDDA', 'accountId', accountId)
            const localVarPath = `/fiat_accounts/{accountId}/deposit_from_linked_dda`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(funds, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a fiat account by ID.
         * @summary Find a specific fiat account
         * @param {string} accountId The ID of the fiat account to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiatAccount: async (accountId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getFiatAccount', 'accountId', accountId)
            const localVarPath = `/fiat_accounts/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
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
         * Returns all fiat accounts.
         * @summary List fiat accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiatAccounts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fiat_accounts`;
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
         * Redeems funds to the linked DDA.
         * @summary Redeem funds to DDA
         * @param {string} accountId The ID of the fiat account to use
         * @param {Funds} [funds] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        redeemFundsToLinkedDDA: async (accountId: string, funds?: Funds, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('redeemFundsToLinkedDDA', 'accountId', accountId)
            const localVarPath = `/fiat_accounts/{accountId}/redeem_to_linked_dda`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(funds, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FiatAccountsApi - functional programming interface
 * @export
 */
export const FiatAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FiatAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Deposits funds from the linked DDA.
         * @summary Deposit funds from DDA
         * @param {string} accountId The ID of the fiat account to use
         * @param {Funds} [funds] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async depositFundsFromLinkedDDA(accountId: string, funds?: Funds, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DepositFundsFromLinkedDDAResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.depositFundsFromLinkedDDA(accountId, funds, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FiatAccountsApi.depositFundsFromLinkedDDA']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns a fiat account by ID.
         * @summary Find a specific fiat account
         * @param {string} accountId The ID of the fiat account to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFiatAccount(accountId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FiatAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFiatAccount(accountId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FiatAccountsApi.getFiatAccount']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns all fiat accounts.
         * @summary List fiat accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFiatAccounts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFiatAccountsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFiatAccounts(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FiatAccountsApi.getFiatAccounts']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Redeems funds to the linked DDA.
         * @summary Redeem funds to DDA
         * @param {string} accountId The ID of the fiat account to use
         * @param {Funds} [funds] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async redeemFundsToLinkedDDA(accountId: string, funds?: Funds, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RedeemFundsToLinkedDDAResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.redeemFundsToLinkedDDA(accountId, funds, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['FiatAccountsApi.redeemFundsToLinkedDDA']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * FiatAccountsApi - factory interface
 * @export
 */
export const FiatAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FiatAccountsApiFp(configuration)
    return {
        /**
         * Deposits funds from the linked DDA.
         * @summary Deposit funds from DDA
         * @param {FiatAccountsApiDepositFundsFromLinkedDDARequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        depositFundsFromLinkedDDA(requestParameters: FiatAccountsApiDepositFundsFromLinkedDDARequest, options?: RawAxiosRequestConfig): AxiosPromise<DepositFundsFromLinkedDDAResponse> {
            return localVarFp.depositFundsFromLinkedDDA(requestParameters.accountId, requestParameters.funds, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a fiat account by ID.
         * @summary Find a specific fiat account
         * @param {FiatAccountsApiGetFiatAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiatAccount(requestParameters: FiatAccountsApiGetFiatAccountRequest, options?: RawAxiosRequestConfig): AxiosPromise<FiatAccount> {
            return localVarFp.getFiatAccount(requestParameters.accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all fiat accounts.
         * @summary List fiat accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiatAccounts(options?: RawAxiosRequestConfig): AxiosPromise<GetFiatAccountsResponse> {
            return localVarFp.getFiatAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * Redeems funds to the linked DDA.
         * @summary Redeem funds to DDA
         * @param {FiatAccountsApiRedeemFundsToLinkedDDARequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        redeemFundsToLinkedDDA(requestParameters: FiatAccountsApiRedeemFundsToLinkedDDARequest, options?: RawAxiosRequestConfig): AxiosPromise<RedeemFundsToLinkedDDAResponse> {
            return localVarFp.redeemFundsToLinkedDDA(requestParameters.accountId, requestParameters.funds, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for depositFundsFromLinkedDDA operation in FiatAccountsApi.
 * @export
 * @interface FiatAccountsApiDepositFundsFromLinkedDDARequest
 */
export interface FiatAccountsApiDepositFundsFromLinkedDDARequest {
    /**
     * The ID of the fiat account to use
     * @type {string}
     * @memberof FiatAccountsApiDepositFundsFromLinkedDDA
     */
    readonly accountId: string

    /**
     * 
     * @type {Funds}
     * @memberof FiatAccountsApiDepositFundsFromLinkedDDA
     */
    readonly funds?: Funds

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof FiatAccountsApiDepositFundsFromLinkedDDA
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for getFiatAccount operation in FiatAccountsApi.
 * @export
 * @interface FiatAccountsApiGetFiatAccountRequest
 */
export interface FiatAccountsApiGetFiatAccountRequest {
    /**
     * The ID of the fiat account to return
     * @type {string}
     * @memberof FiatAccountsApiGetFiatAccount
     */
    readonly accountId: string
}

/**
 * Request parameters for redeemFundsToLinkedDDA operation in FiatAccountsApi.
 * @export
 * @interface FiatAccountsApiRedeemFundsToLinkedDDARequest
 */
export interface FiatAccountsApiRedeemFundsToLinkedDDARequest {
    /**
     * The ID of the fiat account to use
     * @type {string}
     * @memberof FiatAccountsApiRedeemFundsToLinkedDDA
     */
    readonly accountId: string

    /**
     * 
     * @type {Funds}
     * @memberof FiatAccountsApiRedeemFundsToLinkedDDA
     */
    readonly funds?: Funds

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof FiatAccountsApiRedeemFundsToLinkedDDA
     */
    readonly idempotencyKey?: string
}

/**
 * FiatAccountsApi - object-oriented interface
 * @export
 * @class FiatAccountsApi
 * @extends {BaseAPI}
 */
export class FiatAccountsApi extends BaseAPI {
    /**
     * Deposits funds from the linked DDA.
     * @summary Deposit funds from DDA
     * @param {FiatAccountsApiDepositFundsFromLinkedDDARequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiatAccountsApi
     */
    public depositFundsFromLinkedDDA(requestParameters: FiatAccountsApiDepositFundsFromLinkedDDARequest) {
        return FiatAccountsApiFp(this.configuration).depositFundsFromLinkedDDA(requestParameters.accountId, requestParameters.funds, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns a fiat account by ID.
     * @summary Find a specific fiat account
     * @param {FiatAccountsApiGetFiatAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiatAccountsApi
     */
    public getFiatAccount(requestParameters: FiatAccountsApiGetFiatAccountRequest) {
        return FiatAccountsApiFp(this.configuration).getFiatAccount(requestParameters.accountId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns all fiat accounts.
     * @summary List fiat accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiatAccountsApi
     */
    public getFiatAccounts() {
        return FiatAccountsApiFp(this.configuration).getFiatAccounts().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Redeems funds to the linked DDA.
     * @summary Redeem funds to DDA
     * @param {FiatAccountsApiRedeemFundsToLinkedDDARequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiatAccountsApi
     */
    public redeemFundsToLinkedDDA(requestParameters: FiatAccountsApiRedeemFundsToLinkedDDARequest) {
        return FiatAccountsApiFp(this.configuration).redeemFundsToLinkedDDA(requestParameters.accountId, requestParameters.funds, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

