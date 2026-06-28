# IdentificationPolicyOverride

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**schema** | **string** | A JSON Schema (draft-07) in string format that validates the ParticipantsIdentification object on requests where the provider manifest declares a &#x60;participantsIdentificationPolicy&#x60; for that endpoint (e.g. POST /orders). Defines which fields from originator and/or beneficiary are required.  The schema uses oneOf to discriminate between INDIVIDUAL (PersonalIdentification)  and BUSINESS (BusinessIdentification) entity types for each participant.  For INDIVIDUAL: fullName, dateOfBirth, postalAddress, email, phone, idNumber, idType, etc. For BUSINESS: businessName, registrationNumber, postalAddress, email, phone, etc.  If you constrain &#x60;idType&#x60; or &#x60;additionalIdType&#x60; with a JSON Schema &#x60;enum&#x60;, use the same values as &#x60;PersonalIdentificationType&#x60; (authoritative list in that schema). The example below mirrors that enum.  The string content is expected to be valid JSON (application/json).  | [default to undefined]|
|**asset** | **string** | Fireblocks asset ID (fiat or crypto). | [optional] [default to undefined]|
|**rail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**flowDirection** | [**FlowDirection**](FlowDirection.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
