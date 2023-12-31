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
import {RequestOptions} from "../models/request-options";
import {HttpClient} from "../utils/http-client";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';


// Some imports not used depending on template conditions
// @ts-ignore
import { assertParamExists, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

// @ts-ignore
import { AssetTypeResponse } from '../models';



    /**
 * BlockchainsAssetsApi - axios parameter creator
 * @export
 */
export const BlockchainsAssetsApiAxiosParamCreator = function (configuration?: Configuration, requestOptions?:RequestOptions) {
    return {
        /**
         * Returns all asset types supported by Fireblocks.
         * @summary List all asset types supported by Fireblocks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportedAssets: async ( requestOptions?: RequestOptions): Promise<AxiosRequestConfig> => {
            const localVarPath = `/supported_assets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(configuration.basePath + localVarPath);

            const localVarRequestOptions:AxiosRequestConfig = { method: 'GET'};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            const idempotencyKey = requestOptions?.idempotencyKey;
            if (idempotencyKey) {
                localVarHeaderParameter["Idempotency-Key"] = idempotencyKey;
            }

            const ncwWalletId = requestOptions?.ncw?.walletId;
            if (ncwWalletId) {
                localVarHeaderParameter["X-End-User-Wallet-Id"] = ncwWalletId;
            }
            localVarRequestOptions.headers = {...localVarHeaderParameter, };
            return {
                url: localVarUrlObj.toString(),
                ...localVarRequestOptions,
            };
        },
    }
};

/**
 * BlockchainsAssetsApi - functional programming interface
 * @export
 */
export const BlockchainsAssetsApiFp = function(httpClient: HttpClient) {
    const localVarAxiosParamCreator = BlockchainsAssetsApiAxiosParamCreator(httpClient.configuration)
    return {
        /**
         * Returns all asset types supported by Fireblocks.
         * @summary List all asset types supported by Fireblocks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSupportedAssets( requestOptions?: RequestOptions): Promise<Array<AssetTypeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupportedAssets(requestOptions);
            return httpClient.request(localVarAxiosArgs);
        },
    }
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
     public getSupportedAssets( requestOptions?: RequestOptions) {
        return BlockchainsAssetsApiFp(this.httpClient).getSupportedAssets(requestOptions);
    }
}
