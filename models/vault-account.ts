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
import { Tag } from './tag';
// May contain unused imports in some cases
// @ts-ignore
import { VaultAsset } from './vault-asset';

/**
 * 
 * @export
 * @interface VaultAccount
 */
export interface VaultAccount {
    /**
     * 
     * @type {string}
     * @memberof VaultAccount
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAccount
     */
    'name'?: string;
    /**
     * 
     * @type {Array<VaultAsset>}
     * @memberof VaultAccount
     */
    'assets'?: Array<VaultAsset>;
    /**
     * 
     * @type {boolean}
     * @memberof VaultAccount
     */
    'hiddenOnUI'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VaultAccount
     */
    'customerRefId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VaultAccount
     */
    'autoFuel'?: boolean;
    /**
     * List of tags attached to the vault account
     * @type {Array<Tag>}
     * @memberof VaultAccount
     */
    'tags'?: Array<Tag>;
}

