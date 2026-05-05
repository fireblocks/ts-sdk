# PayoutResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**payoutId** | **string** |  | [default to undefined]|
|**paymentAccount** | [**PaymentAccountResponse**](PaymentAccountResponse.md) |  | [default to undefined]|
|**createdAt** | **number** |  | [default to undefined]|
|**state** | [**PayoutState**](PayoutState.md) |  | [default to undefined]|
|**status** | [**PayoutStatus**](PayoutStatus.md) |  | [default to undefined]|
|**instructionSet** | [**Array&lt;PayoutInstructionResponse&gt;**](PayoutInstructionResponse.md) |  | [default to undefined]|
|**reasonOfFailure** | **string** | - INSUFFICIENT_BALANCE - SOURCE_TRANSLATION - SOURCE_NOT_UNIQUE - SOURCE_NOT_FOUND - SOURCE_TYPE_NOT_SUPPORTED - EMPTY_SOURCE - DESTINATION_TRANSLATION - DESTINATION_NOT_UNIQUE - DESTINATION_NOT_FOUND - EMPTY_DESTINATION - PARSING - UNKNOWN - FIREBLOCKS_CLIENT - TRANSACTION_SUBMISSION  | [optional] [default to undefined]|
|**initMethod** | [**PayoutInitMethod**](PayoutInitMethod.md) |  | [optional] [default to undefined]|
|**reportUrl** | **string** |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
