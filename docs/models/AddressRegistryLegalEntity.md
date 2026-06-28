# AddressRegistryLegalEntity

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**leiData** | **boolean** | Indicates whether LEI (Legal Entity Identifier) data is available for this address from a verified public registry. A value of &#x60;false&#x60; means no LEI record was found. | [default to undefined]|
|**entityName** | **string** | Legal entity display name. | [default to undefined]|
|**jurisdiction** | **string** | Jurisdiction (e.g. ISO 3166-1 alpha-2 country code). | [default to undefined]|
|**lei** | **string** | Legal Entity Identifier when available. Empty when &#x60;leiData&#x60; is &#x60;false&#x60;. | [default to undefined]|
|**travelRuleProviders** | [**Array&lt;AddressRegistryTravelRuleProvider&gt;**](AddressRegistryTravelRuleProvider.md) |  | [default to undefined]|
|**email** | **string** | Travel Rule contact email when available. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
