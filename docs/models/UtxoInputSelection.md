# UtxoInputSelection

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**inputsToSpend** | [**Array&lt;UtxoInput&gt;**](UtxoInput.md) | Force-include specific UTXOs by txHash and index. | [optional] [default to undefined]|
|**inputsToExclude** | [**Array&lt;UtxoInput&gt;**](UtxoInput.md) | Exclude specific UTXOs from selection. | [optional] [default to undefined]|
|**fillFeeForSelectedInputs** | **boolean** | When true and inputsToSpend is provided, automatically add more UTXOs to cover the transaction fee. Requires inputsToSpend.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
