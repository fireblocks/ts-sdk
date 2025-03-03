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
 * @interface Status
 */
export interface Status {
    /**
     * The status of the command
     * @type {string}
     * @memberof Status
     */
    'status': StatusStatusEnum;
    /**
     * The type of the command
     * @type {string}
     * @memberof Status
     */
    'type': StatusTypeEnum;
}

export const StatusStatusEnum = {
    WaitingForApproval: 'WAITING_FOR_APPROVAL',
    Approved: 'APPROVED',
    Cancelled: 'CANCELLED',
    Rejected: 'REJECTED',
    Completed: 'COMPLETED'
} as const;

export type StatusStatusEnum = typeof StatusStatusEnum[keyof typeof StatusStatusEnum];
export const StatusTypeEnum = {
    PairApiKey: 'PAIR_API_KEY',
    UpdateCallbackHandler: 'UPDATE_CALLBACK_HANDLER',
    UnpairApiKey: 'UNPAIR_API_KEY'
} as const;

export type StatusTypeEnum = typeof StatusTypeEnum[keyof typeof StatusTypeEnum];


