var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://127.0.0.1:4000');
driver.findElement(By.name('itemInput')).sendKeys('e2e数据测试');
driver.findElement(By.id('send_data')).click();
//driver.quit();