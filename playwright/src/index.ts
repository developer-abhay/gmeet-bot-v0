import { chromium } from 'playwright';
import playwrightExtra from 'playwright-extra';
import stealthPlugin from 'playwright-extra-plugin-stealth';

// Apply stealth plugin to avoid detection
// chromium.use(stealthPlugin());

(async () => {
    try {
        const browser = await playwrightExtra(chromium)
            .use(stealthPlugin())
            .launch();


        // Launch Chromium browser.
        // const browser = await chromium.launch({
        //     headless: false, // Set to true for headless mode.
        //     // args: [
        //     //     "--start-maximized",
        //     //     "--disable-setuid-sandbox",
        //     //     "--no-sandbox",
        //     // ],
        // });

        console.log('Opening Chromium browser...');
        // const context = await browser.newContext({
        //     viewport: null, // Disable default viewport.
        //     userAgent:
        //         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.110 Safari/537.36",
        // });
        const page = await browser.newPage();

        // Set user agent to mimic a real browser
        // await page.setUserAgent(
        //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.110 Safari/537.36"
        // );

        // Navigate to Google login page.
        console.log('Navigating to Google login...');
        await page.goto('https://accounts.google.com/signin/v2/identifier');

        console.log('Logging into Google account...');
        await page.fill('#identifierId', 'abhaysharma.developer@gmail.com');
        await page.click('#identifierNext');

        await page.waitForSelector('input[type="password"]', { state: 'visible' });
        await page.fill('input[type="password"]', 'Developer&78');
        await page.click('#passwordNext');

        // Wait for login to complete.
        await page.waitForNavigation({ waitUntil: 'networkidle' });
        console.log('Logged in successfully.');

        // Navigate to Google Meet link.
        const meetLink = 'https://meet.google.com/unz-cyji-oyn';
        console.log('Navigating to Google Meet...');
        await page.goto(meetLink);

        // Wait for the Join button and click it.
        const joinButtonSelector = 'button[jsname="BOHaEe"]';
        await page.waitForSelector(joinButtonSelector, { timeout: 15000 });
        console.log('Found Join button, clicking...');
        await page.click(joinButtonSelector);

        console.log('Successfully joined the meeting.');

        // Keep the browser open for interaction.
        // await browser.close();
    } catch (err) {
        console.error('Error:', err);
    }
})();
