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
 * @interface SmartTransferFundDvpTicket
 */
export interface SmartTransferFundDvpTicket {
    /**
     * Transaction fee
     * @type {string}
     * @memberof SmartTransferFundDvpTicket
     */
    'fee'?: string;
    /**
     * Transaction fee level.
     * @type {string}
     * @memberof SmartTransferFundDvpTicket
     */
    'feeLevel'?: SmartTransferFundDvpTicketFeeLevelEnum;
    /**
     * Transaction note
     * @type {string}
     * @memberof SmartTransferFundDvpTicket
     */
    'note'?: string;
}

export const SmartTransferFundDvpTicketFeeLevelEnum = {
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;

export type SmartTransferFundDvpTicketFeeLevelEnum = typeof SmartTransferFundDvpTicketFeeLevelEnum[keyof typeof SmartTransferFundDvpTicketFeeLevelEnum];

