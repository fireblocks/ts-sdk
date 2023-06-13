export declare enum TransactionOperation {
    TRANSFER = "TRANSFER",
    MINT = "MINT",
    BURN = "BURN",
    SUPPLY_TO_COMPOUND = "SUPPLY_TO_COMPOUND",
    REDEEM_FROM_COMPOUND = "REDEEM_FROM_COMPOUND",
    RAW = "RAW",
    CONTRACT_CALL = "CONTRACT_CALL",
    TYPED_MESSAGE = "TYPED_MESSAGE"
}

export declare enum FeeLevel {
    HIGH = "HIGH",
    MEDIUM = "MEDIUM",
    LOW = "LOW"
}

export declare enum PeerType {
    VAULT_ACCOUNT = "VAULT_ACCOUNT",
    EXCHANGE_ACCOUNT = "EXCHANGE_ACCOUNT",
    INTERNAL_WALLET = "INTERNAL_WALLET",
    EXTERNAL_WALLET = "EXTERNAL_WALLET",
    UNKNOWN = "UNKNOWN",
    NETWORK_CONNECTION = "NETWORK_CONNECTION",
    FIAT_ACCOUNT = "FIAT_ACCOUNT",
    COMPOUND = "COMPOUND",
    ONE_TIME_ADDRESS = "ONE_TIME_ADDRESS",
    OEC_PARTNER = "OEC_PARTNER"
}

export declare enum VirtualType {
    OFF_EXCHANGE = "OFF_EXCHANGE",
    DEFAULT = "DEFAULT",
    OEC_FEE_BANK = "OEC_FEE_BANK"
}


/////


export interface TravelRuleOptions {
    clientId: string;
    clientSecret: string;
    authURL?: string;
    audience?: string;
    audiencePII?: string;
    baseURL?: string;
    baseURLPII?: string;
    jsonDidKey?: string;
    beneficiaryDidKey?: string;
    travelRuleMessage?: TravelRule;
}

export interface TravelRule {
    originatorVASPdid: string;
    beneficiaryVASPdid: string;
    originator?: TROriginator;
    beneficiary?: TROriginator;
    pii?: PII;
    jsonDidKey?: string;
}

export interface TransactionArguments {
    assetId?: string;
    source?: TransferPeerPath;
    destination?: DestinationTransferPeerPath;
    amount?: number | string;
    operation?: TransactionOperation;
    fee?: number | string;
    feeLevel?: FeeLevel;
    failOnLowFee?: boolean;
    maxFee?: string;
    priorityFee?: number | string;
    gasPrice?: number | string;
    gasLimit?: number | string;
    note?: string;
    cpuStaking?: number;
    networkStaking?: number;
    autoStaking?: boolean;
    customerRefId?: string;
    extraParameters?: object;
    destinations?: TransactionDestination[];
    replaceTxByHash?: string;
    externalTxId?: string;
    treatAsGrossAmount?: boolean;
    forceSweep?: boolean;
    feePayerInfo?: TransactionArgumentsFeePayerInfo;
    travelRuleMessage?: TravelRule;
}

export interface TransferPeerPath {
    type?: PeerType;
    id?: string;
    virtualId?: string;
    virtualType?: VirtualType;
    address?: string;
}

export interface DestinationTransferPeerPath {
    type: PeerType;
    id?: string;
    virtualId?: string;
    virtualType?: VirtualType;
    oneTimeAddress?: IOneTimeAddress;
}

export interface TransactionDestination {
    amount: string | number;
    destination: DestinationTransferPeerPath;
}

export interface TransactionArgumentsFeePayerInfo {
    feePayerAccountId: string;
}

export interface IOneTimeAddress {
    address: string;
    tag?: string;
}


interface PII {
    originator?: TROriginator;
    beneficiary?: TROriginator;
}
interface TROriginator {
    originatorPersons?: TROriginatorPerson[];
    beneficiaryPersons?: TROriginatorPerson[];
    accountNumber?: string[];
}

interface TROriginatorPerson {
    naturalPerson?: TRNaturalPerson;
    legalPerson?: TRNaturalPerson;
}
interface TRNaturalPerson {
    name?: TRName;
    geographicAddress?: TRGeographicAddress;
    nationalIdentification?: TRNationalIdentification;
    dateAndPlaceOfBirth?: TRDateAndPlaceOfBirth;
}
interface TRName extends Array<TRPersonNameIdentifier> {
}
interface TRPersonNameIdentifier {
    nameIdentifier?: TRNameIdentifier;
}
interface TRNameIdentifier {
    primaryIdentifier?: string;
    secondaryIdentifier?: string;
    nameIdentifierType?: string;
}
interface TRGeographicAddress extends Array<TRGeographicAddressData> {
}
interface TRGeographicAddressData {
    streetName?: string;
    townName?: string;
    country?: string;
    buildingNumber?: string;
    postCode?: string;
    addressType?: string;
    department?: string;
    subDepartment?: string;
    buildingName?: string;
    floor?: string;
    postBox?: string;
    room?: string;
    townLocationName?: string;
    districtName?: string;
    countrySubDivision?: string;
    addressLine?: string;
}
interface TRNationalIdentification {
    countryOfIssue?: string;
    nationalIdentifier?: string;
    nationalIdentifierType?: string;
}
interface TRDateAndPlaceOfBirth {
    dateOfBirth?: string;
    placeOfBirth?: string;
}
export interface TravelRuleOptions {
    clientId: string;
    clientSecret: string;
    authURL?: string;
    audience?: string;
    audiencePII?: string;
    baseURL?: string;
    baseURLPII?: string;
    jsonDidKey?: string;
    beneficiaryDidKey?: string;
    travelRuleMessage?: TravelRule;
}
export interface TravelRuleVasp {
    did: string;
    name: string;
    verificationStatus: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    emailDomains: string;
    website: string;
    logo: string;
    legalStructure: string;
    legalName: string;
    yearFounded: string;
    incorporationCountry: string;
    isRegulated: string;
    otherNames: string;
    identificationType: string;
    identificationCountry: string;
    businessNumber: string;
    regulatoryAuthorities: string;
    jurisdictions: string;
    street: string;
    number: string;
    unit: string;
    postCode: string;
    state: string;
    certificates: string;
    description: string;
    travelRule_OPENVASP: string;
    travelRule_SYGNA: string;
    travelRule_TRISA: string;
    travelRule_TRLIGHT: string;
    travelRule_EMAIL: string;
    travelRule_TRP: string;
    travelRule_SHYFT: string;
    travelRule_USTRAVELRULEWG: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    lastSentDate: string;
    lastReceivedDate: string;
    documents: string;
    hasAdmin: boolean;
    isNotifiable: boolean;
    issuers: {
        name: {
            issuerDid: string;
        };
        nonce: {
            issuerDid: string;
        };
    };
    regulatoryStatus: string;
    supervisoryAuthority: string;
    registrationLicenseId: string;
    statusStartDate: string;
    statusExpirationDate: string;
    lastChecked: string;
    additionalInformation: string;
    subsidiaryOf: string;
    chainalysis_clusterName: string;
    pii_didkey: string;
    onboardingStatus: string;
    compliancePhase: number;
    vaspnetId: string;
    node: string;
    node_didkey: string;
    parentGateway: string;
    isActiveSender: boolean;
    isActiveReceiver: boolean;
    subsidiaries: string[];
}
export interface ValidateFullTravelRuleResult {
    isValid: boolean;
    type: string;
    beneficiaryAddressType: string;
    addressSource: string;
    beneficiaryVASPname: string;
    beneficiaryVASPdid: string;
    errors: string[];
    warnings: string[];
}
export interface ValidateTravelRuleResult {
    isValid: boolean;
    type: string;
    beneficiaryAddressType: string;
    addressSource: string;
    beneficiaryVASPdid: string;
    warnings: string[];
}
export interface TravelRuleVaspFilter {
    q?: string;
    fields?: string[];
    page?: number;
    per_page?: number;
    order?: string;
}