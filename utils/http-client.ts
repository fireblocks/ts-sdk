import axios, {AxiosRequestConfig} from 'axios';
import {Configuration} from "./types/configuration";
import {PIIEncryption} from "./pii-client";

export class HttpClient {
    private axiosInstance;
    private piiClient: PIIEncryption;

    constructor(private readonly configuration: Configuration) {
        const config: AxiosRequestConfig = {};
        if (configuration.proxy) {
            config.proxy = this.configuration.proxy
        }
        config.headers = {
            'User-Agent': this.configuration.getUserAgent(),
        };

        this.axiosInstance = axios.create(config);

        if (this.configuration?.options?.travelRuleOptions) {
            this.piiClient = new PIIEncryption(this.configuration.options.travelRuleOptions);
        }
    }

    public request<T>(config: AxiosRequestConfig): Promise<T> {
        this.setTravelRule(config);
        config.headers = this.configuration.getHeaders(config.method as string, config.url as string, config.params || config.data)
        return this.axiosInstance.request(config);
    }

    private setTravelRule(config: AxiosRequestConfig) {
        if (this.piiClient?.travelRuleEndpoints.includes(new URL(config.url as string).pathname)) {
            switch (config.method) {
                case "GET":
                    config.params = this.piiClient.hybridEncode(config.params);
                    break;

                default:
                    config.data = this.piiClient.hybridEncode(config.data);
            }
        }
    }
}