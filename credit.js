const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:/Users/HP/chro/chrome-win/chrome.exe',
        headless:false,
        ignoreHTTPSErrors:true
    });
    const page = await browser.newPage();
    await page.goto('http://credit.stu.edu.cn/english/setlocale.aspx?locale=zh-cn');
    const url1=page.url();
    console.time();
    await page.type('#txtUserID','17myzhang6',{delay:50});
    await page.type('#txtUserPwd','xp214971',{delay:50});
    await page.click('#btnLogon');
    await page.waitForNavigation({
        waitUntil:'load'
    });
    if(page.url()==url1){
        console.log('登陆失败');
    }else{
        console.log('登陆成功');
    }
    console.timeEnd();
    browser.close();
})();
