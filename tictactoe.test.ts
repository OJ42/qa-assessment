import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});
//First added test
test('I have a game board', async () => {

    let button = await (await driver).findElement(By.id('game-board'));
    await button.click();
    
});
//Second added test
test('Top left cell click', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    
});
//third added test
test('Middle right cell click', async () => {

    let button = await (await driver).findElement(By.id('cell-5'));
    await button.click();
    
});
