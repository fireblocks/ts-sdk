# AddressRegistryVerifyProofOfOwnershipRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**exportId** | **string** | Export id from create / the PDF. | [default to undefined]|
|**verificationHash** | **string** | Verification hash from create / the PDF (exact match required). | [default to undefined]|
|**address** | **string** | Address from the PDF (exact UTF-8 match to the stored export). | [default to undefined]|
|**expiresAt** | **string** | Optional but recommended: the PDF\&#39;s \&quot;Online verification available until\&quot; date (&#x60;YYYY-MM-DD&#x60;), which speeds up the lookup. A wrong value yields &#x60;valid: false&#x60; even if the export exists — copy it exactly from the PDF, or omit it. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
