# TempoTransferDestination

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | The kind of destination. | [default to undefined]|
|**id** | **string** | Required when type is VAULT_ACCOUNT or UNMANAGED_WALLET. | [optional] [default to undefined]|
|**oneTimeAddress** | [**OneTimeAddress**](OneTimeAddress.md) |  | [optional] [default to undefined]|
|**memo** | **string** | Tempo TIP-20 memo, sent on-chain with the transfer to this destination. Exactly 32 bytes once UTF-8 encoded.  NOTES:     - The memo is public and permanent on-chain, so do not put sensitive data in it.     - A memo is currently supported only for a transfer with a single destination | [optional] [default to undefined]|


## Enum: TempoTransferDestinationTypeEnum


* `VaultAccount` (value: `'VAULT_ACCOUNT'`)

* `OneTimeAddress` (value: `'ONE_TIME_ADDRESS'`)

* `UnmanagedWallet` (value: `'UNMANAGED_WALLET'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
