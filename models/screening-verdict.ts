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
import { Destination } from './destination';
// May contain unused imports in some cases
// @ts-ignore
import { ScreeningVerdictMatchedRule } from './screening-verdict-matched-rule';

/**
 * 
 * @export
 * @interface ScreeningVerdict
 */
export interface ScreeningVerdict {
    /**
     * 
     * @type {string}
     * @memberof ScreeningVerdict
     */
    'verdict': ScreeningVerdictVerdictEnum;
    /**
     * 
     * @type {string}
     * @memberof ScreeningVerdict
     */
    'executionOperationId': string;
    /**
     * 
     * @type {Destination}
     * @memberof ScreeningVerdict
     */
    'account': Destination;
    /**
     * 
     * @type {string}
     * @memberof ScreeningVerdict
     */
    'assetId': string;
    /**
     * 
     * @type {string}
     * @memberof ScreeningVerdict
     */
    'amount': string;
    /**
     * 
     * @type {ScreeningVerdictMatchedRule}
     * @memberof ScreeningVerdict
     */
    'matchedRule'?: ScreeningVerdictMatchedRule;
}

export const ScreeningVerdictVerdictEnum = {
    Passed: 'PASSED',
    PassedWithAlert: 'PASSED_WITH_ALERT',
    Rejected: 'REJECTED',
    Failed: 'FAILED',
    Bypassed: 'BYPASSED'
} as const;

export type ScreeningVerdictVerdictEnum = typeof ScreeningVerdictVerdictEnum[keyof typeof ScreeningVerdictVerdictEnum];

