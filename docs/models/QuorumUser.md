# QuorumUser

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**index** | **number** | Zero-based position of this user within the &#x60;users&#x60; array. The &#x60;members&#x60; arrays elsewhere in the document reference users by this index rather than repeating the user ID. | [default to undefined]|
|**userId** | **string** | The participating user\&#39;s ID. | [default to undefined]|
|**status** | [**QuorumApprovalState**](QuorumApprovalState.md) |  | [default to undefined]|
|**isMandatoryOwner** | **boolean** | Present and &#x60;true&#x60; only for the workspace owner, when this request additionally requires the owner\&#39;s approval. Absent for every other participant. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
