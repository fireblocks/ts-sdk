# ParticipantsIdentificationPolicy

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**supportedEndpoints** | [**Set&lt;ParticipantsIdentificationSupportedEndpoint&gt;**](ParticipantsIdentificationSupportedEndpoint.md) | API endpoints in scope for this participants identification policy. Values &#x60;ORDER&#x60;, &#x60;QUOTE&#x60;, and &#x60;RATE&#x60; correspond to manifest &#x60;order&#x60;, &#x60;quote&#x60;, and &#x60;rate&#x60; flows. Client requests to those endpoints may need to include &#x60;participantsIdentification&#x60; when the resolved schema requires it.  | [default to undefined]|
|**defaultSchema** | **string** | A JSON Schema (draft-07) in string format that validates the ParticipantsIdentification object on requests where the provider manifest lists that endpoint in &#x60;participantsIdentificationPolicy.supportedEndpoints&#x60; (e.g. POST /orders). Defines which fields from originator and/or beneficiary are required.  The schema uses oneOf to discriminate between INDIVIDUAL (PersonalIdentification)  and BUSINESS (BusinessIdentification) entity types for each participant.  For INDIVIDUAL: fullName, dateOfBirth, postalAddress, email, phone, idNumber, idType, etc. For BUSINESS: businessName, registrationNumber, postalAddress, email, phone, etc.  If you constrain &#x60;idType&#x60; or &#x60;additionalIdType&#x60; with a JSON Schema &#x60;enum&#x60;, use the same values as &#x60;PersonalIdentificationType&#x60; (authoritative list in that schema). The example below mirrors that enum.  The string content is expected to be valid JSON (application/json).  | [default to undefined]|
|**overrides** | [**Array&lt;IdentificationPolicyOverride&gt;**](IdentificationPolicyOverride.md) | Contextual overrides scoped by asset, rail, and/or flowDirection. Most specific match wins; ties broken by array order. Replaces the default partially. Each override MUST include at least one of &#x60;asset&#x60;, &#x60;rail&#x60;, or &#x60;flowDirection&#x60; (not &#x60;schema&#x60; alone); see IdentificationPolicyOverride.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
