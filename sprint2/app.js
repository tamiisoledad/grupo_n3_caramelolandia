// Usamos una `const multi-line` para tener una seccion para cargar plugins al script.
const
    express = require('express'),
    app = express(),
    path = require('path'),
    port = 3030 // Este sera el puerto que usaremos en nuestro `http://localhost:`
;

// Se establece la carpeta donde se buscaran los ficheros de personalización.
app.use(express.static('public'));

// En `direction` almacenamos la funcion `sendFile`.
const direction = (x) => (req,res) => res.sendFile(path.join(__dirname, 'views', x));

// Usamamos la funcion `get` para pesonalizar el archivo que se visualizara con `direction`.
app.get('/', direction('index.html'));

// Registramos las paginas pricipales con el nombre del archivo en `page`
const page = ['register','login','contact','productDetail','productCart'];

// En una Var. guardamos la longitud de `page` y le restamos `1`.
// De forma la longitud coincidira con la posicion del elemento para colocarla en un blucle. 
for (let i = page.length - 1; i >= 0; i--) {

    // Ahora de a cuerdo al valor de `i`, se registrara una pagina.
    app.get(`/${page[i]}`, direction(`${page[i]}.html`));

    // En cada interaccion `i` valdra `1` menos.
    // Una vez que `i` llega a `0`, se rompe el bucle.
}

// Iniciar servidor con un pequeño ayuda memoria en la terminal.
app.listen(port,() => console.log(`\nServer running in\n\n\thttp://localhost:${port}\n`))