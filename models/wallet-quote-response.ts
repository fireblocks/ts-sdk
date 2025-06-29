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
import { ProviderAdditionalData } from './provider-additional-data';
// May contain unused imports in some cases
// @ts-ignore
import { QuoteFee } from './quote-fee';
// May contain unused imports in some cases
// @ts-ignore
import { SwapProviderProtocolsEnum } from './swap-provider-protocols-enum';
// May contain unused imports in some cases
// @ts-ignore
import { SwapRequiredActionsEnum } from './swap-required-actions-enum';

/**
 * Return a quote with id that can be used for swap operation.
 * @export
 * @interface WalletQuoteResponse
 */
export interface WalletQuoteResponse {
    /**
     * 
     * @type {SwapProviderProtocolsEnum}
     * @memberof WalletQuoteResponse
     */
    'protocol': SwapProviderProtocolsEnum;
    /**
     * The amount of tokens the swapper will provide
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'inputAmount': string;
    /**
     * The id of the asset the swapper will provide
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'inputAsset': string;
    /**
     * The slippage tolerance is a percentage. The slippage tolerance is the maximum amount the price can change between the time the transaction is submitted and the time it is executed
     * @type {number}
     * @memberof WalletQuoteResponse
     */
    'slippageTolerance': number;
    /**
     * The minimum amount of tokens the swapper will receive
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'outputMinAmount': string;
    /**
     * Maximum amount of tokens that the swapper will receive
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'outputMaxAmount': string;
    /**
     * The id of the asset the swapper will receive
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'outputAsset': string;
    /**
     * 
     * @type {ProviderAdditionalData}
     * @memberof WalletQuoteResponse
     */
    'additionalData': ProviderAdditionalData;
    /**
     * An identifier that uniquely identifies the received quote
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'providerQuoteId': string;
    /**
     * When was the received `providerQuoteId` is expired (ISO Date time).
     * @type {string}
     * @memberof WalletQuoteResponse
     */
    'expiredAt': string;
    /**
     * The required actions for completing a swap operation
     * @type {Array<SwapRequiredActionsEnum>}
     * @memberof WalletQuoteResponse
     */
    'requiredActions': Array<SwapRequiredActionsEnum>;
    /**
     * 
     * @type {QuoteFee}
     * @memberof WalletQuoteResponse
     */
    'estimatedFees': QuoteFee;
}



