// import puppeteer from 'puppeteer';


// // dom element selectors
// const USERNAME_SELECTOR = '#identifierId';
// const USERNAME_NEXT_SELECTOR = '#identifierNext';
// const PASSWORD_SELECTOR = "#password input[type='password']";
// const PASSWORD_NEXT_SELECTOR = '#passwordNext';

// const run = async () => {

// 	const options = {
// 		// devtools: true, // Open a tool for each tab
// 		headless: false,
// 		args: [
// 			'--enable-usermedia-screen-capturing',
// 			'--allow-http-screen-capture',
// 			'--auto-select-desktop-capture-source=autoPresentThisTitle'
// 		],
// 		executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
// 	};

// 	const browser = await puppeteer.launch(options);
// 	console.log(await browser.version());

// 	// const context = await browser.createIncognitoBrowserContext();
// 	const context = browser.defaultBrowserContext()

// 	const page = await context.newPage();
// 	console.info('Launched browser, starting interactions.');

// 	/**
// 	 * Needs to do its own wait loop because can't waitFor element
// 	 * From https://gist.github.com/tokland/d3bae3b6d3c1576d8700405829bbdb52
// 	 * @param text
// 	 * @return {Promise<*>}
// 	 */
// 	const clickByText = async (text: any) => {
// 		for (let i = 0; i < 10; i++) {
// 			const elementsWithText = await page.$$(`//*[contains(text(), '${text}')]`);
// 			if (elementsWithText.length < 1) {
// 				console.log(`Didn't find '${text}' yet, waiting...`);
// 				await page.waitForFunction(await new Promise((resolve, reject) => setTimeout(resolve, 250)));
// 				// await new Promise((resolve) => setTimeout(resolve, 2000))
// 			} else {
// 				// Should this be the *last* result?
// 				return elementsWithText[0].click();
// 			}
// 		}
// 		throw new Error(`Link not found, even after waiting: '${text}'`);
// 	};

// 	// Sign in
// 	await page.goto('https://accounts.google.com', { waitUntil: 'networkidle2' });
// 	await page.waitForSelector(USERNAME_SELECTOR);
// 	await page.click(USERNAME_SELECTOR);
// 	await page.keyboard.type('abhaymaster350@gmail.com');
// 	// await page.screenshot({path: 'out/01.png'});
// 	console.info(`Entered username, clicking Next.`);
// 	await page.click(USERNAME_NEXT_SELECTOR);

// 	await page.waitForSelector(PASSWORD_SELECTOR);
// 	await page.waitForFunction(await new Promise((resolve, reject) => setTimeout(resolve, 1000)));
// 	await page.click(PASSWORD_SELECTOR);
// 	await page.keyboard.type('warmaster350..@');
// 	// await page.screenshot({path: 'out/02.png'});

// 	console.info(`Entered password, clicking Next and waiting for login to settle.`);
// 	await Promise.all([
// 		page.waitForNavigation(),
// 		await page.click(PASSWORD_NEXT_SELECTOR)
// 	]);
// 	console.info(`Done logging in.`);

// 	const presentationTabPage = await browser.newPage();
// 	await presentationTabPage.goto('https://www.google.com/search?q=fast+corgi', { waitUntil: 'networkidle2' });
// 	await presentationTabPage.evaluate(() => {
// 		document.title = 'autoPresentThisTitle';
// 	});
// 	console.log(`Target tab title: '${await presentationTabPage.title()}'`);

// 	//await page.screenshot({path: 'out/03.png'});
// 	await page.goto(`https://hangouts.google.com/present/google.com/${'unz-cyji-oyn'}?present=1`, { waitUntil: 'networkidle2' });
// 	await page.screenshot({ path: 'out/04.png' });
// 	await clickByText('Present to Hangout');
// 	await page.screenshot({ path: 'out/05.png' });
// 	// await browser.close();
// };

// run().catch(err => {
// 	console.log(err);
// 	process.exit();
// });