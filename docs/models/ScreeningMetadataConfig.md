# ScreeningMetadataConfig

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**direction** | **string** | Direction of transaction | [optional] [default to undefined]|
|**provider** | **string** | Screening provider | [optional] [default to undefined]|
|**riskRating** | **string** | Risk rating threshold | [optional] [default to undefined]|
|**riskScore** | **string** | Risk score threshold | [optional] [default to undefined]|
|**exposureType** | **string** | Exposure type | [optional] [default to undefined]|
|**category** | **Array&lt;string&gt;** |  | [optional] [default to undefined]|
|**name** | **Array&lt;string&gt;** |  | [optional] [default to undefined]|
|**categoryId** | **Array&lt;string&gt;** |  | [optional] [default to undefined]|
|**status** | **string** | Transaction status | [optional] [default to undefined]|
|**sourceAddress** | **string** | Source address | [optional] [default to undefined]|
|**destAddress** | **string** | Destination address | [optional] [default to undefined]|


## Enum: ScreeningMetadataConfigDirectionEnum


* `Inbound` (value: `'INBOUND'`)

* `Outbound` (value: `'OUTBOUND'`)

* `Any` (value: `'ANY'`)



## Enum: ScreeningMetadataConfigProviderEnum


* `Chainalysis` (value: `'CHAINALYSIS'`)

* `ChainalysisV2` (value: `'CHAINALYSIS_V2'`)

* `Elliptic` (value: `'ELLIPTIC'`)

* `EllipticHolistic` (value: `'ELLIPTIC_HOLISTIC'`)

* `Notabene` (value: `'NOTABENE'`)



## Enum: ScreeningMetadataConfigRiskRatingEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)

* `Severe` (value: `'SEVERE'`)

* `Any` (value: `'ANY'`)



## Enum: ScreeningMetadataConfigExposureTypeEnum


* `Direct` (value: `'DIRECT'`)

* `Indirect` (value: `'INDIRECT'`)

* `Any` (value: `'ANY'`)



## Enum: ScreeningMetadataConfigStatusEnum


* `Completed` (value: `'COMPLETED'`)

* `Pending` (value: `'PENDING'`)

* `Rejected` (value: `'REJECTED'`)

* `Failed` (value: `'FAILED'`)

* `Canceled` (value: `'CANCELED'`)

* `BlockingTimeExpired` (value: `'BLOCKING_TIME_EXPIRED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
