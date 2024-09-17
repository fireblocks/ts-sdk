# CreateSigningKeyDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**signingDeviceKeyId** | **string** | The ID, name or label of the key specified on the customer\&#39;s signing device. | [default to undefined]|
|**signedCertPem** | **string** | The signed certificate that includes the public key PEM of the signing key, signed by a validation key. | [default to undefined]|
|**agentUserId** | **string** | Id of user to which this key belongs | [default to undefined]|
|**proofOfOwnership** | [**CreateSigningKeyDtoProofOfOwnership**](CreateSigningKeyDtoProofOfOwnership.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
