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
 * @enum {string}
 */

export const AccountType = {
    ExchangeAccount: 'EXCHANGE_ACCOUNT',
    UnmanagedWallet: 'UNMANAGED_WALLET',
    VaultAccount: 'VAULT_ACCOUNT',
    NetworkConnection: 'NETWORK_CONNECTION',
    FiatAccount: 'FIAT_ACCOUNT'
} as const;

export type AccountType = typeof AccountType[keyof typeof AccountType];



