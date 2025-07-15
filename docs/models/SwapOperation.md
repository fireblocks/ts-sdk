# SwapOperation

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the swap operation | [default to undefined]|
|**accountId** | **string** | The id of the vault account or account id | [default to undefined]|
|**providerId** | **string** | The uuid that identifies the provider | [default to undefined]|
|**category** | [**ProviderCategoryEnum**](ProviderCategoryEnum.md) |  | [default to undefined]|
|**protocol** | [**SwapProviderProtocolsEnum**](SwapProviderProtocolsEnum.md) |  | [default to undefined]|
|**status** | **string** | **CREATED** – The swap request has been created but not yet started. **PENDING_USER_ACTION** – Awaiting a user action (e.g. signature or approval). **PENDING_PROVIDER_ACTION** – Awaiting the provider to process the request. **PROCESSING** – The swap is actively being executed on‐chain. **COMPLETED** – The swap has finished successfully. **CANCELED** – The swap was cancelled by user or provider before completion. **FAILED** – The swap attempted but encountered an error. | [default to undefined]|
|**inputAmount** | **string** | The amount of tokens the swapper will provide | [default to undefined]|
|**inputAsset** | **string** | The id of the asset the swapper will provide | [default to undefined]|
|**slippageTolerance** | **number** | The slippage tolerance is a percentage. The slippage tolerance is the maximum amount the price can change between the time the transaction is submitted and the time it is executed | [default to undefined]|
|**outputMinAmount** | **string** | The minimum amount of tokens the swapper will receive | [default to undefined]|
|**outputMaxAmount** | **string** | Maximum amount of tokens that the swapper will receive | [default to undefined]|
|**outputAsset** | **string** | The id of the asset the swapper will receive | [default to undefined]|
|**requiredActions** | [**Array&lt;SwapRequiredAction&gt;**](SwapRequiredAction.md) | The required actions for the swap, including the type of action, the status of the action, and the transaction id | [default to undefined]|
|**createdAt** | **string** | The creation time of the swap operation (ISO Date time). | [default to undefined]|
|**updatedAt** | **string** | The last update time of the swap operation (ISO Date time). | [default to undefined]|
|**createdBy** | **string** | Fireblocks user id that issued the swap | [default to undefined]|
|**outputFinalAmount** | **string** | Final amount of tokens that the swapper will receive | [optional] [default to undefined]|
|**error** | [**SwapFlowError**](SwapFlowError.md) |  | [optional] [default to undefined]|


## Enum: SwapOperationStatusEnum


* `Created` (value: `'CREATED'`)

* `TransactionInProgress` (value: `'TRANSACTION_IN_PROGRESS'`)

* `PendingProviderAction` (value: `'PENDING_PROVIDER_ACTION'`)

* `Completed` (value: `'COMPLETED'`)

* `Canceled` (value: `'CANCELED'`)

* `Failed` (value: `'FAILED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
