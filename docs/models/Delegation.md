# Delegation

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the staking position | [default to undefined]|
|**vaultAccountId** | **string** | The source vault account to stake from | [default to undefined]|
|**validatorName** | **string** | The destination validator address name | [default to undefined]|
|**providerName** | **string** | The destination validator provider name | [default to undefined]|
|**chainDescriptor** | **string** | The protocol identifier (e.g. \&quot;ETH\&quot;/ \&quot;SOL\&quot;) to use | [default to undefined]|
|**amount** | **string** | Amount of tokens to stake, measured in the staked asset unit. | [default to undefined]|
|**rewardsAmount** | **string** | The amount staked in the position, measured in the staked asset unit. | [default to undefined]|
|**dateCreated** | **string** | When was the request made (ISO Date). | [default to undefined]|
|**dateUpdated** | **string** | When has the position last changed (ISO Date). | [default to undefined]|
|**status** | **string** | The current status. | [default to undefined]|
|**relatedTransactions** | [**Array&lt;RelatedTransaction&gt;**](RelatedTransaction.md) | An array of transaction objects related to this position. Each object includes a \&#39;txId\&#39; representing the transaction ID and a \&#39;completed\&#39; boolean indicating if the transaction was completed. | [default to undefined]|
|**validatorAddress** | **string** | The destination address of the staking transaction. | [default to undefined]|
|**providerId** | [**StakingProvider**](StakingProvider.md) |  | [default to undefined]|
|**availableActions** | **Array&lt;string&gt;** | An array of available actions that can be performed. for example, actions like \&quot;unstake\&quot; or \&quot;withdraw\&quot;. | [default to undefined]|
|**inProgress** | **boolean** | Indicates whether there is an ongoing action for this position (true if ongoing, false if not). | [default to undefined]|
|**blockchainPositionInfo** | [**SolanaBlockchainData**](SolanaBlockchainData.md) |  | [default to undefined]|
|**inProgressTxId** | **string** | The transaction ID of the ongoing request | [optional] [default to undefined]|
|**relatedRequests** | [**Array&lt;RelatedRequest&gt;**](RelatedRequest.md) | An array of partial unstake requests for this position, relevant only for the Lido provider. Each object includes the status of the unstake request, a boolean indicating whether the action is in progress, the amount of tokens to unstake, and the transaction ID of the request. With Lido, a position may have multiple partial unstake requests in different states. This field is optional and not applicable for other providers. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
