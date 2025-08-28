export async function tearDown(page, browser) {
    await page.close();
    await browser.close();
};

export default {
    tearDown
};

