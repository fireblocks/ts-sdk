# AssetWallet

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultId** | **string** | ID of the vault account. You can [get the vault account by this ID](https://developers.fireblocks.com/reference/get_vault-accounts-vaultaccountid) to retrieve vault properties such as its name, auto fueling, hidden on UI or customer reference ID. | [optional] [default to undefined]|
|**assetId** | **string** | ID of the asset. You can get more information about this asset by using the [supported assets API](https://developers.fireblocks.com/reference/get_supported-assets) | [optional] [default to undefined]|
|**available** | **string** | Available balance, available to use in a transaction. | [optional] [default to undefined]|
|**total** | **string** | Total balance at the asset wallet, as seen at the blockchain explorers. This includes balance available, and any kind of unavailable balance such as locked, frozen, or others. | [optional] [default to undefined]|
|**pending** | **string** | Pending balance. | [optional] [default to undefined]|
|**staked** | **string** | Staked balance. | [optional] [default to undefined]|
|**frozen** | **string** | Funds frozen due to the anti-money laundering policy at this workspace. | [optional] [default to undefined]|
|**lockedAmount** | **string** | Locked balance. | [optional] [default to undefined]|
|**blockHeight** | **string** | The height (number) of the block of the balance. Can by empty. | [optional] [default to undefined]|
|**blockHash** | **string** | The hash of the block of the balance. Can by empty. | [optional] [default to undefined]|
|**creationTimestamp** | **string** | Unix timestamp of the time the asset wallet was created. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
