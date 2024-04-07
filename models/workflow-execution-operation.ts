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
import { DisbursementOperationExecution } from './disbursement-operation-execution';
// May contain unused imports in some cases
// @ts-ignore
import { DisbursementOperationPreview } from './disbursement-operation-preview';
// May contain unused imports in some cases
// @ts-ignore
import { DisbursementOperationType } from './disbursement-operation-type';
// May contain unused imports in some cases
// @ts-ignore
import { DisbursementValidationFailure } from './disbursement-validation-failure';
// May contain unused imports in some cases
// @ts-ignore
import { ExecutionConversionOperation } from './execution-conversion-operation';
// May contain unused imports in some cases
// @ts-ignore
import { ExecutionDisbursementOperation } from './execution-disbursement-operation';
// May contain unused imports in some cases
// @ts-ignore
import { ExecutionOperationStatus } from './execution-operation-status';
// May contain unused imports in some cases
// @ts-ignore
import { ExecutionScreeningOperation } from './execution-screening-operation';
// May contain unused imports in some cases
// @ts-ignore
import { ExecutionTransferOperation } from './execution-transfer-operation';

/**
 * @type WorkflowExecutionOperation
 * @export
 */
export type WorkflowExecutionOperation = ExecutionConversionOperation | ExecutionDisbursementOperation | ExecutionScreeningOperation | ExecutionTransferOperation;

