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
 * * EXCHANGE - A third-party exchange account connected to your workspace * UNMANAGED - A unmanaged wallet outside of Fireblocks workspace * VAULT - An account in your Fireblocks Vault * NETWORK_CONNECTION - A connection in your Fireblocks network * COMPOUND - (deprecated) An asset retrieved by using the Compound DeFI protocol * FIAT_ACCOUNT - A third-party fiat account connected to your workspace * ONE_TIME_ADDRESS - A non-whitelisted asset from your Fireblocks Workspace * \"*\" - All types 
 * @export
 * @enum {string}
 */

export const PolicySrcOrDestType = {
    Exchange: 'EXCHANGE',
    Unmanaged: 'UNMANAGED',
    Vault: 'VAULT',
    NetworkConnection: 'NETWORK_CONNECTION',
    Compound: 'COMPOUND',
    FiatAccount: 'FIAT_ACCOUNT',
    OneTimeAddress: 'ONE_TIME_ADDRESS',
    Star: '*'
} as const;

export type PolicySrcOrDestType = typeof PolicySrcOrDestType[keyof typeof PolicySrcOrDestType];



