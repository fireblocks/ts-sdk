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
import { TravelRulePolicyRuleResponse } from './travel-rule-policy-rule-response';

/**
 * 
 * @export
 * @interface ScreeningPolicyResponse
 */
export interface ScreeningPolicyResponse {
    /**
     * 
     * @type {TravelRulePolicyRuleResponse}
     * @memberof ScreeningPolicyResponse
     */
    'policy': TravelRulePolicyRuleResponse;
    /**
     * 
     * @type {boolean}
     * @memberof ScreeningPolicyResponse
     */
    'isDefault': boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreeningPolicyResponse
     */
    'lastUpdate': string;
    /**
     * 
     * @type {string}
     * @memberof ScreeningPolicyResponse
     */
    'policyStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreeningPolicyResponse
     */
    'createDate'?: string;
}

