# TRLinkResultFullPayload

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**provider** | **string** | The TRLink provider name | [default to undefined]|
|**timestamp** | **number** | Unix timestamp of the screening result | [default to undefined]|
|**status** | **string** | Status of the TRLink screening | [default to undefined]|
|**verdict** | [**TRLinkVerdictEnum**](TRLinkVerdictEnum.md) |  | [optional] [default to undefined]|
|**destAddress** | **string** | The destination address associated with the TRLink screening | [optional] [default to undefined]|
|**destTag** | **string** | Destination tag for the screening | [optional] [default to undefined]|
|**bypassReason** | **string** | Reason for bypassing the TRLink screening | [optional] [default to undefined]|
|**detailsMessage** | **string** | Additional details message about the screening result | [optional] [default to undefined]|
|**customerIntegrationId** | **string** | Customer integration identifier | [optional] [default to undefined]|
|**customerShortName** | **string** | Customer short name | [optional] [default to undefined]|
|**travelRuleMessageId** | **string** | Travel rule message identifier for linking | [optional] [default to undefined]|
|**result** | [**TRLinkProviderResultWithRule2**](TRLinkProviderResultWithRule2.md) |  | [optional] [default to undefined]|
|**matchedPrescreeningRule** | [**ScreeningTRLinkPrescreeningRule**](ScreeningTRLinkPrescreeningRule.md) |  | [optional] [default to undefined]|
|**matchedNoTrmScreeningRule** | [**ScreeningTRLinkMissingTrmDecision**](ScreeningTRLinkMissingTrmDecision.md) |  | [optional] [default to undefined]|


## Enum: TRLinkResultFullPayloadStatusEnum


* `Completed` (value: `'COMPLETED'`)

* `Pending` (value: `'PENDING'`)

* `Bypassed` (value: `'BYPASSED'`)

* `Failed` (value: `'FAILED'`)

* `Frozen` (value: `'FROZEN'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
