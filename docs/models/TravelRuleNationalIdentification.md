# TravelRuleNationalIdentification

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**countryOfIssue** | **string** | Country that issued the national identifier (ISO-3166 Alpha-2 country code). The value must be encrypted. | [optional] [default to undefined]|
|**nationalIdentifier** | **string** | National identifier (max 35 characters). The value must be encrypted. | [optional] [default to undefined]|
|**nationalIdentifierType** | **string** | Type of national identifier. Acceptable values include: - \&#39;PASSPORT\&#39;: Passport number - \&#39;NATIONAL_ID\&#39;: National identification number - \&#39;TAX_ID\&#39;: Tax identification number - \&#39;SOCIAL_SECURITY\&#39;: Social security number The value must be encrypted. | [optional] [default to undefined]|
|**registrationAuthority** | **string** | Registration authority (format -&gt; RA followed by 6 digits). The value must be encrypted. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
