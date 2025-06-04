# EmbeddedWalletAssetResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** |  | [default to undefined]|
|**symbol** | **string** | The asset symbol | [default to undefined]|
|**name** | **string** | The asset name | [default to undefined]|
|**decimals** | **number** | Number of decimals | [default to undefined]|
|**networkProtocol** | **string** | Netowrk protocol of the blockchain (BTC, ETH) | [default to undefined]|
|**testnet** | **boolean** | Is in testnet | [default to undefined]|
|**hasFee** | **boolean** | Has fee | [default to undefined]|
|**baseAsset** | **string** | Base asset symbol BTC_TEST, ETH_TEST5) | [default to undefined]|
|**coinType** | **number** | Unique identifier of an asset (0 for BTC, 60 for ETH, etc.) | [default to undefined]|
|**blockchain** | **string** | The blockchain native asset id which the token is deployed on | [default to undefined]|
|**ethNetwork** | **string** |  | [optional] [default to undefined]|
|**ethContractAddress** | **string** |  | [optional] [default to undefined]|
|**issuerAddress** | **string** | The address of the issuer of this token. Will be part of the identifier of this token on chain. | [optional] [default to undefined]|
|**blockchainSymbol** | **string** | Name of blockchain | [optional] [default to undefined]|
|**deprecated** | **boolean** | Is blockchain deprecated | [optional] [default to undefined]|
|**blockchainDisplayName** | **string** | Name of blockchain | [optional] [default to undefined]|
|**algorithm** | **string** |  | [optional] [default to undefined]|


## Enum: EmbeddedWalletAssetResponseAlgorithmEnum


* `EcdsaSecp256K1` (value: `'MPC_ECDSA_SECP256K1'`)

* `EddsaEd25519` (value: `'MPC_EDDSA_ED25519'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
