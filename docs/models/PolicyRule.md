# PolicyRule

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | Name of the policy rule | [default to undefined]|
|**id** | **string** | Unique identifier for the policy rule | [default to undefined]|
|**policyEngineVersion** | **string** | Policy engine version | [default to undefined]|
|**type** | [**PolicyType**](PolicyType.md) |  | [default to undefined]|
|**initiator** | [**InitiatorConfigPattern**](InitiatorConfigPattern.md) |  | [default to undefined]|
|**asset** | [**AssetConfig**](AssetConfig.md) |  | [default to undefined]|
|**source** | [**AccountConfig**](AccountConfig.md) |  | [default to undefined]|
|**verdict** | [**VerdictConfig**](VerdictConfig.md) |  | [default to undefined]|
|**subType** | [**PolicyType**](PolicyType.md) |  | [optional] [default to undefined]|
|**destination** | [**DestinationConfig**](DestinationConfig.md) |  | [optional] [default to undefined]|
|**account** | [**AccountConfig**](AccountConfig.md) |  | [optional] [default to undefined]|
|**amountOverTime** | [**AmountOverTimeConfig**](AmountOverTimeConfig.md) |  | [optional] [default to undefined]|
|**amount** | [**AmountRange**](AmountRange.md) |  | [optional] [default to undefined]|
|**externalDescriptor** | **string** | External descriptor for the rule | [optional] [default to undefined]|
|**method** | [**ContractMethodPattern**](ContractMethodPattern.md) |  | [optional] [default to undefined]|
|**isGlobalPolicy** | **boolean** | Whether this is a global policy | [optional] [default to undefined]|
|**programCall** | [**ProgramCallConfig**](ProgramCallConfig.md) |  | [optional] [default to undefined]|
|**screeningMetadata** | [**ScreeningMetadataConfig**](ScreeningMetadataConfig.md) |  | [optional] [default to undefined]|
|**quoteAsset** | [**AssetConfig**](AssetConfig.md) |  | [optional] [default to undefined]|
|**baseAsset** | [**AssetConfig**](AssetConfig.md) |  | [optional] [default to undefined]|
|**quoteAmount** | [**AmountRange**](AmountRange.md) |  | [optional] [default to undefined]|
|**baseAmount** | [**AmountRange**](AmountRange.md) |  | [optional] [default to undefined]|
|**derivationPath** | [**DerivationPathConfig**](DerivationPathConfig.md) |  | [optional] [default to undefined]|
|**index** | **number** | Index for the policy rule | [optional] [default to undefined]|


## Enum: PolicyRulePolicyEngineVersionEnum


* `V2` (value: `'v2'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
