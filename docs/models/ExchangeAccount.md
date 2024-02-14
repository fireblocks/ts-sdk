# ExchangeAccount

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** |  | [optional] [default to undefined]|
|**type** | [**ExchangeType**](ExchangeType.md) |  | [optional] [default to undefined]|
|**name** | **string** | Display name of the exchange account | [optional] [default to undefined]|
|**status** | **string** |  | [optional] [default to undefined]|
|**assets** | [**Array&lt;ExchangeAsset&gt;**](ExchangeAsset.md) |  | [optional] [default to undefined]|
|**success** | **boolean** | Did succeed in retrieve balance data | [optional] [default to undefined]|
|**tradingAccounts** | [**Array&lt;ExchangeTradingAccount&gt;**](ExchangeTradingAccount.md) |  | [optional] [default to undefined]|
|**isSubaccount** | **boolean** | True if the account is a subaccount in an exchange | [optional] [default to undefined]|
|**mainAccountId** | **string** | if the account is a sub-account, the ID of the main account | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
