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
 * @interface SmartTransferSubmitTicket
 */
export interface SmartTransferSubmitTicket {
    /**
     * Sets the ticket expiration time (in hours) after the ticket is submitted. If no funding source is set for any term, the ticket will automatically expire after given time.
     * @type {number}
     * @memberof SmartTransferSubmitTicket
     */
    'expiresIn': number;
}
