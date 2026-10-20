# OfferResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**responseType** | **string** | How you are answering the offer — one of the offer transaction\&#39;s &#x60;cantonDetails.offerResponse.availableResponses&#x60;. That list does not change after the offer arrives; check &#x60;expiresAt&#x60; and the transaction status to see whether it is still answerable. | [default to undefined]|
|**payload** | [**DtccOnboardingRejectPayload**](DtccOnboardingRejectPayload.md) |  | [default to undefined]|


## Enum: OfferResponseResponseTypeEnum


* `AllocationWithdraw` (value: `'ALLOCATION_WITHDRAW'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
