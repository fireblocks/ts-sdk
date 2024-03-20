/**
 * Fireblocks API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: support@fireblocks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BearerTokenProvider } from '../network/bearerTokenProvider';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken');
const mockJwtSign = jwt.sign as jest.Mock;

describe('BearerTokenProvider Tests', () => {
    const apiKey = 'your-api-key';
    const secretKey = 'your-secret-key';
    const bearerTokenProvider = new BearerTokenProvider(apiKey, secretKey);

    describe('GetToken tests', () => {
        it('Should call jwt.sign with expected parameters for GET when no payload is being used', () => {
            const method = 'GET';
            const path = 'https://example.com/api';

            const expectedToken = 'expected-token-value';
            mockJwtSign.mockReturnValue(expectedToken);

            const token = bearerTokenProvider.getToken(method, path);

            expect(mockJwtSign).toHaveBeenCalledWith(
                {
                    uri: '/api',
                    nonce: expect.any(String),
                    iat: expect.any(Number),
                    exp: expect.any(Number),
                    sub: apiKey,
                    bodyHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
                },
                secretKey,
                { algorithm: 'RS256' }
            );

            expect(token).toBe(expectedToken);
        });

        it('Should return a valid JWT for POST request when payload is used', () => {
            const method = 'POST';
            const path = 'https://example.com/api';
            const payload = JSON.stringify({ key: 'value' });

            const expectedToken = 'expected-token-value';
            mockJwtSign.mockReturnValue(expectedToken);

            const token = bearerTokenProvider.getToken(method, path, payload);

            expect(mockJwtSign).toHaveBeenCalledWith(
                {
                    uri: '/api',
                    nonce: expect.any(String),
                    iat: expect.any(Number),
                    exp: expect.any(Number),
                    sub: apiKey,
                    bodyHash: 'e43abcf3375244839c012f9633f95862d232a95b00d5bc7348b3098b9fed7f32'
                },
                secretKey,
                { algorithm: 'RS256' }
            );

            expect(token).toBe(expectedToken);
        });
    });
});