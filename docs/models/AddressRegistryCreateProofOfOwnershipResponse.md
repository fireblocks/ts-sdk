# AddressRegistryCreateProofOfOwnershipResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**pdf** | **string** | Base64-encoded Proof of Ownership PDF bytes. Fireblocks does not store the PDF: save it immediately, there is no re-download route. | [default to undefined]|
|**exportId** | **string** | Stable id of the online-verifiable export record. | [default to undefined]|
|**verificationHash** | **string** | Verification hash bound to the export (also printed on the PDF). | [default to undefined]|
|**expiresAt** | **string** | Inclusive last UTC calendar day online verification is available (&#x60;YYYY-MM-DD&#x60;). | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
