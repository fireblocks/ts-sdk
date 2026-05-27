# UsdcGatewayWalletInfoResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**walletId** | **string** | The USDC Gateway wallet identifier | [default to undefined]|
|**type** | **string** | The USDC Gateway provider identifier | [default to undefined]|
|**status** | **string** | Current activation status of the USDC Gateway wallet | [default to undefined]|
|**symbol** | **string** | The token symbol supported by this wallet (e.g. USDC) | [default to undefined]|
|**totalBalance** | **string** | Aggregate USDC balance across all assets | [default to undefined]|
|**assets** | [**Array&lt;UsdcGatewayWalletAsset&gt;**](UsdcGatewayWalletAsset.md) | Per-chain USDC asset balances | [default to undefined]|
|**virtualAssetId** | **string** | The id of the virtual asset | [default to undefined]|


## Enum: UsdcGatewayWalletInfoResponseStatusEnum


* `Activated` (value: `'ACTIVATED'`)

* `Deactivated` (value: `'DEACTIVATED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
