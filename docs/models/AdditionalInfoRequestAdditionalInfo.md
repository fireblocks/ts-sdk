# AdditionalInfoRequestAdditionalInfo

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**accountHolderGivenName** | **string** | The given name (first name) of the account holder | [default to undefined]|
|**accountHolderSurname** | **string** | The surname (last name) of the account holder | [default to undefined]|
|**accountHolderCity** | **string** | The city where the account holder resides | [default to undefined]|
|**accountHolderCountry** | **string** | The country where the account holder resides (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**accountHolderAddress1** | **string** | The primary address line of the account holder | [default to undefined]|
|**accountHolderPostalCode** | **string** | The postal code of the account holder\&#39;s address | [default to undefined]|
|**iban** | **string** | The International Bank Account Number (IBAN) | [default to undefined]|
|**ibanCity** | **string** | The city associated with the IBAN | [default to undefined]|
|**ibanCountry** | **string** | The country associated with the IBAN (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**abaRoutingNumber** | **string** | The ABA routing number for the bank | [default to undefined]|
|**abaAccountNumber** | **string** | The account number at the bank | [default to undefined]|
|**abaCountry** | **string** | The country for the ABA transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**speiClabe** | **string** | The CLABE (Clave Bancaria Estandarizada) number for SPEI transfers | [default to undefined]|
|**rail** | **string** | The payment rail type for Lebanese bank transfers | [default to undefined]|
|**addressingSystem** | **string** | The addressing system used for Lebanese bank transfers (Bank Account Number) | [default to undefined]|
|**country** | **string** | The country for the transfer (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**bankName** | **string** | The name of the bank | [default to undefined]|
|**clabe** | **string** | The CLABE (Clave Bancaria Estandarizada) number | [default to undefined]|
|**pixKey** | **string** | The PIX key used for the transfer | [default to undefined]|
|**bankCode** | **string** | The bank code or identifier | [default to undefined]|
|**keyType** | **string** | The type of PIX key being used | [default to undefined]|
|**accountNumber** | **string** | The bank account number | [default to undefined]|
|**routingNumber** | **string** | The bank routing number (ABA routing number) | [default to undefined]|
|**accountType** | **string** | The type of bank account | [default to undefined]|
|**swiftCode** | **string** | The SWIFT/BIC code of the bank | [default to undefined]|
|**bankAddressLine** | **string** | The street address of the bank | [default to undefined]|
|**bankAddressCity** | **string** | The city where the bank is located | [default to undefined]|
|**bankAddressCountry** | **string** | The country where the bank is located (ISO 3166-1 alpha-2 code) | [default to undefined]|
|**bankAddressPostalCode** | **string** | The postal code of the bank\&#39;s address | [default to undefined]|
|**mobilePhoneNumber** | **string** | The mobile phone number associated with the mobile money account | [default to undefined]|
|**provider** | **string** | The mobile money service provider | [default to undefined]|
|**accountHolderAddress2** | **string** | The secondary address line of the account holder (optional) | [optional] [default to undefined]|
|**accountHolderDistrict** | **string** | The district or region where the account holder resides | [optional] [default to undefined]|
|**speiName** | **string** | The name associated with the SPEI account | [optional] [default to undefined]|
|**beneficiaryRfc** | **string** | The RFC (Registro Federal de Contribuyentes) of the beneficiary | [optional] [default to undefined]|
|**senderDocumentId** | **string** | The document ID of the sender | [optional] [default to undefined]|
|**accountHolderAddress** | **string** | The address of the account holder | [optional] [default to undefined]|
|**bic** | **string** | The Bank Identifier Code (BIC/SWIFT code) | [optional] [default to undefined]|
|**bankBranch** | **string** | The bank branch information | [optional] [default to undefined]|
|**bankAddress** | **string** | The address of the bank | [optional] [default to undefined]|
|**purposeCode** | **string** | The purpose code for the transfer | [optional] [default to undefined]|
|**taxId** | **string** | The tax identification number | [optional] [default to undefined]|
|**bankAddressState** | **string** | The state where the bank is located | [optional] [default to undefined]|
|**branchNumber** | **string** | The branch number of the bank | [optional] [default to undefined]|
|**beneficiaryDocumentId** | **string** | The document ID of the beneficiary | [optional] [default to undefined]|
|**beneficiaryRelationship** | **string** | The relationship between sender and beneficiary | [optional] [default to undefined]|


## Enum: AdditionalInfoRequestAdditionalInfoRailEnum


* `Lbt` (value: `'LBT'`)



## Enum: AdditionalInfoRequestAdditionalInfoAddressingSystemEnum


* `Ban` (value: `'BAN'`)



## Enum: AdditionalInfoRequestAdditionalInfoKeyTypeEnum


* `Cpf` (value: `'CPF'`)

* `Cnpj` (value: `'CNPJ'`)

* `Email` (value: `'EMAIL'`)

* `Phone` (value: `'PHONE'`)

* `Random` (value: `'RANDOM'`)



## Enum: AdditionalInfoRequestAdditionalInfoAccountTypeEnum


* `Checking` (value: `'CHECKING'`)

* `Savings` (value: `'SAVINGS'`)



## Enum: AdditionalInfoRequestAdditionalInfoProviderEnum


* `MPesa` (value: `'M_PESA'`)

* `Airtel` (value: `'AIRTEL'`)

* `Mtn` (value: `'MTN'`)

* `Tigo` (value: `'TIGO'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
