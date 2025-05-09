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
 * @interface CreateMultipleDepositAddressesRequest
 */
export interface CreateMultipleDepositAddressesRequest {
    /**
     * Existing Vault account ID to add deposit addresses to
     * @type {number}
     * @memberof CreateMultipleDepositAddressesRequest
     */
    'vaultAccountId': number;
    /**
     * asset ID
     * @type {string}
     * @memberof CreateMultipleDepositAddressesRequest
     */
    'assetId': string;
    /**
     * Count of deposit addresses to issue
     * @type {number}
     * @memberof CreateMultipleDepositAddressesRequest
     */
    'count': number;
    /**
     * Desctiptions of the newly created addresses
     * @type {Array<string>}
     * @memberof CreateMultipleDepositAddressesRequest
     */
    'descriptions'?: Array<string>;
    /**
     * Existing Vault Account ID to copy deposit addresses descriptions from in case no descriptions were provided
     * @type {number}
     * @memberof CreateMultipleDepositAddressesRequest
     */
    'vaultAccountToCopyDescFrom'?: number;
    /**
     * Existing length within the vault account to copy deposit addresses descriptions from
     * @type {number}
     * @memberof CreateMultipleDepositAddressesRequest
     */
    'vaultAccountToCopyDescFromIndex'?: number;
}

