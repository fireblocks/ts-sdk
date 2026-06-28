# ManifestOrderInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**executionTypes** | [**Array&lt;ExecutionRequestDetailsType&gt;**](ExecutionRequestDetailsType.md) | Supported execution types when creating an order. | [default to undefined]|
|**settlementTypes** | [**Array&lt;SettlementTypeEnum&gt;**](SettlementTypeEnum.md) | Supported settlement types when creating an order. If present - settlement is required. If absent - no need to provide settlement.  | [optional] [default to undefined]|
|**requiresReasonForPayment** | **boolean** | Information about the source and purpose of the funds being transacted. Used by providers that require additional context for compliance and reporting. Provide this field when the provider manifest indicates it is required.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
