# ScreeningTRLinkPostScreeningRule

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**action** | [**TRLinkVerdictEnum**](TRLinkVerdictEnum.md) |  | [default to undefined]|
|**customerId** | **string** | Reference to TRLinkCustomer.id | [optional] [default to undefined]|
|**direction** | [**TravelRuleDirectionEnum**](TravelRuleDirectionEnum.md) |  | [optional] [default to undefined]|
|**sourceType** | [**TransferPeerTypeEnum**](TransferPeerTypeEnum.md) |  | [optional] [default to undefined]|
|**sourceSubType** | [**TransferPeerSubTypeEnum**](TransferPeerSubTypeEnum.md) |  | [optional] [default to undefined]|
|**sourceAddress** | **string** | Source address | [optional] [default to undefined]|
|**destType** | [**TransferPeerTypeEnum**](TransferPeerTypeEnum.md) |  | [optional] [default to undefined]|
|**destSubType** | [**TransferPeerSubTypeEnum**](TransferPeerSubTypeEnum.md) |  | [optional] [default to undefined]|
|**destAddress** | **string** | Destination address | [optional] [default to undefined]|
|**sourceId** | **string** | Source ID | [optional] [default to undefined]|
|**destId** | **string** | Destination ID | [optional] [default to undefined]|
|**asset** | **string** | Asset symbol | [optional] [default to undefined]|
|**baseAsset** | **string** | Base asset symbol | [optional] [default to undefined]|
|**amount** | [**ScreeningTRLinkAmount**](ScreeningTRLinkAmount.md) |  | [optional] [default to undefined]|
|**networkProtocol** | **string** | Network protocol | [optional] [default to undefined]|
|**operation** | [**TransactionOperationEnum**](TransactionOperationEnum.md) |  | [optional] [default to undefined]|
|**description** | **string** | Rule description | [optional] [default to undefined]|
|**isDefault** | **boolean** | Whether this is a default rule | [optional] [default to false]|
|**providerIdent** | **string** | Provider identifier | [optional] [default to undefined]|
|**trmStatus** | [**TRLinkTrmScreeningStatusEnum**](TRLinkTrmScreeningStatusEnum.md) |  | [optional] [default to undefined]|
|**validBefore** | **number** | Unix timestamp when rule expires | [optional] [default to undefined]|
|**validAfter** | **number** | Unix timestamp when rule becomes valid | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
