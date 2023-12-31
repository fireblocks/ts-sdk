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
import { XBSettlementConfigStepsRecord } from './xbsettlement-config-steps-record';

/**
 * 
 * @export
 * @interface XBSettlementConfigEditRequestBody
 */
export interface XBSettlementConfigEditRequestBody {
    /**
     * The name for the cross-border settlement configuration
     * @type {string}
     * @memberof XBSettlementConfigEditRequestBody
     */
    'name': string;
    /**
     * 
     * @type {XBSettlementConfigStepsRecord}
     * @memberof XBSettlementConfigEditRequestBody
     */
    'steps': XBSettlementConfigStepsRecord;
    /**
     * Slippage configuarion in basis points, the default value is 10% 
     * @type {number}
     * @memberof XBSettlementConfigEditRequestBody
     */
    'conversionSlippageBasisPoints'?: number;
}

