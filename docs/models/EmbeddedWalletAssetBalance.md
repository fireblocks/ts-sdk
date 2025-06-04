# EmbeddedWalletAssetBalance

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier of the asset balance entry | [default to undefined]|
|**total** | **string** | Total balance amount for the asset in the account (including pending, locked, and available) | [default to undefined]|
|**available** | **string** | The balance available for use or withdrawal | [default to undefined]|
|**pending** | **string** | Amount pending confirmation from blockchain (e.g., unconfirmed deposits) | [default to undefined]|
|**frozen** | **string** | Balance that is frozen due to policy or regulatory lock | [default to undefined]|
|**lockedAmount** | **string** | Funds locked for operations such as staking or delegation | [default to undefined]|
|**blockHeight** | **string** | Latest known blockchain height when balance was fetched | [optional] [default to undefined]|
|**blockHash** | **string** | Hash of the blockchain block associated with the current balance state | [optional] [default to undefined]|
|**rewardInfo** | [**EmbeddedWalletAssetRewardInfo**](EmbeddedWalletAssetRewardInfo.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
