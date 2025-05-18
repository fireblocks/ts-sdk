# WriteCallFunctionDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The vault account id this contract was deploy from | [default to undefined]|
|**abiFunction** | [**WriteCallFunctionDtoAbiFunction**](WriteCallFunctionDtoAbiFunction.md) |  | [default to undefined]|
|**amount** | **string** | Amount in base asset. Being used in payable functions | [optional] [default to undefined]|
|**feeLevel** | **string** | Fee level for the write function transaction. interchangeable with the \&#39;fee\&#39; field | [optional] [default to undefined]|
|**fee** | **string** | Max fee amount for the write function transaction. interchangeable with the \&#39;feeLevel\&#39; field | [optional] [default to undefined]|
|**note** | **string** | Custom note, not sent to the blockchain, that describes the transaction at your Fireblocks workspace | [optional] [default to undefined]|
|**useGasless** | **boolean** | Indicates whether the token should be created in a gasless manner, utilizing the ERC-2771 standard. When set to true, the transaction will be relayed by a designated relayer. The workspace must be configured to use Fireblocks gasless relay. | [optional] [default to undefined]|
|**externalId** | **string** | External id that can be used to identify the transaction in your system. The unique identifier of the transaction outside of Fireblocks with max length of 255 characters | [optional] [default to undefined]|


## Enum: WriteCallFunctionDtoFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
