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
 * @interface AssetWallet
 */
export interface AssetWallet {
    /**
     * ID of the vault account. You can [get the vault account by this ID](https://developers.fireblocks.com/reference/get_vault-accounts-vaultaccountid) to retrieve vault properties such as its name, auto fueling, hidden on UI or customer reference ID.
     * @type {string}
     * @memberof AssetWallet
     */
    'vaultId'?: string;
    /**
     * ID of the asset. You can get more information about this asset by using the [supported assets API](https://developers.fireblocks.com/reference/get_supported-assets)
     * @type {string}
     * @memberof AssetWallet
     */
    'assetId'?: string;
    /**
     * Available balance, available to use in a transaction.
     * @type {string}
     * @memberof AssetWallet
     */
    'available'?: string;
    /**
     * Total balance at the asset wallet, as seen at the blockchain explorers. This includes balance available, and any kind of unavailable balance such as locked, frozen, or others.
     * @type {string}
     * @memberof AssetWallet
     */
    'total'?: string;
    /**
     * Pending balance.
     * @type {string}
     * @memberof AssetWallet
     */
    'pending'?: string;
    /**
     * Staked balance.
     * @type {string}
     * @memberof AssetWallet
     */
    'staked'?: string;
    /**
     * Funds frozen due to the anti-money laundering policy at this workspace.
     * @type {string}
     * @memberof AssetWallet
     */
    'frozen'?: string;
    /**
     * Locked balance.
     * @type {string}
     * @memberof AssetWallet
     */
    'lockedAmount'?: string;
    /**
     * The height (number) of the block of the balance. Can by empty.
     * @type {string}
     * @memberof AssetWallet
     */
    'blockHeight'?: string;
    /**
     * The hash of the block of the balance. Can by empty.
     * @type {string}
     * @memberof AssetWallet
     */
    'blockHash'?: string;
    /**
     * Unix timestamp of the time the asset wallet was created.
     * @type {string}
     * @memberof AssetWallet
     */
    'creationTimestamp'?: string;
}

