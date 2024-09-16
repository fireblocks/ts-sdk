# CollectionMintRequestDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The id of the vault account that initiates the mint function. | [default to undefined]|
|**to** | **string** | The EVM address to mint to  | [default to undefined]|
|**tokenId** | **string** | The token id, recommended to have numerical format and in sequential order | [default to undefined]|
|**amount** | **string** | For ERC721, amount is optional or should always be 1 and for ERC1155, amount should be 1 or greater | [optional] [default to undefined]|
|**metadataURI** | **string** | URL of metadata uploaded, skip uploading to IPFS if this field is provided with any value | [optional] [default to undefined]|
|**metadata** | [**CollectionTokenMetadataDto**](CollectionTokenMetadataDto.md) | Metadata to upload | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
