# ContractTemplateDto

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the contract template | [default to undefined]|
|**name** | **string** | The name of the contract template | [default to undefined]|
|**description** | **string** | A short description of the contract template | [default to undefined]|
|**abi** | [**Array&lt;AbiFunction&gt;**](AbiFunction.md) | The abi of the contract template. Necessary for displaying and for after deployment encoding | [default to undefined]|
|**isPublic** | **boolean** | Is this a contract that is viewable by all fireblocks\&#39;s users or is it visible only for this workspace | [default to undefined]|
|**initializationPhase** | **string** |  | [default to undefined]|
|**longDescription** | **string** | A full description of the contract template. May contain   to break the lines | [optional] [default to undefined]|
|**attributes** | [**ContractAttributes**](ContractAttributes.md) | The attributes related to this contract template. It will be displayed in the tokenization page | [optional] [default to undefined]|
|**docs** | [**ContractDoc**](ContractDoc.md) | A &#x60;natspec&#x60; compliant documentation json. Can be retrieved from the output json after compilation | [optional] [default to undefined]|
|**owner** | **string** | The workspace id of the owner of this contract template. If it\&#39;s a private contract, only this workspace will be allowed to deploy it | [optional] [default to undefined]|
|**vendor** | [**VendorDto**](VendorDto.md) | The details of the vendor of this contract template. Applicable only for public contract templates | [optional] [default to undefined]|
|**canDeploy** | **boolean** | True if the workspace allowed to deploy this contract, false otherwise | [optional] [default to undefined]|
|**type** | **string** | The type of the contract template | [optional] [default to undefined]|
|**implementationContractId** | **string** |  | [optional] [default to undefined]|


## Enum: ContractTemplateDtoInitializationPhaseEnum


* `OnDeployment` (value: `'ON_DEPLOYMENT'`)

* `PostDeployment` (value: `'POST_DEPLOYMENT'`)



## Enum: ContractTemplateDtoTypeEnum


* `FungibleToken` (value: `'FUNGIBLE_TOKEN'`)

* `NonFungibleToken` (value: `'NON_FUNGIBLE_TOKEN'`)

* `NonToken` (value: `'NON_TOKEN'`)

* `TokenExtension` (value: `'TOKEN_EXTENSION'`)

* `TokenUtility` (value: `'TOKEN_UTILITY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
