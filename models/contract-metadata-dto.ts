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
 * @interface ContractMetadataDto
 */
export interface ContractMetadataDto {
    /**
     * The deployed contract ID
     * @type {string}
     * @memberof ContractMetadataDto
     */
    'id': string;
    /**
     * The blockchain ID
     * @type {string}
     * @memberof ContractMetadataDto
     */
    'blockchainId': string;
    /**
     * The address of the token contract
     * @type {string}
     * @memberof ContractMetadataDto
     */
    'contractAddress': string;
    /**
     * The contract template ID
     * @type {string}
     * @memberof ContractMetadataDto
     */
    'contractTemplateId': string;
    /**
     * The vault account ID that initiated the request to issue the token
     * @type {string}
     * @memberof ContractMetadataDto
     */
    'vaultAccountId'?: string;
}
