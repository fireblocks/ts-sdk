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
 * @interface TokenOwnershipSpamUpdatePayload
 */
export interface TokenOwnershipSpamUpdatePayload {
    /**
     * Token\'s asset id
     * @type {string}
     * @memberof TokenOwnershipSpamUpdatePayload
     */
    'assetId': string;
    /**
     * Token\'s ownership new spam value
     * @type {boolean}
     * @memberof TokenOwnershipSpamUpdatePayload
     */
    'spam': boolean;
}

