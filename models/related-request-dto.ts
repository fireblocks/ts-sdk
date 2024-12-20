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
 * @interface RelatedRequestDto
 */
export interface RelatedRequestDto {
    /**
     * The status of the request
     * @type {string}
     * @memberof RelatedRequestDto
     */
    'status': RelatedRequestDtoStatusEnum;
    /**
     * Indicates whether there is an ongoing action for this position related to this request
     * @type {boolean}
     * @memberof RelatedRequestDto
     */
    'inProgress': boolean;
    /**
     * Amount of tokens to Unstake
     * @type {string}
     * @memberof RelatedRequestDto
     */
    'amount': string;
    /**
     * The transaction ID of the ongoing request
     * @type {string}
     * @memberof RelatedRequestDto
     */
    'txId'?: string;
}

export const RelatedRequestDtoStatusEnum = {
    Deactivating: 'deactivating'
} as const;

export type RelatedRequestDtoStatusEnum = typeof RelatedRequestDtoStatusEnum[keyof typeof RelatedRequestDtoStatusEnum];


