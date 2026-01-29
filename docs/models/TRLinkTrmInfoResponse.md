# TRLinkTrmInfoResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | TRM message ID | [default to undefined]|
|**externalId** | **string** | External ID (e.g., Fireblocks ID) | [default to undefined]|
|**asset** | [**TRLinkAsset**](TRLinkAsset.md) |  | [default to undefined]|
|**amount** | **string** | Transaction amount in asset units | [default to undefined]|
|**direction** | [**TRLinkTrmDirection**](TRLinkTrmDirection.md) |  | [default to undefined]|
|**txnInfo** | [**TRLinkTxnInfo**](TRLinkTxnInfo.md) |  | [default to undefined]|
|**ivms101** | [**TRLinkIvmsResponse**](TRLinkIvmsResponse.md) |  | [default to undefined]|
|**version** | **string** | TRM version | [optional] [default to undefined]|
|**status** | [**TRLinkTrmStatus**](TRLinkTrmStatus.md) |  | [optional] [default to undefined]|
|**reason** | **string** | Human readable reason for the current status | [optional] [default to undefined]|
|**fiatValue** | [**TRLinkFiatValue**](TRLinkFiatValue.md) |  | [optional] [default to undefined]|
|**originatorVaspId** | **string** | ID of the originator VASP | [optional] [default to undefined]|
|**beneficiaryVaspId** | **string** | ID of the beneficiary VASP | [optional] [default to undefined]|
|**providerData** | [**TRLinkProviderData**](TRLinkProviderData.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
