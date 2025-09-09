# ConnectedAccountManifest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**assetTypes** | [**Array&lt;ConnectedAccountAssetType&gt;**](ConnectedAccountAssetType.md) | Asset types supported by the connected account. | [default to undefined]|
|**capabilities** | [**Array&lt;ConnectedAccountCapability&gt;**](ConnectedAccountCapability.md) | Features supported for the connected account. Logic: - If account capabilities include ramp -&gt; TRADING - If account capabilities include transfers -&gt; DEPOSITS - If account capabilities include transfersBlockchain / transfersFiat / transfersPeerAccounts / transfersInternal -&gt; WITHDRAWALS  | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
