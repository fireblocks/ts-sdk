const { version } = require("../package.json");
import os from "os";
import platform from "platform";
import type { AxiosInstance, RawAxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { BearerTokenProvider } from "./bearerTokenProvider";
import { AdditionalOptions } from "../client/clientConfiguration";
import { handleError } from "../error/fireblocksError";

export class AxiosManager {
    tokenProvider: BearerTokenProvider; // service which provides the up-to-date jwt token
    axios: AxiosInstance;

    /**
    * Configures the http authentication with the required details.
    *
    * @param apiKey the API key to use
    * @param secretKey the secret key to use
    * @param additionalOptions additional options to configure the SDK and the underlying HTTP client
    */
    public constructor(private apiKey: string, private secretKey: string, private additionalOptions?: AdditionalOptions) {
        this.tokenProvider = new BearerTokenProvider(apiKey, secretKey);
        this.axios = axios.create();

        // Request interceptor for API calls
        this.axios.interceptors.request.use(
            async (config: InternalAxiosRequestConfig) => {
                const token = this.tokenProvider.getToken(config.method as string,
                                        config.url as string,
                                        config.data);
                config.headers = {
                    ...config.headers,
                    "X-API-Key": this.apiKey || '',
                    "Authorization": `Bearer ${token}`,
                    "User-Agent": this.getUserAgent(),
                    "Content-Type": "application/json",
                } as any
                return config;
        },
            (error: any) => {
                Promise.reject(handleError(error))
            }
        );

        // Response interceptor for API calls
        this.axios.interceptors.response.use(
            response => {
                // Do something with successful responses
                return response;
            },
            (error: any) => {
                throw handleError(error);
            }
        );
    }

    private getUserAgent(): string {
        let userAgent = `@fireblocks/ts-sdk/${version}`;
        if (!this.additionalOptions?.isAnonymousPlatform) {
            userAgent += ` (${os.type()} ${os.release()}; ${platform.name} ${platform.version}; ${os.arch()})`;
        }
        if (this.additionalOptions?.userAgent) {
            userAgent = `${this.additionalOptions?.userAgent} ${userAgent}`;
        }
        return userAgent;
    }

    get axiosInstance(): AxiosInstance {
        return this.axios;
    }
}
