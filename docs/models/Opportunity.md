# Opportunity

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique opportunity identifier. | [optional] [default to undefined]|
|**providerId** | **string** | Lending protocol (&#x60;MORPHO&#x60; or &#x60;AAVE&#x60;). | [optional] [default to undefined]|
|**type** | **string** | Opportunity kind — vault or market. | [optional] [default to undefined]|
|**chainId** | **string** | Chain identifier as a string (e.g. \&quot;1\&quot; for Ethereum mainnet). | [optional] [default to undefined]|
|**address** | **string** | Primary contract address for the vault or market. | [optional] [default to undefined]|
|**name** | **string** | Display name of the opportunity. | [optional] [default to undefined]|
|**symbol** | **string** | Symbol or share token ticker for the position asset. | [optional] [default to undefined]|
|**principalAsset** | [**EarnAsset**](EarnAsset.md) | Underlying token the user deposits (principal). | [optional] [default to undefined]|
|**positionAsset** | [**EarnAsset**](EarnAsset.md) | Token representing the user’s position in the protocol (e.g. vault share). | [optional] [default to undefined]|
|**totalAssets** | **string** | Human-readable total value locked / assets in the opportunity. | [optional] [default to undefined]|
|**liquidity** | **string** | Human-readable available liquidity. | [optional] [default to undefined]|
|**apy** | [**Apy**](Apy.md) | APY breakdown; values are percentages (e.g. 4.25 means 4.25%). | [optional] [default to undefined]|
|**performanceFee** | **string** | Performance fee as a human-readable decimal string. | [optional] [default to undefined]|
|**managementFee** | **string** | Management fee as a human-readable decimal string. | [optional] [default to undefined]|
|**exposure** | [**Array&lt;Exposure&gt;**](Exposure.md) | Optional per-asset exposure breakdown. | [optional] [default to undefined]|


## Enum: OpportunityProviderIdEnum


* `Morpho` (value: `'MORPHO'`)

* `Aave` (value: `'AAVE'`)



## Enum: OpportunityTypeEnum


* `Vault` (value: `'VAULT'`)

* `Market` (value: `'MARKET'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
