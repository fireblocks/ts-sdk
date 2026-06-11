# Identification

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**externalReferenceId** | **string** |  | [default to undefined]|
|**entityType** | [**BusinessEntityTypeEnum**](BusinessEntityTypeEnum.md) |  | [default to undefined]|
|**participantRelationshipType** | [**ParticipantRelationshipType**](ParticipantRelationshipType.md) |  | [default to undefined]|
|**fullName** | [**PersonalIdentificationFullName**](PersonalIdentificationFullName.md) |  | [default to undefined]|
|**dateOfBirth** | **string** |  | [default to undefined]|
|**postalAddress** | [**PostalAddress**](PostalAddress.md) |  | [default to undefined]|
|**businessName** | **string** |  | [default to undefined]|
|**registrationNumber** | **string** |  | [default to undefined]|
|**email** | **string** |  | [optional] [default to undefined]|
|**phone** | **string** | Mobile phone number in E.164 format | [optional] [default to undefined]|
|**idNumber** | **string** | Deprecated. Use identificationDocuments instead. | [optional] [default to undefined]|
|**idType** | [**PersonalIdentificationType**](PersonalIdentificationType.md) | Deprecated. Use identificationDocuments instead. | [optional] [default to undefined]|
|**additionalIdNumber** | **string** | Deprecated. Use identificationDocuments instead. | [optional] [default to undefined]|
|**additionalIdType** | [**PersonalIdentificationType**](PersonalIdentificationType.md) | Deprecated. Use identificationDocuments instead. | [optional] [default to undefined]|
|**nationality** | **string** | The ISO-3166 Alpha-2 country code representing the individual\&#39;s nationality. | [optional] [default to undefined]|
|**identificationDocuments** | [**Array&lt;PersonalIdentificationDocument&gt;**](PersonalIdentificationDocument.md) | List of identification documents for the individual. | [optional] [default to undefined]|
|**dateOfRegistration** | **string** | The date the business was registered. | [optional] [default to undefined]|
|**countryOfRegistration** | **string** | The ISO-3166 Alpha-2 country code where the business is registered. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
