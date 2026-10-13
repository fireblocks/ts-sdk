# CantonCallParticipantOnboarding

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Which call to make. Selects the shape of &#x60;payload&#x60;. | [default to undefined]|
|**vaultAccountId** | **string** | The vault account whose Canton wallet makes this call. | [default to undefined]|
|**blockchainId** | **string** | The blockchain the vault account\&#39;s Canton party is connected to — &#x60;CANTON&#x60; or &#x60;CANTON_TEST&#x60;. | [default to undefined]|
|**payload** | [**ParticipantOnboardingPayload**](ParticipantOnboardingPayload.md) |  | [optional] [default to undefined]|


## Enum: CantonCallParticipantOnboardingTypeEnum


* `DtccParticipantOnboarding` (value: `'DTCC_PARTICIPANT_ONBOARDING'`)



## Enum: CantonCallParticipantOnboardingBlockchainIdEnum


* `Canton` (value: `'CANTON'`)

* `CantonTest` (value: `'CANTON_TEST'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
