# ParticipantOnboardingPayload

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The vault account that acts as the participant. Its Canton party is derived for you. | [default to undefined]|
|**blockchainId** | **string** | The blockchain this party is connected to — &#x60;CANTON&#x60; or &#x60;CANTON_TEST&#x60;. | [default to undefined]|
|**operator** | **string** | DTCC infra operator party id. | [default to undefined]|
|**compliance** | **string** | DTCC compliance party id. | [default to undefined]|
|**registrar** | **string** | DTCC registrar party id — co-signs the accept. | [default to undefined]|
|**clientOnboarder** | **string** | DTCC client onboarder party id — co-signs the accept. | [default to undefined]|
|**upgrader** | **string** | DTCC upgrader party id — the Model Upgrade Tool authority. Supplied by DTCC during the off-chain registration, alongside the other party ids. | [default to undefined]|
|**expiresAt** | **string** | When the onboarding request expires if it has not been answered. RFC 3339. | [optional] [default to undefined]|


## Enum: ParticipantOnboardingPayloadBlockchainIdEnum


* `Canton` (value: `'CANTON'`)

* `CantonTest` (value: `'CANTON_TEST'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
