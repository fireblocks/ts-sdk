# CreateConnectedAccountRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**providerId** | **string** | Integration key identifying the provider (e.g. BINANCE, KINGDOM_BANK, GEMINI_NLV2). | [default to undefined]|
|**creds** | **string** | Base64-encoded RSA-encrypted credential blob. Encrypt using the public key from GET /exchange_accounts/credentials_public_key. | [default to undefined]|
|**apiKey** | **string** | Account-level API key. | [default to undefined]|
|**displayName** | **string** | Human-readable account name. Required for non-NLV2 providers. | [optional] [default to undefined]|
|**mainAccountId** | **string** | Parent main account ID for sub-account creation. Not allowed for NLV2 providers. | [optional] [default to undefined]|
|**accountId** | **string** | Optional provider-side account ID to associate with the created account. | [optional] [default to undefined]|
|**onPremiseServerId** | **string** | On-premise server ID for self-hosted integrations. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
