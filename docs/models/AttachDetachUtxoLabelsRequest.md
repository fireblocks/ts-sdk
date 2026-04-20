# AttachDetachUtxoLabelsRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**utxoIdentifiers** | [**Array&lt;UtxoIdentifier&gt;**](UtxoIdentifier.md) | List of UTXO identifiers to apply label changes to | [default to undefined]|
|**labelsToAttach** | **Array&lt;string&gt;** | Labels to attach to the specified UTXOs. At least one of labelsToAttach or labelsToDetach must be provided. | [optional] [default to undefined]|
|**labelsToDetach** | **Array&lt;string&gt;** | Labels to detach from the specified UTXOs. At least one of labelsToAttach or labelsToDetach must be provided. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
