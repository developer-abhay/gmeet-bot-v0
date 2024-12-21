// import puppeteer from "puppeteer-extra";
// import StealthPlugin from 'puppeteer-extra-plugin-stealth'

// puppeteer.use(StealthPlugin());



// // const launchGoogleMeet = async () => {
// //     puppeteer.use(StealthPlugin());

// //     const browser = await puppeteer.launch({
// //         executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
// //         headless: false,
// //         // args: [
// //         //     '--no-sandbox',
// //         //     '--disable-setuid-sandbox',
// //         //     '--disable-infobars',
// //         //     '--disable-web-security',
// //         //     '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"'
// //         // ]
// //         args: ['--incognito',
// //             '--disable-features=IsolateOrigins,site-per-process',
// //             '--disable-infobars',
// //             '--no-sandbox',
// //             '--disable-setuid-sandbox',
// //         ]
// //     });

// //     const version = await browser.version();
// //     console.log('Browser version:', version);

// //     const page = await browser.newPage();

// //     await page.setViewport({ width: 1080, height: 1024 });

// //     await page.goto('https://meet.google.com/unz-cyji-oyn', { waitUntil: 'networkidle0' })

// //     const innerHtml = await page.evaluate(() => {
// //         const links = document.documentElement.querySelectorAll('a');
// //         return Array.from(links).map(link => link.outerHTML);
// //     });

// //     // const innerHtml = await page.evaluate(() => document.documentElement.outerHTML);
// //     console.log(innerHtml)
// // }

// launchGoogleMeet('abhaysharma.developer@gmail.com', 'dvsv')
