# ParticipantOnboardingPayload

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**expiresAt** | **string** | When the onboarding request expires if it has not been answered. RFC 3339. | [optional] [default to undefined]|
|**operator** | **string** | DTCC infra operator party id. Optional — overrides the service\&#39;s default for the blockchain. | [optional] [default to undefined]|
|**compliance** | **string** | DTCC compliance party id. Optional — overrides the service\&#39;s default for the blockchain. | [optional] [default to undefined]|
|**registrar** | **string** | DTCC registrar party id — co-signs the accept. Optional — overrides the service\&#39;s default for the blockchain. | [optional] [default to undefined]|
|**clientOnboarder** | **string** | DTCC client onboarder party id — co-signs the accept. Optional — overrides the service\&#39;s default for the blockchain. | [optional] [default to undefined]|
|**upgrader** | **string** | DTCC upgrader party id — the Model Upgrade Tool authority. Optional — overrides the service\&#39;s default for the blockchain. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
