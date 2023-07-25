import axios, {AxiosRequestConfig} from 'axios';
import {Configuration} from "../configuration";
import {PIIEncryption} from "./pii-client";

export class HttpClient {
    private axiosInstance;
    private piiClient: PIIEncryption;

    constructor(private readonly _configuration: Configuration) {
        const config: AxiosRequestConfig = {};
        if (_configuration.proxy) {
            config.proxy = this._configuration.proxy
        }
        config.headers = {
            'User-Agent': this._configuration.getUserAgent(),
        };

        this.axiosInstance = axios.create(config);

        if (this._configuration?.options?.travelRuleOptions) {
            this.piiClient = new PIIEncryption(this._configuration.options.travelRuleOptions);
        }
    }

     public async request<T>(config: AxiosRequestConfig): Promise<T> {
        this.setTravelRule(config);
         config.headers = {...config.headers,...this._configuration.getHeaders(config.method as string, config.url as string, config.data)}
        const res = await this.axiosInstance.request(config)
        return res.data;
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

    public get configuration(){
        return this._configuration;
    }
}