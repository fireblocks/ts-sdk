import localVarRequest from 'request';

export * from './allocateFundsRequest';
export * from './allocatedBalance';
export * from './amlScreeningResult';
export * from './amountInfo';
export * from './assetTypeResponse';
export * from './authorizationGroups';
export * from './authorizationInfo';
export * from './autoNetworkRoutingDest';
export * from './blockInfo';
export * from './cancelTransactionResponse';
export * from './configChangeRequestStatus';
export * from './connectionsSessionIdPutRequest';
export * from './contractsContractIdAssetIdPostRequest';
export * from './contractsPostRequest';
export * from './createAddressResponse';
export * from './createConnectionRequest';
export * from './createConnectionResponse';
export * from './createConnectionResponseSessionMetadata';
export * from './createTransactionResponse';
export * from './createTransferTicketResponse';
export * from './createVaultAssetResponse';
export * from './customCryptoRoutingDest';
export * from './customFiatRoutingDest';
export * from './deallocateFundsRequest';
export * from './defaultNetworkRoutingDest';
export * from './destinationTransferPeerPath';
export * from './destinationTransferPeerPathAllOf';
export * from './dropTransactionRequest';
export * from './dropTransactionResponse';
export * from './errorResponse';
export * from './errorResponseError';
export * from './estimatedNetworkFeeResponse';
export * from './estimatedTransactionFeeResponse';
export * from './exchangeAccount';
export * from './exchangeAccountsExchangeAccountIdConvertPostRequest';
export * from './exchangeAccountsExchangeAccountIdInternalTransferPostRequest';
export * from './exchangeAsset';
export * from './exchangeTradingAccount';
export * from './exchangeType';
export * from './externalWalletAsset';
export * from './externalWalletsWalletIdAssetIdPostRequest';
export * from './feeInfo';
export * from './fiatAccount';
export * from './fiatAccountType';
export * from './fiatAccountsAccountIdRedeemToLinkedDdaPostRequest';
export * from './fiatAsset';
export * from './freezeTransactionResponse';
export * from './gasStationConfiguration';
export * from './gasStationPropertiesResponse';
export * from './getAllXBSettlementConfigsResponse';
export * from './getUsersResponse';
export * from './internalWalletsPostRequest';
export * from './internalWalletsWalletIdAssetIdPostRequest';
export * from './modelError';
export * from './networkChannel';
export * from './networkConnection';
export * from './networkConnectionResponse';
export * from './networkConnectionResponseLocalChannel';
export * from './networkConnectionResponseRemoteChannel';
export * from './networkConnectionRoutingPolicy';
export * from './networkConnectionRoutingPolicyCrypto';
export * from './networkConnectionRoutingPolicySen';
export * from './networkConnectionRoutingPolicySenTest';
export * from './networkConnectionRoutingPolicySignet';
export * from './networkConnectionRoutingPolicySignetTest';
export * from './networkConnectionsConnectionIdIsThirdPartyRoutingAssetTypeGet200Response';
export * from './networkConnectionsConnectionIdSetRoutingPolicyPatch200Response';
export * from './networkConnectionsConnectionIdSetRoutingPolicyPatchRequest';
export * from './networkFee';
export * from './networkId';
export * from './networkIdResponse';
export * from './networkIdResponseAllOf';
export * from './networkIdRoutingPolicy';
export * from './networkIdRoutingPolicyCrypto';
export * from './networkIdRoutingPolicySen';
export * from './networkIdRoutingPolicySenTest';
export * from './networkIdRoutingPolicySignet';
export * from './networkIdRoutingPolicySignetTest';
export * from './networkIdsGet200ResponseInner';
export * from './networkIdsNetworkIdSetDiscoverabilityPatchRequest';
export * from './networkIdsNetworkIdSetRoutingPolicyPatchRequest';
export * from './networkIdsPostRequest';
export * from './networkRecord';
export * from './noneNetworkRoutingDest';
export * from './offExchangeEntityResponse';
export * from './offExchangeEntityResponseBalanceValue';
export * from './oneTimeAddress';
export * from './paymentsXbSettlementsFlowsFlowIdGet200Response';
export * from './publicKeyInformation';
export * from './resendWebhooksResponse';
export * from './rewardInfo';
export * from './rewardsInfo';
export * from './sessionDTO';
export * from './sessionDTOSessionMetadata';
export * from './sessionMetadata';
export * from './setConfirmationsThresholdRequest';
export * from './setConfirmationsThresholdResponse';
export * from './signedMessage';
export * from './signedMessageSignature';
export * from './systemMessageInfo';
export * from './term';
export * from './tradingAccountType';
export * from './transactionFee';
export * from './transactionOperation';
export * from './transactionRequest';
export * from './transactionRequestAmount';
export * from './transactionRequestDestination';
export * from './transactionRequestFee';
export * from './transactionRequestFeePayerInfo';
export * from './transactionRequestGasLimit';
export * from './transactionRequestGasPrice';
export * from './transactionRequestNetworkStaking';
export * from './transactionRequestPriorityFee';
export * from './transactionResponse';
export * from './transactionResponseDestination';
export * from './transactionResponseFeePayerInfo';
export * from './transactionSubStatus';
export * from './transferPeerPath';
export * from './transferPeerPathResponse';
export * from './transferPeerPathResponseAllOf';
export * from './transferTicketResponse';
export * from './transferTicketTermResponse';
export * from './transferTicketsPostRequest';
export * from './transferTicketsTicketIdTermIdTransferPostRequest';
export * from './unfreezeTransactionResponse';
export * from './unmanagedWallet';
export * from './unsignedMessage';
export * from './unspentInput';
export * from './unspentInputsResponse';
export * from './userResponse';
export * from './validateAddressResponse';
export * from './vaultAccount';
export * from './vaultAccountsPagedResponse';
export * from './vaultAccountsPagedResponsePaging';
export * from './vaultAccountsPostRequest';
export * from './vaultAccountsVaultAccountIdAssetIdAddressesAddressIdPutRequest';
export * from './vaultAccountsVaultAccountIdAssetIdAddressesPostRequest';
export * from './vaultAccountsVaultAccountIdAssetIdPostRequest';
export * from './vaultAccountsVaultAccountIdPutRequest';
export * from './vaultAccountsVaultAccountIdSetAutoFuelPostRequest';
export * from './vaultAccountsVaultAccountIdSetCustomerRefIdPostRequest';
export * from './vaultAsset';
export * from './vaultWalletAddress';
export * from './walletAsset';
export * from './webhooksResendTxIdPostRequest';
export * from './xBCreateSettlementFlowRequestBody';
export * from './xBSettlementAsset';
export * from './xBSettlementConfigCreationRequestBody';
export * from './xBSettlementConfigDeletionResponse';
export * from './xBSettlementConfigEditRequestBody';
export * from './xBSettlementConfigModel';
export * from './xBSettlementConfigStep';
export * from './xBSettlementConfigStepsRecord';
export * from './xBSettlementConfigStepsRecordValue';
export * from './xBSettlementFlowExecutionModel';
export * from './xBSettlementFlowExecutionStatus';
export * from './xBSettlementFlowExecutionStep';
export * from './xBSettlementFlowExecutionStepStatus';
export * from './xBSettlementFlowSetupModel';
export * from './xBSettlementFlowSetupStep';
export * from './xBSettlementFlowStepsRecord';
export * from './xBSettlementStepType';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AllocateFundsRequest } from './allocateFundsRequest';
import { AllocatedBalance } from './allocatedBalance';
import { AmlScreeningResult } from './amlScreeningResult';
import { AmountInfo } from './amountInfo';
import { AssetTypeResponse } from './assetTypeResponse';
import { AuthorizationGroups } from './authorizationGroups';
import { AuthorizationInfo } from './authorizationInfo';
import { AutoNetworkRoutingDest } from './autoNetworkRoutingDest';
import { BlockInfo } from './blockInfo';
import { CancelTransactionResponse } from './cancelTransactionResponse';
import { ConfigChangeRequestStatus } from './configChangeRequestStatus';
import { ConnectionsSessionIdPutRequest } from './connectionsSessionIdPutRequest';
import { ContractsContractIdAssetIdPostRequest } from './contractsContractIdAssetIdPostRequest';
import { ContractsPostRequest } from './contractsPostRequest';
import { CreateAddressResponse } from './createAddressResponse';
import { CreateConnectionRequest } from './createConnectionRequest';
import { CreateConnectionResponse } from './createConnectionResponse';
import { CreateConnectionResponseSessionMetadata } from './createConnectionResponseSessionMetadata';
import { CreateTransactionResponse } from './createTransactionResponse';
import { CreateTransferTicketResponse } from './createTransferTicketResponse';
import { CreateVaultAssetResponse } from './createVaultAssetResponse';
import { CustomCryptoRoutingDest } from './customCryptoRoutingDest';
import { CustomFiatRoutingDest } from './customFiatRoutingDest';
import { DeallocateFundsRequest } from './deallocateFundsRequest';
import { DefaultNetworkRoutingDest } from './defaultNetworkRoutingDest';
import { DestinationTransferPeerPath } from './destinationTransferPeerPath';
import { DestinationTransferPeerPathAllOf } from './destinationTransferPeerPathAllOf';
import { DropTransactionRequest } from './dropTransactionRequest';
import { DropTransactionResponse } from './dropTransactionResponse';
import { ErrorResponse } from './errorResponse';
import { ErrorResponseError } from './errorResponseError';
import { EstimatedNetworkFeeResponse } from './estimatedNetworkFeeResponse';
import { EstimatedTransactionFeeResponse } from './estimatedTransactionFeeResponse';
import { ExchangeAccount } from './exchangeAccount';
import { ExchangeAccountsExchangeAccountIdConvertPostRequest } from './exchangeAccountsExchangeAccountIdConvertPostRequest';
import { ExchangeAccountsExchangeAccountIdInternalTransferPostRequest } from './exchangeAccountsExchangeAccountIdInternalTransferPostRequest';
import { ExchangeAsset } from './exchangeAsset';
import { ExchangeTradingAccount } from './exchangeTradingAccount';
import { ExchangeType } from './exchangeType';
import { ExternalWalletAsset } from './externalWalletAsset';
import { ExternalWalletsWalletIdAssetIdPostRequest } from './externalWalletsWalletIdAssetIdPostRequest';
import { FeeInfo } from './feeInfo';
import { FiatAccount } from './fiatAccount';
import { FiatAccountType } from './fiatAccountType';
import { FiatAccountsAccountIdRedeemToLinkedDdaPostRequest } from './fiatAccountsAccountIdRedeemToLinkedDdaPostRequest';
import { FiatAsset } from './fiatAsset';
import { FreezeTransactionResponse } from './freezeTransactionResponse';
import { GasStationConfiguration } from './gasStationConfiguration';
import { GasStationPropertiesResponse } from './gasStationPropertiesResponse';
import { GetAllXBSettlementConfigsResponse } from './getAllXBSettlementConfigsResponse';
import { GetUsersResponse } from './getUsersResponse';
import { InternalWalletsPostRequest } from './internalWalletsPostRequest';
import { InternalWalletsWalletIdAssetIdPostRequest } from './internalWalletsWalletIdAssetIdPostRequest';
import { ModelError } from './modelError';
import { NetworkChannel } from './networkChannel';
import { NetworkConnection } from './networkConnection';
import { NetworkConnectionResponse } from './networkConnectionResponse';
import { NetworkConnectionResponseLocalChannel } from './networkConnectionResponseLocalChannel';
import { NetworkConnectionResponseRemoteChannel } from './networkConnectionResponseRemoteChannel';
import { NetworkConnectionRoutingPolicy } from './networkConnectionRoutingPolicy';
import { NetworkConnectionRoutingPolicyCrypto } from './networkConnectionRoutingPolicyCrypto';
import { NetworkConnectionRoutingPolicySen } from './networkConnectionRoutingPolicySen';
import { NetworkConnectionRoutingPolicySenTest } from './networkConnectionRoutingPolicySenTest';
import { NetworkConnectionRoutingPolicySignet } from './networkConnectionRoutingPolicySignet';
import { NetworkConnectionRoutingPolicySignetTest } from './networkConnectionRoutingPolicySignetTest';
import { NetworkConnectionsConnectionIdIsThirdPartyRoutingAssetTypeGet200Response } from './networkConnectionsConnectionIdIsThirdPartyRoutingAssetTypeGet200Response';
import { NetworkConnectionsConnectionIdSetRoutingPolicyPatch200Response } from './networkConnectionsConnectionIdSetRoutingPolicyPatch200Response';
import { NetworkConnectionsConnectionIdSetRoutingPolicyPatchRequest } from './networkConnectionsConnectionIdSetRoutingPolicyPatchRequest';
import { NetworkFee } from './networkFee';
import { NetworkId } from './networkId';
import { NetworkIdResponse } from './networkIdResponse';
import { NetworkIdResponseAllOf } from './networkIdResponseAllOf';
import { NetworkIdRoutingPolicy } from './networkIdRoutingPolicy';
import { NetworkIdRoutingPolicyCrypto } from './networkIdRoutingPolicyCrypto';
import { NetworkIdRoutingPolicySen } from './networkIdRoutingPolicySen';
import { NetworkIdRoutingPolicySenTest } from './networkIdRoutingPolicySenTest';
import { NetworkIdRoutingPolicySignet } from './networkIdRoutingPolicySignet';
import { NetworkIdRoutingPolicySignetTest } from './networkIdRoutingPolicySignetTest';
import { NetworkIdsGet200ResponseInner } from './networkIdsGet200ResponseInner';
import { NetworkIdsNetworkIdSetDiscoverabilityPatchRequest } from './networkIdsNetworkIdSetDiscoverabilityPatchRequest';
import { NetworkIdsNetworkIdSetRoutingPolicyPatchRequest } from './networkIdsNetworkIdSetRoutingPolicyPatchRequest';
import { NetworkIdsPostRequest } from './networkIdsPostRequest';
import { NetworkRecord } from './networkRecord';
import { NoneNetworkRoutingDest } from './noneNetworkRoutingDest';
import { OffExchangeEntityResponse } from './offExchangeEntityResponse';
import { OffExchangeEntityResponseBalanceValue } from './offExchangeEntityResponseBalanceValue';
import { OneTimeAddress } from './oneTimeAddress';
import { PaymentsXbSettlementsFlowsFlowIdGet200Response } from './paymentsXbSettlementsFlowsFlowIdGet200Response';
import { PublicKeyInformation } from './publicKeyInformation';
import { ResendWebhooksResponse } from './resendWebhooksResponse';
import { RewardInfo } from './rewardInfo';
import { RewardsInfo } from './rewardsInfo';
import { SessionDTO } from './sessionDTO';
import { SessionDTOSessionMetadata } from './sessionDTOSessionMetadata';
import { SessionMetadata } from './sessionMetadata';
import { SetConfirmationsThresholdRequest } from './setConfirmationsThresholdRequest';
import { SetConfirmationsThresholdResponse } from './setConfirmationsThresholdResponse';
import { SignedMessage } from './signedMessage';
import { SignedMessageSignature } from './signedMessageSignature';
import { SystemMessageInfo } from './systemMessageInfo';
import { Term } from './term';
import { TradingAccountType } from './tradingAccountType';
import { TransactionFee } from './transactionFee';
import { TransactionOperation } from './transactionOperation';
import { TransactionRequest } from './transactionRequest';
import { TransactionRequestAmount } from './transactionRequestAmount';
import { TransactionRequestDestination } from './transactionRequestDestination';
import { TransactionRequestFee } from './transactionRequestFee';
import { TransactionRequestFeePayerInfo } from './transactionRequestFeePayerInfo';
import { TransactionRequestGasLimit } from './transactionRequestGasLimit';
import { TransactionRequestGasPrice } from './transactionRequestGasPrice';
import { TransactionRequestNetworkStaking } from './transactionRequestNetworkStaking';
import { TransactionRequestPriorityFee } from './transactionRequestPriorityFee';
import { TransactionResponse } from './transactionResponse';
import { TransactionResponseDestination } from './transactionResponseDestination';
import { TransactionResponseFeePayerInfo } from './transactionResponseFeePayerInfo';
import { TransactionSubStatus } from './transactionSubStatus';
import { TransferPeerPath } from './transferPeerPath';
import { TransferPeerPathResponse } from './transferPeerPathResponse';
import { TransferPeerPathResponseAllOf } from './transferPeerPathResponseAllOf';
import { TransferTicketResponse } from './transferTicketResponse';
import { TransferTicketTermResponse } from './transferTicketTermResponse';
import { TransferTicketsPostRequest } from './transferTicketsPostRequest';
import { TransferTicketsTicketIdTermIdTransferPostRequest } from './transferTicketsTicketIdTermIdTransferPostRequest';
import { UnfreezeTransactionResponse } from './unfreezeTransactionResponse';
import { UnmanagedWallet } from './unmanagedWallet';
import { UnsignedMessage } from './unsignedMessage';
import { UnspentInput } from './unspentInput';
import { UnspentInputsResponse } from './unspentInputsResponse';
import { UserResponse } from './userResponse';
import { ValidateAddressResponse } from './validateAddressResponse';
import { VaultAccount } from './vaultAccount';
import { VaultAccountsPagedResponse } from './vaultAccountsPagedResponse';
import { VaultAccountsPagedResponsePaging } from './vaultAccountsPagedResponsePaging';
import { VaultAccountsPostRequest } from './vaultAccountsPostRequest';
import { VaultAccountsVaultAccountIdAssetIdAddressesAddressIdPutRequest } from './vaultAccountsVaultAccountIdAssetIdAddressesAddressIdPutRequest';
import { VaultAccountsVaultAccountIdAssetIdAddressesPostRequest } from './vaultAccountsVaultAccountIdAssetIdAddressesPostRequest';
import { VaultAccountsVaultAccountIdAssetIdPostRequest } from './vaultAccountsVaultAccountIdAssetIdPostRequest';
import { VaultAccountsVaultAccountIdPutRequest } from './vaultAccountsVaultAccountIdPutRequest';
import { VaultAccountsVaultAccountIdSetAutoFuelPostRequest } from './vaultAccountsVaultAccountIdSetAutoFuelPostRequest';
import { VaultAccountsVaultAccountIdSetCustomerRefIdPostRequest } from './vaultAccountsVaultAccountIdSetCustomerRefIdPostRequest';
import { VaultAsset } from './vaultAsset';
import { VaultWalletAddress } from './vaultWalletAddress';
import { WalletAsset } from './walletAsset';
import { WebhooksResendTxIdPostRequest } from './webhooksResendTxIdPostRequest';
import { XBCreateSettlementFlowRequestBody } from './xBCreateSettlementFlowRequestBody';
import { XBSettlementAsset } from './xBSettlementAsset';
import { XBSettlementConfigCreationRequestBody } from './xBSettlementConfigCreationRequestBody';
import { XBSettlementConfigDeletionResponse } from './xBSettlementConfigDeletionResponse';
import { XBSettlementConfigEditRequestBody } from './xBSettlementConfigEditRequestBody';
import { XBSettlementConfigModel } from './xBSettlementConfigModel';
import { XBSettlementConfigStep } from './xBSettlementConfigStep';
import { XBSettlementConfigStepsRecord } from './xBSettlementConfigStepsRecord';
import { XBSettlementConfigStepsRecordValue } from './xBSettlementConfigStepsRecordValue';
import { XBSettlementFlowExecutionModel } from './xBSettlementFlowExecutionModel';
import { XBSettlementFlowExecutionStatus } from './xBSettlementFlowExecutionStatus';
import { XBSettlementFlowExecutionStep } from './xBSettlementFlowExecutionStep';
import { XBSettlementFlowExecutionStepStatus } from './xBSettlementFlowExecutionStepStatus';
import { XBSettlementFlowSetupModel } from './xBSettlementFlowSetupModel';
import { XBSettlementFlowSetupStep } from './xBSettlementFlowSetupStep';
import { XBSettlementFlowStepsRecord } from './xBSettlementFlowStepsRecord';
import { XBSettlementStepType } from './xBSettlementStepType';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AssetTypeResponse.TypeEnum": AssetTypeResponse.TypeEnum,
        "AuthorizationGroups.UsersEnum": AuthorizationGroups.UsersEnum,
        "AuthorizationInfo.LogicEnum": AuthorizationInfo.LogicEnum,
        "AutoNetworkRoutingDest.SchemeEnum": AutoNetworkRoutingDest.SchemeEnum,
        "ConfigChangeRequestStatus": ConfigChangeRequestStatus,
        "CreateConnectionRequest.FeeLevelEnum": CreateConnectionRequest.FeeLevelEnum,
        "CreateConnectionRequest.ConnectionTypeEnum": CreateConnectionRequest.ConnectionTypeEnum,
        "CustomCryptoRoutingDest.SchemeEnum": CustomCryptoRoutingDest.SchemeEnum,
        "CustomCryptoRoutingDest.DstTypeEnum": CustomCryptoRoutingDest.DstTypeEnum,
        "CustomFiatRoutingDest.SchemeEnum": CustomFiatRoutingDest.SchemeEnum,
        "CustomFiatRoutingDest.DstTypeEnum": CustomFiatRoutingDest.DstTypeEnum,
        "DefaultNetworkRoutingDest.SchemeEnum": DefaultNetworkRoutingDest.SchemeEnum,
        "DestinationTransferPeerPath.TypeEnum": DestinationTransferPeerPath.TypeEnum,
        "ErrorResponseError.TypeEnum": ErrorResponseError.TypeEnum,
        "ExchangeType": ExchangeType,
        "FiatAccountType": FiatAccountType,
        "NetworkConnectionRoutingPolicyCrypto.SchemeEnum": NetworkConnectionRoutingPolicyCrypto.SchemeEnum,
        "NetworkConnectionRoutingPolicyCrypto.DstTypeEnum": NetworkConnectionRoutingPolicyCrypto.DstTypeEnum,
        "NetworkConnectionRoutingPolicySen.SchemeEnum": NetworkConnectionRoutingPolicySen.SchemeEnum,
        "NetworkConnectionRoutingPolicySen.DstTypeEnum": NetworkConnectionRoutingPolicySen.DstTypeEnum,
        "NetworkConnectionRoutingPolicySenTest.SchemeEnum": NetworkConnectionRoutingPolicySenTest.SchemeEnum,
        "NetworkConnectionRoutingPolicySenTest.DstTypeEnum": NetworkConnectionRoutingPolicySenTest.DstTypeEnum,
        "NetworkConnectionRoutingPolicySignet.SchemeEnum": NetworkConnectionRoutingPolicySignet.SchemeEnum,
        "NetworkConnectionRoutingPolicySignet.DstTypeEnum": NetworkConnectionRoutingPolicySignet.DstTypeEnum,
        "NetworkConnectionRoutingPolicySignetTest.SchemeEnum": NetworkConnectionRoutingPolicySignetTest.SchemeEnum,
        "NetworkConnectionRoutingPolicySignetTest.DstTypeEnum": NetworkConnectionRoutingPolicySignetTest.DstTypeEnum,
        "NetworkIdRoutingPolicyCrypto.SchemeEnum": NetworkIdRoutingPolicyCrypto.SchemeEnum,
        "NetworkIdRoutingPolicyCrypto.DstTypeEnum": NetworkIdRoutingPolicyCrypto.DstTypeEnum,
        "NetworkIdRoutingPolicySen.SchemeEnum": NetworkIdRoutingPolicySen.SchemeEnum,
        "NetworkIdRoutingPolicySen.DstTypeEnum": NetworkIdRoutingPolicySen.DstTypeEnum,
        "NetworkIdRoutingPolicySenTest.SchemeEnum": NetworkIdRoutingPolicySenTest.SchemeEnum,
        "NetworkIdRoutingPolicySenTest.DstTypeEnum": NetworkIdRoutingPolicySenTest.DstTypeEnum,
        "NetworkIdRoutingPolicySignet.SchemeEnum": NetworkIdRoutingPolicySignet.SchemeEnum,
        "NetworkIdRoutingPolicySignet.DstTypeEnum": NetworkIdRoutingPolicySignet.DstTypeEnum,
        "NetworkIdRoutingPolicySignetTest.SchemeEnum": NetworkIdRoutingPolicySignetTest.SchemeEnum,
        "NetworkIdRoutingPolicySignetTest.DstTypeEnum": NetworkIdRoutingPolicySignetTest.DstTypeEnum,
        "NoneNetworkRoutingDest.SchemeEnum": NoneNetworkRoutingDest.SchemeEnum,
        "SessionDTO.FeeLevelEnum": SessionDTO.FeeLevelEnum,
        "SessionDTO.ConnectionTypeEnum": SessionDTO.ConnectionTypeEnum,
        "SessionDTO.ConnectionMethodEnum": SessionDTO.ConnectionMethodEnum,
        "SignedMessage.AlgorithmEnum": SignedMessage.AlgorithmEnum,
        "TradingAccountType": TradingAccountType,
        "TransactionOperation": TransactionOperation,
        "TransactionRequest.FeeLevelEnum": TransactionRequest.FeeLevelEnum,
        "TransactionResponse.StatusEnum": TransactionResponse.StatusEnum,
        "TransactionSubStatus": TransactionSubStatus,
        "TransferPeerPath.TypeEnum": TransferPeerPath.TypeEnum,
        "TransferPeerPathResponse.TypeEnum": TransferPeerPathResponse.TypeEnum,
        "TransferPeerPathResponse.VirtualTypeEnum": TransferPeerPathResponse.VirtualTypeEnum,
        "TransferPeerPathResponseAllOf.VirtualTypeEnum": TransferPeerPathResponseAllOf.VirtualTypeEnum,
        "TransferTicketResponse.StatusEnum": TransferTicketResponse.StatusEnum,
        "TransferTicketTermResponse.StatusEnum": TransferTicketTermResponse.StatusEnum,
        "VaultWalletAddress.AddressFormatEnum": VaultWalletAddress.AddressFormatEnum,
        "XBSettlementFlowExecutionStatus": XBSettlementFlowExecutionStatus,
        "XBSettlementFlowExecutionStepStatus": XBSettlementFlowExecutionStepStatus,
        "XBSettlementStepType": XBSettlementStepType,
}

let typeMap: {[index: string]: any} = {
    "AllocateFundsRequest": AllocateFundsRequest,
    "AllocatedBalance": AllocatedBalance,
    "AmlScreeningResult": AmlScreeningResult,
    "AmountInfo": AmountInfo,
    "AssetTypeResponse": AssetTypeResponse,
    "AuthorizationGroups": AuthorizationGroups,
    "AuthorizationInfo": AuthorizationInfo,
    "AutoNetworkRoutingDest": AutoNetworkRoutingDest,
    "BlockInfo": BlockInfo,
    "CancelTransactionResponse": CancelTransactionResponse,
    "ConnectionsSessionIdPutRequest": ConnectionsSessionIdPutRequest,
    "ContractsContractIdAssetIdPostRequest": ContractsContractIdAssetIdPostRequest,
    "ContractsPostRequest": ContractsPostRequest,
    "CreateAddressResponse": CreateAddressResponse,
    "CreateConnectionRequest": CreateConnectionRequest,
    "CreateConnectionResponse": CreateConnectionResponse,
    "CreateConnectionResponseSessionMetadata": CreateConnectionResponseSessionMetadata,
    "CreateTransactionResponse": CreateTransactionResponse,
    "CreateTransferTicketResponse": CreateTransferTicketResponse,
    "CreateVaultAssetResponse": CreateVaultAssetResponse,
    "CustomCryptoRoutingDest": CustomCryptoRoutingDest,
    "CustomFiatRoutingDest": CustomFiatRoutingDest,
    "DeallocateFundsRequest": DeallocateFundsRequest,
    "DefaultNetworkRoutingDest": DefaultNetworkRoutingDest,
    "DestinationTransferPeerPath": DestinationTransferPeerPath,
    "DestinationTransferPeerPathAllOf": DestinationTransferPeerPathAllOf,
    "DropTransactionRequest": DropTransactionRequest,
    "DropTransactionResponse": DropTransactionResponse,
    "ErrorResponse": ErrorResponse,
    "ErrorResponseError": ErrorResponseError,
    "EstimatedNetworkFeeResponse": EstimatedNetworkFeeResponse,
    "EstimatedTransactionFeeResponse": EstimatedTransactionFeeResponse,
    "ExchangeAccount": ExchangeAccount,
    "ExchangeAccountsExchangeAccountIdConvertPostRequest": ExchangeAccountsExchangeAccountIdConvertPostRequest,
    "ExchangeAccountsExchangeAccountIdInternalTransferPostRequest": ExchangeAccountsExchangeAccountIdInternalTransferPostRequest,
    "ExchangeAsset": ExchangeAsset,
    "ExchangeTradingAccount": ExchangeTradingAccount,
    "ExternalWalletAsset": ExternalWalletAsset,
    "ExternalWalletsWalletIdAssetIdPostRequest": ExternalWalletsWalletIdAssetIdPostRequest,
    "FeeInfo": FeeInfo,
    "FiatAccount": FiatAccount,
    "FiatAccountsAccountIdRedeemToLinkedDdaPostRequest": FiatAccountsAccountIdRedeemToLinkedDdaPostRequest,
    "FiatAsset": FiatAsset,
    "FreezeTransactionResponse": FreezeTransactionResponse,
    "GasStationConfiguration": GasStationConfiguration,
    "GasStationPropertiesResponse": GasStationPropertiesResponse,
    "GetAllXBSettlementConfigsResponse": GetAllXBSettlementConfigsResponse,
    "GetUsersResponse": GetUsersResponse,
    "InternalWalletsPostRequest": InternalWalletsPostRequest,
    "InternalWalletsWalletIdAssetIdPostRequest": InternalWalletsWalletIdAssetIdPostRequest,
    "ModelError": ModelError,
    "NetworkChannel": NetworkChannel,
    "NetworkConnection": NetworkConnection,
    "NetworkConnectionResponse": NetworkConnectionResponse,
    "NetworkConnectionResponseLocalChannel": NetworkConnectionResponseLocalChannel,
    "NetworkConnectionResponseRemoteChannel": NetworkConnectionResponseRemoteChannel,
    "NetworkConnectionRoutingPolicy": NetworkConnectionRoutingPolicy,
    "NetworkConnectionRoutingPolicyCrypto": NetworkConnectionRoutingPolicyCrypto,
    "NetworkConnectionRoutingPolicySen": NetworkConnectionRoutingPolicySen,
    "NetworkConnectionRoutingPolicySenTest": NetworkConnectionRoutingPolicySenTest,
    "NetworkConnectionRoutingPolicySignet": NetworkConnectionRoutingPolicySignet,
    "NetworkConnectionRoutingPolicySignetTest": NetworkConnectionRoutingPolicySignetTest,
    "NetworkConnectionsConnectionIdIsThirdPartyRoutingAssetTypeGet200Response": NetworkConnectionsConnectionIdIsThirdPartyRoutingAssetTypeGet200Response,
    "NetworkConnectionsConnectionIdSetRoutingPolicyPatch200Response": NetworkConnectionsConnectionIdSetRoutingPolicyPatch200Response,
    "NetworkConnectionsConnectionIdSetRoutingPolicyPatchRequest": NetworkConnectionsConnectionIdSetRoutingPolicyPatchRequest,
    "NetworkFee": NetworkFee,
    "NetworkId": NetworkId,
    "NetworkIdResponse": NetworkIdResponse,
    "NetworkIdResponseAllOf": NetworkIdResponseAllOf,
    "NetworkIdRoutingPolicy": NetworkIdRoutingPolicy,
    "NetworkIdRoutingPolicyCrypto": NetworkIdRoutingPolicyCrypto,
    "NetworkIdRoutingPolicySen": NetworkIdRoutingPolicySen,
    "NetworkIdRoutingPolicySenTest": NetworkIdRoutingPolicySenTest,
    "NetworkIdRoutingPolicySignet": NetworkIdRoutingPolicySignet,
    "NetworkIdRoutingPolicySignetTest": NetworkIdRoutingPolicySignetTest,
    "NetworkIdsGet200ResponseInner": NetworkIdsGet200ResponseInner,
    "NetworkIdsNetworkIdSetDiscoverabilityPatchRequest": NetworkIdsNetworkIdSetDiscoverabilityPatchRequest,
    "NetworkIdsNetworkIdSetRoutingPolicyPatchRequest": NetworkIdsNetworkIdSetRoutingPolicyPatchRequest,
    "NetworkIdsPostRequest": NetworkIdsPostRequest,
    "NetworkRecord": NetworkRecord,
    "NoneNetworkRoutingDest": NoneNetworkRoutingDest,
    "OffExchangeEntityResponse": OffExchangeEntityResponse,
    "OffExchangeEntityResponseBalanceValue": OffExchangeEntityResponseBalanceValue,
    "OneTimeAddress": OneTimeAddress,
    "PaymentsXbSettlementsFlowsFlowIdGet200Response": PaymentsXbSettlementsFlowsFlowIdGet200Response,
    "PublicKeyInformation": PublicKeyInformation,
    "ResendWebhooksResponse": ResendWebhooksResponse,
    "RewardInfo": RewardInfo,
    "RewardsInfo": RewardsInfo,
    "SessionDTO": SessionDTO,
    "SessionDTOSessionMetadata": SessionDTOSessionMetadata,
    "SessionMetadata": SessionMetadata,
    "SetConfirmationsThresholdRequest": SetConfirmationsThresholdRequest,
    "SetConfirmationsThresholdResponse": SetConfirmationsThresholdResponse,
    "SignedMessage": SignedMessage,
    "SignedMessageSignature": SignedMessageSignature,
    "SystemMessageInfo": SystemMessageInfo,
    "Term": Term,
    "TransactionFee": TransactionFee,
    "TransactionRequest": TransactionRequest,
    "TransactionRequestAmount": TransactionRequestAmount,
    "TransactionRequestDestination": TransactionRequestDestination,
    "TransactionRequestFee": TransactionRequestFee,
    "TransactionRequestFeePayerInfo": TransactionRequestFeePayerInfo,
    "TransactionRequestGasLimit": TransactionRequestGasLimit,
    "TransactionRequestGasPrice": TransactionRequestGasPrice,
    "TransactionRequestNetworkStaking": TransactionRequestNetworkStaking,
    "TransactionRequestPriorityFee": TransactionRequestPriorityFee,
    "TransactionResponse": TransactionResponse,
    "TransactionResponseDestination": TransactionResponseDestination,
    "TransactionResponseFeePayerInfo": TransactionResponseFeePayerInfo,
    "TransferPeerPath": TransferPeerPath,
    "TransferPeerPathResponse": TransferPeerPathResponse,
    "TransferPeerPathResponseAllOf": TransferPeerPathResponseAllOf,
    "TransferTicketResponse": TransferTicketResponse,
    "TransferTicketTermResponse": TransferTicketTermResponse,
    "TransferTicketsPostRequest": TransferTicketsPostRequest,
    "TransferTicketsTicketIdTermIdTransferPostRequest": TransferTicketsTicketIdTermIdTransferPostRequest,
    "UnfreezeTransactionResponse": UnfreezeTransactionResponse,
    "UnmanagedWallet": UnmanagedWallet,
    "UnsignedMessage": UnsignedMessage,
    "UnspentInput": UnspentInput,
    "UnspentInputsResponse": UnspentInputsResponse,
    "UserResponse": UserResponse,
    "ValidateAddressResponse": ValidateAddressResponse,
    "VaultAccount": VaultAccount,
    "VaultAccountsPagedResponse": VaultAccountsPagedResponse,
    "VaultAccountsPagedResponsePaging": VaultAccountsPagedResponsePaging,
    "VaultAccountsPostRequest": VaultAccountsPostRequest,
    "VaultAccountsVaultAccountIdAssetIdAddressesAddressIdPutRequest": VaultAccountsVaultAccountIdAssetIdAddressesAddressIdPutRequest,
    "VaultAccountsVaultAccountIdAssetIdAddressesPostRequest": VaultAccountsVaultAccountIdAssetIdAddressesPostRequest,
    "VaultAccountsVaultAccountIdAssetIdPostRequest": VaultAccountsVaultAccountIdAssetIdPostRequest,
    "VaultAccountsVaultAccountIdPutRequest": VaultAccountsVaultAccountIdPutRequest,
    "VaultAccountsVaultAccountIdSetAutoFuelPostRequest": VaultAccountsVaultAccountIdSetAutoFuelPostRequest,
    "VaultAccountsVaultAccountIdSetCustomerRefIdPostRequest": VaultAccountsVaultAccountIdSetCustomerRefIdPostRequest,
    "VaultAsset": VaultAsset,
    "VaultWalletAddress": VaultWalletAddress,
    "WalletAsset": WalletAsset,
    "WebhooksResendTxIdPostRequest": WebhooksResendTxIdPostRequest,
    "XBCreateSettlementFlowRequestBody": XBCreateSettlementFlowRequestBody,
    "XBSettlementAsset": XBSettlementAsset,
    "XBSettlementConfigCreationRequestBody": XBSettlementConfigCreationRequestBody,
    "XBSettlementConfigDeletionResponse": XBSettlementConfigDeletionResponse,
    "XBSettlementConfigEditRequestBody": XBSettlementConfigEditRequestBody,
    "XBSettlementConfigModel": XBSettlementConfigModel,
    "XBSettlementConfigStep": XBSettlementConfigStep,
    "XBSettlementConfigStepsRecord": XBSettlementConfigStepsRecord,
    "XBSettlementConfigStepsRecordValue": XBSettlementConfigStepsRecordValue,
    "XBSettlementFlowExecutionModel": XBSettlementFlowExecutionModel,
    "XBSettlementFlowExecutionStep": XBSettlementFlowExecutionStep,
    "XBSettlementFlowSetupModel": XBSettlementFlowSetupModel,
    "XBSettlementFlowSetupStep": XBSettlementFlowSetupStep,
    "XBSettlementFlowStepsRecord": XBSettlementFlowStepsRecord,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
