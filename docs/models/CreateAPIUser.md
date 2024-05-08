# CreateAPIUser

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**role** | **string** | Users role | [default to undefined]|
|**name** | **string** | Users name | [default to undefined]|
|**csrPem** | **string** | CSR file that is used to verify API requests. read more https://developers.fireblocks.com/docs/quickstart | [default to undefined]|
|**coSignerSetupType** | **string** | Different environments allow for different setup options, field is required for management/signer role | [optional] [default to undefined]|
|**coSignerSetupIsFirstUser** | **boolean** | pass as true if this is the first user on the coSigner machine | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
