# ApprovalRequestItem

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**requestPayload** | **string** | The pending approval request as a JSON string, exactly as produced by the backend — this is the precise string to sign in order to approve the request (sign it as-is; do not re-serialize). The JSON has the shape { requestId, requestType, requestTimestamp (epoch ms), expiresAt (epoch seconds), requestData }, where requestData is the request-type-specific payload. | [default to undefined]|
|**userStatus** | **string** | The authenticated user\&#39;s approval status for this request. | [default to undefined]|
|**requestSignature** | **string** | Signature over the requestPayload. Empty until request signing is implemented. | [optional] [default to undefined]|
|**quorumStatus** | [**QuorumStatus**](QuorumStatus.md) |  | [optional] [default to undefined]|


## Enum: ApprovalRequestItemUserStatusEnum


* `StatusNotApplicable` (value: `'USER_STATUS_NOT_APPLICABLE'`)

* `NotEligibleToApprove` (value: `'USER_NOT_ELIGIBLE_TO_APPROVE'`)

* `NotApproved` (value: `'USER_NOT_APPROVED'`)

* `Approved` (value: `'USER_APPROVED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
