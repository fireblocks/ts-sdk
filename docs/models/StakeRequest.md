# StakeRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The source vault account to stake from | [default to undefined]|
|**providerId** | [**StakingProvider**](StakingProvider.md) |  | [default to undefined]|
|**stakeAmount** | **string** | Amount of tokens to stake | [default to undefined]|
|**txNote** | **string** | The note to associate with the stake transactions. | [optional] [default to undefined]|
|**fee** | **string** | Represents the fee for a transaction, which can be specified as a percentage value. Only one of fee/feeLevel is required. | [optional] [default to undefined]|
|**feeLevel** | [**FeeLevel**](FeeLevel.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
