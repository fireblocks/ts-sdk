# CreateQuote

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**scope** | [**Array&lt;CreateQuoteScopeInner&gt;**](CreateQuoteScopeInner.md) |  | [default to undefined]|
|**baseAssetId** | **string** | The asset you receive on BUY / give on SELL. | [default to undefined]|
|**quoteAssetId** | **string** | The counter asset used to pay/receive. | [default to undefined]|
|**baseAmount** | **string** | The amount to convert from | [default to undefined]|
|**side** | [**Side**](Side.md) |  | [default to undefined]|
|**slippageBps** | **number** | Slippage tolerance in basis points (bps) for defi quotes - 1 is 0.01% and 10000 is 100% | [optional] [default to 50]|
|**settlement** | [**DVPSettlement**](DVPSettlement.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
