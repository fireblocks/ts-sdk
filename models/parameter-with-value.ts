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
import { LeanAbiFunction } from './lean-abi-function';
// May contain unused imports in some cases
// @ts-ignore
import { Parameter } from './parameter';

/**
 * 
 * @export
 * @interface ParameterWithValue
 */
export interface ParameterWithValue {
    /**
     * The name of the parameter as it appears in the ABI
     * @type {string}
     * @memberof ParameterWithValue
     */
    'name': string;
    /**
     * The type of the parameter as it appears in the ABI
     * @type {string}
     * @memberof ParameterWithValue
     */
    'type': string;
    /**
     * A description of the parameter, fetched from the devdoc of this contract
     * @type {string}
     * @memberof ParameterWithValue
     */
    'description'?: string;
    /**
     * The  internal type of the parameter as it appears in the ABI
     * @type {string}
     * @memberof ParameterWithValue
     */
    'internalType'?: string;
    /**
     * 
     * @type {Array<Parameter>}
     * @memberof ParameterWithValue
     */
    'components'?: Array<Parameter>;
    /**
     * The value of the parameter. can also be ParameterWithValue
     * @type {string}
     * @memberof ParameterWithValue
     */
    'value'?: string;
    /**
     * The function value of this param (if has one). If this is set, the `value` shouldn`t be. Used for proxies
     * @type {LeanAbiFunction}
     * @memberof ParameterWithValue
     */
    'functionValue'?: LeanAbiFunction;
}

