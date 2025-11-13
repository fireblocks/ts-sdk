# AmlResult

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**alerts** | [**Array&lt;AmlAlert&gt;**](AmlAlert.md) | List of AML alerts triggered during screening | [optional] [default to undefined]|
|**providerResponse** | **{ [key: string]: any; }** | Complete response from the AML provider. This is a dynamic object that varies significantly between different AML providers (Chainalysis, Elliptic, etc.). Each provider has their own proprietary response format and schema.  Examples of provider-specific structures: - Chainalysis: Contains cluster info, risk scores, sanctions data - Elliptic: Includes risk assessment, entity types, compliance flags  The structure is provider-dependent and cannot be standardized as each vendor implements their own proprietary data models and response formats.  | [optional] [default to undefined]|
|**matchedRule** | [**AmlMatchedRule**](AmlMatchedRule.md) |  | [optional] [default to undefined]|
|**matchedAlert** | [**AmlAlert**](AmlAlert.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
