# UpdateConnectedAccountCredentialsRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**creds** | **string** | Base64-encoded RSA-encrypted credential blob (the new secret). Encrypt using the public key from GET /connected_accounts/credentials/public_key. | [default to undefined]|
|**apiKey** | **string** | The new account-level API key. Mandatory for credential update. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
