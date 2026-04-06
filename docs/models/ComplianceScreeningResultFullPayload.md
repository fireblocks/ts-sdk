# ComplianceScreeningResultFullPayload

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**provider** | **string** | The AML/Travel Rule provider name. For AML: ELLIPTIC, CHAINALYSIS, etc. For Travel Rule: NOTABENE, SUMSUB, GTR, or any TRLink provider name  | [optional] [default to undefined]|
|**payload** | **object** | The raw payload of the screening result from the provider. The payload is a JSON object that contains the screening result. The payload structure is different for each screening provider. This field contains the complete, unmodified response from the screening service.  | [optional] [default to undefined]|
|**timestamp** | **number** | Unix timestamp in milliseconds when the screening result was generated | [optional] [default to undefined]|
|**screeningStatus** | **string** | Current status of the screening process | [optional] [default to undefined]|
|**bypassReason** | **string** | Reason for bypassing the screening, if applicable. For AML: UNSUPPORTED_ASSET, PASSED_BY_POLICY. For Travel Rule: UNSUPPORTED_ASSET, NO_TRAVEL_RULE_MESSAGE, TRANSACTION_ZERO_AMOUNT.  | [optional] [default to undefined]|
|**status** | [**AmlStatusEnum**](AmlStatusEnum.md) |  | [optional] [default to undefined]|
|**prevStatus** | [**AmlStatusEnum**](AmlStatusEnum.md) |  | [optional] [default to undefined]|
|**prevBypassReason** | **string** | Deprecated: This field is not currently returned in the API response. Previous bypass reason before the current bypass reason change.  | [optional] [default to undefined]|
|**verdict** | [**ScreeningVerdictEnum**](ScreeningVerdictEnum.md) |  | [optional] [default to undefined]|
|**risk** | **string** | Risk level assessment for screening results. Values vary by provider and are not managed by this service.  Known values by provider: - Chainalysis: severeRisk, highRisk, mediumRisk, lowRisk, noRiskInfo - Elliptic: noRiskDetected  Legacy values (SCREAMING_SNAKE_CASE, may appear in old transactions): VERY_HIGH, SEVERE, HIGH, MEDIUM, LOW, NO_RISK_INFO, UNKNOWN  | [optional] [default to undefined]|
|**extendedRisk** | **string** | Deprecated: This field is not currently returned in the API response. Use risk instead.  | [optional] [default to undefined]|
|**externalId** | **string** | External identifier for the screening (provider-specific) | [optional] [default to undefined]|
|**customerRefId** | **string** | Customer-provided reference identifier for tracking | [optional] [default to undefined]|
|**refId** | **string** | Deprecated: This field is not currently returned in the API response. Internal reference identifier.  | [optional] [default to undefined]|
|**category** | **string** | Risk category classification. Examples: EXCHANGE, GAMBLING, MIXER, DARKNET_SERVICE, SANCTIONED_ENTITY  | [optional] [default to undefined]|
|**categoryId** | **number** | Numeric identifier for the risk category | [optional] [default to undefined]|
|**destAddress** | **string** | The destination blockchain address associated with the screening | [optional] [default to undefined]|
|**destTag** | **string** | Destination tag or memo (for chains that support it like XRP, XLM) | [optional] [default to undefined]|
|**destRecordId** | **string** | Deprecated: This field is not currently returned in the API response. The destination record identifier used by the screening provider.  | [optional] [default to undefined]|
|**addressResolutionSignature** | **string** | Deprecated: This field is not currently returned in the API response. Cryptographic signature for address resolution verification.  | [optional] [default to undefined]|
|**amlResult** | [**ScreeningAmlResult**](ScreeningAmlResult.md) |  | [optional] [default to undefined]|
|**result** | [**ScreeningTravelRuleResult**](ScreeningTravelRuleResult.md) |  | [optional] [default to undefined]|
|**detailsMessage** | **string** | Additional human-readable details or message about the screening result | [optional] [default to undefined]|
|**matchedAlert** | **object** | Information about the AML alert that was matched, if any. Contains details about the specific alert that triggered during screening.  | [optional] [default to undefined]|
|**matchedRule** | **object** | The matched rule information for this screening result. Contains details about which screening rule was applied and matched.  | [optional] [default to undefined]|
|**matchedPrescreeningRule** | [**ScreeningTravelRulePrescreeningRule**](ScreeningTravelRulePrescreeningRule.md) |  | [optional] [default to undefined]|
|**matchedNoTrmScreeningRule** | **object** | Matched no-TRM (Travel Rule Message) screening rule details. Used when TRLink screening detects a missing TRM scenario.  | [optional] [default to undefined]|
|**customerIntegrationId** | **string** | Customer integration identifier used by Travel Rule providers | [optional] [default to undefined]|
|**customerShortName** | **string** | Customer short name registered with Travel Rule providers | [optional] [default to undefined]|
|**travelRuleMessageId** | **string** | Travel rule message identifier for linking and tracking across providers | [optional] [default to undefined]|
|**providerResponse** | [**ScreeningProviderResponse**](ScreeningProviderResponse.md) |  | [optional] [default to undefined]|


## Enum: ComplianceScreeningResultFullPayloadScreeningStatusEnum


* `Completed` (value: `'COMPLETED'`)

* `Pending` (value: `'PENDING'`)

* `Bypassed` (value: `'BYPASSED'`)

* `Failed` (value: `'FAILED'`)

* `Frozen` (value: `'FROZEN'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
