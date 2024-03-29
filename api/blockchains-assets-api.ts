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
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { AssetTypeResponse } from '../models';
// @ts-ignore
import { ErrorSchema } from '../models';
/**
 * BlockchainsAssetsApi - axios parameter creator
 * @export
 */
export const BlockchainsAssetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all asset types supported by Fireblocks.
         * @summary List all asset types supported by Fireblocks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportedAssets: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/supported_assets`;
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
 * BlockchainsAssetsApi - functional programming interface
 * @export
 */
export const BlockchainsAssetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BlockchainsAssetsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns all asset types supported by Fireblocks.
         * @summary List all asset types supported by Fireblocks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSupportedAssets(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AssetTypeResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupportedAssets(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BlockchainsAssetsApi.getSupportedAssets']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * BlockchainsAssetsApi - factory interface
 * @export
 */
export const BlockchainsAssetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BlockchainsAssetsApiFp(configuration)
    return {
        /**
         * Returns all asset types supported by Fireblocks.
         * @summary List all asset types supported by Fireblocks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportedAssets(options?: RawAxiosRequestConfig): AxiosPromise<Array<AssetTypeResponse>> {
            return localVarFp.getSupportedAssets(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BlockchainsAssetsApi - object-oriented interface
 * @export
 * @class BlockchainsAssetsApi
 * @extends {BaseAPI}
 */
export class BlockchainsAssetsApi extends BaseAPI {
    /**
     * Returns all asset types supported by Fireblocks.
     * @summary List all asset types supported by Fireblocks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainsAssetsApi
     */
    public getSupportedAssets() {
        return BlockchainsAssetsApiFp(this.configuration).getSupportedAssets().then((request) => request(this.axios, this.basePath)).then(convertToFireblocksResponse);
    }
}

