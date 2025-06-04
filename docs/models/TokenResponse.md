# TokenResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The Fireblocks NFT asset id | [default to undefined]|
|**tokenId** | **string** | Token id within the contract/collection | [default to undefined]|
|**standard** | **string** | ERC721 / ERC1155 | [default to undefined]|
|**blockchainDescriptor** | **string** |  | [default to undefined]|
|**metadataURI** | **string** | URL of the original token JSON metadata | [optional] [default to undefined]|
|**cachedMetadataURI** | **string** | URL of the cached token JSON metadata | [optional] [default to undefined]|
|**media** | [**Array&lt;MediaEntityResponse&gt;**](MediaEntityResponse.md) | Media items extracted from metadata JSON | [optional] [default to undefined]|
|**spam** | [**SpamTokenResponse**](SpamTokenResponse.md) | Token spam status | [optional] [default to undefined]|
|**collection** | [**TokenCollectionResponse**](TokenCollectionResponse.md) | Parent collection information | [optional] [default to undefined]|
|**description** | **string** |  | [optional] [default to undefined]|
|**name** | **string** |  | [optional] [default to undefined]|


## Enum: TokenResponseBlockchainDescriptorEnum


* `Eth` (value: `'ETH'`)

* `EthTest3` (value: `'ETH_TEST3'`)

* `EthTest5` (value: `'ETH_TEST5'`)

* `EthTest6` (value: `'ETH_TEST6'`)

* `Polygon` (value: `'POLYGON'`)

* `PolygonTestMumbai` (value: `'POLYGON_TEST_MUMBAI'`)

* `AmoyPolygonTest` (value: `'AMOY_POLYGON_TEST'`)

* `Xtz` (value: `'XTZ'`)

* `XtzTest` (value: `'XTZ_TEST'`)

* `BasechainEth` (value: `'BASECHAIN_ETH'`)

* `BasechainEthTest3` (value: `'BASECHAIN_ETH_TEST3'`)

* `BasechainEthTest5` (value: `'BASECHAIN_ETH_TEST5'`)

* `Etherlink` (value: `'ETHERLINK'`)

* `EtherlinkTest` (value: `'ETHERLINK_TEST'`)

* `Mantle` (value: `'MANTLE'`)

* `MantleTest` (value: `'MANTLE_TEST'`)

* `GunGunzilla` (value: `'GUN_GUNZILLA'`)

* `GunGunzillaTest` (value: `'GUN_GUNZILLA_TEST'`)

* `EthSoneium` (value: `'ETH_SONEIUM'`)

* `SoneiumMinatoTest` (value: `'SONEIUM_MINATO_TEST'`)

* `IotxIotex` (value: `'IOTX_IOTEX'`)

* `KlayKaia` (value: `'KLAY_KAIA'`)

* `KlayKaiaTest` (value: `'KLAY_KAIA_TEST'`)

* `Apechain` (value: `'APECHAIN'`)

* `ApechainTest` (value: `'APECHAIN_TEST'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
