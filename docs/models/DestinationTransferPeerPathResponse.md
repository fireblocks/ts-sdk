# DestinationTransferPeerPathResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | [**TransferPeerPathType**](TransferPeerPathType.md) |  | [default to undefined]|
|**subType** | **string** | In case the type is set to &#x60;EXCHANGE_ACCOUNT&#x60; or &#x60;FIAT_ACCOUNT&#x60;, the specific exchange vendor name or fiat vendor name.In case the type is set to &#x60;INTERNAL_WALLET&#x60; or &#x60;EXTERNAL_WALLET&#x60;, the subType is set to &#x60;Internal&#x60; or &#x60;External&#x60;. | [optional] [default to undefined]|
|**id** | **string** | The ID of the peer. You can retrieve the ID of each venue object using the endpoints for [listing vault accounts](https://developers.fireblocks.com/reference/get_vault-accounts-paged), [listing exchange account](https://developers.fireblocks.com/reference/get_exchange-accounts), [listing fiat accounts](https://developers.fireblocks.com/reference/get_fiat-accounts), [listing internal wallets](https://developers.fireblocks.com/reference/get_internal-wallets), [listing external wallets](https://developers.fireblocks.com/reference/get_external-wallets), [listing network connections](https://developers.fireblocks.com/reference/get_network-connections). For the other types, this parameter is not needed. | [optional] [default to undefined]|
|**name** | **string** | The name of the peer. | [optional] [default to undefined]|
|**walletId** | **string** |  | [optional] [default to undefined]|
|**tradingAccount** | **string** | If this transaction is an exchange internal transfer, this field will be populated with the type of that trading account. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
