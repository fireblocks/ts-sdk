# InteracPaymentInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**rail** | **string** | The payment rail type for Interac transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for Interac transfers | [default to undefined]|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**recipientHandleType** | **string** | The type of recipient handler being used | [default to undefined]|
|**recipientHandleValue** | **string** | Email address registered for Interac e-Transfer | [default to undefined]|
|**message** | **string** | The message to be sent to the recipient | [default to undefined]|


## Enum: InteracPaymentInfoRailEnum


* `Interac` (value: `'INTERAC'`)



## Enum: InteracPaymentInfoAddressingSystemEnum


* `Interac` (value: `'INTERAC'`)



## Enum: InteracPaymentInfoRecipientHandleTypeEnum


* `Email` (value: `'EMAIL'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
