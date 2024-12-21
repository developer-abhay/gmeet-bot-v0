const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const AnonymizeUAPlugin = require("puppeteer-extra-plugin-anonymize-ua");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
const path = require("path");

puppeteer.use(StealthPlugin());
puppeteer.use(AnonymizeUAPlugin());
puppeteer.use(
	AdblockerPlugin({
		blockTrackers: true,
	})
);
const crawler = async () => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		// ignoreDefaultArgs: ["--disable-extensions"],
		args: [
			"--start-maximized",
			"--no-sandbox",
			"--disable-setuid-sandbox",
			"--user-data-dir=${path.join(__dirname, 'dev-user-data')}",
		],
	});
	const page = await browser.newPage();
	// let login_link = "https://google.com/";
	// await page.goto(login_link);
	await page.goto('https://accounts.google.com/signin/v2/identifier', { waitUntil: 'networkidle2' });

	await page.waitForSelector('#identifierId');
	await page.click('#identifierId');
	await page.keyboard.type('abhaysharma.developer@gmail.com');
	console.info(`Entered username, clicking Next.`);
	await page.keyboard.press('Enter');

	await new Promise((r) => setTimeout(r, 10000))
};

crawler()

// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// const AnonymizeUAPlugin = require("puppeteer-extra-plugin-anonymize-ua");
// const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
// const path = require("path");

// // const USERNAME_SELECTOR = '#identifierId';
// // const USERNAME_NEXT_SELECTOR = '#identifierNext';
// // const PASSWORD_SELECTOR = "#password input[type='password']";
// // const PASSWORD_NEXT_SELECTOR = '#passwordNext';

// // puppeteer.use(StealthPlugin());
// // puppeteer.use(AnonymizeUAPlugin());
// // puppeteer.use(
// // 	AdblockerPlugin({
// // 		blockTrackers: true,
// // 	})
// // );
// const crawler = async () => {
// 	const browser = await puppeteer.launch({
// 		headless: false,
// 		defaultViewport: null,
// 		ignoreDefaultArgs: ["--disable-extensions"],
// 		args: [
// 			"--start-maximized",
// 			"--no-sandbox",
// 			"--disable-setuid-sandbox",
// 			"--user-data-dir=${path.join(__dirname, 'dev-user-data')}",
// 		],
// 	});
// 	const page = await browser.newPage();
// 	let login_link = "https://google.com/";
// 	await page.goto(login_link);
// 	// await page.goto('https://accounts.google.com', { waitUntil: 'networkidle2' });

// 	// <a class="gb_Ta gb_yd gb_pd gb_gd" aria-label="Sign in" href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;continue=https://www.google.com/&amp;ec=GAZAmgQ" target="_top"><span class="gb_Td">Sign in</span></a>
// <a aria-label="Sign in (opens a new tab)" class="M6CB1c yZqNl" href="https://www.google.com/url?q=https://accounts.google.com/signin/v2/identifier%3Fec%3Dfutura_hpp_co_si_001_p%26continue%3Dhttps%253A%252F%252Fwww.google.com%252F%253Fptid%253D19027681%2526ptt%253D8%2526fpts%253D0&amp;source=hpp&amp;id=19037050&amp;ct=7&amp;usg=AOvVaw17nhtj2bG975y5iQrI1sgf" jsname="tf37qf" jslog="71122; track:click;" target="_blank" data-dismiss="a">Sign in</a>

// 	// await page.waitForSelector(USERNAME_SELECTOR);
// 	// await page.click(USERNAME_SELECTOR);
// 	// await page.keyboard.type('abhaymaster350@gmail.com');
// 	// 	// await page.screenshot({path: 'out/01.png'});
// 	// 	console.info(`Entered username, clicking Next.`);
// 	// await page.click(USERNAME_NEXT_SELECTOR);

// 	// 	await page.waitForSelector(PASSWORD_SELECTOR);
// 	// 	await page.waitForFunction(await new Promise((resolve, reject) => setTimeout(resolve, 1000)));
// 	// 	await page.click(PASSWORD_SELECTOR);
// 	// 	await page.keyboard.type('warmaster350..@');
// 	// 	// await page.screenshot({path: 'out/02.png'});
// };

// crawler()
