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
 * @interface CustomCryptoRoutingDest
 */
export interface CustomCryptoRoutingDest {
    /**
     * The network routing logic.
     * @type {string}
     * @memberof CustomCryptoRoutingDest
     */
    'scheme': CustomCryptoRoutingDestSchemeEnum;
    /**
     * The type of destination account the funds are being sent to.
     * @type {string}
     * @memberof CustomCryptoRoutingDest
     */
    'dstType': CustomCryptoRoutingDestDstTypeEnum;
    /**
     * The ID of the destination account the funds are being sent to.
     * @type {string}
     * @memberof CustomCryptoRoutingDest
     */
    'dstId': string;
}

export const CustomCryptoRoutingDestSchemeEnum = {
    Custom: 'CUSTOM'
} as const;

export type CustomCryptoRoutingDestSchemeEnum = typeof CustomCryptoRoutingDestSchemeEnum[keyof typeof CustomCryptoRoutingDestSchemeEnum];
export const CustomCryptoRoutingDestDstTypeEnum = {
    Vault: 'VAULT',
    Exchange: 'EXCHANGE'
} as const;

export type CustomCryptoRoutingDestDstTypeEnum = typeof CustomCryptoRoutingDestDstTypeEnum[keyof typeof CustomCryptoRoutingDestDstTypeEnum];

