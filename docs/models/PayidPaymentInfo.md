# PayidPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for PayID transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for PayID transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**value** | **string** | The PayID identifier (email, phone, ABN, or organization ID) | [default to undefined]|
|**type** | **string** | The type of PayID being used | [default to undefined]|
|**accountNumber** | **string** | Australian bank account number | [default to undefined]|
|**bsb** | **string** | Bank State Branch (BSB) number (6 digits, format XXX-XXX) | [optional] [default to undefined]|


## Enum: PayidPaymentInfoRailEnum


* `Payid` (value: `'PAYID'`)



## Enum: PayidPaymentInfoAddressingSystemEnum


* `Payid` (value: `'PAYID'`)



## Enum: PayidPaymentInfoTypeEnum


* `Email` (value: `'EMAIL'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
