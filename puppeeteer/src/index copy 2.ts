// import puppeteer, { Browser, Page } from 'puppeteer';
// import StealthPlugin from 'puppeteer-extra-plugin-stealth';
// import { addExtra } from 'puppeteer-extra';

// // Create an extended version of Puppeteer with stealth plugin
// const puppeteerExtra = addExtra(puppeteer);
// puppeteerExtra.use(StealthPlugin());

// class GoogleLoginManager {
//     private browser: Browser | null = null;
//     private page: Page | null = null;

//     async initBrowser(): Promise<void> {
//         this.browser = await puppeteerExtra.launch({
//             headless: false,
//             args: [
//                 '--no-sandbox',
//                 '--disable-setuid-sandbox',
//                 '--disable-web-security',
//                 '--disable-features=IsolateOrigins,site-per-process',
//                 '--disable-blink-features=AutomationControlled',
//                 '--window-size=1920,1080',
//             ],
//             defaultViewport: null,
//         });
//     }

//     async createPage(): Promise<void> {
//         if (!this.browser) {
//             throw new Error('Browser not initialized. Call initBrowser() first.');
//         }

//         this.page = await this.browser.newPage();

//         // Stealth and anti-detection techniques
//         // await this.page.evaluateOnNewDocument(() => {
//         //     // Overwrite webdriver
//         //     Object.defineProperty(navigator, 'webdriver', {
//         //         get: () => undefined,
//         //     });

//         // Remove automation indicators
//         //   delete Object.prototype.webdriver;
//         //   delete navigator.webdriver;
//         // });

//         // Set user agent
//         await this.page.setUserAgent(
//             'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//         );
//     }

//     async login(email: string, password: string): Promise<void> {
//         if (!this.page) {
//             throw new Error('Page not created. Call createPage() first.');
//         }

//         try {
//             // Navigate to Google login
//             await this.page.goto('https://accounts.google.com/signin/v2/identifier', {
//                 waitUntil: 'networkidle2',
//                 timeout: 60000
//             });

//             // Email input
//             await this.page.waitForSelector('input[type="email"]', { visible: true });
//             await this.page.type('input[type="email"]', email);
//             await this.page.keyboard.press('Enter');

//             // Password input
//             await this.page.waitForSelector('input[type="password"]', { visible: true });
//             await this.page.type('input[type="password"]', password);
//             await this.page.keyboard.press('Enter');

//             // Wait for navigation
//             await this.page.waitForNavigation({
//                 waitUntil: 'networkidle0',
//                 timeout: 30000
//             });

//             // Optional: screenshot for verification
//             await this.page.screenshot({ path: 'login-success.png' });
//         } catch (error) {
//             console.error('Login failed:', error);
//             throw error;
//         }
//     }

//     async close(): Promise<void> {
//         if (this.browser) {
//             await this.browser.close();
//             this.browser = null;
//             this.page = null;
//         }
//     }
// }

// // Usage example
// async function runLogin() {
//     const loginManager = new GoogleLoginManager();

//     try {
//         await loginManager.initBrowser();
//         await loginManager.createPage();
//         await loginManager.login('abhaymaster350@gmail.com', 'warmaster350..@');
//         // await loginManager.login('abhaysharma.developer@gmail.com', 'Developer&78');

//         // Keep browser open for further actions if needed
//         // await new Promise(resolve => setTimeout(resolve, 60000)); // 1-minute pause
//     } catch (error) {
//         console.error('Login process failed:', error);
//     } finally {
//         await loginManager.close();
//     }
// }

// runLogin();