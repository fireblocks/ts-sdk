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
import { SmartTransferTicketTerm } from './smart-transfer-ticket-term';

/**
 * Data object with result data
 * @export
 * @interface SmartTransferTicket
 */
export interface SmartTransferTicket {
    /**
     * Unique id of Smart Transfer ticket
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'id': string;
    /**
     * Kind of Smart Transfer. Can be either `ASYNC` or `ATOMIC`
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'type': SmartTransferTicketTypeEnum;
    /**
     * Current status of Smart Transfer ticket
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'status': SmartTransferTicketStatusEnum;
    /**
     * ID of network profile that created ticket
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'createdByNetworkId': string;
    /**
     * Name of network profile that created ticket
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'createdByNetworkIdName': string;
    /**
     * Date and time at which the ticket is created.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'createdAt': string;
    /**
     * Date and time of last ticket update.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'updatedAt': string;
    /**
     * Direction of Smart Transfer.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'direction'?: SmartTransferTicketDirectionEnum;
    /**
     * Ticket terms (legs)
     * @type {Array<SmartTransferTicketTerm>}
     * @memberof SmartTransferTicket
     */
    'terms'?: Array<SmartTransferTicketTerm>;
    /**
     * Number of hours for expiration.This data is valid only it ticket not in DRAFT state and it will be used to calculate expiresAt value
     * @type {number}
     * @memberof SmartTransferTicket
     */
    'expiresIn'?: number;
    /**
     * Date and time at which the ticket will expire if no funding is performed.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'expiresAt'?: string;
    /**
     * Date and time when ticket is submitted.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'submittedAt'?: string;
    /**
     * Date and time when ticket is expired.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'expiredAt'?: string;
    /**
     * Date and time when ticket is canceled.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'canceledAt'?: string;
    /**
     * Date and time when ticket is fulfilled.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'fulfilledAt'?: string;
    /**
     * External Ref ID for Smart Transfer ticket.
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'externalRefId'?: string;
    /**
     * Note
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'note'?: string;
    /**
     * Name of network profile that canceled ticket
     * @type {string}
     * @memberof SmartTransferTicket
     */
    'canceledByNetworkIdName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SmartTransferTicket
     */
    'canceledByMe'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SmartTransferTicket
     */
    'createdByMe'?: boolean;
}

export const SmartTransferTicketTypeEnum = {
    Async: 'ASYNC'
} as const;

export type SmartTransferTicketTypeEnum = typeof SmartTransferTicketTypeEnum[keyof typeof SmartTransferTicketTypeEnum];
export const SmartTransferTicketStatusEnum = {
    Draft: 'DRAFT',
    PendingApproval: 'PENDING_APPROVAL',
    Open: 'OPEN',
    InSettlement: 'IN_SETTLEMENT',
    Fulfilled: 'FULFILLED',
    Expired: 'EXPIRED',
    Canceled: 'CANCELED'
} as const;

export type SmartTransferTicketStatusEnum = typeof SmartTransferTicketStatusEnum[keyof typeof SmartTransferTicketStatusEnum];
export const SmartTransferTicketDirectionEnum = {
    Exchange: 'EXCHANGE',
    Send: 'SEND',
    Receive: 'RECEIVE',
    Intermediate: 'INTERMEDIATE'
} as const;

export type SmartTransferTicketDirectionEnum = typeof SmartTransferTicketDirectionEnum[keyof typeof SmartTransferTicketDirectionEnum];

