# ManifestQuote

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**supported** | **boolean** | Indicates whether the endpoint is supported by the provider | [default to undefined]|
|**participantsIdentificationPolicy** | [**ParticipantsIdentificationPolicy**](ParticipantsIdentificationPolicy.md) |  | [optional] [default to undefined]|
|**supportedParties** | [**Array&lt;ParticipantRelationshipType&gt;**](ParticipantRelationshipType.md) | The participant party types the provider supports for this endpoint.  | [optional] [default to undefined]|
|**settlementTypes** | [**Array&lt;DVPSettlementType&gt;**](DVPSettlementType.md) | Supported settlement types when requesting a quote. If present - settlement is required. If absent - no need to provide settlement.  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
