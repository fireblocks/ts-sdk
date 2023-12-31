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
 * @interface CustomFiatRoutingDest
 */
export interface CustomFiatRoutingDest {
    /**
     * The network routing logic.
     * @type {string}
     * @memberof CustomFiatRoutingDest
     */
    'scheme': CustomFiatRoutingDestSchemeEnum;
    /**
     * The fiat account the funds are being sent to.
     * @type {string}
     * @memberof CustomFiatRoutingDest
     */
    'dstType': CustomFiatRoutingDestDstTypeEnum;
    /**
     * The ID of the fiat account the funds are being sent to.
     * @type {string}
     * @memberof CustomFiatRoutingDest
     */
    'dstId': string;
}

export const CustomFiatRoutingDestSchemeEnum = {
    Custom: 'CUSTOM'
} as const;

export type CustomFiatRoutingDestSchemeEnum = typeof CustomFiatRoutingDestSchemeEnum[keyof typeof CustomFiatRoutingDestSchemeEnum];
export const CustomFiatRoutingDestDstTypeEnum = {
    FiatAccount: 'FIAT_ACCOUNT'
} as const;

export type CustomFiatRoutingDestDstTypeEnum = typeof CustomFiatRoutingDestDstTypeEnum[keyof typeof CustomFiatRoutingDestDstTypeEnum];


