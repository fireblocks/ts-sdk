# CreateMultipleAccountsRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**count** | **number** | Count | [default to undefined]|
|**baseAssetIds** | **Array&lt;string&gt;** | Array of base asset IDs | [default to undefined]|
|**names** | **Array&lt;string&gt;** | Names to assign to vault accounts. if vaultAccountNamesStartingIndex or prefix is used it\&#39;ll fail | [optional] [default to undefined]|
|**vaultAccountNamesStartingIndex** | **number** | Copy vault accounts names starting from this index. If names array is used it\&#39;ll fail | [optional] [default to undefined]|
|**prefix** | **string** | When copying from existing vault accounts (vaultAccountNamesStartingIndex) then adding a prefix to the names. If names array is used it\&#39;ll fail | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
