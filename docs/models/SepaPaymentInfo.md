# SepaPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for SEPA transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for SEPA transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**iban** | **string** | The International Bank Account Number (IBAN) | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**accountHolderCountry** | **string** | The country where the account holder resides (ISO 3166-1 alpha-2 code) | [optional] [default to undefined]|
|**accountHolderAddress** | **string** | The address of the account holder | [optional] [default to undefined]|
|**bic** | **string** | The Bank Identifier Code (BIC/SWIFT code) | [optional] [default to undefined]|
|**bankName** | **string** | The name of the bank | [optional] [default to undefined]|
|**bankBranch** | **string** | The bank branch information | [optional] [default to undefined]|
|**bankAddress** | **string** | The address of the bank | [optional] [default to undefined]|
|**purposeCode** | **string** | The purpose code for the transfer | [optional] [default to undefined]|
|**taxId** | **string** | The tax identification number | [optional] [default to undefined]|


## Enum: SepaPaymentInfoRailEnum


* `Sepa` (value: `'SEPA'`)



## Enum: SepaPaymentInfoAddressingSystemEnum


* `Iban` (value: `'IBAN'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
