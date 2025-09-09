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
|**parentId** | **string** | The ID of the parent main account, if this is a sub account. | [optional] [default to undefined]|
|**subAccountsIds** | **Array&lt;string&gt;** | IDs of sub-accounts associated with this connected account. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
