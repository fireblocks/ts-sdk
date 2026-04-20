# AddressRegistryError

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**message** | **string** | Human-readable error message | [default to undefined]|
|**code** | **number** | Application error code when present. For HTTP 400 on legal-entity lookup, distinguish: 4100 — request validation (e.g. missing, empty, or whitespace-only &#x60;address&#x60; after trim); 2140 — workspace not opted in to the address registry (&#x60;AR_OPT_IN_REQUIRED&#x60;). 2142 — not found (404). Other codes may appear, including on server errors.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
