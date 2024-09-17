# TokenLinkDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The token link id | [default to undefined]|
|**status** | **string** | The token status | [default to undefined]|
|**type** | **string** | The type of token | [optional] [default to undefined]|
|**refId** | **string** | The Fireblocks\&#39; reference id | [optional] [default to undefined]|
|**displayName** | **string** | The token display name. If was not provided, would be taken from the contract template | [optional] [default to undefined]|
|**tokenMetadata** | [**TokenLinkDtoTokenMetadata**](TokenLinkDtoTokenMetadata.md) |  | [optional] [default to undefined]|


## Enum: TokenLinkDtoStatusEnum


* `Pending` (value: `'PENDING'`)

* `Completed` (value: `'COMPLETED'`)



## Enum: TokenLinkDtoTypeEnum


* `FungibleToken` (value: `'FUNGIBLE_TOKEN'`)

* `NonFungibleToken` (value: `'NON_FUNGIBLE_TOKEN'`)

* `TokenUtility` (value: `'TOKEN_UTILITY'`)

* `TokenExtension` (value: `'TOKEN_EXTENSION'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
