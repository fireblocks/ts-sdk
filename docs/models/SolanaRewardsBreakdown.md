# SolanaRewardsBreakdown

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**inflation** | **string** | The inflation reward amount earned by the position, measured in the staked asset unit. | [default to undefined]|
|**mev** | **string** | The MEV reward amount earned by the position, measured in the staked asset unit. | [default to undefined]|
|**lastRewardSyncedAt** | **string** | The time (UTC) of the last sync that fetched this position\&#39;s rewards from the rewards provider. It is updated on every sync, including when nothing new was found, so it is not the date of the newest reward (see latestInflationRewardDate and latestMevRewardDate). | [default to undefined]|
|**latestInflationRewardDate** | **string** | The date (UTC, YYYY-MM-DD) of the newest inflation reward the rewards provider has returned for this stake account. Null until the provider returns one. | [optional] [default to undefined]|
|**latestMevRewardDate** | **string** | The date (UTC, YYYY-MM-DD) of the newest MEV reward the rewards provider has returned for this stake account. Null until the provider returns one, and for validators without MEV rewards. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
