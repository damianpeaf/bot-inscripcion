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

    // Espera a que logee
    await page.waitForNavigation();

    // Se dirige a asignaciones
    await page.goto('https://asignacion.ingenieria.usac.edu.gt/vacaciones/asignacion');

    // Espera a que cargue el form
    await page.waitForSelector('#formulario-asignacion');

    // Modifica el input
    // var inputDeCursos = document.querySelector("form[name='second'] input[name='secondText']");
    // ver que ondas hacer aca 


    // [{ "codigo": codigo, "seccion": seccion, "seccionLaboratorio": seccionLab }]


    // Info del input

    // Para un clase
    // [{"codigo":"0118","seccion":"A","seccionLaboratorio":"NULL"}]
    // Para dos clases
    // [{"codigo":"0009","seccion":"","seccionLaboratorio":"NULL"},{"codigo":"0118","seccion":"A","seccionLaboratorio":"NULL"}]

    // Cierra el navegador
    // await browser.close();
})()