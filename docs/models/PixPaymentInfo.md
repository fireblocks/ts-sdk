# PixPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for PIX transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for PIX transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**pixKey** | **string** | The PIX key used for the transfer | [default to undefined]|
|**keyType** | **string** | The type of PIX key being used | [default to undefined]|
|**bankName** | **string** | The name of the bank | [optional] [default to undefined]|
|**bankCode** | **string** | The bank code (ISPB - Identificador do Sistema de Pagamentos Brasileiros) | [optional] [default to undefined]|


## Enum: PixPaymentInfoRailEnum


* `Pix` (value: `'PIX'`)



## Enum: PixPaymentInfoAddressingSystemEnum


* `Pix` (value: `'PIX'`)



## Enum: PixPaymentInfoKeyTypeEnum


* `Cpf` (value: `'CPF'`)

* `Cnpj` (value: `'CNPJ'`)

* `Email` (value: `'EMAIL'`)

* `Phone` (value: `'PHONE'`)

* `Random` (value: `'RANDOM'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
