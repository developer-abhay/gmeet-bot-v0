import path from 'path';
import puppeteer from 'puppeteer-extra';
import pluginStealth from 'puppeteer-extra-plugin-stealth';
import AnonymizeUAPlugin from "puppeteer-extra-plugin-anonymize-ua";
import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";

puppeteer.use(pluginStealth());
puppeteer.use(AnonymizeUAPlugin());
puppeteer.use(
    AdblockerPlugin({
        blockTrackers: true,
    })
);

const USERNAME_SELECTOR = '#identifierId';
const PASSWORD_SELECTOR = 'input[type="password"]';

const headless = false;

// Launch puppeteer browser.
puppeteer.launch({
    // executablePath: puppeteer.executablePath(),
    headless: headless,
    defaultViewport: null,
    // ignoreDefaultArgs: ["--disable-extensions"],
    args: [
        "--start-maximized",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        `--user-data-dir=${path.join(__dirname, 'dev-user-data')}`,
    ],
}).then(async (browser: any) => {
    console.log('Opening chromium browser...');


    const page = await browser.newPage();
    // const pages = await browser.pages();
    // await page.setUserAgent(
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.110 Safari/537.36"
    // );

    //  Enable bypassing of Content Security Policy (CSP).
    // const client = await page.target().createCDPSession();
    // await client.send('Page.setBypassCSP', { enabled: true });

    // Close the new tab that chromium always opens first.
    // pages[0].close();
    await page.goto('https://accounts.google.com/signin/v2/identifier', { waitUntil: 'networkidle2' });
    if (true) {
        // Wait for email input.
        await page.waitForSelector('#identifierId');

        let badInput = false;
        do {
            await page.waitForSelector(USERNAME_SELECTOR);
            await page.click(USERNAME_SELECTOR);
            await page.keyboard.type('abhaysharma.developer@gmail.com');
            console.info(`Entered username, clicking Next.`);
            await page.keyboard.press('Enter');
        } while (badInput)
        // *********************************************************

        await page.waitForSelector(PASSWORD_SELECTOR);
        await page.waitFor(5000);
        console.log('typing')
        await page.click(PASSWORD_SELECTOR);
        await page.keyboard.type('Developer&78');
        await page.waitFor(3000);
        await page.keyboard.press('Enter');

        // Join meeting
        await page.waitFor(5000);
        await page.goto('https://meet.google.com/unz-cyji-oyn', { waitUntil: 'networkidle0' })

        // Log browser console messages for debugging.
        page.on('console', (msg: any) => console.log('BROWSER LOG:', msg.text()));
    }
}).catch(err => {
    console.log(err)
});