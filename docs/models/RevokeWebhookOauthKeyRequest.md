# RevokeWebhookOauthKeyRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**kid** | **string** | The &#x60;kid&#x60; of the key to revoke, as the JWKS at &#x60;jwksUri&#x60; lists it: the signing key, its successor, a key rotated out and still published, or a key left behind by a &#x60;signingAlg&#x60; change within its 30 days. Omit to revoke the signing key; &#x60;null&#x60; is refused rather than read as omitted. Required on credentials that no longer use &#x60;private_key_jwt&#x60;. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
