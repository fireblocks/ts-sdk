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
import { AddContractAssetRequest } from '../models';
// @ts-ignore
import { CreateContractRequest } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
// @ts-ignore
import { ExternalWalletAsset } from '../models';
// @ts-ignore
import { GetContractsResponse } from '../models';
// @ts-ignore
import { UnmanagedWallet } from '../models';
/**
 * ContractsApi - axios parameter creator
 * @export
 */
export const ContractsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds an asset to an existing contract.
         * @summary Add an asset to a contract
         * @param {string} contractId The ID of the contract
         * @param {string} assetId The ID of the asset to add
         * @param {AddContractAssetRequest} [addContractAssetRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addContractAsset: async (contractId: string, assetId: string, addContractAssetRequest?: AddContractAssetRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('addContractAsset', 'contractId', contractId)
            assertParamExistsAndNotEmpty('addContractAsset', 'assetId', assetId)
            const localVarPath = `/contracts/{contractId}/{assetId}`
                .replace(`{${"contractId"}}`, encodeURIComponent(String(contractId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(addContractAssetRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new contract.
         * @summary Create a contract
         * @param {CreateContractRequest} [createContractRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContract: async (createContractRequest?: CreateContractRequest, idempotencyKey?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/contracts`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createContractRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a contract by ID.
         * @summary Delete a contract
         * @param {string} contractId The ID of the contract to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContract: async (contractId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('deleteContract', 'contractId', contractId)
            const localVarPath = `/contracts/{contractId}`
                .replace(`{${"contractId"}}`, encodeURIComponent(String(contractId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Deletes a contract asset by ID.
         * @summary Delete a contract asset
         * @param {string} contractId The ID of the contract
         * @param {string} assetId The ID of the asset to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContractAsset: async (contractId: string, assetId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('deleteContractAsset', 'contractId', contractId)
            assertParamExistsAndNotEmpty('deleteContractAsset', 'assetId', assetId)
            const localVarPath = `/contracts/{contractId}/{assetId}`
                .replace(`{${"contractId"}}`, encodeURIComponent(String(contractId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Returns a contract by ID.
         * @summary Find a specific contract
         * @param {string} contractId The ID of the contract to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContract: async (contractId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getContract', 'contractId', contractId)
            const localVarPath = `/contracts/{contractId}`
                .replace(`{${"contractId"}}`, encodeURIComponent(String(contractId)));
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
         * Returns a contract asset by ID.
         * @summary Find a contract asset
         * @param {string} contractId The ID of the contract
         * @param {string} assetId The ID of the asset to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContractAsset: async (contractId: string, assetId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            assertParamExistsAndNotEmpty('getContractAsset', 'contractId', contractId)
            assertParamExistsAndNotEmpty('getContractAsset', 'assetId', assetId)
            const localVarPath = `/contracts/{contractId}/{assetId}`
                .replace(`{${"contractId"}}`, encodeURIComponent(String(contractId)))
                .replace(`{${"assetId"}}`, encodeURIComponent(String(assetId)));
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
         * Gets a list of contracts.
         * @summary List contracts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContracts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/contracts`;
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
    }
};

/**
 * ContractsApi - functional programming interface
 * @export
 */
export const ContractsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContractsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds an asset to an existing contract.
         * @summary Add an asset to a contract
         * @param {string} contractId The ID of the contract
         * @param {string} assetId The ID of the asset to add
         * @param {AddContractAssetRequest} [addContractAssetRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addContractAsset(contractId: string, assetId: string, addContractAssetRequest?: AddContractAssetRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalWalletAsset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addContractAsset(contractId, assetId, addContractAssetRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.addContractAsset']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Creates a new contract.
         * @summary Create a contract
         * @param {CreateContractRequest} [createContractRequest] 
         * @param {string} [idempotencyKey] A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createContract(createContractRequest?: CreateContractRequest, idempotencyKey?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnmanagedWallet>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createContract(createContractRequest, idempotencyKey, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.createContract']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Deletes a contract by ID.
         * @summary Delete a contract
         * @param {string} contractId The ID of the contract to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteContract(contractId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteContract(contractId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.deleteContract']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Deletes a contract asset by ID.
         * @summary Delete a contract asset
         * @param {string} contractId The ID of the contract
         * @param {string} assetId The ID of the asset to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteContractAsset(contractId: string, assetId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteContractAsset(contractId, assetId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.deleteContractAsset']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns a contract by ID.
         * @summary Find a specific contract
         * @param {string} contractId The ID of the contract to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContract(contractId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnmanagedWallet>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContract(contractId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.getContract']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns a contract asset by ID.
         * @summary Find a contract asset
         * @param {string} contractId The ID of the contract
         * @param {string} assetId The ID of the asset to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContractAsset(contractId: string, assetId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalWalletAsset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContractAsset(contractId, assetId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.getContractAsset']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Gets a list of contracts.
         * @summary List contracts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContracts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetContractsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContracts(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContractsApi.getContracts']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ContractsApi - factory interface
 * @export
 */
export const ContractsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContractsApiFp(configuration)
    return {
        /**
         * Adds an asset to an existing contract.
         * @summary Add an asset to a contract
         * @param {ContractsApiAddContractAssetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addContractAsset(requestParameters: ContractsApiAddContractAssetRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalWalletAsset> {
            return localVarFp.addContractAsset(requestParameters.contractId, requestParameters.assetId, requestParameters.addContractAssetRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new contract.
         * @summary Create a contract
         * @param {ContractsApiCreateContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createContract(requestParameters: ContractsApiCreateContractRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UnmanagedWallet> {
            return localVarFp.createContract(requestParameters.createContractRequest, requestParameters.idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a contract by ID.
         * @summary Delete a contract
         * @param {ContractsApiDeleteContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContract(requestParameters: ContractsApiDeleteContractRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteContract(requestParameters.contractId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a contract asset by ID.
         * @summary Delete a contract asset
         * @param {ContractsApiDeleteContractAssetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContractAsset(requestParameters: ContractsApiDeleteContractAssetRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteContractAsset(requestParameters.contractId, requestParameters.assetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a contract by ID.
         * @summary Find a specific contract
         * @param {ContractsApiGetContractRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContract(requestParameters: ContractsApiGetContractRequest, options?: RawAxiosRequestConfig): AxiosPromise<UnmanagedWallet> {
            return localVarFp.getContract(requestParameters.contractId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a contract asset by ID.
         * @summary Find a contract asset
         * @param {ContractsApiGetContractAssetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContractAsset(requestParameters: ContractsApiGetContractAssetRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalWalletAsset> {
            return localVarFp.getContractAsset(requestParameters.contractId, requestParameters.assetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of contracts.
         * @summary List contracts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContracts(options?: RawAxiosRequestConfig): AxiosPromise<GetContractsResponse> {
            return localVarFp.getContracts(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addContractAsset operation in ContractsApi.
 * @export
 * @interface ContractsApiAddContractAssetRequest
 */
export interface ContractsApiAddContractAssetRequest {
    /**
     * The ID of the contract
     * @type {string}
     * @memberof ContractsApiAddContractAsset
     */
    readonly contractId: string

    /**
     * The ID of the asset to add
     * @type {string}
     * @memberof ContractsApiAddContractAsset
     */
    readonly assetId: string

    /**
     * 
     * @type {AddContractAssetRequest}
     * @memberof ContractsApiAddContractAsset
     */
    readonly addContractAssetRequest?: AddContractAssetRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ContractsApiAddContractAsset
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for createContract operation in ContractsApi.
 * @export
 * @interface ContractsApiCreateContractRequest
 */
export interface ContractsApiCreateContractRequest {
    /**
     * 
     * @type {CreateContractRequest}
     * @memberof ContractsApiCreateContract
     */
    readonly createContractRequest?: CreateContractRequest

    /**
     * A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.
     * @type {string}
     * @memberof ContractsApiCreateContract
     */
    readonly idempotencyKey?: string
}

/**
 * Request parameters for deleteContract operation in ContractsApi.
 * @export
 * @interface ContractsApiDeleteContractRequest
 */
export interface ContractsApiDeleteContractRequest {
    /**
     * The ID of the contract to delete
     * @type {string}
     * @memberof ContractsApiDeleteContract
     */
    readonly contractId: string
}

/**
 * Request parameters for deleteContractAsset operation in ContractsApi.
 * @export
 * @interface ContractsApiDeleteContractAssetRequest
 */
export interface ContractsApiDeleteContractAssetRequest {
    /**
     * The ID of the contract
     * @type {string}
     * @memberof ContractsApiDeleteContractAsset
     */
    readonly contractId: string

    /**
     * The ID of the asset to delete
     * @type {string}
     * @memberof ContractsApiDeleteContractAsset
     */
    readonly assetId: string
}

/**
 * Request parameters for getContract operation in ContractsApi.
 * @export
 * @interface ContractsApiGetContractRequest
 */
export interface ContractsApiGetContractRequest {
    /**
     * The ID of the contract to return
     * @type {string}
     * @memberof ContractsApiGetContract
     */
    readonly contractId: string
}

/**
 * Request parameters for getContractAsset operation in ContractsApi.
 * @export
 * @interface ContractsApiGetContractAssetRequest
 */
export interface ContractsApiGetContractAssetRequest {
    /**
     * The ID of the contract
     * @type {string}
     * @memberof ContractsApiGetContractAsset
     */
    readonly contractId: string

    /**
     * The ID of the asset to return
     * @type {string}
     * @memberof ContractsApiGetContractAsset
     */
    readonly assetId: string
}

/**
 * ContractsApi - object-oriented interface
 * @export
 * @class ContractsApi
 * @extends {BaseAPI}
 */
export class ContractsApi extends BaseAPI {
    /**
     * Adds an asset to an existing contract.
     * @summary Add an asset to a contract
     * @param {ContractsApiAddContractAssetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public addContractAsset(requestParameters: ContractsApiAddContractAssetRequest) {
        return ContractsApiFp(this.configuration).addContractAsset(requestParameters.contractId, requestParameters.assetId, requestParameters.addContractAssetRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Creates a new contract.
     * @summary Create a contract
     * @param {ContractsApiCreateContractRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public createContract(requestParameters: ContractsApiCreateContractRequest = {}) {
        return ContractsApiFp(this.configuration).createContract(requestParameters.createContractRequest, requestParameters.idempotencyKey).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Deletes a contract by ID.
     * @summary Delete a contract
     * @param {ContractsApiDeleteContractRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public deleteContract(requestParameters: ContractsApiDeleteContractRequest) {
        return ContractsApiFp(this.configuration).deleteContract(requestParameters.contractId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Deletes a contract asset by ID.
     * @summary Delete a contract asset
     * @param {ContractsApiDeleteContractAssetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public deleteContractAsset(requestParameters: ContractsApiDeleteContractAssetRequest) {
        return ContractsApiFp(this.configuration).deleteContractAsset(requestParameters.contractId, requestParameters.assetId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns a contract by ID.
     * @summary Find a specific contract
     * @param {ContractsApiGetContractRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public getContract(requestParameters: ContractsApiGetContractRequest) {
        return ContractsApiFp(this.configuration).getContract(requestParameters.contractId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Returns a contract asset by ID.
     * @summary Find a contract asset
     * @param {ContractsApiGetContractAssetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public getContractAsset(requestParameters: ContractsApiGetContractAssetRequest) {
        return ContractsApiFp(this.configuration).getContractAsset(requestParameters.contractId, requestParameters.assetId).then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }

    /**
     * Gets a list of contracts.
     * @summary List contracts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractsApi
     */
    public getContracts() {
        return ContractsApiFp(this.configuration).getContracts().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

