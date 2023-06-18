import localVarRequest from 'request';

export * from './addAssetToContractRequest';
export * from './addAssetToExternalWalletRequest';
export * from './addCollateralRequestBody';
export * from './amlScreeningResult';
export * from './amountInfo';
export * from './assetTypeResponse';
export * from './assetWallet';
export * from './authorizationGroups';
export * from './authorizationInfo';
export * from './blockInfo';
export * from './cancelTransactionResponse';
export * from './checkThirdPartyRoutingForNetworkConnection200Response';
export * from './configChangeRequestStatus';
export * from './convertAssetsRequest';
export * from './createAddressResponse';
export * from './createConnectionRequest';
export * from './createConnectionResponse';
export * from './createConnectionResponseSessionMetadata';
export * from './createContractRequest';
export * from './createInternalWalletAssetRequest';
export * from './createInternalWalletRequest';
export * from './createNetworkIdRequest';
export * from './createPayoutRequest';
export * from './createTransactionResponse';
export * from './createVaultAccountAssetAddressRequest';
export * from './createVaultAccountAssetRequest';
export * from './createVaultAccountRequest';
export * from './createVaultAssetResponse';
export * from './customCryptoRoutingDest';
export * from './customFiatRoutingDest';
export * from './defaultNetworkRoutingDest';
export * from './destinationTransferPeerPath';
export * from './destinationTransferPeerPathAllOf';
export * from './destinationTransferPeerPathResponse';
export * from './destinationTransferPeerPathResponseAllOf';
export * from './dispatchPayoutResponse';
export * from './dropTransactionRequest';
export * from './dropTransactionResponse';
export * from './errorResponse';
export * from './errorResponseError';
export * from './estimatedNetworkFeeResponse';
export * from './estimatedTransactionFeeResponse';
export * from './exchangeAccount';
export * from './exchangeAsset';
export * from './exchangeTradingAccount';
export * from './exchangeType';
export * from './externalWalletAsset';
export * from './feeInfo';
export * from './fiatAccount';
export * from './fiatAccountType';
export * from './fiatAsset';
export * from './freezeTransactionResponse';
export * from './gasStationConfiguration';
export * from './gasStationPropertiesResponse';
export * from './getConnectionsFilterParameter';
export * from './getConnectionsResponse';
export * from './getNFTTokens200Response';
export * from './getNetworkIds200ResponseInner';
export * from './getOwnershipTokens200Response';
export * from './getTransactionOperation';
export * from './getUsersResponse';
export * from './instructionAmount';
export * from './internalTransferRequest';
export * from './mediaEntityResponse';
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
export * from './networkFee';
export * from './networkId';
export * from './networkIdResponse';
export * from './networkIdResponseAllOf';
export * from './networkIdRoutingPolicy';
export * from './networkIdRoutingPolicyCrypto';
export * from './networkIdRoutingPolicySen';
export * from './networkIdRoutingPolicySenTest';
export * from './networkRecord';
export * from './noneNetworkRoutingDest';
export * from './oneTimeAddress';
export * from './paginatedAssetWalletResponse';
export * from './paginatedAssetWalletResponsePaging';
export * from './paging';
export * from './payeeAccount';
export * from './payeeAccountResponse';
export * from './payeeAccountType';
export * from './paymentAccount';
export * from './paymentAccountResponse';
export * from './paymentAccountType';
export * from './payoutInitMethod';
export * from './payoutInstruction';
export * from './payoutInstructionResponse';
export * from './payoutInstructionState';
export * from './payoutResponse';
export * from './payoutState';
export * from './payoutStatus';
export * from './publicKeyInformation';
export * from './redeemFundsToLinkedDDARequest';
export * from './removeCollateralRequestBody';
export * from './resendWebhooksForTransactionRequest';
export * from './resendWebhooksResponse';
export * from './respondToConnectionRequest';
export * from './rewardInfo';
export * from './rewardsInfo';
export * from './sessionDTO';
export * from './sessionDTOSessionMetadata';
export * from './sessionMetadata';
export * from './setAutoFuelForVaultAccountRequest';
export * from './setConfirmationsThresholdRequest';
export * from './setConfirmationsThresholdResponse';
export * from './setCustomerRefIdForVaultAccountRequest';
export * from './setDiscoverabilityForNetworkIdRequest';
export * from './setNetworkIdNameRequest';
export * from './setRoutingPolicyForNetworkConnection200Response';
export * from './setRoutingPolicyForNetworkConnectionRequest';
export * from './setRoutingPolicyForNetworkIdRequest';
export * from './settlementRequestBody';
export * from './settlementResponse';
export * from './signedMessage';
export * from './signedMessageSignature';
export * from './sourceTransferPeerPathResponse';
export * from './sourceTransferPeerPathResponseAllOf';
export * from './systemMessageInfo';
export * from './term';
export * from './toCollateralTransaction';
export * from './toExchangeTransaction';
export * from './tokenCollectionResponse';
export * from './tokenOwnershipResponse';
export * from './tokenResponse';
export * from './tokenResponseCollection';
export * from './tradingAccountType';
export * from './transaction';
export * from './transactionFee';
export * from './transactionOperation';
export * from './transactionRequest';
export * from './transactionRequestAmount';
export * from './transactionRequestDestination';
export * from './transactionRequestFee';
export * from './transactionRequestGasLimit';
export * from './transactionRequestGasPrice';
export * from './transactionRequestNetworkFee';
export * from './transactionRequestNetworkStaking';
export * from './transactionRequestPriorityFee';
export * from './transactionResponse';
export * from './transactionResponseContractCallDecodedData';
export * from './transactionResponseDestination';
export * from './transferPeerPath';
export * from './travelRuleAddress';
export * from './travelRuleGetAllVASPsResponse';
export * from './travelRuleIssuer';
export * from './travelRuleIssuers';
export * from './travelRuleOwnershipProof';
export * from './travelRulePiiIVMS';
export * from './travelRuleTransactionBlockchainInfo';
export * from './travelRuleUpdateVASPDetails';
export * from './travelRuleVASP';
export * from './travelRuleValidateFullTransactionRequest';
export * from './travelRuleValidateFullTransactionRequestBeneficiary';
export * from './travelRuleValidateFullTransactionRequestBeneficiaryProof';
export * from './travelRuleValidateFullTransactionRequestOriginator';
export * from './travelRuleValidateFullTransactionRequestOriginatorProof';
export * from './travelRuleValidateFullTransactionRequestPii';
export * from './travelRuleValidateFullTransactionRequestTransactionBlockchainInfo';
export * from './travelRuleValidateTransactionRequest';
export * from './travelRuleValidateTransactionRequestBeneficiaryAddress';
export * from './travelRuleValidateTransactionResponse';
export * from './unfreezeTransactionResponse';
export * from './unmanagedWallet';
export * from './unsignedMessage';
export * from './unspentInput';
export * from './unspentInputsResponse';
export * from './updateTokenOwnershipStatusDto';
export * from './updateVaultAccountAssetAddressRequest';
export * from './updateVaultAccountRequest';
export * from './userResponse';
export * from './validateAddressResponse';
export * from './vaultAccount';
export * from './vaultAccountsPagedResponse';
export * from './vaultAccountsPagedResponsePaging';
export * from './vaultAsset';
export * from './vaultWalletAddress';
export * from './walletAsset';
export * from './xBSettlementAsset';
export * from './xBSettlementAssetID';
export * from './xBSettlementConfigCreationRequestBody';
export * from './xBSettlementConfigEditRequestBody';
export * from './xBSettlementConfigModel';
export * from './xBSettlementConfigStep';
export * from './xBSettlementConfigStepsRecord';
export * from './xBSettlementConfigStepsRecordValue';
export * from './xBSettlementCorridorId';
export * from './xBSettlementCreateFlowRequestBody';
export * from './xBSettlementCryptoAsset';
export * from './xBSettlementFiatAsset';
export * from './xBSettlementFlowExecutionModel';
export * from './xBSettlementFlowExecutionModelSelectedConversionSlippage';
export * from './xBSettlementFlowExecutionRequestBody';
export * from './xBSettlementFlowExecutionStatus';
export * from './xBSettlementFlowExecutionStep';
export * from './xBSettlementFlowExecutionStepStatus';
export * from './xBSettlementFlowPreviewModel';
export * from './xBSettlementFlowSelectedConversionSlippageReason';
export * from './xBSettlementFlowSetupStep';
export * from './xBSettlementFlowStepsExecutionRecord';
export * from './xBSettlementFlowStepsRecord';
export * from './xBSettlementGetAllConfigsResponse';
export * from './xBSettlementGetFlowResponse';
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


import { AddAssetToContractRequest } from './addAssetToContractRequest';
import { AddAssetToExternalWalletRequest } from './addAssetToExternalWalletRequest';
import { AddCollateralRequestBody } from './addCollateralRequestBody';
import { AmlScreeningResult } from './amlScreeningResult';
import { AmountInfo } from './amountInfo';
import { AssetTypeResponse } from './assetTypeResponse';
import { AssetWallet } from './assetWallet';
import { AuthorizationGroups } from './authorizationGroups';
import { AuthorizationInfo } from './authorizationInfo';
import { BlockInfo } from './blockInfo';
import { CancelTransactionResponse } from './cancelTransactionResponse';
import { CheckThirdPartyRoutingForNetworkConnection200Response } from './checkThirdPartyRoutingForNetworkConnection200Response';
import { ConfigChangeRequestStatus } from './configChangeRequestStatus';
import { ConvertAssetsRequest } from './convertAssetsRequest';
import { CreateAddressResponse } from './createAddressResponse';
import { CreateConnectionRequest } from './createConnectionRequest';
import { CreateConnectionResponse } from './createConnectionResponse';
import { CreateConnectionResponseSessionMetadata } from './createConnectionResponseSessionMetadata';
import { CreateContractRequest } from './createContractRequest';
import { CreateInternalWalletAssetRequest } from './createInternalWalletAssetRequest';
import { CreateInternalWalletRequest } from './createInternalWalletRequest';
import { CreateNetworkIdRequest } from './createNetworkIdRequest';
import { CreatePayoutRequest } from './createPayoutRequest';
import { CreateTransactionResponse } from './createTransactionResponse';
import { CreateVaultAccountAssetAddressRequest } from './createVaultAccountAssetAddressRequest';
import { CreateVaultAccountAssetRequest } from './createVaultAccountAssetRequest';
import { CreateVaultAccountRequest } from './createVaultAccountRequest';
import { CreateVaultAssetResponse } from './createVaultAssetResponse';
import { CustomCryptoRoutingDest } from './customCryptoRoutingDest';
import { CustomFiatRoutingDest } from './customFiatRoutingDest';
import { DefaultNetworkRoutingDest } from './defaultNetworkRoutingDest';
import { DestinationTransferPeerPath } from './destinationTransferPeerPath';
import { DestinationTransferPeerPathAllOf } from './destinationTransferPeerPathAllOf';
import { DestinationTransferPeerPathResponse } from './destinationTransferPeerPathResponse';
import { DestinationTransferPeerPathResponseAllOf } from './destinationTransferPeerPathResponseAllOf';
import { DispatchPayoutResponse } from './dispatchPayoutResponse';
import { DropTransactionRequest } from './dropTransactionRequest';
import { DropTransactionResponse } from './dropTransactionResponse';
import { ErrorResponse } from './errorResponse';
import { ErrorResponseError } from './errorResponseError';
import { EstimatedNetworkFeeResponse } from './estimatedNetworkFeeResponse';
import { EstimatedTransactionFeeResponse } from './estimatedTransactionFeeResponse';
import { ExchangeAccount } from './exchangeAccount';
import { ExchangeAsset } from './exchangeAsset';
import { ExchangeTradingAccount } from './exchangeTradingAccount';
import { ExchangeType } from './exchangeType';
import { ExternalWalletAsset } from './externalWalletAsset';
import { FeeInfo } from './feeInfo';
import { FiatAccount } from './fiatAccount';
import { FiatAccountType } from './fiatAccountType';
import { FiatAsset } from './fiatAsset';
import { FreezeTransactionResponse } from './freezeTransactionResponse';
import { GasStationConfiguration } from './gasStationConfiguration';
import { GasStationPropertiesResponse } from './gasStationPropertiesResponse';
import { GetConnectionsFilterParameter } from './getConnectionsFilterParameter';
import { GetConnectionsResponse } from './getConnectionsResponse';
import { GetNFTTokens200Response } from './getNFTTokens200Response';
import { GetNetworkIds200ResponseInner } from './getNetworkIds200ResponseInner';
import { GetOwnershipTokens200Response } from './getOwnershipTokens200Response';
import { GetTransactionOperation } from './getTransactionOperation';
import { GetUsersResponse } from './getUsersResponse';
import { InstructionAmount } from './instructionAmount';
import { InternalTransferRequest } from './internalTransferRequest';
import { MediaEntityResponse } from './mediaEntityResponse';
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
import { NetworkFee } from './networkFee';
import { NetworkId } from './networkId';
import { NetworkIdResponse } from './networkIdResponse';
import { NetworkIdResponseAllOf } from './networkIdResponseAllOf';
import { NetworkIdRoutingPolicy } from './networkIdRoutingPolicy';
import { NetworkIdRoutingPolicyCrypto } from './networkIdRoutingPolicyCrypto';
import { NetworkIdRoutingPolicySen } from './networkIdRoutingPolicySen';
import { NetworkIdRoutingPolicySenTest } from './networkIdRoutingPolicySenTest';
import { NetworkRecord } from './networkRecord';
import { NoneNetworkRoutingDest } from './noneNetworkRoutingDest';
import { OneTimeAddress } from './oneTimeAddress';
import { PaginatedAssetWalletResponse } from './paginatedAssetWalletResponse';
import { PaginatedAssetWalletResponsePaging } from './paginatedAssetWalletResponsePaging';
import { Paging } from './paging';
import { PayeeAccount } from './payeeAccount';
import { PayeeAccountResponse } from './payeeAccountResponse';
import { PayeeAccountType } from './payeeAccountType';
import { PaymentAccount } from './paymentAccount';
import { PaymentAccountResponse } from './paymentAccountResponse';
import { PaymentAccountType } from './paymentAccountType';
import { PayoutInitMethod } from './payoutInitMethod';
import { PayoutInstruction } from './payoutInstruction';
import { PayoutInstructionResponse } from './payoutInstructionResponse';
import { PayoutInstructionState } from './payoutInstructionState';
import { PayoutResponse } from './payoutResponse';
import { PayoutState } from './payoutState';
import { PayoutStatus } from './payoutStatus';
import { PublicKeyInformation } from './publicKeyInformation';
import { RedeemFundsToLinkedDDARequest } from './redeemFundsToLinkedDDARequest';
import { RemoveCollateralRequestBody } from './removeCollateralRequestBody';
import { ResendWebhooksForTransactionRequest } from './resendWebhooksForTransactionRequest';
import { ResendWebhooksResponse } from './resendWebhooksResponse';
import { RespondToConnectionRequest } from './respondToConnectionRequest';
import { RewardInfo } from './rewardInfo';
import { RewardsInfo } from './rewardsInfo';
import { SessionDTO } from './sessionDTO';
import { SessionDTOSessionMetadata } from './sessionDTOSessionMetadata';
import { SessionMetadata } from './sessionMetadata';
import { SetAutoFuelForVaultAccountRequest } from './setAutoFuelForVaultAccountRequest';
import { SetConfirmationsThresholdRequest } from './setConfirmationsThresholdRequest';
import { SetConfirmationsThresholdResponse } from './setConfirmationsThresholdResponse';
import { SetCustomerRefIdForVaultAccountRequest } from './setCustomerRefIdForVaultAccountRequest';
import { SetDiscoverabilityForNetworkIdRequest } from './setDiscoverabilityForNetworkIdRequest';
import { SetNetworkIdNameRequest } from './setNetworkIdNameRequest';
import { SetRoutingPolicyForNetworkConnection200Response } from './setRoutingPolicyForNetworkConnection200Response';
import { SetRoutingPolicyForNetworkConnectionRequest } from './setRoutingPolicyForNetworkConnectionRequest';
import { SetRoutingPolicyForNetworkIdRequest } from './setRoutingPolicyForNetworkIdRequest';
import { SettlementRequestBody } from './settlementRequestBody';
import { SettlementResponse } from './settlementResponse';
import { SignedMessage } from './signedMessage';
import { SignedMessageSignature } from './signedMessageSignature';
import { SourceTransferPeerPathResponse } from './sourceTransferPeerPathResponse';
import { SourceTransferPeerPathResponseAllOf } from './sourceTransferPeerPathResponseAllOf';
import { SystemMessageInfo } from './systemMessageInfo';
import { Term } from './term';
import { ToCollateralTransaction } from './toCollateralTransaction';
import { ToExchangeTransaction } from './toExchangeTransaction';
import { TokenCollectionResponse } from './tokenCollectionResponse';
import { TokenOwnershipResponse } from './tokenOwnershipResponse';
import { TokenResponse } from './tokenResponse';
import { TokenResponseCollection } from './tokenResponseCollection';
import { TradingAccountType } from './tradingAccountType';
import { Transaction } from './transaction';
import { TransactionFee } from './transactionFee';
import { TransactionOperation } from './transactionOperation';
import { TransactionRequest } from './transactionRequest';
import { TransactionRequestAmount } from './transactionRequestAmount';
import { TransactionRequestDestination } from './transactionRequestDestination';
import { TransactionRequestFee } from './transactionRequestFee';
import { TransactionRequestGasLimit } from './transactionRequestGasLimit';
import { TransactionRequestGasPrice } from './transactionRequestGasPrice';
import { TransactionRequestNetworkFee } from './transactionRequestNetworkFee';
import { TransactionRequestNetworkStaking } from './transactionRequestNetworkStaking';
import { TransactionRequestPriorityFee } from './transactionRequestPriorityFee';
import { TransactionResponse } from './transactionResponse';
import { TransactionResponseContractCallDecodedData } from './transactionResponseContractCallDecodedData';
import { TransactionResponseDestination } from './transactionResponseDestination';
import { TransferPeerPath } from './transferPeerPath';
import { TravelRuleAddress } from './travelRuleAddress';
import { TravelRuleGetAllVASPsResponse } from './travelRuleGetAllVASPsResponse';
import { TravelRuleIssuer } from './travelRuleIssuer';
import { TravelRuleIssuers } from './travelRuleIssuers';
import { TravelRuleOwnershipProof } from './travelRuleOwnershipProof';
import { TravelRulePiiIVMS } from './travelRulePiiIVMS';
import { TravelRuleTransactionBlockchainInfo } from './travelRuleTransactionBlockchainInfo';
import { TravelRuleUpdateVASPDetails } from './travelRuleUpdateVASPDetails';
import { TravelRuleVASP } from './travelRuleVASP';
import { TravelRuleValidateFullTransactionRequest } from './travelRuleValidateFullTransactionRequest';
import { TravelRuleValidateFullTransactionRequestBeneficiary } from './travelRuleValidateFullTransactionRequestBeneficiary';
import { TravelRuleValidateFullTransactionRequestBeneficiaryProof } from './travelRuleValidateFullTransactionRequestBeneficiaryProof';
import { TravelRuleValidateFullTransactionRequestOriginator } from './travelRuleValidateFullTransactionRequestOriginator';
import { TravelRuleValidateFullTransactionRequestOriginatorProof } from './travelRuleValidateFullTransactionRequestOriginatorProof';
import { TravelRuleValidateFullTransactionRequestPii } from './travelRuleValidateFullTransactionRequestPii';
import { TravelRuleValidateFullTransactionRequestTransactionBlockchainInfo } from './travelRuleValidateFullTransactionRequestTransactionBlockchainInfo';
import { TravelRuleValidateTransactionRequest } from './travelRuleValidateTransactionRequest';
import { TravelRuleValidateTransactionRequestBeneficiaryAddress } from './travelRuleValidateTransactionRequestBeneficiaryAddress';
import { TravelRuleValidateTransactionResponse } from './travelRuleValidateTransactionResponse';
import { UnfreezeTransactionResponse } from './unfreezeTransactionResponse';
import { UnmanagedWallet } from './unmanagedWallet';
import { UnsignedMessage } from './unsignedMessage';
import { UnspentInput } from './unspentInput';
import { UnspentInputsResponse } from './unspentInputsResponse';
import { UpdateTokenOwnershipStatusDto } from './updateTokenOwnershipStatusDto';
import { UpdateVaultAccountAssetAddressRequest } from './updateVaultAccountAssetAddressRequest';
import { UpdateVaultAccountRequest } from './updateVaultAccountRequest';
import { UserResponse } from './userResponse';
import { ValidateAddressResponse } from './validateAddressResponse';
import { VaultAccount } from './vaultAccount';
import { VaultAccountsPagedResponse } from './vaultAccountsPagedResponse';
import { VaultAccountsPagedResponsePaging } from './vaultAccountsPagedResponsePaging';
import { VaultAsset } from './vaultAsset';
import { VaultWalletAddress } from './vaultWalletAddress';
import { WalletAsset } from './walletAsset';
import { XBSettlementAsset } from './xBSettlementAsset';
import { XBSettlementAssetID } from './xBSettlementAssetID';
import { XBSettlementConfigCreationRequestBody } from './xBSettlementConfigCreationRequestBody';
import { XBSettlementConfigEditRequestBody } from './xBSettlementConfigEditRequestBody';
import { XBSettlementConfigModel } from './xBSettlementConfigModel';
import { XBSettlementConfigStep } from './xBSettlementConfigStep';
import { XBSettlementConfigStepsRecord } from './xBSettlementConfigStepsRecord';
import { XBSettlementConfigStepsRecordValue } from './xBSettlementConfigStepsRecordValue';
import { XBSettlementCorridorId } from './xBSettlementCorridorId';
import { XBSettlementCreateFlowRequestBody } from './xBSettlementCreateFlowRequestBody';
import { XBSettlementCryptoAsset } from './xBSettlementCryptoAsset';
import { XBSettlementFiatAsset } from './xBSettlementFiatAsset';
import { XBSettlementFlowExecutionModel } from './xBSettlementFlowExecutionModel';
import { XBSettlementFlowExecutionModelSelectedConversionSlippage } from './xBSettlementFlowExecutionModelSelectedConversionSlippage';
import { XBSettlementFlowExecutionRequestBody } from './xBSettlementFlowExecutionRequestBody';
import { XBSettlementFlowExecutionStatus } from './xBSettlementFlowExecutionStatus';
import { XBSettlementFlowExecutionStep } from './xBSettlementFlowExecutionStep';
import { XBSettlementFlowExecutionStepStatus } from './xBSettlementFlowExecutionStepStatus';
import { XBSettlementFlowPreviewModel } from './xBSettlementFlowPreviewModel';
import { XBSettlementFlowSelectedConversionSlippageReason } from './xBSettlementFlowSelectedConversionSlippageReason';
import { XBSettlementFlowSetupStep } from './xBSettlementFlowSetupStep';
import { XBSettlementFlowStepsExecutionRecord } from './xBSettlementFlowStepsExecutionRecord';
import { XBSettlementFlowStepsRecord } from './xBSettlementFlowStepsRecord';
import { XBSettlementGetAllConfigsResponse } from './xBSettlementGetAllConfigsResponse';
import { XBSettlementGetFlowResponse } from './xBSettlementGetFlowResponse';
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
        "ConfigChangeRequestStatus": ConfigChangeRequestStatus,
        "CreateConnectionRequest.FeeLevelEnum": CreateConnectionRequest.FeeLevelEnum,
        "CustomCryptoRoutingDest.SchemeEnum": CustomCryptoRoutingDest.SchemeEnum,
        "CustomCryptoRoutingDest.DstTypeEnum": CustomCryptoRoutingDest.DstTypeEnum,
        "CustomFiatRoutingDest.SchemeEnum": CustomFiatRoutingDest.SchemeEnum,
        "CustomFiatRoutingDest.DstTypeEnum": CustomFiatRoutingDest.DstTypeEnum,
        "DefaultNetworkRoutingDest.SchemeEnum": DefaultNetworkRoutingDest.SchemeEnum,
        "DestinationTransferPeerPath.TypeEnum": DestinationTransferPeerPath.TypeEnum,
        "DestinationTransferPeerPathResponse.TypeEnum": DestinationTransferPeerPathResponse.TypeEnum,
        "ErrorResponseError.TypeEnum": ErrorResponseError.TypeEnum,
        "ExchangeType": ExchangeType,
        "FiatAccountType": FiatAccountType,
        "GetTransactionOperation": GetTransactionOperation,
        "MediaEntityResponse.ContentTypeEnum": MediaEntityResponse.ContentTypeEnum,
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
        "NoneNetworkRoutingDest.SchemeEnum": NoneNetworkRoutingDest.SchemeEnum,
        "PayeeAccountType": PayeeAccountType,
        "PaymentAccountType": PaymentAccountType,
        "PayoutInitMethod": PayoutInitMethod,
        "PayoutInstructionState": PayoutInstructionState,
        "PayoutState": PayoutState,
        "PayoutStatus": PayoutStatus,
        "SessionDTO.FeeLevelEnum": SessionDTO.FeeLevelEnum,
        "SessionDTO.ConnectionTypeEnum": SessionDTO.ConnectionTypeEnum,
        "SessionDTO.ConnectionMethodEnum": SessionDTO.ConnectionMethodEnum,
        "SignedMessage.AlgorithmEnum": SignedMessage.AlgorithmEnum,
        "SourceTransferPeerPathResponse.TypeEnum": SourceTransferPeerPathResponse.TypeEnum,
        "SystemMessageInfo.TypeEnum": SystemMessageInfo.TypeEnum,
        "TokenOwnershipResponse.BlockchainDescriptorEnum": TokenOwnershipResponse.BlockchainDescriptorEnum,
        "TokenResponse.BlockchainDescriptorEnum": TokenResponse.BlockchainDescriptorEnum,
        "TradingAccountType": TradingAccountType,
        "Transaction.StateEnum": Transaction.StateEnum,
        "TransactionOperation": TransactionOperation,
        "TransactionRequest.FeeLevelEnum": TransactionRequest.FeeLevelEnum,
        "TransactionResponse.AddressTypeEnum": TransactionResponse.AddressTypeEnum,
        "TransferPeerPath.TypeEnum": TransferPeerPath.TypeEnum,
        "UpdateTokenOwnershipStatusDto.StatusEnum": UpdateTokenOwnershipStatusDto.StatusEnum,
        "VaultWalletAddress.AddressFormatEnum": VaultWalletAddress.AddressFormatEnum,
        "XBSettlementCorridorId": XBSettlementCorridorId,
        "XBSettlementCryptoAsset": XBSettlementCryptoAsset,
        "XBSettlementFiatAsset": XBSettlementFiatAsset,
        "XBSettlementFlowExecutionStatus": XBSettlementFlowExecutionStatus,
        "XBSettlementFlowExecutionStepStatus": XBSettlementFlowExecutionStepStatus,
        "XBSettlementFlowSelectedConversionSlippageReason": XBSettlementFlowSelectedConversionSlippageReason,
        "XBSettlementStepType": XBSettlementStepType,
}

let typeMap: {[index: string]: any} = {
    "AddAssetToContractRequest": AddAssetToContractRequest,
    "AddAssetToExternalWalletRequest": AddAssetToExternalWalletRequest,
    "AddCollateralRequestBody": AddCollateralRequestBody,
    "AmlScreeningResult": AmlScreeningResult,
    "AmountInfo": AmountInfo,
    "AssetTypeResponse": AssetTypeResponse,
    "AssetWallet": AssetWallet,
    "AuthorizationGroups": AuthorizationGroups,
    "AuthorizationInfo": AuthorizationInfo,
    "BlockInfo": BlockInfo,
    "CancelTransactionResponse": CancelTransactionResponse,
    "CheckThirdPartyRoutingForNetworkConnection200Response": CheckThirdPartyRoutingForNetworkConnection200Response,
    "ConvertAssetsRequest": ConvertAssetsRequest,
    "CreateAddressResponse": CreateAddressResponse,
    "CreateConnectionRequest": CreateConnectionRequest,
    "CreateConnectionResponse": CreateConnectionResponse,
    "CreateConnectionResponseSessionMetadata": CreateConnectionResponseSessionMetadata,
    "CreateContractRequest": CreateContractRequest,
    "CreateInternalWalletAssetRequest": CreateInternalWalletAssetRequest,
    "CreateInternalWalletRequest": CreateInternalWalletRequest,
    "CreateNetworkIdRequest": CreateNetworkIdRequest,
    "CreatePayoutRequest": CreatePayoutRequest,
    "CreateTransactionResponse": CreateTransactionResponse,
    "CreateVaultAccountAssetAddressRequest": CreateVaultAccountAssetAddressRequest,
    "CreateVaultAccountAssetRequest": CreateVaultAccountAssetRequest,
    "CreateVaultAccountRequest": CreateVaultAccountRequest,
    "CreateVaultAssetResponse": CreateVaultAssetResponse,
    "CustomCryptoRoutingDest": CustomCryptoRoutingDest,
    "CustomFiatRoutingDest": CustomFiatRoutingDest,
    "DefaultNetworkRoutingDest": DefaultNetworkRoutingDest,
    "DestinationTransferPeerPath": DestinationTransferPeerPath,
    "DestinationTransferPeerPathAllOf": DestinationTransferPeerPathAllOf,
    "DestinationTransferPeerPathResponse": DestinationTransferPeerPathResponse,
    "DestinationTransferPeerPathResponseAllOf": DestinationTransferPeerPathResponseAllOf,
    "DispatchPayoutResponse": DispatchPayoutResponse,
    "DropTransactionRequest": DropTransactionRequest,
    "DropTransactionResponse": DropTransactionResponse,
    "ErrorResponse": ErrorResponse,
    "ErrorResponseError": ErrorResponseError,
    "EstimatedNetworkFeeResponse": EstimatedNetworkFeeResponse,
    "EstimatedTransactionFeeResponse": EstimatedTransactionFeeResponse,
    "ExchangeAccount": ExchangeAccount,
    "ExchangeAsset": ExchangeAsset,
    "ExchangeTradingAccount": ExchangeTradingAccount,
    "ExternalWalletAsset": ExternalWalletAsset,
    "FeeInfo": FeeInfo,
    "FiatAccount": FiatAccount,
    "FiatAsset": FiatAsset,
    "FreezeTransactionResponse": FreezeTransactionResponse,
    "GasStationConfiguration": GasStationConfiguration,
    "GasStationPropertiesResponse": GasStationPropertiesResponse,
    "GetConnectionsFilterParameter": GetConnectionsFilterParameter,
    "GetConnectionsResponse": GetConnectionsResponse,
    "GetNFTTokens200Response": GetNFTTokens200Response,
    "GetNetworkIds200ResponseInner": GetNetworkIds200ResponseInner,
    "GetOwnershipTokens200Response": GetOwnershipTokens200Response,
    "GetUsersResponse": GetUsersResponse,
    "InstructionAmount": InstructionAmount,
    "InternalTransferRequest": InternalTransferRequest,
    "MediaEntityResponse": MediaEntityResponse,
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
    "NetworkFee": NetworkFee,
    "NetworkId": NetworkId,
    "NetworkIdResponse": NetworkIdResponse,
    "NetworkIdResponseAllOf": NetworkIdResponseAllOf,
    "NetworkIdRoutingPolicy": NetworkIdRoutingPolicy,
    "NetworkIdRoutingPolicyCrypto": NetworkIdRoutingPolicyCrypto,
    "NetworkIdRoutingPolicySen": NetworkIdRoutingPolicySen,
    "NetworkIdRoutingPolicySenTest": NetworkIdRoutingPolicySenTest,
    "NetworkRecord": NetworkRecord,
    "NoneNetworkRoutingDest": NoneNetworkRoutingDest,
    "OneTimeAddress": OneTimeAddress,
    "PaginatedAssetWalletResponse": PaginatedAssetWalletResponse,
    "PaginatedAssetWalletResponsePaging": PaginatedAssetWalletResponsePaging,
    "Paging": Paging,
    "PayeeAccount": PayeeAccount,
    "PayeeAccountResponse": PayeeAccountResponse,
    "PaymentAccount": PaymentAccount,
    "PaymentAccountResponse": PaymentAccountResponse,
    "PayoutInstruction": PayoutInstruction,
    "PayoutInstructionResponse": PayoutInstructionResponse,
    "PayoutResponse": PayoutResponse,
    "PublicKeyInformation": PublicKeyInformation,
    "RedeemFundsToLinkedDDARequest": RedeemFundsToLinkedDDARequest,
    "RemoveCollateralRequestBody": RemoveCollateralRequestBody,
    "ResendWebhooksForTransactionRequest": ResendWebhooksForTransactionRequest,
    "ResendWebhooksResponse": ResendWebhooksResponse,
    "RespondToConnectionRequest": RespondToConnectionRequest,
    "RewardInfo": RewardInfo,
    "RewardsInfo": RewardsInfo,
    "SessionDTO": SessionDTO,
    "SessionDTOSessionMetadata": SessionDTOSessionMetadata,
    "SessionMetadata": SessionMetadata,
    "SetAutoFuelForVaultAccountRequest": SetAutoFuelForVaultAccountRequest,
    "SetConfirmationsThresholdRequest": SetConfirmationsThresholdRequest,
    "SetConfirmationsThresholdResponse": SetConfirmationsThresholdResponse,
    "SetCustomerRefIdForVaultAccountRequest": SetCustomerRefIdForVaultAccountRequest,
    "SetDiscoverabilityForNetworkIdRequest": SetDiscoverabilityForNetworkIdRequest,
    "SetNetworkIdNameRequest": SetNetworkIdNameRequest,
    "SetRoutingPolicyForNetworkConnection200Response": SetRoutingPolicyForNetworkConnection200Response,
    "SetRoutingPolicyForNetworkConnectionRequest": SetRoutingPolicyForNetworkConnectionRequest,
    "SetRoutingPolicyForNetworkIdRequest": SetRoutingPolicyForNetworkIdRequest,
    "SettlementRequestBody": SettlementRequestBody,
    "SettlementResponse": SettlementResponse,
    "SignedMessage": SignedMessage,
    "SignedMessageSignature": SignedMessageSignature,
    "SourceTransferPeerPathResponse": SourceTransferPeerPathResponse,
    "SourceTransferPeerPathResponseAllOf": SourceTransferPeerPathResponseAllOf,
    "SystemMessageInfo": SystemMessageInfo,
    "Term": Term,
    "ToCollateralTransaction": ToCollateralTransaction,
    "ToExchangeTransaction": ToExchangeTransaction,
    "TokenCollectionResponse": TokenCollectionResponse,
    "TokenOwnershipResponse": TokenOwnershipResponse,
    "TokenResponse": TokenResponse,
    "TokenResponseCollection": TokenResponseCollection,
    "Transaction": Transaction,
    "TransactionFee": TransactionFee,
    "TransactionRequest": TransactionRequest,
    "TransactionRequestAmount": TransactionRequestAmount,
    "TransactionRequestDestination": TransactionRequestDestination,
    "TransactionRequestFee": TransactionRequestFee,
    "TransactionRequestGasLimit": TransactionRequestGasLimit,
    "TransactionRequestGasPrice": TransactionRequestGasPrice,
    "TransactionRequestNetworkFee": TransactionRequestNetworkFee,
    "TransactionRequestNetworkStaking": TransactionRequestNetworkStaking,
    "TransactionRequestPriorityFee": TransactionRequestPriorityFee,
    "TransactionResponse": TransactionResponse,
    "TransactionResponseContractCallDecodedData": TransactionResponseContractCallDecodedData,
    "TransactionResponseDestination": TransactionResponseDestination,
    "TransferPeerPath": TransferPeerPath,
    "TravelRuleAddress": TravelRuleAddress,
    "TravelRuleGetAllVASPsResponse": TravelRuleGetAllVASPsResponse,
    "TravelRuleIssuer": TravelRuleIssuer,
    "TravelRuleIssuers": TravelRuleIssuers,
    "TravelRuleOwnershipProof": TravelRuleOwnershipProof,
    "TravelRulePiiIVMS": TravelRulePiiIVMS,
    "TravelRuleTransactionBlockchainInfo": TravelRuleTransactionBlockchainInfo,
    "TravelRuleUpdateVASPDetails": TravelRuleUpdateVASPDetails,
    "TravelRuleVASP": TravelRuleVASP,
    "TravelRuleValidateFullTransactionRequest": TravelRuleValidateFullTransactionRequest,
    "TravelRuleValidateFullTransactionRequestBeneficiary": TravelRuleValidateFullTransactionRequestBeneficiary,
    "TravelRuleValidateFullTransactionRequestBeneficiaryProof": TravelRuleValidateFullTransactionRequestBeneficiaryProof,
    "TravelRuleValidateFullTransactionRequestOriginator": TravelRuleValidateFullTransactionRequestOriginator,
    "TravelRuleValidateFullTransactionRequestOriginatorProof": TravelRuleValidateFullTransactionRequestOriginatorProof,
    "TravelRuleValidateFullTransactionRequestPii": TravelRuleValidateFullTransactionRequestPii,
    "TravelRuleValidateFullTransactionRequestTransactionBlockchainInfo": TravelRuleValidateFullTransactionRequestTransactionBlockchainInfo,
    "TravelRuleValidateTransactionRequest": TravelRuleValidateTransactionRequest,
    "TravelRuleValidateTransactionRequestBeneficiaryAddress": TravelRuleValidateTransactionRequestBeneficiaryAddress,
    "TravelRuleValidateTransactionResponse": TravelRuleValidateTransactionResponse,
    "UnfreezeTransactionResponse": UnfreezeTransactionResponse,
    "UnmanagedWallet": UnmanagedWallet,
    "UnsignedMessage": UnsignedMessage,
    "UnspentInput": UnspentInput,
    "UnspentInputsResponse": UnspentInputsResponse,
    "UpdateTokenOwnershipStatusDto": UpdateTokenOwnershipStatusDto,
    "UpdateVaultAccountAssetAddressRequest": UpdateVaultAccountAssetAddressRequest,
    "UpdateVaultAccountRequest": UpdateVaultAccountRequest,
    "UserResponse": UserResponse,
    "ValidateAddressResponse": ValidateAddressResponse,
    "VaultAccount": VaultAccount,
    "VaultAccountsPagedResponse": VaultAccountsPagedResponse,
    "VaultAccountsPagedResponsePaging": VaultAccountsPagedResponsePaging,
    "VaultAsset": VaultAsset,
    "VaultWalletAddress": VaultWalletAddress,
    "WalletAsset": WalletAsset,
    "XBSettlementAsset": XBSettlementAsset,
    "XBSettlementAssetID": XBSettlementAssetID,
    "XBSettlementConfigCreationRequestBody": XBSettlementConfigCreationRequestBody,
    "XBSettlementConfigEditRequestBody": XBSettlementConfigEditRequestBody,
    "XBSettlementConfigModel": XBSettlementConfigModel,
    "XBSettlementConfigStep": XBSettlementConfigStep,
    "XBSettlementConfigStepsRecord": XBSettlementConfigStepsRecord,
    "XBSettlementConfigStepsRecordValue": XBSettlementConfigStepsRecordValue,
    "XBSettlementCreateFlowRequestBody": XBSettlementCreateFlowRequestBody,
    "XBSettlementFlowExecutionModel": XBSettlementFlowExecutionModel,
    "XBSettlementFlowExecutionModelSelectedConversionSlippage": XBSettlementFlowExecutionModelSelectedConversionSlippage,
    "XBSettlementFlowExecutionRequestBody": XBSettlementFlowExecutionRequestBody,
    "XBSettlementFlowExecutionStep": XBSettlementFlowExecutionStep,
    "XBSettlementFlowPreviewModel": XBSettlementFlowPreviewModel,
    "XBSettlementFlowSetupStep": XBSettlementFlowSetupStep,
    "XBSettlementFlowStepsExecutionRecord": XBSettlementFlowStepsExecutionRecord,
    "XBSettlementFlowStepsRecord": XBSettlementFlowStepsRecord,
    "XBSettlementGetAllConfigsResponse": XBSettlementGetAllConfigsResponse,
    "XBSettlementGetFlowResponse": XBSettlementGetFlowResponse,
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
