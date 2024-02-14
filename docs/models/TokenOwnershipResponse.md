# TokenOwnershipResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The Fireblocks NFT asset id | [default to undefined]|
|**tokenId** | **string** | Token id within the contract/collection | [default to undefined]|
|**standard** | **string** | ERC721 / ERC1155 | [default to undefined]|
|**balance** | **string** |  | [default to undefined]|
|**ownershipStartTime** | **number** |  | [default to undefined]|
|**ownershipLastUpdateTime** | **number** |  | [default to undefined]|
|**blockchainDescriptor** | **string** |  | [default to undefined]|
|**status** | **string** | Owned Token\&#39;s status | [default to undefined]|
|**metadataURI** | **string** | URL of the original token JSON metadata | [optional] [default to undefined]|
|**cachedMetadataURI** | **string** | URL of the cached token JSON metadata | [optional] [default to undefined]|
|**media** | [**Array&lt;MediaEntityResponse&gt;**](MediaEntityResponse.md) | Media items extracted from metadata JSON | [optional] [default to undefined]|
|**spam** | [**SpamOwnershipResponse**](SpamOwnershipResponse.md) |  | [optional] [default to undefined]|
|**collection** | [**TokenCollectionResponse**](TokenCollectionResponse.md) |  | [optional] [default to undefined]|
|**vaultAccountId** | **string** |  | [optional] [default to undefined]|
|**description** | **string** |  | [optional] [default to undefined]|
|**name** | **string** |  | [optional] [default to undefined]|
|**ncwId** | **string** | Ownership Non-Custodial Wallet ID | [optional] [default to undefined]|
|**ncwAccountId** | **string** | Ownership Non-Custodial Wallet\&#39;s account ID | [optional] [default to undefined]|


## Enum: TokenOwnershipResponseBlockchainDescriptorEnum


* `Eth` (value: `'ETH'`)

* `EthTest3` (value: `'ETH_TEST3'`)

* `EthTest5` (value: `'ETH_TEST5'`)

* `Polygon` (value: `'POLYGON'`)

* `PolygonTestMumbai` (value: `'POLYGON_TEST_MUMBAI'`)

* `Xtz` (value: `'XTZ'`)

* `XtzTest` (value: `'XTZ_TEST'`)

* `BasechainEth` (value: `'BASECHAIN_ETH'`)



## Enum: TokenOwnershipResponseStatusEnum


* `Listed` (value: `'LISTED'`)

* `Archived` (value: `'ARCHIVED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
