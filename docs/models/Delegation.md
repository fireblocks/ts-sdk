# Delegation

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the staking position | [default to undefined]|
|**vaultAccountId** | **string** | The source vault account to stake from | [default to undefined]|
|**validatorName** | **string** | The destination validator address name | [default to undefined]|
|**providerName** | **string** | The destination validator provider name | [default to undefined]|
|**chainDescriptor** | **string** | The protocol identifier (e.g. \&quot;ETH\&quot;/ \&quot;SOL\&quot;) to use | [default to undefined]|
|**amount** | **string** | Total value of the staking position. For Solana, Lido and Ethereum (compounding validator): includes the original stake plus accumulated rewards. For MATIC, Cosmos and Ethereum (legacy validator): refers to the amount currently staked. | [default to undefined]|
|**rewardsAmount** | **string** | The amount staked in the position, measured in the staked asset unit. | [default to undefined]|
|**dateCreated** | **string** | When was the request made (ISO Date). | [default to undefined]|
|**dateUpdated** | **string** | When has the position last changed (ISO Date). | [default to undefined]|
|**status** | **string** | The current status. | [default to undefined]|
|**relatedTransactions** | [**Array&lt;RelatedTransaction&gt;**](RelatedTransaction.md) | An array of transaction objects related to this position. Each object includes a \&#39;txId\&#39; representing the transaction ID and a \&#39;completed\&#39; boolean indicating if the transaction was completed. | [default to undefined]|
|**validatorAddress** | **string** | The destination address of the staking transaction. | [default to undefined]|
|**providerId** | [**StakingProvider**](StakingProvider.md) |  | [default to undefined]|
|**availableActions** | **Array&lt;string&gt;** | An array of available actions that can be performed. for example, actions like \&quot;unstake\&quot; or \&quot;withdraw\&quot;. | [default to undefined]|
|**inProgress** | **boolean** | Indicates whether there is an ongoing action for this position related to this request | [default to undefined]|
|**blockchainPositionInfo** | [**DelegationBlockchainPositionInfo**](DelegationBlockchainPositionInfo.md) |  | [default to undefined]|
|**inProgressTxId** | **string** | The transaction ID of the initial stake position request only. Only present when there is an active initial stake transaction. | [optional] [default to undefined]|
|**relatedRequests** | [**Array&lt;RelatedRequest&gt;**](RelatedRequest.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
