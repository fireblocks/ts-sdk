# TRLinkGeographicAddressRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**addressLine** | **Array&lt;string&gt;** | Address lines (max 3, each up to 70 characters) | [optional] [default to undefined]|
|**streetName** | **string** | Street name (required if buildingNumber is provided) | [optional] [default to undefined]|
|**buildingNumber** | **string** | Building number | [optional] [default to undefined]|
|**floor** | **string** | Floor number | [optional] [default to undefined]|
|**postBox** | **string** | Post box number | [optional] [default to undefined]|
|**postCode** | **string** | Postal code (required if townName is provided) | [optional] [default to undefined]|
|**townName** | **string** | City or town name (required if postCode is provided) | [optional] [default to undefined]|
|**districtName** | **string** | District name | [optional] [default to undefined]|
|**countrySubDivision** | **string** | State or province (validated against country) | [optional] [default to undefined]|
|**country** | **string** | ISO 3166-1 alpha-2 country code (required if town, district, or sub-division provided) | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
