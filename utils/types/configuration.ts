import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import {v4 as uuid} from "uuid"
import os from "os";
import platform from "platform";
import {AxiosProxyConfig} from "axios";
import {TravelRuleOptions} from "./travel-rules";

const {version} = require("../../../package.json");

export interface ConfigurationParameters {
    basePath?: string; // override base path
    apiKey?: string // parameter for apiKey security
    secretKey?: string;
    options?: SDKOptions;
}

export interface SDKOptions {
    /** HTTP request timeout */
    timeoutInMs?: number;

    /** Proxy configurations 'http://<myproxy>:<portNumber>'*/
    proxy?: AxiosProxyConfig;

    /** Whether to remove platform from User-Agent header */
    anonymousPlatform?: boolean;

    /** Additional product identifier to be prepended to the User-Agent header */
    userAgent?: string;

    /**
     * TravelRule Provider options to initialize PII Client for PII encryption
     */
    travelRuleOptions?: TravelRuleOptions;
}


export class Configuration {
    private signableMethods = ['POST', 'PATCH']
    private _basePath?: string; // override base path
    private _apiKey?: string // parameter for apiKey security
    private _secretKey?: string;
    private _options?: SDKOptions;

    constructor(readonly configurationParameters: ConfigurationParameters = {}) {
        this._basePath = configurationParameters.basePath;
        this._apiKey = configurationParameters.apiKey;
        this._secretKey = configurationParameters.secretKey;
        this._options = configurationParameters.options;

        if (!this._basePath) {
            this._basePath = process.env.FIREBLOCKS_BASE_PATH
        }
        if (!this._apiKey) {
            this._apiKey = process.env.FIREBLOCKS_API_KEY
        }
        if (!this._secretKey) {
            this._secretKey = process.env.FIREBLOCKS_SECRET_KEY?.replace(/\\n/gm, "\n")
        }
    }

    private signJwt(path: string, bodyJson?: any): string {
        console.log(crypto.createHash("sha256").update(JSON.stringify(bodyJson || "")).digest().toString("hex"));
        const token = jwt.sign({
            uri: path,
            nonce: uuid(),
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 55,
            sub: this.apiKey,
            bodyHash: crypto.createHash("sha256").update(JSON.stringify(bodyJson || "")).digest().toString("hex")
        } as any, this.secretKey, {algorithm: "RS256"});

        return token;
    }

    getHeaders(method: string, path: string, bodyJson?: any): { [key: string]: string } {
        let payload;
        const url = new URL(path);
        if (this.signableMethods.includes(method)) {
            payload = bodyJson
        }
        const token = this.signJwt(url.pathname, payload);
        return {
            "X-API-Key": this.apiKey || '',
            "Authorization": `Bearer ${token}`,
            "User-Agent": this.getUserAgent(),
            "Content-Type": "application/json"
        }
    }

    getUserAgent(): string {
        let userAgent = `fireblocks-sdk-js/${version}`;
        if (!this._options?.anonymousPlatform) {
            userAgent += ` (${os.type()} ${os.release()}; ${platform.name} ${platform.version}; ${os.arch()})`;
        }
        if (this._options?.userAgent) {
            userAgent = `${this._options.userAgent} ${userAgent}`;
        }
        return userAgent;
    }

    get basePath(): string {
        return this._basePath != null ? this._basePath : 'https://api.fireblocks.io/v1';
    }

    get apiKey(): string {
        return this._apiKey || '';
    }

    get secretKey(): string {
        return this._secretKey || '';
    }

    get proxy(): AxiosProxyConfig | undefined {
        return this._options?.proxy;
    }

    get options(): SDKOptions | undefined {
        return this._options;
    }

}