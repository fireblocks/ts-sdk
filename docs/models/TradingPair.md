# TradingPair

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**providerId** | **string** | The provider that supports this pair. | [default to undefined]|
|**baseAssetId** | **string** | Fireblocks asset ID of the base asset, or &#x60;*&#x60; for any asset on &#x60;baseChain&#x60;. A &#x60;*&#x60; value always comes with &#x60;baseChain&#x60; set. | [default to undefined]|
|**quoteAssetId** | **string** | Fireblocks asset ID of the quote asset, or &#x60;*&#x60; for any asset on &#x60;quoteChain&#x60;. A &#x60;*&#x60; value always comes with &#x60;quoteChain&#x60; set. | [default to undefined]|
|**side** | [**TradingPairSide**](TradingPairSide.md) |  | [default to undefined]|
|**tradeClass** | [**TradeClass**](TradeClass.md) |  | [default to undefined]|
|**accountId** | **string** | The connected account the pair is scoped to. Absent for direct-access providers, and for provider-level pairs that describe what a provider supports before any account is connected. Its absence therefore does not imply the provider is direct-access. | [optional] [default to undefined]|
|**baseChain** | **string** | Blockchain &#x60;legacyId&#x60; of the base asset (e.g. &#x60;ETH&#x60;, &#x60;BASECHAIN_ETH&#x60;, &#x60;ETH-AETH&#x60;, &#x60;SOL&#x60;). Set for leaf crypto assets; absent for fiat and virtual assets. | [optional] [default to undefined]|
|**quoteChain** | **string** | Blockchain &#x60;legacyId&#x60; of the quote asset (e.g. &#x60;ETH&#x60;, &#x60;BASECHAIN_ETH&#x60;, &#x60;ETH-AETH&#x60;, &#x60;SOL&#x60;). Set for leaf crypto assets; absent for fiat and virtual assets. | [optional] [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**prefunded** | **boolean** | Whether the provider requires the funds to be prefunded on the provider account before the order can execute. | [optional] [default to undefined]|
|**min** | **string** | Minimum amount of the base asset for this pair/side, as a decimal string. | [optional] [default to undefined]|
|**max** | **string** | Maximum amount of the base asset for this pair/side, as a decimal string. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
