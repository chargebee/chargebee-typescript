export const DEFAULTS: Environment = {
    protocol: 'https',
    hostSuffix: '.chargebee.com',
    apiPath: '/api/v2',
    timeout: 80000,
    clientVersion: 'v2.36.0',
    port: 443,
    timemachineWaitInMillis: 3000,
    exportWaitInMillis: 3000
}

export interface Environment {
    protocol: string,
    hostSuffix: string,
    apiPath: string,
    timeout: number,
    clientVersion: string,
    port: number,
    timemachineWaitInMillis: number,
    exportWaitInMillis: number
}
