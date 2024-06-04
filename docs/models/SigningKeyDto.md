# SigningKeyDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**keyId** | **string** | External signing key id set by Fireblocks. | [default to undefined]|
|**signingDeviceKeyId** | **string** | The ID, name or label of the key specified on the customer\&#39;s signing device. | [default to undefined]|
|**publicKeyPem** | **string** | PEM encoded public key | [default to undefined]|
|**algorithm** | **string** | Algorithm and curve used for the signature. Can be: ECDSA_SECP256K1 or EDDSA_ED25519 | [default to undefined]|
|**enabled** | **boolean** | True if the signing key is enabled | [default to undefined]|
|**vaultAccountId** | **number** | Id of the vault account which this key is linked to | [default to undefined]|
|**agentUserId** | **string** | Id of user that represent agent servers that can sign with the key | [default to undefined]|
|**createdAt** | **number** | Creation date (timestamp) in milliseconds. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
