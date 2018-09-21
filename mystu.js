const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:/Users/HP/chro/chrome-win/chrome.exe',
        headless:false,
        ignoreHTTPSErrors:true
    });
    const page = await browser.newPage();
    await page.goto('https://sso.stu.edu.cn/login?service=https%3A%2F%2Fmy.stu.edu.cn%2Fv3%2F');
    console.time();
    const url1 = (page.url()).match(/(\S*)login/)[1];
    await page.type('#username','17myzhang6',{delay:50});
    await page.type('#password','xp214971',{delay:50});
    await page.click('.login-button');
    await page.waitForNavigation({
        waitUntil:'load'
    });
    const url2 = page.url();
    if(url2.indexOf(url1)!= -1){
        console.log('登陆失败');
    }else{
        console.log('登陆成功');
    }
    console.timeEnd();
    return await page.content();
    browser.close();
})();
