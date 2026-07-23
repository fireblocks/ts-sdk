# Tag

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the tag | [default to undefined]|
|**label** | **string** | The tag label | [default to undefined]|
|**isProtected** | **boolean** | Indication if the tag is a protected tag | [default to false]|
|**updatedAt** | **number** | The date and time the tag was last updated | [default to undefined]|
|**description** | **string** | Description for the tag | [optional] [default to undefined]|
|**color** | **string** | The tag color in hex format | [optional] [default to undefined]|
|**type** | [**TagType**](TagType.md) |  | [optional] [default to undefined]|
|**allowedEntityTypes** | **Array&lt;string&gt;** | The entity types this tag may be attached to. Tags created before this field was introduced read back as [\&#39;vault_account\&#39;]. Known values: vault_account (default), contact. | [optional] [default to undefined]|
|**pendingApprovalRequest** | [**ApprovalRequest**](ApprovalRequest.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
