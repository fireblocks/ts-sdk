# AmlScreeningResult

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**provider** | **string** | The AML provider name. Known values: CHAINALYSIS, ELLIPTIC, CHAINALYSIS_V2, ELLIPTIC_HOLISTIC, BYORK_SLITE, BYORK_LITE, NONE.  | [optional] [default to undefined]|
|**payload** | **{ [key: string]: any; }** | The raw, unmodified screening response from the provider. Structure varies per provider.  | [optional] [default to undefined]|
|**verdict** | [**ScreeningVerdictEnum**](ScreeningVerdictEnum.md) |  | [optional] [default to undefined]|
|**screeningStatus** | [**ScreeningStatusEnum**](ScreeningStatusEnum.md) |  | [optional] [default to undefined]|
|**bypassReason** | [**AmlBypassReasonEnum**](AmlBypassReasonEnum.md) |  | [optional] [default to undefined]|
|**timestamp** | **number** | Unix timestamp in milliseconds when the screening result was generated. | [optional] [default to undefined]|
|**customerRefId** | **string** | Customer-provided reference identifier for tracking. | [optional] [default to undefined]|
|**externalId** | **string** | External identifier for the screening (provider-specific). | [optional] [default to undefined]|
|**category** | **string** | Risk category classification. The available categories are subject to change depending on the provider.  | [optional] [default to undefined]|
|**categoryId** | **number** | Numeric identifier for the risk category. | [optional] [default to undefined]|
|**risk** | **string** | Provider-specific risk level. Values vary by provider. | [optional] [default to undefined]|
|**destAddress** | **string** | The destination blockchain address associated with the screening. | [optional] [default to undefined]|
|**matchedRule** | [**AmlMatchedRule**](AmlMatchedRule.md) |  | [optional] [default to undefined]|
|**matchedPrescreeningRule** | [**AmlMatchedRule**](AmlMatchedRule.md) |  | [optional] [default to undefined]|
|**matchedAlert** | [**AmlAlert**](AmlAlert.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
