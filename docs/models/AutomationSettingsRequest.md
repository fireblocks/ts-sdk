# AutomationSettingsRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**automationType** | **string** | The type of automation to configure. | [default to undefined]|
|**timeBased** | [**TimeBasedTrigger**](TimeBasedTrigger.md) |  | [default to undefined]|
|**assetId** | **string** | The Fireblocks asset ID this automation applies to. Omit to cover all supported USDC Gateway assets. | [optional] [default to undefined]|


## Enum: AutomationSettingsRequestAutomationTypeEnum


* `UsdcGatewayDeposit` (value: `'USDC_GATEWAY_DEPOSIT'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
