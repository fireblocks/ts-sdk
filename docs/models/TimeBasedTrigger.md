# TimeBasedTrigger

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**intervalValue** | **number** | How often the deposit runs, in units of intervalUnit. | [default to undefined]|
|**intervalUnit** | **string** | The unit for intervalValue. | [default to undefined]|
|**balanceThreshold** | **string** | Minimum USDC balance required before a deposit runs. Set to \&quot;0\&quot; to sweep the full available balance every time, with no minimum. | [default to undefined]|


## Enum: TimeBasedTriggerIntervalUnitEnum


* `Minutes` (value: `'MINUTES'`)

* `Hours` (value: `'HOURS'`)

* `Days` (value: `'DAYS'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
