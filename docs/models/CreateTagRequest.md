# CreateTagRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**label** | **string** | The tag label | [default to undefined]|
|**description** | **string** | Description for the tag | [optional] [default to undefined]|
|**color** | **string** | The tag color in hex format | [optional] [default to undefined]|
|**isProtected** | **boolean** | Indication if the tag is protected tag | [optional] [default to false]|
|**type** | [**TagType**](TagType.md) |  | [optional] [default to undefined]|
|**allowedEntityTypes** | **Array&lt;string&gt;** | Allow-list of entity types this tag may be attached to. Soft-defaults to [\&#39;vault_account\&#39;] when omitted, and is immutable after creation. Known values: vault_account (default), contact. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
