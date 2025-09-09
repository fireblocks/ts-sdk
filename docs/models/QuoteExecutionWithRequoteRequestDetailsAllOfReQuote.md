# QuoteExecutionWithRequoteRequestDetailsAllOfReQuote

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Indicates that the order should be re-quoted if the original quote is expired. This will lead to a market order. | [default to undefined]|
|**count** | **number** | If quote is expired, how many times to re-generate new quotes to try having the order executed as in the original quote. | [default to undefined]|
|**slippageBps** | **number** | Slippage tolerance in basis points (bps) for quote orders - 1 is 0.01% and 10000 is 100% | [optional] [default to 1]|


## Enum: QuoteExecutionWithRequoteRequestDetailsAllOfReQuoteTypeEnum


* `Market` (value: `'MARKET'`)

* `Retry` (value: `'RETRY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
