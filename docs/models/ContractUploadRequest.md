# ContractUploadRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | The name of the contract template | [default to undefined]|
|**description** | **string** | A short description of the contract template | [default to undefined]|
|**bytecode** | **string** | The compiled artifact of this smart contract. Used for deployment of this contract template | [default to undefined]|
|**type** | **string** | The type of the contract template | [default to undefined]|
|**abi** | [**Array&lt;AbiFunction&gt;**](AbiFunction.md) | The abi of the contract template. Necessary for displaying and for after deployment encoding | [default to undefined]|
|**longDescription** | **string** | A full description of the contract template. May contain   to break the lines | [optional] [default to undefined]|
|**sourcecode** | **string** | The source code of the contract. Optional. | [optional] [default to undefined]|
|**docs** | [**ContractDoc**](ContractDoc.md) | A &#x60;natspec&#x60; compliant documentation json. Can be retrieved from the output json after compilation | [optional] [default to undefined]|
|**attributes** | [**ContractAttributes**](ContractAttributes.md) | The attributes related to this contract template. It will be displayed in the tokenization page | [optional] [default to undefined]|
|**protocol** | **string** | The protocol that the template will be used for | [optional] [default to undefined]|


## Enum: ContractUploadRequestTypeEnum


* `FungibleToken` (value: `'FUNGIBLE_TOKEN'`)

* `NonFungibleToken` (value: `'NON_FUNGIBLE_TOKEN'`)

* `NonToken` (value: `'NON_TOKEN'`)

* `TokenExtension` (value: `'TOKEN_EXTENSION'`)

* `TokenUtility` (value: `'TOKEN_UTILITY'`)



## Enum: ContractUploadRequestProtocolEnum


* `Eth` (value: `'ETH'`)

* `Sol` (value: `'SOL'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
