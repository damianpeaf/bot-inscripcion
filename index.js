// para correr node .\index.js usuario contraseña

const puppeteer = require('puppeteer');

(async () => {
    const args = await process.argv;
    // console.log(args);
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://proxy.ingenieria.usac.edu.gt/autenticacion/XUI/#login/&goto=https://dashboardacademico.ingenieria.usac.edu.gt/login');
    // const title = await page.title();
    // const url = await page.url();
    // console.log(title, url)

    // Espera a que cargue
    await page.waitForSelector('#loginButton_0');

    // Introduce datos
    await page.type('#idToken1', args[2]);
    await page.type('#idToken2', args[3]);

    // Presiona el boton
    await page.click('#loginButton_0');


    // await browser.close();
})()