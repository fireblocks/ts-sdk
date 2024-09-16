# CreateVaultAccountRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | Account Name | [optional] [default to undefined]|
|**hiddenOnUI** | **boolean** | Optional - if true, the created account and all related transactions will not be shown on Fireblocks console | [optional] [default to undefined]|
|**customerRefId** | **string** | Optional - Sets a customer reference ID | [optional] [default to undefined]|
|**autoFuel** | **boolean** | Optional - Sets the autoFuel property of the vault account | [optional] [default to undefined]|
|**vaultType** | **string** | Type of vault account. The default type will be set to MPC.&lt;br/&gt;  If the workspace does not support the selected type, it will return an error. | [optional] [default to VaultTypeEnum_Mpc]|
|**autoAssign** | **boolean** | Applicable only when the vault account type is KEY_LINK. For MPC, this parameter will be ignored.&lt;br/&gt; If set to true and there are available keys, random keys will be assigned to the newly created vault account.&lt;br/&gt; If set to true and there are no available keys to be assigned, it will return an error.&lt;br/&gt; If set to false, the vault account will be created without any keys. | [optional] [default to false]|


## Enum: CreateVaultAccountRequestVaultTypeEnum


* `Mpc` (value: `'MPC'`)

* `KeyLink` (value: `'KEY_LINK'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
