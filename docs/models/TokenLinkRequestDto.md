# TokenLinkRequestDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | The type of token being linked | [default to undefined]|
|**refId** | **string** | The Fireblocks\&#39; token link reference id. For example, \&#39;BQ5R_BDESC_ABC\&#39; if it\&#39;s a fungible       asset | [optional] [default to undefined]|
|**displayName** | **string** | The token display name | [optional] [default to undefined]|
|**baseAssetId** | **string** | The blockchain base assetId | [optional] [default to undefined]|
|**contractAddress** | **string** | The contract\&#39;s onchain address | [optional] [default to undefined]|


## Enum: TokenLinkRequestDtoTypeEnum


* `FungibleToken` (value: `'FUNGIBLE_TOKEN'`)

* `NonFungibleToken` (value: `'NON_FUNGIBLE_TOKEN'`)

* `TokenUtility` (value: `'TOKEN_UTILITY'`)

* `TokenExtension` (value: `'TOKEN_EXTENSION'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
