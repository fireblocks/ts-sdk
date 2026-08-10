# TravelRuleVASPExternalEntityConfig

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**provider** | **string** | The external registry the record was resolved from. Returned in lower case, for example &#x60;gleif&#x60;. | [optional] [default to undefined]|
|**externalId** | **string** | The VASP\&#39;s identifier within the external registry. For the &#x60;gleif&#x60; provider this is the Legal Entity Identifier (LEI). | [optional] [default to undefined]|
|**updatedAt** | **string** | Timestamp of the last change to the record at the external registry. | [optional] [default to undefined]|
|**resolvedAt** | **string** | Timestamp when the record was last resolved from the external registry. | [optional] [default to undefined]|
|**entity** | [**TravelRuleVASPExternalEntity**](TravelRuleVASPExternalEntity.md) |  | [optional] [default to undefined]|
|**registration** | [**TravelRuleVASPExternalEntityRegistration**](TravelRuleVASPExternalEntityRegistration.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
