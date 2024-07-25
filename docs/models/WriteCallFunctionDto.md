# WriteCallFunctionDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The vault account id this contract was deploy from | [default to undefined]|
|**abiFunction** | [**WriteAbiFunction**](WriteAbiFunction.md) |  | [default to undefined]|
|**amount** | **string** | Amount in base asset. Being used in payable functions | [optional] [default to undefined]|
|**feeLevel** | **string** | Fee level for the write function transaction. interchangeable with the \&#39;fee\&#39; field | [optional] [default to undefined]|
|**fee** | **string** | Max fee amount for the write function transaction. interchangeable with the \&#39;feeLevel\&#39; field | [optional] [default to undefined]|
|**note** | **string** | Custom note, not sent to the blockchain, that describes the transaction at your Fireblocks workspace | [optional] [default to undefined]|


## Enum: WriteCallFunctionDtoFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
