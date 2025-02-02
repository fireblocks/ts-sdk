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
import { AssetClassBeta } from './asset-class-beta';
// May contain unused imports in some cases
// @ts-ignore
import { AssetMetadataBeta } from './asset-metadata-beta';
// May contain unused imports in some cases
// @ts-ignore
import { AssetOnchainBeta } from './asset-onchain-beta';

/**
 * 
 * @export
 * @interface AssetResponseBeta
 */
export interface AssetResponseBeta {
    /**
     * The ID of the asset
     * @type {string}
     * @memberof AssetResponseBeta
     */
    'id': string;
    /**
     * The Legacy ID of the asset
     * @type {string}
     * @memberof AssetResponseBeta
     */
    'legacyId': string;
    /**
     * 
     * @type {AssetClassBeta}
     * @memberof AssetResponseBeta
     */
    'assetClass': AssetClassBeta;
    /**
     * 
     * @type {AssetMetadataBeta}
     * @memberof AssetResponseBeta
     */
    'metadata': AssetMetadataBeta;
    /**
     * The ID of the asset\'s blockchain
     * @type {string}
     * @memberof AssetResponseBeta
     */
    'blockchainId'?: string;
    /**
     * Asset\'s display name
     * @type {string}
     * @memberof AssetResponseBeta
     */
    'displayName'?: string;
    /**
     * Asset\'s display symbol
     * @type {string}
     * @memberof AssetResponseBeta
     */
    'displaySymbol'?: string;
    /**
     * 
     * @type {AssetOnchainBeta}
     * @memberof AssetResponseBeta
     */
    'onchain'?: AssetOnchainBeta;
}



