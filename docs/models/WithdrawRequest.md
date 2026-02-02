# WithdrawRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | id of position to withdraw | [default to undefined]|
|**fee** | **string** | Represents the fee for a transaction, which can be specified as a percentage value. Only one of fee/feeLevel is required. | [optional] [default to undefined]|
|**feeLevel** | [**FeeLevel**](FeeLevel.md) |  | [optional] [default to undefined]|
|**txNote** | **string** | The note to associate with the transactions. | [optional] [default to undefined]|
|**amount** | **string** | Amount of tokens to withdraw. Only supported for Cosmos chains to enable partial withdrawals. For other chains, this field is ignored and the entire available amount will be withdrawn. If not provided, the entire available amount will be withdrawn. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
