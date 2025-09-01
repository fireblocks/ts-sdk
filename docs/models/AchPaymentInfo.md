# AchPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for ACH transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for ACH transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**accountNumber** | **string** | The bank account number | [default to undefined]|
|**routingNumber** | **string** | The bank routing number (ABA routing number) | [default to undefined]|
|**accountType** | **string** | The type of bank account | [default to undefined]|


## Enum: AchPaymentInfoRailEnum


* `Ach` (value: `'ACH'`)



## Enum: AchPaymentInfoAddressingSystemEnum


* `Ach` (value: `'ACH'`)



## Enum: AchPaymentInfoAccountTypeEnum


* `Checking` (value: `'CHECKING'`)

* `Savings` (value: `'SAVINGS'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
