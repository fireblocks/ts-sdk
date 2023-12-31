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
import { CollectionOwnershipResponse } from './collection-ownership-response';
// May contain unused imports in some cases
// @ts-ignore
import { Paging } from './paging';

/**
 * 
 * @export
 * @interface ListOwnedCollections200Response
 */
export interface ListOwnedCollections200Response {
    /**
     * 
     * @type {Paging}
     * @memberof ListOwnedCollections200Response
     */
    'paging'?: Paging;
    /**
     * 
     * @type {Array<CollectionOwnershipResponse>}
     * @memberof ListOwnedCollections200Response
     */
    'data'?: Array<CollectionOwnershipResponse>;
}

