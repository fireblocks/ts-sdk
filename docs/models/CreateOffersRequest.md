# CreateOffersRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**baseAssetId** | **string** | The source asset identifier. | [default to undefined]|
|**quoteAssetId** | **string** | The target asset identifier. | [default to undefined]|
|**baseAmount** | **string** | The amount to get offers for | [default to undefined]|
|**side** | [**Side**](Side.md) |  | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**slippageBps** | **number** | Slippage tolerance in basis points (bps) for defi quotes - 1 is 0.01% and 10000 is 100%. If not set, defaults to 50 bps (0.5%). | [optional] [default to 50]|
|**settlement** | [**DVPSettlement**](DVPSettlement.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
