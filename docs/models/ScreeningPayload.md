# ScreeningPayload

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**blockchain** | **string** | The blockchain network of the asset being screened. | [optional] [default to undefined]|
|**asset** | **string** | The asset identifier being screened. | [optional] [default to undefined]|
|**assetAmount** | **string** | The amount of the asset involved in the transaction, as a string. | [optional] [default to undefined]|
|**usdValue** | **string** | The USD value of the transaction amount, as a string. | [optional] [default to undefined]|
|**customerRefId** | **string** | Customer-provided reference identifier for tracking. | [optional] [default to undefined]|
|**externalId** | **string** | External identifier for the screening (provider-specific). | [optional] [default to undefined]|
|**address** | **string** | The blockchain address to screen. Used for the &#x60;ADDRESS_SCREENING&#x60; operation. | [optional] [default to undefined]|
|**direction** | [**TransferDirectionEnum**](TransferDirectionEnum.md) |  | [optional] [default to undefined]|
|**sourceAddress** | **Array&lt;string&gt;** | The source blockchain address(es) of the transaction. | [optional] [default to undefined]|
|**destinationAddress** | **Array&lt;string&gt;** | The destination blockchain address(es) of the transaction. | [optional] [default to undefined]|
|**txHash** | **string** | The transaction hash on the blockchain. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
