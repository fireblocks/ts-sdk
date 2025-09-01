# MomoPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for mobile money transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for mobile money transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**mobilePhoneNumber** | **string** | The mobile phone number associated with the mobile money account | [default to undefined]|
|**provider** | **string** | The mobile money service provider | [default to undefined]|
|**beneficiaryDocumentId** | **string** | The document ID of the beneficiary | [optional] [default to undefined]|
|**beneficiaryRelationship** | **string** | The relationship between sender and beneficiary | [optional] [default to undefined]|


## Enum: MomoPaymentInfoRailEnum


* `Momo` (value: `'MOMO'`)



## Enum: MomoPaymentInfoAddressingSystemEnum


* `Momo` (value: `'MOMO'`)



## Enum: MomoPaymentInfoProviderEnum


* `MPesa` (value: `'M_PESA'`)

* `Airtel` (value: `'AIRTEL'`)

* `Mtn` (value: `'MTN'`)

* `Tigo` (value: `'TIGO'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
