# AddressRegistryLegalEntity

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**verified** | **boolean** | Whether the entity was resolved from verified public registry data (e.g. LEI sources). | [default to undefined]|
|**entityName** | **string** | Legal entity display name. | [default to undefined]|
|**jurisdiction** | **string** | Jurisdiction (e.g. ISO 3166-1 alpha-2 country code). | [default to undefined]|
|**lei** | **string** | Legal Entity Identifier when available; may be empty when unverified. | [default to undefined]|
|**travelRuleProviders** | [**Array&lt;AddressRegistryTravelRuleProvider&gt;**](AddressRegistryTravelRuleProvider.md) |  | [default to undefined]|
|**email** | **string** | Travel Rule contact email when available. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
