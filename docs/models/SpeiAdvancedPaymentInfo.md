# SpeiAdvancedPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for SPEI transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for SPEI transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**clabe** | **string** | The CLABE (Clave Bancaria Estandarizada) number | [default to undefined]|
|**bankName** | **string** | The name of the bank | [optional] [default to undefined]|
|**beneficiaryRfc** | **string** | The RFC (Registro Federal de Contribuyentes) of the beneficiary | [optional] [default to undefined]|
|**senderDocumentId** | **string** | The document ID of the sender | [optional] [default to undefined]|


## Enum: SpeiAdvancedPaymentInfoRailEnum


* `Spei` (value: `'SPEI'`)



## Enum: SpeiAdvancedPaymentInfoAddressingSystemEnum


* `Clabe` (value: `'CLABE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
