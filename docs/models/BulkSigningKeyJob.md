# BulkSigningKeyJob

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**jobId** | **string** | Id of the registration job. | [default to undefined]|
|**status** | **string** | QUEUED means the job is waiting for another bulk registration to finish, since only a limited number run at once. IN_PROGRESS means it is running. COMPLETED means every submitted key is present in the workspace. FAILED means the request was refused before any key was registered, so &#x60;reason&#x60; has to be acted on before resubmitting is worth anything. INCOMPLETE means some keys are not registered; resubmitting the same request retries exactly those, and &#x60;reason&#x60; says whether that is likely to help -- keys not registered because of a transient failure will succeed, a key whose certificate or proof was rejected will be rejected again. | [default to undefined]|
|**total** | **number** | Keys in the submitted request. | [default to undefined]|
|**created** | **number** | Keys registered by this job. | [default to undefined]|
|**alreadyRegistered** | **number** | Keys already present in the workspace, recognized and skipped. | [default to undefined]|
|**failed** | **number** | Keys rejected. See &#x60;reason&#x60;. | [default to undefined]|
|**createdAt** | **number** | Creation date (timestamp) in milliseconds. | [default to undefined]|
|**updatedAt** | **number** | Last progress update (timestamp) in milliseconds. | [default to undefined]|
|**reason** | **string** | Free text describing what went wrong. Null while the job is healthy. | [optional] [default to undefined]|
|**fileHash** | **string** | Hex digest over the submitted keys. Two jobs sharing a digest were the same set of keys, which makes a sequence of resubmissions recognizable. | [optional] [default to undefined]|


## Enum: BulkSigningKeyJobStatusEnum


* `Queued` (value: `'QUEUED'`)

* `InProgress` (value: `'IN_PROGRESS'`)

* `Completed` (value: `'COMPLETED'`)

* `Incomplete` (value: `'INCOMPLETE'`)

* `Failed` (value: `'FAILED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
