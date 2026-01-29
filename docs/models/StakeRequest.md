# StakeRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The Fireblocks vault account ID that will source the funds for staking. | [default to undefined]|
|**providerId** | [**StakingProvider**](StakingProvider.md) |  | [default to undefined]|
|**stakeAmount** | **string** | The amount of tokens to stake. The amount may be truncated to match the chain\&#39;s decimal precision requirements. | [default to undefined]|
|**txNote** | **string** | Optional note or comment to associate with the stake transaction. This note will be included in transaction records and can be used for tracking or audit purposes. | [optional] [default to undefined]|
|**fee** | **string** | Optional transaction fee. Controls the priority and cost of the blockchain transaction. Only one of \&#39;fee\&#39; or \&#39;feeLevel\&#39; should be provided; if both are specified, \&#39;feeLevel\&#39; takes precedence. | [optional] [default to undefined]|
|**feeLevel** | [**FeeLevel**](FeeLevel.md) |  | [optional] [default to undefined]|
|**chainDescriptor** | **string** | Protocol identifier for the staking operation | [optional] [default to undefined]|
|**id** | **string** | Applies only to Ethereum compounding validator staking (Pectra/EIP-7251). The ID of an existing staking position to add additional stake to. When provided, adds stake to the specified position instead of creating a new one. Requires \&#39;isCompoundingValidator\&#39; to be true. | [optional] [default to undefined]|
|**isCompoundingValidator** | **boolean** | Applies only to Ethereum staking. Indicates whether to use a compounding validator (see Pectra/EIP-7251). When true, creates a position that supports adding additional stake via the \&#39;id\&#39; parameter. If not provided, defaults to false and a legacy (non-compounding) validator will be used. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
