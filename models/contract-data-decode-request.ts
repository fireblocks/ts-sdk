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


// May contain unused imports in some cases
// @ts-ignore
import { AbiFunction } from './abi-function';
// May contain unused imports in some cases
// @ts-ignore
import { ContractDataDecodeDataType } from './contract-data-decode-data-type';
// May contain unused imports in some cases
// @ts-ignore
import { ContractDataDecodeRequestData } from './contract-data-decode-request-data';

/**
 * 
 * @export
 * @interface ContractDataDecodeRequest
 */
export interface ContractDataDecodeRequest {
    /**
     * 
     * @type {ContractDataDecodeRequestData}
     * @memberof ContractDataDecodeRequest
     */
    'data': ContractDataDecodeRequestData;
    /**
     * 
     * @type {ContractDataDecodeDataType}
     * @memberof ContractDataDecodeRequest
     */
    'dataType': ContractDataDecodeDataType;
    /**
     * The abi of the function/error/log to decode.
     * @type {Array<AbiFunction>}
     * @memberof ContractDataDecodeRequest
     */
    'abi'?: Array<AbiFunction>;
}



