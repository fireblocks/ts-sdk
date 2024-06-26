/* tslint:disable */
/* eslint-disable */
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



/**
 * 
 * @export
 * @enum {string}
 */

export const TransferPeerPathSubType = {
    Binance: 'BINANCE',
    Binanceus: 'BINANCEUS',
    Bitfinex: 'BITFINEX',
    Bithumb: 'BITHUMB',
    Bitmex: 'BITMEX',
    Bitso: 'BITSO',
    Bitstamp: 'BITSTAMP',
    Bittrex: 'BITTREX',
    Blinc: 'BLINC',
    Bybit: 'BYBIT',
    Circle: 'CIRCLE',
    Coinbaseexchange: 'COINBASEEXCHANGE',
    Coinbasepro: 'COINBASEPRO',
    Coinmetro: 'COINMETRO',
    Coinspro: 'COINSPRO',
    Cryptocom: 'CRYPTOCOM',
    Deribit: 'DERIBIT',
    Gemini: 'GEMINI',
    Hitbtc: 'HITBTC',
    Huobi: 'HUOBI',
    Independentreserve: 'INDEPENDENTRESERVE',
    Korbit: 'KORBIT',
    Kraken: 'KRAKEN',
    Krakenintl: 'KRAKENINTL',
    Kucoin: 'KUCOIN',
    Liquid: 'LIQUID',
    Okcoin: 'OKCOIN',
    Okex: 'OKEX',
    Paxos: 'PAXOS',
    Poloniex: 'POLONIEX',
    External: 'External',
    Internal: 'Internal'
} as const;

export type TransferPeerPathSubType = typeof TransferPeerPathSubType[keyof typeof TransferPeerPathSubType];



