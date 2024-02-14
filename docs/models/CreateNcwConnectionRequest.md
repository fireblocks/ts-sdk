# CreateNcwConnectionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**ncwId** | **string** | The ID of the Non-Custodial Wallet to connect to the dApp. | [default to undefined]|
|**ncwAccountId** | **number** | The NCW account ID to connect to the dApp. | [default to undefined]|
|**feeLevel** | **string** | The default fee level. Valid values are &#x60;MEDIUM&#x60; and &#x60;HIGH&#x60;. | [default to undefined]|
|**uri** | **string** | The WalletConnect uri provided by the dapp. | [default to undefined]|
|**chainIds** | **Array&lt;string&gt;** | The IDs of the blockchain networks used in the Web3 connection (Currently required in V1 connections only). | [optional] [default to undefined]|


## Enum: CreateNcwConnectionRequestFeeLevelEnum


* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
