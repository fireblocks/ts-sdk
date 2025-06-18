# FeeInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**networkFee** | **string** | The fee paid to the network | [optional] [default to undefined]|
|**serviceFee** | **string** | The total fee deducted by the exchange from the actual requested amount (serviceFee &#x3D; amount - netAmount) | [optional] [default to undefined]|
|**gasPrice** | **string** |  | [optional] [default to undefined]|
|**paidByRelay** | **boolean** | Wether the fee was paid by the relay or not | [optional] [default to undefined]|
|**relayType** | **string** | Wether the relay is the same tenant (LOCAL) or another tenant (THIRD_PARTY) | [optional] [default to undefined]|
|**relayId** | **string** | The vault account ID of the relay | [optional] [default to undefined]|
|**relayName** | **string** | The name of the tenant, only for THIRD_PARTY relays | [optional] [default to undefined]|


## Enum: FeeInfoRelayTypeEnum


* `Local` (value: `'LOCAL'`)

* `ThirdParty` (value: `'THIRD_PARTY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
