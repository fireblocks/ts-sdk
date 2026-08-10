# TravelRuleVASP

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**did** | **string** | The Decentralized Identifier (DID) of the VASP. | [default to undefined]|
|**name** | **string** | The name of the VASP. | [default to undefined]|
|**verificationStatus** | **string** | The current verification status of the VASP. | [default to undefined]|
|**addressLine1** | **string** | The first line of the VASP\&#39;s address. | [default to undefined]|
|**city** | **string** | The city where the VASP is located. | [default to undefined]|
|**country** | **string** | The country where the VASP is registered (ISO-3166 Alpha-2 code). | [default to undefined]|
|**emailDomains** | **string** | The email domains associated with the VASP. The field\&#39;s type is string; its content is a JSON-encoded array of domains. Clients must parse this value to obtain the array. | [default to undefined]|
|**website** | **string** | The official website of the VASP. | [default to undefined]|
|**legalStructure** | **string** | The legal structure of the VASP (e.g., Corporation, LLC). | [default to undefined]|
|**legalName** | **string** | The legal name of the VASP. | [default to undefined]|
|**yearFounded** | **string** | The year the VASP was founded. Returned as a string, not an integer. | [default to undefined]|
|**incorporationCountry** | **string** | The country where the VASP is incorporated (ISO-3166 Alpha-2 code). | [default to undefined]|
|**isRegulated** | **string** | Indicates whether the VASP is regulated. | [default to undefined]|
|**jurisdictions** | **string** | The jurisdictions where the VASP operates. | [default to undefined]|
|**travelRule_TRLIGHT** | **string** | Travel rule compliance status for TRLight. | [default to undefined]|
|**createdAt** | **string** | Timestamp when the VASP record was created. | [default to undefined]|
|**hasAdmin** | **boolean** | Indicates if the VASP has an admin. | [default to undefined]|
|**isNotifiable** | **boolean** | Indicates if the VASP is notifiable for compliance reasons. | [default to undefined]|
|**issuers** | [**TravelRuleIssuers**](TravelRuleIssuers.md) |  | [default to undefined]|
|**addressLine2** | **string** | The second line of the VASP\&#39;s address (if applicable). May be null. | [optional] [default to undefined]|
|**logo** | **string** | URL to the logo of the VASP. May be null. | [optional] [default to undefined]|
|**otherNames** | **string** | Other names the VASP is known by. May be null. | [optional] [default to undefined]|
|**identificationType** | **string** | The type of identification used by the VASP. | [optional] [default to undefined]|
|**identificationCountry** | **string** | The country of identification for the VASP (ISO-3166 Alpha-2 code). May be null. | [optional] [default to undefined]|
|**businessNumber** | **string** | The business registration number of the VASP. | [optional] [default to undefined]|
|**regulatoryAuthorities** | **string** | The regulatory authorities overseeing the VASP. May be null. | [optional] [default to undefined]|
|**division** | **string** | The division of the VASP\&#39;s registered address, where applicable. | [optional] [default to undefined]|
|**street** | **string** | The street name where the VASP is located. May be null. | [optional] [default to undefined]|
|**number** | **string** | The building number of the VASP\&#39;s address. May be returned as an empty string when not supplied. | [optional] [default to undefined]|
|**unit** | **string** | The unit or suite number of the VASP\&#39;s address. May be null. | [optional] [default to undefined]|
|**postCode** | **string** | The postal code of the VASP\&#39;s location. | [optional] [default to undefined]|
|**state** | **string** | The state or region where the VASP is located. | [optional] [default to undefined]|
|**otherLegalName** | **string** | Alternative legal names of the VASP, as a comma-separated list. Resolved from an external registry, so it is only populated for VASPs with a resolved entity record. | [optional] [default to undefined]|
|**gleifUpdatedAt** | **string** | Timestamp of the last synchronization with the GLEIF registry. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**leiNumber** | **string** | The VASP\&#39;s Legal Entity Identifier (LEI), a 20-character alphanumeric code. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**legalForm** | **string** | The GLEIF Entity Legal Form (ELF) code of the VASP. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**entityCategory** | **string** | The GLEIF entity category of the VASP. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**entityStatus** | **string** | The GLEIF entity status of the VASP. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**externalEntityConfig** | [**Array&lt;TravelRuleVASPExternalEntityConfig&gt;**](TravelRuleVASPExternalEntityConfig.md) | Entity records resolved from external registries, such as GLEIF. Only populated for VASPs that have been resolved against at least one external registry. | [optional] [default to undefined]|
|**hqStreet** | **string** | The street of the VASP\&#39;s headquarters address. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**hqNumber** | **string** | The building number of the VASP\&#39;s headquarters address. May be returned as an empty string as well as &#x60;null&#x60; when not supplied. | [optional] [default to undefined]|
|**hqPostcode** | **string** | The postal code of the VASP\&#39;s headquarters address. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**hqRegion** | **string** | The region of the VASP\&#39;s headquarters address, as an ISO-3166-2 subdivision code. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**hqCity** | **string** | The city of the VASP\&#39;s headquarters address. Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**hqCountry** | **string** | The country of the VASP\&#39;s headquarters address (ISO-3166 Alpha-2 code). Only populated for VASPs with a GLEIF-resolved LEI. | [optional] [default to undefined]|
|**certificates** | **string** | Certificates or licenses held by the VASP. May be null. | [optional] [default to undefined]|
|**description** | **string** | A brief description of the VASP. May be null. | [optional] [default to undefined]|
|**travelRule_OPENVASP** | **string** | Travel rule compliance status for OpenVASP. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**travelRule_SYGNA** | **string** | Travel rule compliance status for Sygna. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**travelRule_TRISA** | **string** | Travel rule compliance status for TRISA. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**travelRule_EMAIL** | **string** | Travel rule compliance status for EMAIL. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**travelRule_TRP** | **string** | Travel rule compliance status for TRP. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**travelRule_SHYFT** | **string** | Travel rule compliance status for Shyft. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**travelRule_USTRAVELRULEWG** | **string** | Travel rule compliance status for US Travel Rule WG. Null when the VASP does not support this protocol. | [optional] [default to undefined]|
|**createdBy** | **string** | The DID of the party that created the VASP record. May be null. | [optional] [default to undefined]|
|**updatedAt** | **string** | Timestamp of the last update to the VASP record. | [optional] [default to undefined]|
|**updatedBy** | **string** | The DID of the party that last updated the VASP record. | [optional] [default to undefined]|
|**lastSentDate** | **string** | The last date a transaction was sent by the VASP. | [optional] [default to undefined]|
|**lastReceivedDate** | **string** | The last date a transaction was received by the VASP. | [optional] [default to undefined]|
|**documents** | **string** | Documents associated with the VASP. May be null. | [optional] [default to undefined]|
|**regulatoryStatus** | **string** | The regulatory status of the VASP, as free text. | [optional] [default to undefined]|
|**supervisoryAuthority** | **string** | The supervisory authority responsible for the VASP. | [optional] [default to undefined]|
|**registrationLicenseId** | **string** | The identifier of the VASP\&#39;s registration or operating license. | [optional] [default to undefined]|
|**statusStartDate** | **string** | The date the VASP\&#39;s current regulatory status took effect. | [optional] [default to undefined]|
|**statusExpirationDate** | **string** | The date the VASP\&#39;s current regulatory status expires. | [optional] [default to undefined]|
|**lastChecked** | **string** | Timestamp of the last verification of the VASP\&#39;s regulatory status. | [optional] [default to undefined]|
|**additionalInformation** | **string** | Additional free-text information about the VASP. | [optional] [default to undefined]|
|**subsidiaryOf** | **string** | The DID of the parent VASP, when this VASP is a subsidiary of another. | [optional] [default to undefined]|
|**pii_didkey** | **string** | The VASP\&#39;s public PII encryption key, published in the trust framework directory. Use it to encrypt IVMS101 personally identifiable information addressed to this VASP. | [optional] [default to undefined]|
|**compliancePhase** | **number** | The VASP\&#39;s current compliance onboarding phase. | [optional] [default to undefined]|
|**compliancePhaseData** | [**TravelRuleVASPCompliancePhaseData**](TravelRuleVASPCompliancePhaseData.md) |  | [optional] [default to undefined]|
|**vaspnetId** | **string** | The VASP\&#39;s VASPnet identifier. | [optional] [default to undefined]|
|**vaspnetUpdatedAt** | **string** | Timestamp of the last synchronization with VASPnet. | [optional] [default to undefined]|
|**vaspnetImmutableFields** | **Array&lt;string&gt;** | Names of the fields that are managed by VASPnet and cannot be modified locally. Empty when no fields are locked. | [optional] [default to undefined]|
|**node_didkey** | **string** | The public key of the Travel Rule node serving this VASP record. The format has not been confirmed against a live response; every observed value has been null. | [optional] [default to undefined]|
|**ddq** | **string** | The VASP\&#39;s Due Diligence Questionnaire, as a JSON-encoded string containing a &#x60;data&#x60; object and an &#x60;updatedAt&#x60; timestamp. Clients must parse this value. | [optional] [default to undefined]|
|**targetProtocol** | **string** | The Travel Rule protocol used to reach this VASP, when a specific one is configured. | [optional] [default to undefined]|
|**parentGateway** | **string** | The DID of the gateway VASP that routes messages on this VASP\&#39;s behalf. | [optional] [default to undefined]|
|**isActiveSender** | **boolean** | Indicates if the VASP actively sends Travel Rule transfers. | [optional] [default to undefined]|
|**isActiveReceiver** | **boolean** | Indicates if the VASP actively receives Travel Rule transfers. | [optional] [default to undefined]|
|**subsidiaries** | **Array&lt;any&gt;** | The VASP\&#39;s subsidiary entities. The element schema is not yet documented, as no response containing a populated value has been observed; do not assume a particular element type. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
