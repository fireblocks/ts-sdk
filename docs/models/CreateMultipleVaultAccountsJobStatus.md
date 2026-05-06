# CreateMultipleVaultAccountsJobStatus

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**status** | **string** | Status of the job. Possible values - Success, In Progress, Failed, Pending Approval, Cancelled | [default to undefined]|
|**vaultAccounts** | **{ [key: string]: { [key: string]: string; }; }** | Mapping between VaultAccountId to a mapping of asset to address | [optional] [default to undefined]|
|**tagIds** | **Array&lt;string&gt;** | List of tag IDs successfully attached to each of the created vault accounts | [optional] [default to undefined]|
|**errorMessage** | **string** |  | [optional] [default to undefined]|
|**approvalRequestId** | **string** | Approval request ID if the job has protected tags to attach to the vault accounts | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
