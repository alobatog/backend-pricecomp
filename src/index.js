import app from './app';

const puppeteer = require("puppeteer");
const cron = require("node-cron");
const PORT = 5000;

// Scrapper se corre dos veces al día
cron.schedule("* * */2 * *", () => {
    console.log(`probando ${contador}`);

});


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    await browser.close();
  })();
  
app.listen(PORT, () => {
    console.log(`Funcionando en port ${PORT}`);
})