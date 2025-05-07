# VaultAsset

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** |  | [optional] [default to undefined]|
|**total** | **string** | The total wallet balance. In EOS this value includes the network balance, self staking and pending refund. For all other coins it is the balance as it appears on the blockchain. | [optional] [default to undefined]|
|**balance** | **string** | Deprecated - replaced by \&quot;total\&quot; | [optional] [default to undefined]|
|**available** | **string** | Funds available for transfer. Equals the blockchain balance minus any locked amounts | [optional] [default to undefined]|
|**pending** | **string** | The cumulative balance of all transactions pending to be cleared | [optional] [default to undefined]|
|**frozen** | **string** | The cumulative frozen balance | [optional] [default to undefined]|
|**lockedAmount** | **string** | Funds in outgoing transactions that are not yet published to the network | [optional] [default to undefined]|
|**staked** | **string** | Staked balance | [optional] [default to undefined]|
|**totalStakedCPU** | **string** | Deprecated | [optional] [default to undefined]|
|**totalStakedNetwork** | **string** | Deprecated | [optional] [default to undefined]|
|**selfStakedCPU** | **string** | Deprecated | [optional] [default to undefined]|
|**selfStakedNetwork** | **string** | Deprecated | [optional] [default to undefined]|
|**pendingRefundCPU** | **string** | Deprecated | [optional] [default to undefined]|
|**pendingRefundNetwork** | **string** | Deprecated | [optional] [default to undefined]|
|**blockHeight** | **string** |  | [optional] [default to undefined]|
|**blockHash** | **string** |  | [optional] [default to undefined]|
|**rewardsInfo** | [**RewardsInfo**](RewardsInfo.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
