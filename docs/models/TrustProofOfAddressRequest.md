# TrustProofOfAddressRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The ID of the vault account. | [default to undefined]|
|**asset** | **string** | The asset identifier for which proof of address is being created. | [default to undefined]|
|**prefix** | **string** | The prefix to be used for signing messages. | [default to undefined]|
|**trustUuid** | **string** | A unique identifier (UUID) obtained from TRUST (CreateAddressOwnership) | [default to undefined]|
|**address** | **string** | Optional non-default (derived) address of the vault account to prove. Supported for UTXO assets only (&#x60;BTC&#x60;, &#x60;BTC_TEST&#x60;). The address must belong to the vault account for the given asset. Both SegWit and Legacy address forms are accepted. When omitted, the proof is created for the default (index 0) address of the vault account.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
