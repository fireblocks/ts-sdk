# ScreeningTravelRuleResult

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**direction** | [**TravelRuleDirectionEnum**](TravelRuleDirectionEnum.md) |  | [optional] [default to undefined]|
|**isVerified** | **boolean** | Whether the travel rule information was verified | [optional] [default to undefined]|
|**action** | [**TravelRuleVerdictEnum**](TravelRuleVerdictEnum.md) |  | [optional] [default to undefined]|
|**providerResponse** | **{ [key: string]: any; }** | Complete response from the travel rule provider. This is a dynamic object that varies significantly between different travel rule providers (NOTABENE etc.). Each provider has their own proprietary response format and schema.  Examples of provider-specific structures: - NOTABENE: Contains VASP information, PII data, protocol-specific fields  The structure is provider-dependent and cannot be standardized as each vendor implements their own proprietary data models and response formats.  | [optional] [default to undefined]|
|**matchedRule** | [**ScreeningTravelRuleMatchedRule**](ScreeningTravelRuleMatchedRule.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
