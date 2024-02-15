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



/**
 * 
 * @export
 * @interface ValidatorDto
 */
export interface ValidatorDto {
    /**
     * The protocol identifier (e.g. \"ETH\"/\"SOL\") of the validator
     * @type {string}
     * @memberof ValidatorDto
     */
    'chainDescriptor': string;
    /**
     * The service fee as a percentage out of the earned rewards
     * @type {number}
     * @memberof ValidatorDto
     */
    'feePercent': number;
}
