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
 * - ON_RAMP : A service that allows for the exchange of fiat currencies for cryptocurrencies. An OnRamp input value will always be fiat and output value crypto asset. - VAULT_ACCOUNT : Fireblocks Vault account - OFF_RAMP : A service that allows for the exchange of cryptocurrencies for fiat. An OffRamp input value will always be a crypto asset and output value be fiat. - FIAT_DESTINATION : Fiat account 
 * @export
 * @enum {string}
 */

export const XBSettlementStepType = {
    OnRamp: 'ON_RAMP',
    VaultAccount: 'VAULT_ACCOUNT',
    OffRamp: 'OFF_RAMP',
    FiatDestination: 'FIAT_DESTINATION'
} as const;

export type XBSettlementStepType = typeof XBSettlementStepType[keyof typeof XBSettlementStepType];



