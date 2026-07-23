# PolicyRuleQuotaResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**amount** | **string** | The calculated Amount Over Time (AOT) quota for the rule | [optional] [default to undefined]|
|**quotaConfig** | [**AmountOverTimeConfig**](AmountOverTimeConfig.md) |  | [optional] [default to undefined]|
|**currency** | **string** | The currency of the AOT amount | [optional] [default to undefined]|
|**windowStart** | **number** | Unix timestamp (seconds) of the start of the current AOT time window | [optional] [default to undefined]|
|**windowEnd** | **number** | Unix timestamp (seconds) of the end of the current AOT time window (when the AOT was calculated) | [optional] [default to undefined]|
|**transactionCount** | **number** | Number of transactions in the current AOT time window | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
