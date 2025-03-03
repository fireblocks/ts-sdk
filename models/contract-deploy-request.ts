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
import { ParameterWithValue } from './parameter-with-value';

/**
 * 
 * @export
 * @interface ContractDeployRequest
 */
export interface ContractDeployRequest {
    /**
     * The base asset identifier of the blockchain you want to deploy to
     * @type {string}
     * @memberof ContractDeployRequest
     */
    'assetId': string;
    /**
     * The vault account id you wish to deploy from
     * @type {string}
     * @memberof ContractDeployRequest
     */
    'vaultAccountId': string;
    /**
     * The constructor parameters of this contract
     * @type {Array<ParameterWithValue>}
     * @memberof ContractDeployRequest
     */
    'constructorParameters'?: Array<ParameterWithValue>;
    /**
     * Indicates whether the token should be created in a gasless manner, utilizing the ERC-2771 standard. When set to true, the transaction will be relayed by a designated relayer. The workspace must be configured to use Fireblocks gasless relay.
     * @type {boolean}
     * @memberof ContractDeployRequest
     */
    'useGasless'?: boolean;
    /**
     * Max fee amount for the write function transaction. interchangeable with the \'feeLevel\' field
     * @type {string}
     * @memberof ContractDeployRequest
     */
    'fee'?: string;
    /**
     * Fee level for the write function transaction. interchangeable with the \'fee\' field
     * @type {string}
     * @memberof ContractDeployRequest
     */
    'feeLevel'?: ContractDeployRequestFeeLevelEnum;
}

export const ContractDeployRequestFeeLevelEnum = {
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH'
} as const;

export type ContractDeployRequestFeeLevelEnum = typeof ContractDeployRequestFeeLevelEnum[keyof typeof ContractDeployRequestFeeLevelEnum];


