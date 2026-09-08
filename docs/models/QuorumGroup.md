# QuorumGroup

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**threshold** | **number** | Number of approvals this tier requires. | [default to undefined]|
|**currentApprovalCount** | **number** | Approvals collected so far toward &#x60;threshold&#x60;. | [default to undefined]|
|**status** | [**QuorumApprovalState**](QuorumApprovalState.md) |  | [default to undefined]|
|**members** | **Array&lt;number&gt;** | Indexes into the top-level &#x60;users&#x60; array identifying the users who belong to this tier. Returned only for &#x60;quorumStatusMode&#x3D;FULL&#x60;; omitted otherwise. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
