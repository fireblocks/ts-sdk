# EthereumBlockchainData

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**isCompoundingValidator** | **boolean** | Is the validator compounding (i.e it was created with compounding validator type). | [default to undefined]|
|**estimatedActivationTime** | **string** | Estimated time the staked ETH will activate, derived from the beacon-chain deposit queue. Present only while the position is pending/activating; omitted once active. | [optional] [default to undefined]|
|**estimatedSourceExitTime** | **string** | Estimated time the source validator will exit the active set and stop earning rewards, derived from the beacon-chain consolidation queue. Present only while a consolidation is in progress. | [optional] [default to undefined]|
|**estimatedConsolidationTime** | **string** | Estimated time the consolidation will complete, i.e. when the source balance is swept to the destination validator, derived from the beacon-chain consolidation queue. Present only while a consolidation is in progress. | [optional] [default to undefined]|
|**estimatedWithdrawalTime** | **string** | Estimated time the in-flight withdrawal will complete, derived from the beacon-chain exit queue for a full exit or the manual withdrawal queue for a partial one. Present only while a withdrawal is in progress. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)
