# ComplianceResult

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**aml** | [**Array&lt;ComplianceScreeningResult&gt;**](ComplianceScreeningResult.md) | The end result of the AML screening. | [optional] [default to undefined]|
|**tr** | [**Array&lt;ComplianceScreeningResult&gt;**](ComplianceScreeningResult.md) | The result of the Travel Rule screening. | [optional] [default to undefined]|
|**amlList** | [**Array&lt;ComplianceScreeningResult&gt;**](ComplianceScreeningResult.md) | The list of all results of the AML screening. | [optional] [default to undefined]|
|**status** | **string** | Status of compliance result screening. | [optional] [default to undefined]|
|**amlRegistration** | [**Array&lt;AmlRegistrationResult&gt;**](AmlRegistrationResult.md) | The results of the AML address registration. | [optional] [default to undefined]|


## Enum: ComplianceResultStatusEnum


* `Started` (value: `'Started'`)

* `AmlStarted` (value: `'AMLStarted'`)

* `AmlCompleted` (value: `'AMLCompleted'`)

* `AmlFailed` (value: `'AMLFailed'`)

* `AmlinBackground` (value: `'AMLInBackground'`)

* `TrStarted` (value: `'TRStarted'`)

* `TrCompleted` (value: `'TRCompleted'`)

* `TrFailed` (value: `'TRFailed'`)

* `Completed` (value: `'Completed'`)

* `RegistrationStarted` (value: `'RegistrationStarted'`)

* `AmlRegistrationStarted` (value: `'AMLRegistrationStarted'`)

* `AmlRegistrationCompleted` (value: `'AMLRegistrationCompleted'`)

* `TrUpdateStarted` (value: `'TRUpdateStarted'`)

* `TrUpdateCompleted` (value: `'TRUpdateCompleted'`)

* `UpdateCompleted` (value: `'UpdateCompleted'`)

* `IncomingStarted` (value: `'IncomingStarted'`)

* `AmlIncomingStarted` (value: `'AMLIncomingStarted'`)

* `AmlIncomingCompleted` (value: `'AMLIncomingCompleted'`)

* `AmlIncomingFailed` (value: `'AMLIncomingFailed'`)

* `AmlIncomingInBackground` (value: `'AMLIncomingInBackground'`)

* `TrIncomingStarted` (value: `'TRIncomingStarted'`)

* `TrIncomingCompleted` (value: `'TRIncomingCompleted'`)

* `TrIncomingFailed` (value: `'TRIncomingFailed'`)

* `IncomingCompleted` (value: `'IncomingCompleted'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
