# CreateMultichainTokenRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The id of the vault account that initiated the request to issue the token | [default to undefined]|
|**createParams** | [**CreateMultichainTokenRequestCreateParams**](CreateMultichainTokenRequestCreateParams.md) |  | [default to undefined]|
|**chains** | **Array&lt;string&gt;** | The base asset identifiers of the blockchains (legacyId) to calculate deterministic addresses | [default to undefined]|
|**salt** | **string** | The salt to calculate the deterministic address. Must be a number between 0 and 2^256 -1, for it to fit in the bytes32 parameter. | [optional] [default to undefined]|
|**displayName** | **string** |  | [optional] [default to undefined]|
|**useGasless** | **boolean** | Indicates whether the token should be created in a gasless manner, utilizing the ERC-2771 standard. When set to true, the transaction will be relayed by a designated relayer. The workspace must be configured to use Fireblocks gasless relay. | [optional] [default to undefined]|
|**fee** | **string** | Max fee amount for the write function transaction. interchangeable with the \&#39;feeLevel\&#39; field | [optional] [default to undefined]|
|**feeLevel** | **string** | Fee level for the write function transaction. interchangeable with the \&#39;fee\&#39; field | [optional] [default to undefined]|


## Enum: CreateMultichainTokenRequestFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
