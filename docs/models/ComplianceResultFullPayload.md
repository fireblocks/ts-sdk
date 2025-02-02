# ComplianceResultFullPayload

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**aml** | [**Array&lt;ComplianceScreeningResultFullPayload&gt;**](ComplianceScreeningResultFullPayload.md) | The end result of the AML screening. | [optional] [default to undefined]|
|**tr** | [**Array&lt;ComplianceScreeningResultFullPayload&gt;**](ComplianceScreeningResultFullPayload.md) | The result of the Travel Rule screening. | [optional] [default to undefined]|
|**amlList** | [**Array&lt;ComplianceScreeningResultFullPayload&gt;**](ComplianceScreeningResultFullPayload.md) | The list of all results of the AML screening. | [optional] [default to undefined]|
|**status** | **string** | Status of compliance result screening. | [optional] [default to undefined]|
|**amlRegistration** | [**Array&lt;AmlRegistrationResultFullPayload&gt;**](AmlRegistrationResultFullPayload.md) | The results of the AML address registration. | [optional] [default to undefined]|


## Enum: ComplianceResultFullPayloadStatusEnum


* `Started` (value: `'Started'`)

* `NetworkConnectionAddressResolve` (value: `'NetworkConnectionAddressResolve'`)

* `ScreeningPrepare` (value: `'ScreeningPrepare'`)

* `AmlStarted` (value: `'AMLStarted'`)

* `AmlCompleted` (value: `'AMLCompleted'`)

* `AmlFailed` (value: `'AMLFailed'`)

* `AmlinBackground` (value: `'AMLInBackground'`)

* `TrPreconditionChecks` (value: `'TRPreconditionChecks'`)

* `TrStarted` (value: `'TRStarted'`)

* `TrCompleted` (value: `'TRCompleted'`)

* `TrFailed` (value: `'TRFailed'`)

* `Completed` (value: `'Completed'`)

* `IncomingStarted` (value: `'IncomingStarted'`)

* `IncomingScreeningPrepare` (value: `'IncomingScreeningPrepare'`)

* `IncomingWaitForFirstConfirmation` (value: `'IncomingWaitForFirstConfirmation'`)

* `AmlIncomingStarted` (value: `'AMLIncomingStarted'`)

* `AmlIncomingCompleted` (value: `'AMLIncomingCompleted'`)

* `AmlIncomingFailed` (value: `'AMLIncomingFailed'`)

* `AmlIncomingInBackground` (value: `'AMLIncomingInBackground'`)

* `TrIncomingStarted` (value: `'TRIncomingStarted'`)

* `TrIncomingCompleted` (value: `'TRIncomingCompleted'`)

* `TrIncomingFailed` (value: `'TRIncomingFailed'`)

* `IncomingCompleted` (value: `'IncomingCompleted'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
