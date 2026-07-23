# BlockchainRpcAuth

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Authentication scheme used when calling the RPC endpoint. | [default to undefined]|
|**username** | **string** | Username for RPC_AUTH_BASIC authentication. | [optional] [default to undefined]|
|**password** | **string** | Password for RPC_AUTH_BASIC authentication. | [optional] [default to undefined]|
|**token** | **string** | Bearer token for RPC_AUTH_BEARER authentication. | [optional] [default to undefined]|
|**headerName** | **string** | Header name for RPC_AUTH_CUSTOM_HEADER authentication. | [optional] [default to undefined]|
|**headerValue** | **string** | Header value for RPC_AUTH_CUSTOM_HEADER authentication. | [optional] [default to undefined]|


## Enum: BlockchainRpcAuthTypeEnum


* `Basic` (value: `'RPC_AUTH_BASIC'`)

* `Bearer` (value: `'RPC_AUTH_BEARER'`)

* `CustomHeader` (value: `'RPC_AUTH_CUSTOM_HEADER'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
