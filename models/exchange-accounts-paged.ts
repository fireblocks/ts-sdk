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
import { ExchangeAccount } from './exchange-account';
// May contain unused imports in some cases
// @ts-ignore
import { ExchangeAccountsPagedPaging } from './exchange-accounts-paged-paging';

/**
 * 
 * @export
 * @interface ExchangeAccountsPaged
 */
export interface ExchangeAccountsPaged {
    /**
     * 
     * @type {Array<ExchangeAccount>}
     * @memberof ExchangeAccountsPaged
     */
    'ExchangeAccount'?: Array<ExchangeAccount>;
    /**
     * 
     * @type {ExchangeAccountsPagedPaging}
     * @memberof ExchangeAccountsPaged
     */
    'paging'?: ExchangeAccountsPagedPaging;
    /**
     * 
     * @type {string}
     * @memberof ExchangeAccountsPaged
     */
    'prevUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExchangeAccountsPaged
     */
    'nextUrl'?: string;
}

