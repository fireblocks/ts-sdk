import PIIsdk, { PIIEncryptionMethod } from "@notabene/pii-sdk";
import { TransactionArguments, TravelRule, TravelRuleOptions } from "./types/travel-rules";

const requiredFields = [
    "baseURLPII",
    "audiencePII",
    "clientId",
    "clientSecret",
    "authURL",
    "jsonDidKey",
];

export class PIIEncryption {
    public toolset: PIIsdk;
    public travelRuleEndpoints = ['/v1/transactions/estimate_fee','/v1/transactions'];
    constructor(private readonly config: TravelRuleOptions) {
        this.config = config;
        const missingFields = requiredFields.filter(
            (field) => !(field in this.config)
        );

        if (missingFields.length > 0) {
            throw new Error(
                `Missing PII configuration fields: ${missingFields.join(", ")}`
            );
        }

        this.toolset = new PIIsdk({
            piiURL: config.baseURLPII,
            audience: config.audiencePII,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            authURL: config.authURL,
        });
    }

    async hybridEncode(transaction: TransactionArguments) {
        const { travelRuleMessage } = transaction;
        const pii = travelRuleMessage?.pii || {
            originator: travelRuleMessage?.originator,
            beneficiary: travelRuleMessage?.beneficiary,
        };
        const { beneficiaryDidKey, jsonDidKey } = this.config;
        const counterpartyDIDKey = beneficiaryDidKey || undefined;

        let piiIvms;

        try {
            const jsonKey = jsonDidKey || '';
            piiIvms = await this.toolset.generatePIIField({
                pii,
                originatorVASPdid: travelRuleMessage?.originatorVASPdid,
                beneficiaryVASPdid: travelRuleMessage?.beneficiaryVASPdid,
                counterpartyDIDKey,
                keypair: JSON.parse(jsonKey),
                senderDIDKey: JSON.parse(jsonKey).did,
                encryptionMethod: PIIEncryptionMethod.HYBRID,
            });
        } catch (error: any) {
            const errorMessage = error?.message || error?.toString();
            const errorDetails = JSON.stringify(error);
            throw new Error(`Failed to generate PII fields error: ${errorMessage}. Details: ${errorDetails}`);
        }

        transaction.travelRuleMessage = this.travelRuleMessageHandler(travelRuleMessage as TravelRule, piiIvms);

        return transaction;
    }

    private travelRuleMessageHandler(travelRuleMessage: TravelRule, piiIvms: any): TravelRule {
        travelRuleMessage.beneficiary = piiIvms.beneficiary;
        travelRuleMessage.originator = piiIvms.originator;

        travelRuleMessage.beneficiary = {
            originatorPersons: piiIvms.beneficiary.beneficiaryPersons,
            accountNumber: piiIvms.beneficiary.accountNumber,
        };

        return travelRuleMessage;
    }
}