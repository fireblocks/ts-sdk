# ExecuteActionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The source vault account to stake from | [default to undefined]|
|**providerId** | **string** | The ID of the provider | [default to undefined]|
|**stakeAmount** | **string** | Amount of tokens to stake | [default to undefined]|
|**id** | **string** | id of position to withdraw | [default to undefined]|
|**txNote** | **string** | The note to associate with the transactions. | [optional] [default to undefined]|
|**fee** | **string** | Represents the fee for a transaction, which can be specified as a percentage value. Only one of fee/feeLevel is required. | [optional] [default to undefined]|
|**feeLevel** | **string** | Represents the fee level for a transaction, which can be set as slow, medium, or fast. Only one of fee/feeLevel is required. | [optional] [default to undefined]|
|**amount** | **string** | The number of tokens to unstake.  This optional field is applicable only for liquid staking and allows for a partial unstake of the position.  If not provided, the entire position will be unstaked by default. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
