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
 * @interface SettlementResponse
 */
export interface SettlementResponse {
    /**
     * 
     * @type {string}
     * @memberof SettlementResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof SettlementResponse
     */
    'initiator'?: string;
    /**
     * 
     * @type {string}
     * @memberof SettlementResponse
     */
    'exchangeReply'?: string;
    /**
     * 
     * @type {object}
     * @memberof SettlementResponse
     */
    'fireblocksInitiatedTransactions'?: object;
    /**
     * 
     * @type {SettlementResponse}
     * @memberof SettlementResponse
     */
    'exchangeRequestedTransactions'?: SettlementResponse;
}
