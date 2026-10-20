# TrustProofOfAddressResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**transactionId** | **string** | Transaction ID from Fireblocks (UUID format) | [default to undefined]|
|**status** | [**TypedMessageTransactionStatusEnum**](TypedMessageTransactionStatusEnum.md) |  | [default to undefined]|
|**signature** | **string** | TRUST-compatible encoded signature for proof of address verification.  | [default to undefined]|
|**publicKey** | **string** | Hex public key of the Fireblocks vault key that produced the signature. Present only when &#x60;status&#x60; is &#x60;SIGNED&#x60; or &#x60;COMPLETED&#x60;, and only if Fireblocks returned it. TRUST requires this key for SUI, TON and XTZ (as &#x60;auxProofData.encryptedPublicKey&#x60;).  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
