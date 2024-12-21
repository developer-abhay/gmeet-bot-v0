// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// const AnonymizeUAPlugin = require("puppeteer-extra-plugin-anonymize-ua");
// const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");

// const run = async () => {
// 	const stealth = StealthPlugin()
// 	stealth.enabledEvasions.delete('iframe.contentWindow')
// 	stealth.enabledEvasions.delete('media.codecs')
// 	puppeteer.use(stealth)
// 	puppeteer.use(AnonymizeUAPlugin());
// 	puppeteer.use(
// 		AdblockerPlugin({
// 			blockTrackers: true,
// 		})
// 	);

// 	const browser = await puppeteer.launch({
// 		headless: false,
// 		defaultViewport: null,
// 		ignoreDefaultArgs: ["--disable-extensions"],
// 		dumpio: true,
// 		args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
// 		// executablePath: "/Applications/Chromium.app/Contents/MacOS/Chromium",
// 	});

// 	const page = await browser.newPage();

// 	// OpenAI Stuff

// 	await page.goto("https://platform.openai.com/usage", {
// 		waitUntil: "networkidle2",
// 	});

// 	await page.waitForSelector("button");
// 	await page.click("button")[0];
// 	await page.waitForSelector(".social-btn");

// 	try {
// 		await page.evaluate(() => {
// 			const elements = document.querySelectorAll(".social-btn");
// 			elements.forEach((element) => {
// 				if (element.innerHTML.includes("Google")) {
// 					// element.click();
// 				}
// 			});
// 		});
// 	} catch (error) {
// 		await page.click("form[data-provider] button")[1];
// 	}

// 	// Google Stuff

// 	await page.waitForNavigation();

// 	await page.waitForSelector('input[type="email"]');

// 	await page.type('input[type="email"]', "test@test.com", { delay: 30 });

// 	await page.keyboard.press("Enter");

// 	page
// 		.waitForSelector('input[type="password"]', { visible: true })
// 		.then(async () => {
// 			await page.type('input[type="password"]', "test");
// 			await page.keyboard.press("Enter");
// 		});
// }

// run()