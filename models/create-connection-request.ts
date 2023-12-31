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
 * @interface CreateConnectionRequest
 */
export interface CreateConnectionRequest {
    /**
     * The ID of the vault to connect to the Web3 connection.
     * @type {number}
     * @memberof CreateConnectionRequest
     */
    'vaultAccountId': number;
    /**
     * The default fee level. Valid values are `MEDIUM` and `HIGH`.
     * @type {string}
     * @memberof CreateConnectionRequest
     */
    'feeLevel': CreateConnectionRequestFeeLevelEnum;
    /**
     * The WalletConnect uri provided by the dapp.
     * @type {string}
     * @memberof CreateConnectionRequest
     */
    'uri': string;
    /**
     * The ID of the blockchain network used in the Web3 connection.
     * @type {Array<string>}
     * @memberof CreateConnectionRequest
     */
    'chainIds': Array<string>;
}

export const CreateConnectionRequestFeeLevelEnum = {
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;

export type CreateConnectionRequestFeeLevelEnum = typeof CreateConnectionRequestFeeLevelEnum[keyof typeof CreateConnectionRequestFeeLevelEnum];


