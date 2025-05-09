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
 * @interface AssetMetadata
 */
export interface AssetMetadata {
    /**
     * The scope of the asset
     * @type {string}
     * @memberof AssetMetadata
     */
    'scope': AssetMetadataScopeEnum;
    /**
     * Is asset deprecated
     * @type {boolean}
     * @memberof AssetMetadata
     */
    'deprecated': boolean;
}

export const AssetMetadataScopeEnum = {
    Global: 'Global',
    Local: 'Local'
} as const;

export type AssetMetadataScopeEnum = typeof AssetMetadataScopeEnum[keyof typeof AssetMetadataScopeEnum];


