# Blockchain

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique blockchain identifier. | [default to undefined]|
|**blockchainState** | **string** | Current lifecycle state of the blockchain. | [default to undefined]|
|**declaredProperties** | [**BlockchainDeclaredProperties**](BlockchainDeclaredProperties.md) |  | [default to undefined]|
|**createdAtUtc** | **number** | Creation timestamp (epoch milliseconds, UTC). | [default to undefined]|
|**updatedAtUtc** | **number** | Last update timestamp (epoch milliseconds, UTC). | [default to undefined]|
|**validationFailureReasons** | **Array&lt;string&gt;** | Reasons the latest validation failed, if any. | [default to undefined]|
|**validationSessionId** | **string** | Validation session data (optional - only present if validation session exists) | [optional] [default to undefined]|
|**validationStatus** | **string** | Status of the latest validation session. | [optional] [default to undefined]|
|**validationCreatedAtUtc** | **number** | Validation session creation timestamp (epoch milliseconds, UTC). | [optional] [default to undefined]|
|**validationUpdatedAtUtc** | **number** | Validation session last update timestamp (epoch milliseconds, UTC). | [optional] [default to undefined]|
|**validationCompletedAtUtc** | **number** | Validation session completion timestamp (epoch milliseconds, UTC). | [optional] [default to undefined]|
|**failedStep** | **string** | Business step at which the activation flow failed. Absent when no failure has been recorded. | [optional] [default to undefined]|


## Enum: BlockchainBlockchainStateEnum


* `Created` (value: `'BLOCKCHAIN_STATE_CREATED'`)

* `Activating` (value: `'BLOCKCHAIN_STATE_ACTIVATING'`)

* `Activated` (value: `'BLOCKCHAIN_STATE_ACTIVATED'`)

* `Deactivating` (value: `'BLOCKCHAIN_STATE_DEACTIVATING'`)

* `Deactivated` (value: `'BLOCKCHAIN_STATE_DEACTIVATED'`)

* `TechnicalFailure` (value: `'BLOCKCHAIN_STATE_TECHNICAL_FAILURE'`)



## Enum: BlockchainValidationStatusEnum


* `Pending` (value: `'VALIDATION_STATUS_PENDING'`)

* `InProgress` (value: `'VALIDATION_STATUS_IN_PROGRESS'`)

* `Succeeded` (value: `'VALIDATION_STATUS_SUCCEEDED'`)

* `Failed` (value: `'VALIDATION_STATUS_FAILED'`)

* `TechnicalFailure` (value: `'VALIDATION_STATUS_TECHNICAL_FAILURE'`)



## Enum: BlockchainFailedStepEnum


* `Configuration` (value: `'FAILED_STEP_CONFIGURATION'`)

* `ResourcesAllocation` (value: `'FAILED_STEP_RESOURCES_ALLOCATION'`)

* `TestTxExternalToFireblocks` (value: `'FAILED_STEP_TEST_TX_EXTERNAL_TO_FIREBLOCKS'`)

* `TestTxFireblocksToFireblocks` (value: `'FAILED_STEP_TEST_TX_FIREBLOCKS_TO_FIREBLOCKS'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
