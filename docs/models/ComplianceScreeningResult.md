# ComplianceScreeningResult

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**provider** | **string** | Screening provider | [optional] [default to undefined]|
|**payload** | **object** | The payload of the screening result. The payload is a JSON object that contains the screening result. The payload is different for each screening provider.  | [optional] [default to undefined]|
|**bypassReason** | **string** | Reason AML screening was bypassed | [optional] [default to undefined]|
|**screeningStatus** | **string** |  | [optional] [default to undefined]|
|**timestamp** | **number** |  | [optional] [default to undefined]|


## Enum: ComplianceScreeningResultProviderEnum


* `Chainalysis` (value: `'CHAINALYSIS'`)

* `Elliptic` (value: `'ELLIPTIC'`)

* `ChainalysisV2` (value: `'CHAINALYSIS_V2'`)

* `EllipticHolistic` (value: `'ELLIPTIC_HOLISTIC'`)

* `None` (value: `'NONE'`)



## Enum: ComplianceScreeningResultBypassReasonEnum


* `Manual` (value: `'MANUAL'`)

* `UnsupportedAsset` (value: `'UNSUPPORTED_ASSET'`)

* `BypassedFailure` (value: `'BYPASSED_FAILURE'`)

* `UnsupportedRoute` (value: `'UNSUPPORTED_ROUTE'`)

* `PassedByPolicy` (value: `'PASSED_BY_POLICY'`)

* `TimedOut` (value: `'TIMED_OUT'`)

* `BadCredentials` (value: `'BAD_CREDENTIALS'`)

* `ConfigurationError` (value: `'CONFIGURATION_ERROR'`)

* `DroppedByBlockchain` (value: `'DROPPED_BY_BLOCKCHAIN'`)

* `ProcessDismissed` (value: `'PROCESS_DISMISSED'`)



## Enum: ComplianceScreeningResultScreeningStatusEnum


* `Completed` (value: `'COMPLETED'`)

* `Pending` (value: `'PENDING'`)

* `Bypassed` (value: `'BYPASSED'`)

* `Failed` (value: `'FAILED'`)

* `Frozen` (value: `'FROZEN'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
