# SessionDTO

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Id of the connection | [default to undefined]|
|**userId** | **string** | Id of the user that created the connection | [default to undefined]|
|**sessionMetadata** | [**SessionMetadata**](SessionMetadata.md) | Metadata of the connection (provided by the dapp) | [default to undefined]|
|**vaultAccountId** | **number** | The vault to connect | [default to undefined]|
|**feeLevel** | **string** | The default fee level | [default to undefined]|
|**chainIds** | **Array&lt;string&gt;** | The chains approved for the connection | [default to undefined]|
|**connectionType** | **string** | The connection\&#39;s type | [default to undefined]|
|**connectionMethod** | **string** | The method through which the connection was established | [default to undefined]|
|**creationDate** | **string** | Timestamp of the session\&#39;s creation | [default to undefined]|


## Enum: SessionDTOFeeLevelEnum


* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)



## Enum: SessionDTOConnectionTypeEnum


* `WalletConnect` (value: `'WalletConnect'`)



## Enum: SessionDTOConnectionMethodEnum


* `Desktop` (value: `'DESKTOP'`)

* `Mobile` (value: `'MOBILE'`)

* `Api` (value: `'API'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
