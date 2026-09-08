# SimpleQuorum

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Discriminator identifying the flattened single-tier shape. | [default to undefined]|
|**threshold** | **number** | Number of approvals this request requires. | [default to undefined]|
|**currentApprovalCount** | **number** | Approvals collected so far toward &#x60;threshold&#x60;. | [default to undefined]|
|**status** | [**QuorumApprovalState**](QuorumApprovalState.md) |  | [default to undefined]|
|**isMandatoryOwnerApproved** | **boolean** | Present only when this request additionally requires the workspace owner\&#39;s approval. &#x60;false&#x60; means the owner has not approved yet, which is why &#x60;status&#x60; can remain &#x60;PENDING&#x60; even once &#x60;currentApprovalCount&#x60; reaches &#x60;threshold&#x60;. Absent when no owner approval is required. | [optional] [default to undefined]|
|**members** | **Array&lt;number&gt;** | Indexes into the top-level &#x60;users&#x60; array identifying the users who may approve. Returned only for &#x60;quorumStatusMode&#x3D;FULL&#x60;; omitted otherwise. | [optional] [default to undefined]|


## Enum: SimpleQuorumTypeEnum


* `Simple` (value: `'SIMPLE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
