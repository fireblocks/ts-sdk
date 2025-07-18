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
 * Details of the transaction\'s fee.
 * @export
 * @interface FeeInfo
 */
export interface FeeInfo {
    /**
     * The fee paid to the network
     * @type {string}
     * @memberof FeeInfo
     */
    'networkFee'?: string;
    /**
     * The total fee deducted by the exchange from the actual requested amount (serviceFee = amount - netAmount)
     * @type {string}
     * @memberof FeeInfo
     */
    'serviceFee'?: string;
    /**
     * 
     * @type {string}
     * @memberof FeeInfo
     */
    'gasPrice'?: string;
    /**
     * Wether the fee was paid by the relay or not
     * @type {boolean}
     * @memberof FeeInfo
     */
    'paidByRelay'?: boolean;
    /**
     * Wether the relay is the same tenant (LOCAL) or another tenant (THIRD_PARTY)
     * @type {string}
     * @memberof FeeInfo
     */
    'relayType'?: FeeInfoRelayTypeEnum;
    /**
     * The vault account ID of the relay
     * @type {string}
     * @memberof FeeInfo
     */
    'relayId'?: string;
    /**
     * The name of the tenant, only for THIRD_PARTY relays
     * @type {string}
     * @memberof FeeInfo
     */
    'relayName'?: string;
}

export const FeeInfoRelayTypeEnum = {
    Local: 'LOCAL',
    ThirdParty: 'THIRD_PARTY'
} as const;

export type FeeInfoRelayTypeEnum = typeof FeeInfoRelayTypeEnum[keyof typeof FeeInfoRelayTypeEnum];


