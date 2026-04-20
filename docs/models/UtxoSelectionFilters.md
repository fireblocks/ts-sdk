# UtxoSelectionFilters

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**includeAllLabels** | **Array&lt;string&gt;** | Only include UTXOs that have ALL of these labels. | [optional] [default to undefined]|
|**includeAnyLabels** | **Array&lt;string&gt;** | Only include UTXOs that have at least one of these labels. | [optional] [default to undefined]|
|**excludeAnyLabels** | **Array&lt;string&gt;** | Exclude UTXOs that have any of these labels. | [optional] [default to undefined]|
|**address** | **string** | Only include UTXOs from this specific address. | [optional] [default to undefined]|
|**minAmount** | **string** | Minimum UTXO amount in the asset\&#39;s base unit (e.g., BTC). | [optional] [default to undefined]|
|**maxAmount** | **string** | Maximum UTXO amount in the asset\&#39;s base unit (e.g., BTC). | [optional] [default to undefined]|
|**useChange** | **boolean** | Set to false to exclude change UTXOs. Default is true. | [optional] [default to undefined]|
|**useCoinbase** | **boolean** | Set to false to exclude coinbase UTXOs. Default is true. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
