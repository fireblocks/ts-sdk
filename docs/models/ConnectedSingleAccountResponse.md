# ConnectedSingleAccountResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier of the connected account. | [default to undefined]|
|**name** | **string** | Human-readable name of the connected account. | [default to undefined]|
|**providerId** | **string** | The ID of the venue the account belongs to. | [default to undefined]|
|**status** | [**ConnectedAccountApprovalStatus**](ConnectedAccountApprovalStatus.md) |  | [default to undefined]|
|**totalBalance** | [**ConnectedAccountTotalBalance**](ConnectedAccountTotalBalance.md) |  | [default to undefined]|
|**manifest** | [**ConnectedAccountManifest**](ConnectedAccountManifest.md) |  | [default to undefined]|
|**accountType** | [**ConnectedAccountType**](ConnectedAccountType.md) |  | [default to undefined]|
|**parentId** | **string** | The ID of the parent main account, if this is a sub account. | [optional] [default to undefined]|
|**apiKey** | **string** | The API key identifier used to connect this account. | [optional] [default to undefined]|
|**providerAccountName** | **string** | The account name provided by the provider. | [optional] [default to undefined]|
|**subAccountsIds** | **Array&lt;string&gt;** | IDs of sub-accounts associated with this connected account. | [optional] [default to undefined]|
|**totalCredit** | [**ConnectedAccountCredit**](ConnectedAccountCredit.md) | Total credit line available on the account. Returned only by the single-account endpoint (Get connected account); the list endpoint does not retrieve balances and never populates it. Omitted when total credit data is unavailable or balance retrieval is skipped. Absence does not imply zero credit. | [optional] [default to undefined]|
|**availableCredit** | [**ConnectedAccountCredit**](ConnectedAccountCredit.md) | Remaining unused credit available on the account. Returned only by the single-account endpoint (Get connected account); the list endpoint does not retrieve balances and never populates it. Omitted when available credit data is unavailable or balance retrieval is skipped. Absence does not imply zero credit. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
