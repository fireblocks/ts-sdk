# TRLinkCreateCustomerRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**shortName** | **string** | Short display name (required) | [default to undefined]|
|**discoverable** | [**TRLinkDiscoverableStatus**](TRLinkDiscoverableStatus.md) |  | [optional] [default to undefined]|
|**fullLegalName** | **string** | Full legal entity name | [optional] [default to undefined]|
|**geographicAddress** | [**TRLinkGeographicAddressRequest**](TRLinkGeographicAddressRequest.md) |  | [optional] [default to undefined]|
|**countryOfRegistration** | **string** | ISO 3166-1 alpha-2 country code where the entity is registered | [optional] [default to undefined]|
|**nationalIdentification** | **string** | National identification as JSON string | [optional] [default to undefined]|
|**dateOfIncorporation** | **string** | Date of entity incorporation (ISO 8601 format: YYYY-MM-DD) | [optional] [default to undefined]|
|**vaults** | **Array&lt;number&gt;** | Associated Fireblocks vault account IDs | [optional] [default to undefined]|
|**trPrimaryPurpose** | **string** | Primary purpose for Travel Rule compliance (enum value) | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
