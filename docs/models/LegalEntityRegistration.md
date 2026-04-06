# LegalEntityRegistration

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique registration identifier | [default to undefined]|
|**lei** | **string** | Legal Entity Identifier (LEI) code | [default to undefined]|
|**status** | [**LeiStatus**](LeiStatus.md) |  | [default to undefined]|
|**isDefault** | **boolean** | Whether this is the default legal entity for the workspace | [default to undefined]|
|**travelRuleProviders** | [**Array&lt;TravelRuleProvider&gt;**](TravelRuleProvider.md) | Travel rule providers configured for this registration | [default to undefined]|
|**createdAt** | **string** | Creation timestamp in milliseconds since epoch | [default to undefined]|
|**updatedAt** | **string** | Last update timestamp in milliseconds since epoch | [default to undefined]|
|**travelRuleContactEmail** | **string** | Contact email for travel rule communications | [optional] [default to undefined]|
|**gleifData** | [**GleifData**](GleifData.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
