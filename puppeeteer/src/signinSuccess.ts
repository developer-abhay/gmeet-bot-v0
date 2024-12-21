// import puppeteer from 'puppeteer-extra';
// import pluginStealth from 'puppeteer-extra-plugin-stealth'; // Use v2.4.5 instead of latest
// import * as readline from 'readline';

// puppeteer.use(pluginStealth());

// const USERNAME_SELECTOR = '#identifierId';
// const USERNAME_NEXT_SELECTOR = '#identifierNext';
// const PASSWORD_SELECTOR = "input[type='password']";
// const PASSWORD_NEXT_SELECTOR = '#passwordNext';

// // Use '-h' arg for headful login.
// // const headless = !process.argv.includes('-h');
// const headless = false;

// // Prompt user for email and password.
// const prompt = (query: string, hidden = false): Promise<string> =>
//     new Promise((resolve, reject) => {
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout,
//         });
//         try {
//             if (hidden) {
//                 const stdin = process.openStdin();
//                 process.stdin.on('data', (char: string) => {
//                     char = char + '';
//                     switch (char) {
//                         case '\n':
//                         case '\r':
//                         case '\u0004':
//                             stdin.pause();
//                             break;
//                         default:
//                             process.stdout.clearLine(0);
//                             readline.cursorTo(process.stdout, 0);
//                             process.stdout.write(query + Array(rl.line.length + 1).join('*'));
//                             break;
//                     }
//                 });
//             }
//             rl.question(query, (value) => {
//                 resolve(value);
//                 rl.close();
//             });
//         } catch (err) {
//             reject(err);
//         }
//     });

// // Launch puppeteer browser.
// puppeteer.launch({
//     headless: headless,
// }).then(async (browser: any) => {
//     console.log('Opening chromium browser...');
//     const page = await browser.newPage();
//     const pages = await browser.pages();
//     // Close the new tab that chromium always opens first.
//     pages[0].close();
//     await page.goto('https://accounts.google.com/signin/v2/identifier', { waitUntil: 'networkidle2' });
//     if (true) {
//         // Only needed if sign in requires you to click 'sign in with google' button.
//         // await page.waitForSelector('button[data-test="google-button-login"]');
//         // await page.waitFor(1000);
//         // await page.click('button[data-test="google-button-login"]');

//         // Wait for email input.
//         await page.waitForSelector('#identifierId');

//         // *********************************************************
//         // let badInput = true;

//         // // Keep trying email until user inputs email correctly.
//         // // This will error due to captcha if too many incorrect inputs.
//         // while (badInput) {
//         //     const email = await prompt('Email or phone: ');
//         //     await page.type('#identifierId', email);
//         //     await page.waitFor(1000);
//         //     await page.keyboard.press('Enter');
//         //     await page.waitFor(1000);
//         //     badInput = await page.evaluate(() => document.querySelector('#identifierId[aria-invalid="true"]') !== null);
//         //     if (badInput) {
//         //         console.log('Incorrect email or phone. Please try again.');
//         //         await page.click('#identifierId', { clickCount: 3 });
//         //     }
//         // }
//         // *********************************************************
//         let badInput = false;
//         do {
//             await page.waitForSelector(USERNAME_SELECTOR);
//             await page.click(USERNAME_SELECTOR);
//             await page.keyboard.type('abhaysharma.developer@gmail.com');
//             // await page.screenshot({path: 'out/01.png'});
//             console.info(`Entered username, clicking Next.`);
//             await page.click(USERNAME_NEXT_SELECTOR);


//             // // const email = await prompt('Email or phone: ');
//             // const email = 'abhaysharma.developer@gmail.com';
//             // await page.type('#identifierId', email);
//             // await page.waitFor(1000);
//             // // await page.keyboard.press('Enter');
//             // await page.click('#identifierId');
//             // await page.waitFor(1000);
//             // badInput = await page.evaluate(() => document.querySelector('#identifierId[aria-invalid="true"]') !== null);
//             // if (badInput) {
//             //     console.log('Incorrect email or phone. Please try again.');
//             //     await page.click('#identifierId', { clickCount: 3 });
//             // }
//         } while (badInput)
//         // *********************************************************


//         await page.waitForSelector(PASSWORD_SELECTOR);
//         await page.waitFor(2000);
//         console.log('typing')
//         await page.click(PASSWORD_SELECTOR);
//         await page.keyboard.type('Developer&78');


//         // const password = await prompt('Enter your password: ', true);
//         // console.log('Finishing up...');
//         // Wait for password input
//         // await page.type('input[type="password"]', password);
//         await page.waitFor(1000);
//         await page.keyboard.press('Enter');
//         // For headless mode, 2FA needs to be handled here.
//         // Login via gmail app works autmatically.



//         // Join meeting
//         await page.goto('https://meet.google.com/unz-cyji-oyn', { waitUntil: 'networkidle2' });
//     }
// });