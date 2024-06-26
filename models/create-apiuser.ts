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
 * @interface CreateAPIUser
 */
export interface CreateAPIUser {
    /**
     * Users role
     * @type {string}
     * @memberof CreateAPIUser
     */
    'role': string;
    /**
     * Users name
     * @type {string}
     * @memberof CreateAPIUser
     */
    'name': string;
    /**
     * CSR file that is used to verify API requests. read more https://developers.fireblocks.com/docs/quickstart
     * @type {string}
     * @memberof CreateAPIUser
     */
    'csrPem': string;
    /**
     * Different environments allow for different setup options, field is required for management/signer role
     * @type {string}
     * @memberof CreateAPIUser
     */
    'coSignerSetupType'?: string;
    /**
     * pass as true if this is the first user on the coSigner machine
     * @type {boolean}
     * @memberof CreateAPIUser
     */
    'coSignerSetupIsFirstUser'?: boolean;
}

