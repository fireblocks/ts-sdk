# TRLinkCustomerResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Customer unique identifier | [default to undefined]|
|**discoverable** | [**TRLinkDiscoverableStatus**](TRLinkDiscoverableStatus.md) |  | [default to undefined]|
|**shortName** | **string** | Short display name | [default to undefined]|
|**fullLegalName** | **string** | Full legal entity name | [default to undefined]|
|**countryOfRegistration** | **string** | ISO 3166-1 alpha-2 country code where the entity is registered | [default to undefined]|
|**trPrimaryPurpose** | **string** | Primary Travel Rule role for this customer; determines how the customer\&#39;s Travel Rule messages are routed. Valid values: &#x60;notabene&#x60;, &#x60;trlink&#x60;. | [default to undefined]|
|**createDate** | **string** | Timestamp when the customer was created (ISO 8601 format) | [default to undefined]|
|**lastUpdate** | **string** | Timestamp when the customer was last updated (ISO 8601 format) | [default to undefined]|
|**geographicAddress** | [**TRLinkGeographicAddressRequest**](TRLinkGeographicAddressRequest.md) |  | [optional] [default to undefined]|
|**nationalIdentification** | **string** | National identification, returned exactly as stored: a compact, whitespace-free JSON-encoded string with these optional keys (in this order): &#x60;nationalIdentifier&#x60;, &#x60;nationalIdentifierType&#x60; (e.g. &#x60;LEIX&#x60; for an LEI), &#x60;countryOfIssue&#x60; (ISO 3166-1 alpha-2), &#x60;registrationAuthority&#x60;. Maximum length is 240 characters. | [optional] [default to undefined]|
|**dateOfIncorporation** | **string** | Date of entity incorporation (ISO 8601 format) | [optional] [default to undefined]|
|**vaults** | **Array&lt;number&gt;** | Associated Fireblocks vault account IDs | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
