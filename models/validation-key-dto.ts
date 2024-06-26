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
 * @interface ValidationKeyDto
 */
export interface ValidationKeyDto {
    /**
     * External validation key id set by Fireblocks.
     * @type {string}
     * @memberof ValidationKeyDto
     */
    'keyId': string;
    /**
     * PEM encoded public key used for the validation.
     * @type {string}
     * @memberof ValidationKeyDto
     */
    'publicKeyPem': string;
    /**
     * 
     * @type {number}
     * @memberof ValidationKeyDto
     */
    'daysTillExpired': number;
    /**
     * True if the validation key is enabled.
     * @type {boolean}
     * @memberof ValidationKeyDto
     */
    'enabled': boolean;
    /**
     * Creation date (timestamp) in milliseconds.
     * @type {number}
     * @memberof ValidationKeyDto
     */
    'createdAt': number;
}

