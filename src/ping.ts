import * as https from 'https';

/**
 * Sends a HEAD request to google.com to check connectivity.
 * @returns A Promise that resolves to true if the request is successful, false otherwise.
 */
export function pingGoogle(): Promise<boolean> {
    return new Promise((resolve) => {
        const req = https.request({
            hostname: 'google.com',
            port: 443,
            path: '/',
            method: 'HEAD',
            timeout: 5000 // 5 seconds timeout
        }, (res) => {
            // Include redirects
            if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) {
                resolve(true);
            } else {
                resolve(false);
            }
        });

        req.on('error', () => {
            resolve(false);
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve(false);
        });

        req.end();
    });
}
