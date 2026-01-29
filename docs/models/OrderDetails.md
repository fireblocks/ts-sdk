# OrderDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** |  | [default to undefined]|
|**via** | [**AccessType**](AccessType.md) |  | [default to undefined]|
|**status** | [**OrderStatus**](OrderStatus.md) |  | [default to undefined]|
|**createdAt** | **string** |  | [default to undefined]|
|**executionSteps** | [**Array&lt;OrderExecutionStep&gt;**](OrderExecutionStep.md) |  | [default to undefined]|
|**executionResponseDetails** | [**ExecutionResponseDetails**](ExecutionResponseDetails.md) |  | [default to undefined]|
|**settlement** | [**Settlement**](Settlement.md) |  | [default to undefined]|
|**createdBy** | **string** | The ID of the user who created the order | [default to undefined]|
|**updatedAt** | **string** |  | [optional] [default to undefined]|
|**receipt** | [**TransferReceipt**](TransferReceipt.md) |  | [optional] [default to undefined]|
|**generalFees** | [**Array&lt;Fee&gt;**](Fee.md) |  | [optional] [default to undefined]|
|**participantsIdentification** | [**ParticipantsIdentification**](ParticipantsIdentification.md) |  | [optional] [default to undefined]|
|**paymentInstructions** | [**Array&lt;PaymentInstructions&gt;**](PaymentInstructions.md) | Payment instructions for the order, the client can use one of these to pay the order. | [optional] [default to undefined]|
|**customerInternalReferenceId** | **string** | Internal reference ID for the customer | [optional] [default to undefined]|
|**note** | **string** | Optional note for the Order | [optional] [default to undefined]|
|**expiresAt** | **string** |  | [optional] [default to undefined]|
|**failure** | [**Failure**](Failure.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
