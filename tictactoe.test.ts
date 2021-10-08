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

    let gameBoard = await (await driver).findElement(By.id('game-board'));
    await gameBoard.click();
    
});
//Second added test
test('Top left cell click', async () => {

    let topLeft = await (await driver).findElement(By.id('cell-0'));
    await topLeft.click();
    
});
//third added test
test('Middle right cell click', async () => {

    let middleRight = await (await driver).findElement(By.id('cell-5'));
    await middleRight.click();
    
});
