# Contact

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the contact | [default to undefined]|
|**name** | **string** | The contact name, unique across the workspace | [default to undefined]|
|**type** | **string** | Whether the contact is an external party or an account the workspace owns elsewhere | [default to undefined]|
|**updatedAt** | **string** | The date and time the contact was last modified, in ISO-8601 | [default to undefined]|
|**tags** | [**Array&lt;ContactTag&gt;**](ContactTag.md) | The tags attached to the contact | [default to undefined]|
|**pendingApprovalRequest** | [**ContactApprovalRequest**](ContactApprovalRequest.md) |  | [default to undefined]|
|**accessControl** | **string** | The access control applied to the contact. Absent when none is set. | [optional] [default to undefined]|
|**notes** | **string** | Free-text notes on the contact. Absent when none are set. | [optional] [default to undefined]|
|**externalRefId** | **string** | A customer-supplied reference id for the contact. Absent when none is set. | [optional] [default to undefined]|
|**containerId** | **string** | The container holding the contact. Absent when the contact sits at the root. | [optional] [default to undefined]|
|**archivedAt** | **string** | The date and time the contact was archived, in ISO-8601. Absent for live contacts, so this only carries a value when the request passed archived&#x3D;true. | [optional] [default to undefined]|


## Enum: ContactTypeEnum


* `Counterparty` (value: `'COUNTERPARTY'`)

* `OwnAccount` (value: `'OWN_ACCOUNT'`)



## Enum: ContactAccessControlEnum


* `Whitelist` (value: `'WHITELIST'`)

* `Blacklist` (value: `'BLACKLIST'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
