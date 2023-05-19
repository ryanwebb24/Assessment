const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test('should add a duo when the add duo button is pushed', async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.className("bot-btn")).click()
    child = await driver.findElements(By.xpath('//*[@id="player-duo"][*]'))
    expect(child.length).toBeGreaterThan(0)
  });
  test('should remove a bot when you click remove bot', async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.className("bot-btn")).click()
    await driver.findElement(By.xpath('//button[text()="Remove from Duo"]')).click()
    child = await driver.findElements(By.xpath('//*[@id="player-duo"][*]'))
    expect(child.length).toBe(0)
  });
});