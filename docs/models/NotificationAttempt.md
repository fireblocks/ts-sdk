# NotificationAttempt

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**sentTime** | **number** | The time when the attempt was sent in milliseconds. | [default to undefined]|
|**duration** | **number** | The duration of the attempt in milliseconds. | [default to undefined]|
|**responseCode** | **number** | The response code of the attempt, when missing refer to failureReason. | [optional] [default to undefined]|
|**failureReason** | **string** | The request failure reason in case responseCode is missing. | [optional] [default to undefined]|


## Enum: NotificationAttemptFailureReasonEnum


* `TimedOut` (value: `'TIMED_OUT'`)

* `NoResponse` (value: `'NO_RESPONSE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
