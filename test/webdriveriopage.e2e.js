const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    });

    await browser.url('https://www.google.com');

    const searchInput = await browser.$('input[name="q"]');
    await searchInput.setValue('Webdriver.io');

    const searchButton = await browser.$('button[name="btnK"]');
    await searchButton.click();

    const firstResult = await browser.$('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a');
    const firstResultText = await firstResult.getText();

    assert.strictEqual(firstResultText, 'Webdriver.io - WebDriver bindings for Node.js');

    await browser.deleteSession();
})().catch((e) => console.error(e));