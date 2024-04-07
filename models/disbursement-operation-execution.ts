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
import { DisbursementOperationExecutionOutput } from './disbursement-operation-execution-output';
// May contain unused imports in some cases
// @ts-ignore
import { DisbursementOperationInput } from './disbursement-operation-input';
// May contain unused imports in some cases
// @ts-ignore
import { OperationExecutionFailure } from './operation-execution-failure';

/**
 * 
 * @export
 * @interface DisbursementOperationExecution
 */
export interface DisbursementOperationExecution {
    /**
     * 
     * @type {DisbursementOperationInput}
     * @memberof DisbursementOperationExecution
     */
    'input': DisbursementOperationInput;
    /**
     * 
     * @type {number}
     * @memberof DisbursementOperationExecution
     */
    'startedAt': number;
    /**
     * 
     * @type {DisbursementOperationExecutionOutput}
     * @memberof DisbursementOperationExecution
     */
    'output'?: DisbursementOperationExecutionOutput;
    /**
     * 
     * @type {string}
     * @memberof DisbursementOperationExecution
     */
    'payoutId'?: string;
    /**
     * 
     * @type {number}
     * @memberof DisbursementOperationExecution
     */
    'finishedAt'?: number;
    /**
     * 
     * @type {OperationExecutionFailure}
     * @memberof DisbursementOperationExecution
     */
    'failure'?: OperationExecutionFailure;
}
