# TravelRuleValidateNationalIdentification

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**countryOfIssue** | **string** | Country that issued the national identifier (ISO-3166 Alpha-2 country code) | [optional] [default to undefined]|
|**nationalIdentifier** | **string** | National identifier (max 35 characters) | [optional] [default to undefined]|
|**nationalIdentifierType** | **string** | Type of national identifier. Acceptable values include: - \&#39;PASSPORT\&#39;: Passport number - \&#39;NATIONAL_ID\&#39;: National identification number - \&#39;TAX_ID\&#39;: Tax identification number - \&#39;SOCIAL_SECURITY\&#39;: Social security number | [optional] [default to undefined]|
|**registrationAuthority** | **string** | Registration authority (format -&gt; RA followed by 6 digits) | [optional] [default to undefined]|


## Enum: TravelRuleValidateNationalIdentificationNationalIdentifierTypeEnum


* `Passport` (value: `'PASSPORT'`)

* `NationalId` (value: `'NATIONAL_ID'`)

* `TaxId` (value: `'TAX_ID'`)

* `SocialSecurity` (value: `'SOCIAL_SECURITY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
