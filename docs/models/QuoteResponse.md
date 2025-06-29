# QuoteResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**protocol** | [**SwapProviderProtocolsEnum**](SwapProviderProtocolsEnum.md) |  | [default to undefined]|
|**inputAmount** | **string** | The amount of tokens the swapper will provide | [default to undefined]|
|**inputAsset** | **string** | The id of the asset the swapper will provide | [default to undefined]|
|**slippageTolerance** | **number** | The slippage tolerance is a percentage. The slippage tolerance is the maximum amount the price can change between the time the transaction is submitted and the time it is executed | [default to undefined]|
|**outputMinAmount** | **string** | The minimum amount of tokens the swapper will receive | [default to undefined]|
|**outputMaxAmount** | **string** | Maximum amount of tokens that the swapper will receive | [default to undefined]|
|**outputAsset** | **string** | The id of the asset the swapper will receive | [default to undefined]|
|**additionalData** | [**ProviderAdditionalData**](ProviderAdditionalData.md) |  | [default to undefined]|
|**providerQuoteId** | **string** | An identifier that uniquely identifies the received quote | [default to undefined]|
|**expiredAt** | **string** | When was the received &#x60;providerQuoteId&#x60; is expired (ISO Date time). | [default to undefined]|
|**requiredActions** | [**Array&lt;SwapRequiredActionsEnum&gt;**](SwapRequiredActionsEnum.md) | The required actions for completing a swap operation | [default to undefined]|
|**estimatedFees** | [**NonWalletQuoteFee**](NonWalletQuoteFee.md) |  | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
