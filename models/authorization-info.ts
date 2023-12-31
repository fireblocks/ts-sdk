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
import { AuthorizationGroups } from './authorization-groups';

/**
 * The information about your [Transaction Authorization Policy (TAP).](https://developers.fireblocks.com/docs/capabilities#transaction-authorization-policy-tap)
 * @export
 * @interface AuthorizationInfo
 */
export interface AuthorizationInfo {
    /**
     * 
     * @type {boolean}
     * @memberof AuthorizationInfo
     */
    'allowOperatorAsAuthorizer'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthorizationInfo
     */
    'logic'?: AuthorizationInfoLogicEnum;
    /**
     * 
     * @type {Array<AuthorizationGroups>}
     * @memberof AuthorizationInfo
     */
    'groups'?: Array<AuthorizationGroups>;
}

export const AuthorizationInfoLogicEnum = {
    And: 'AND',
    Or: 'OR'
} as const;

export type AuthorizationInfoLogicEnum = typeof AuthorizationInfoLogicEnum[keyof typeof AuthorizationInfoLogicEnum];


