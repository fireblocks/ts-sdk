# TRLinkCreateTrmRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**ivms101** | [**TRLinkIvms**](TRLinkIvms.md) |  | [default to undefined]|
|**assetId** | **string** | Asset identifier (required when txId not provided) | [optional] [default to undefined]|
|**amount** | **string** | Transaction amount (required when txId not provided) | [optional] [default to undefined]|
|**amountUSD** | **string** | Amount in USD (optional) | [optional] [default to undefined]|
|**source** | [**TRLinkSourceTransferPeerPath**](TRLinkSourceTransferPeerPath.md) |  | [optional] [default to undefined]|
|**srcAddress** | **string** | Source address (optional) | [optional] [default to undefined]|
|**destination** | [**TRLinkDestinationTransferPeerPath**](TRLinkDestinationTransferPeerPath.md) |  | [optional] [default to undefined]|
|**destAddress** | **string** | Destination address (optional) | [optional] [default to undefined]|
|**destTag** | **string** | Destination tag (optional) | [optional] [default to undefined]|
|**txId** | **string** | Fireblocks transaction ID (optional) - RECOMMENDED for inbound transactions | [optional] [default to undefined]|
|**txHash** | **string** | Transaction hash (optional) | [optional] [default to undefined]|
|**direction** | [**TRLinkTransactionDirection**](TRLinkTransactionDirection.md) |  | [optional] [default to undefined]|
|**originatorVaspId** | **string** | Originator VASP identifier - required for inbound transactions | [optional] [default to undefined]|
|**beneficiaryVaspId** | **string** | Beneficiary VASP identifier - required for outbound transactions | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
