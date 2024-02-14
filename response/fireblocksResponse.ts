import {AxiosResponse} from "axios";

export class FireblocksResponse<T> {
    public constructor(
        public data: T,
        public statusCode: number,
        public headers: Record<string, string>,
    ) {}
}

function copyHeaders(response: AxiosResponse): Record<string, string> {
    const headersJSON: Record<string, string> = {};
    for (const [key, value] of Object.entries(response.headers)) {
            if (typeof value === 'string') {
            headersJSON[key] = value;
        } else if (Array.isArray(value)) {
            headersJSON[key] = value.join(',');
        }
    }
    return headersJSON;
}

export function convertToFireblocksResponse<T>(response: AxiosResponse<T>): FireblocksResponse<T>{
    return new FireblocksResponse<T>(response.data, response.status, copyHeaders(response));
}
