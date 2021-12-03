// para correr node .\index.js y cambiar los datos del datos-cursos.json

const puppeteer = require('puppeteer');
let datosCursos = require('./datos-cursos.json');

(async () => {

    // Encerrar esto en un while(true) con try y catch? https://stackoverflow.com/questions/55236975/how-to-reload-page-in-puppeteer

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://proxy.ingenieria.usac.edu.gt/autenticacion/XUI/#login/&goto=https://dashboardacademico.ingenieria.usac.edu.gt/login');
    // const title = await page.title();
    // const url = await page.url();
    // console.log(title, url)

    // Espera a que cargue
    await page.waitForSelector('#loginButton_0');

    // Introduce datos
    await page.type('#idToken1', datosCursos.user);
    await page.type('#idToken2', datosCursos.password);

    // Presiona el boton
    await page.click('#loginButton_0');

    // Espera a que logee
    await page.waitForNavigation();

    // Se dirige a asignaciones
    await page.goto('https://asignacion.ingenieria.usac.edu.gt/vacaciones/asignacion');

    // Espera a que cargue el form
    await page.waitForSelector('#formulario-asignacion');

    // Modifica el input
    await page.evaluate((datos) => {
        datosValue = JSON.stringify(datos);
        document.querySelector("#formulario-asignacion input[name='cursos']").value = datosValue;
    }, datosCursos.courses);

    // Da click al boton de asignar
    await page.click('.mdi-account-plus');

    // Da click al boton de asignar definitavemente
    // await page.click('.mdi-content-save-all');

    // Cierra el navegador
    // await browser.close();
})()