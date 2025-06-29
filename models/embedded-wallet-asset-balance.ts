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
import { EmbeddedWalletAssetRewardInfo } from './embedded-wallet-asset-reward-info';

/**
 * 
 * @export
 * @interface EmbeddedWalletAssetBalance
 */
export interface EmbeddedWalletAssetBalance {
    /**
     * Unique identifier of the asset balance entry
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'id': string;
    /**
     * Total balance amount for the asset in the account (including pending, locked, and available)
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'total': string;
    /**
     * The balance available for use or withdrawal
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'available': string;
    /**
     * Amount pending confirmation from blockchain (e.g., unconfirmed deposits)
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'pending': string;
    /**
     * Balance that is frozen due to policy or regulatory lock
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'frozen': string;
    /**
     * Funds locked for operations such as staking or delegation
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'lockedAmount': string;
    /**
     * Latest known blockchain height when balance was fetched
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'blockHeight'?: string;
    /**
     * Hash of the blockchain block associated with the current balance state
     * @type {string}
     * @memberof EmbeddedWalletAssetBalance
     */
    'blockHash'?: string;
    /**
     * 
     * @type {EmbeddedWalletAssetRewardInfo}
     * @memberof EmbeddedWalletAssetBalance
     */
    'rewardInfo'?: EmbeddedWalletAssetRewardInfo;
}

