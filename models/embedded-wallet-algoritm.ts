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
 * algorithm name
 * @export
 * @interface EmbeddedWalletAlgoritm
 */
export interface EmbeddedWalletAlgoritm {
    /**
     * algorithm
     * @type {string}
     * @memberof EmbeddedWalletAlgoritm
     */
    'algorithm': EmbeddedWalletAlgoritmAlgorithmEnum;
}

export const EmbeddedWalletAlgoritmAlgorithmEnum = {
    EcdsaSecp256K1: 'MPC_ECDSA_SECP256K1',
    EddsaEd25519: 'MPC_EDDSA_ED25519'
} as const;

export type EmbeddedWalletAlgoritmAlgorithmEnum = typeof EmbeddedWalletAlgoritmAlgorithmEnum[keyof typeof EmbeddedWalletAlgoritmAlgorithmEnum];


