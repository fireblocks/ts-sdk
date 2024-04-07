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
 * @enum {string}
 */

export const ExecutionOperationStatus = {
    Pending: 'PENDING',
    ValidationInProgress: 'VALIDATION_IN_PROGRESS',
    ValidationFailed: 'VALIDATION_FAILED',
    ValidationCompleted: 'VALIDATION_COMPLETED',
    PreviewRequested: 'PREVIEW_REQUESTED',
    PreviewInProgress: 'PREVIEW_IN_PROGRESS',
    PreviewFailed: 'PREVIEW_FAILED',
    ReadyForLaunch: 'READY_FOR_LAUNCH',
    ExecutionRequested: 'EXECUTION_REQUESTED',
    ExecutionInProgress: 'EXECUTION_IN_PROGRESS',
    ExecutionCompleted: 'EXECUTION_COMPLETED',
    ExecutionFailed: 'EXECUTION_FAILED'
} as const;

export type ExecutionOperationStatus = typeof ExecutionOperationStatus[keyof typeof ExecutionOperationStatus];


