# MobileMoneyAddress

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**accountHolder** | [**AccountHolderDetails**](AccountHolderDetails.md) |  | [default to undefined]|
|**mobilePhoneNumber** | **string** | Mobile phone number in E.164 format | [default to undefined]|
|**provider** | **string** | Mobile money provider | [default to undefined]|
|**beneficiaryDocumentId** | **string** | Beneficiary document identification (may be required) | [optional] [default to undefined]|
|**beneficiaryRelationship** | **string** | Relationship to beneficiary for AML purposes | [optional] [default to undefined]|
|**successPaymentInstructionRedirectUrl** | **string** | The URL to redirect to after the payment instruction is successful | [optional] [default to undefined]|
|**paymentRedirect** | [**PaymentRedirect**](PaymentRedirect.md) |  | [optional] [default to undefined]|


## Enum: MobileMoneyAddressProviderEnum


* `MPesa` (value: `'m-pesa'`)

* `Airtel` (value: `'airtel'`)

* `Mtn` (value: `'mtn'`)

* `Tigo` (value: `'tigo'`)

* `Orange` (value: `'orange'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
