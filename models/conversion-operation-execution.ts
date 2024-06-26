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
import { ConversionOperationConfigParams } from './conversion-operation-config-params';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionOperationExecutionOutput } from './conversion-operation-execution-output';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionOperationFailure } from './conversion-operation-failure';

/**
 * 
 * @export
 * @interface ConversionOperationExecution
 */
export interface ConversionOperationExecution {
    /**
     * 
     * @type {ConversionOperationConfigParams}
     * @memberof ConversionOperationExecution
     */
    'input': ConversionOperationConfigParams;
    /**
     * 
     * @type {number}
     * @memberof ConversionOperationExecution
     */
    'startedAt': number;
    /**
     * 
     * @type {ConversionOperationExecutionOutput}
     * @memberof ConversionOperationExecution
     */
    'output'?: ConversionOperationExecutionOutput;
    /**
     * 
     * @type {number}
     * @memberof ConversionOperationExecution
     */
    'finishedAt'?: number;
    /**
     * 
     * @type {ConversionOperationFailure}
     * @memberof ConversionOperationExecution
     */
    'failure'?: ConversionOperationFailure;
}

