import type { InternalAxiosRequestConfig } from "axios";

/**
* Interface with which a configuration object can be configured.
*/
export interface ConfigurationOptions {
    /**
    * The API key to use for authentication. This can also be set as an
    * environment variable FIREBLOCKS_API_KEY
    */
    apiKey?: string
    /**
    * The secret key to use for authentication. This can also be set as an
    * environment variable FIREBLOCKS_SECRET_KEY
    */
    secretKey?: string;
    /**
    * The base path for the server against which to make requests. This can
    * also be set as an environment variable FIREBLOCKS_BASE_PATH.
    */
    baseServerPath?: BaseServerPathEnum | string;
    /**
    * Additional options to configure the SDK
    */
    additionalOptions?: AdditionalOptions;
}

export interface AdditionalOptions {
    /** Base options for axios calls */
    baseOptions?: Partial<InternalAxiosRequestConfig>;

    /** Whether to remove platform from User-Agent header */
    isAnonymousPlatform?: boolean;

    /** Additional product identifier to be prepended to the User-Agent header */
    userAgent?: string;
}

export enum BaseServerPathEnum {
    Sandbox = 'https://sandbox-api.fireblocks.io/v1',
    ProdUS = 'https://api.fireblocks.io/v1',
    ProdEU = 'https://eu-api.fireblocks.io/v1',
    ProdEU2 = 'https://eu2-api.fireblocks.io/v1',
}
