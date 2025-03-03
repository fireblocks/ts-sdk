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
 * @interface AssetOnchain
 */
export interface AssetOnchain {
    /**
     * The asset symbol
     * @type {string}
     * @memberof AssetOnchain
     */
    'symbol': string;
    /**
     * The asset name
     * @type {string}
     * @memberof AssetOnchain
     */
    'name': string;
    /**
     * Number of decimals
     * @type {number}
     * @memberof AssetOnchain
     */
    'decimals': number;
    /**
     * The asset address
     * @type {string}
     * @memberof AssetOnchain
     */
    'address'?: string;
    /**
     * The asset standard
     * @type {string}
     * @memberof AssetOnchain
     */
    'standard'?: string;
}

