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
import { ProviderCategoryEnum } from './provider-category-enum';
// May contain unused imports in some cases
// @ts-ignore
import { SwapFlowError } from './swap-flow-error';
// May contain unused imports in some cases
// @ts-ignore
import { SwapProviderProtocolsEnum } from './swap-provider-protocols-enum';
// May contain unused imports in some cases
// @ts-ignore
import { SwapRequiredAction } from './swap-required-action';

/**
 * 
 * @export
 * @interface SwapOperation
 */
export interface SwapOperation {
    /**
     * The id of the swap operation
     * @type {string}
     * @memberof SwapOperation
     */
    'id': string;
    /**
     * The id of the vault account or account id
     * @type {string}
     * @memberof SwapOperation
     */
    'accountId': string;
    /**
     * The uuid that identifies the provider
     * @type {string}
     * @memberof SwapOperation
     */
    'providerId': string;
    /**
     * 
     * @type {ProviderCategoryEnum}
     * @memberof SwapOperation
     */
    'category': ProviderCategoryEnum;
    /**
     * 
     * @type {SwapProviderProtocolsEnum}
     * @memberof SwapOperation
     */
    'protocol': SwapProviderProtocolsEnum;
    /**
     * **CREATED** – The swap request has been created but not yet started. **PENDING_USER_ACTION** – Awaiting a user action (e.g. signature or approval). **PENDING_PROVIDER_ACTION** – Awaiting the provider to process the request. **PROCESSING** – The swap is actively being executed on‐chain. **COMPLETED** – The swap has finished successfully. **CANCELED** – The swap was cancelled by user or provider before completion. **FAILED** – The swap attempted but encountered an error.
     * @type {string}
     * @memberof SwapOperation
     */
    'status': SwapOperationStatusEnum;
    /**
     * The amount of tokens the swapper will provide
     * @type {string}
     * @memberof SwapOperation
     */
    'inputAmount': string;
    /**
     * The id of the asset the swapper will provide
     * @type {string}
     * @memberof SwapOperation
     */
    'inputAsset': string;
    /**
     * The slippage tolerance is a percentage. The slippage tolerance is the maximum amount the price can change between the time the transaction is submitted and the time it is executed
     * @type {number}
     * @memberof SwapOperation
     */
    'slippageTolerance': number;
    /**
     * The minimum amount of tokens the swapper will receive
     * @type {string}
     * @memberof SwapOperation
     */
    'outputMinAmount': string;
    /**
     * Maximum amount of tokens that the swapper will receive
     * @type {string}
     * @memberof SwapOperation
     */
    'outputMaxAmount': string;
    /**
     * The id of the asset the swapper will receive
     * @type {string}
     * @memberof SwapOperation
     */
    'outputAsset': string;
    /**
     * The required actions for the swap, including the type of action, the status of the action, and the transaction id
     * @type {Array<SwapRequiredAction>}
     * @memberof SwapOperation
     */
    'requiredActions': Array<SwapRequiredAction>;
    /**
     * The creation time of the swap operation (ISO Date time).
     * @type {string}
     * @memberof SwapOperation
     */
    'createdAt': string;
    /**
     * The last update time of the swap operation (ISO Date time).
     * @type {string}
     * @memberof SwapOperation
     */
    'updatedAt': string;
    /**
     * Fireblocks user id that issued the swap
     * @type {string}
     * @memberof SwapOperation
     */
    'createdBy': string;
    /**
     * Final amount of tokens that the swapper will receive
     * @type {string}
     * @memberof SwapOperation
     */
    'outputFinalAmount'?: string | null;
    /**
     * 
     * @type {SwapFlowError}
     * @memberof SwapOperation
     */
    'error'?: SwapFlowError | null;
}

export const SwapOperationStatusEnum = {
    Created: 'CREATED',
    TransactionInProgress: 'TRANSACTION_IN_PROGRESS',
    PendingProviderAction: 'PENDING_PROVIDER_ACTION',
    Completed: 'COMPLETED',
    Canceled: 'CANCELED',
    Failed: 'FAILED'
} as const;

export type SwapOperationStatusEnum = typeof SwapOperationStatusEnum[keyof typeof SwapOperationStatusEnum];


