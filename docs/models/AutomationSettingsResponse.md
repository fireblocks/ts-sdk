# AutomationSettingsResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**automationId** | **string** | The ID of this deposit automation. | [default to undefined]|
|**vaultAccountId** | **string** | The vault account this deposit automation applies to. | [default to undefined]|
|**automationType** | **string** | The type of this automation. | [default to undefined]|
|**timeBased** | [**TimeBasedTrigger**](TimeBasedTrigger.md) |  | [default to undefined]|
|**assetId** | **string** | The Fireblocks asset ID this automation applies to, if scoped to one. | [optional] [default to undefined]|


## Enum: AutomationSettingsResponseAutomationTypeEnum


* `UsdcGatewayDeposit` (value: `'USDC_GATEWAY_DEPOSIT'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
