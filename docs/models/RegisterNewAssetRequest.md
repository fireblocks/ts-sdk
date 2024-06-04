# RegisterNewAssetRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**blockchainId** | **string** | Native asset ID of the blockchain | [default to undefined]|
|**address** | **string** | Asset address.  - For EVM based chains this should be the token contract address. - For Stellar (XLM) this should be the issuer address. - For Algorand (ALGO) this should be the asset ID. - For TRON (TRX) this should be the token contract address. - For NEAR this will be the token address.  | [default to undefined]|
|**symbol** | **string** | Required for Stellar only, asset code is expected. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
