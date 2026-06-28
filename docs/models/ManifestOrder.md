# ManifestOrder

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**supported** | **boolean** | Indicates whether the endpoint is supported by the provider | [default to undefined]|
|**executionTypes** | [**Array&lt;ExecutionRequestDetailsType&gt;**](ExecutionRequestDetailsType.md) | Supported execution types when creating an order. | [default to undefined]|
|**participantsIdentificationPolicy** | [**ParticipantsIdentificationPolicy**](ParticipantsIdentificationPolicy.md) |  | [optional] [default to undefined]|
|**supportedParties** | [**Array&lt;ParticipantRelationshipType&gt;**](ParticipantRelationshipType.md) | The participant party types the provider supports for this endpoint.  | [optional] [default to undefined]|
|**settlementTypes** | [**Array&lt;SettlementTypeEnum&gt;**](SettlementTypeEnum.md) | Supported settlement types when creating an order. If present - settlement is required. If absent - no need to provide settlement.  | [optional] [default to undefined]|
|**requiresReasonForPayment** | **boolean** | Information about the source and purpose of the funds being transacted. Used by providers that require additional context for compliance and reporting. Provide this field when the provider manifest indicates it is required.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
