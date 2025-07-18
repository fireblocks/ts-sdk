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
 * @interface TravelRulePolicyRuleResponse
 */
export interface TravelRulePolicyRuleResponse {
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'action': TravelRulePolicyRuleResponseActionEnum;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'sourceType'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'sourceSubType'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'destType'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'destSubType'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'destAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'sourceId'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'destId'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'asset'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'baseAsset'?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelRulePolicyRuleResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelRulePolicyRuleResponse
     */
    'amountUSD'?: number;
    /**
     * The network protocol of the token
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'networkProtocol'?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelRulePolicyRuleResponse
     */
    'operation'?: string;
}

export const TravelRulePolicyRuleResponseActionEnum = {
    Screen: 'SCREEN',
    Pass: 'PASS',
    Freeze: 'FREEZE'
} as const;

export type TravelRulePolicyRuleResponseActionEnum = typeof TravelRulePolicyRuleResponseActionEnum[keyof typeof TravelRulePolicyRuleResponseActionEnum];


