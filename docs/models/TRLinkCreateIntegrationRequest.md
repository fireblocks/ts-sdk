# TRLinkCreateIntegrationRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**customerId** | **string** | Customer unique identifier | [default to undefined]|
|**partnerIdent** | **string** | Partner identification code (e.g., \&quot;sumsub\&quot;, \&quot;notabene\&quot;) | [default to undefined]|
|**customerIntegrationId** | **string** | Optional. When supplied and permitted for the tenant (feature flag / CSM arrangement), this value is used as the TRLink integration identifier instead of a server-generated UUID. If omitted, the API generates a UUID. If supplied when the tenant is not permitted to set a custom id, the request fails with 400. Contact your CSM if you need a custom integration id. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
