# RegisterNewAssetRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**blockchainId** | **string** | Native asset ID of the blockchain | [default to undefined]|
|**address** | **string** | Asset address. - EVM-based chains: token contract address - Stellar (XLM): issuer address - Algorand (ALGO): asset ID - TRON (TRX): token contract address - NEAR: token address - Solana: token\&#39;s mint account address  | [default to undefined]|
|**symbol** | **string** | Required for Stellar only, asset code is expected. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
