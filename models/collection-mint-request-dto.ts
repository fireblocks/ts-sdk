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
import { CollectionTokenMetadataDto } from './collection-token-metadata-dto';

/**
 * 
 * @export
 * @interface CollectionMintRequestDto
 */
export interface CollectionMintRequestDto {
    /**
     * The id of the vault account that initiates the mint function.
     * @type {string}
     * @memberof CollectionMintRequestDto
     */
    'vaultAccountId': string;
    /**
     * The EVM address to mint to 
     * @type {string}
     * @memberof CollectionMintRequestDto
     */
    'to': string;
    /**
     * The token id, recommended to have numerical format and in sequential order
     * @type {string}
     * @memberof CollectionMintRequestDto
     */
    'tokenId': string;
    /**
     * For ERC721, amount is optional or should always be 1 and for ERC1155, amount should be 1 or greater
     * @type {string}
     * @memberof CollectionMintRequestDto
     */
    'amount'?: string;
    /**
     * URL of metadata uploaded, skip uploading to IPFS if this field is provided with any value
     * @type {string}
     * @memberof CollectionMintRequestDto
     */
    'metadataURI'?: string;
    /**
     * Metadata to upload
     * @type {CollectionTokenMetadataDto}
     * @memberof CollectionMintRequestDto
     */
    'metadata'?: CollectionTokenMetadataDto;
}
