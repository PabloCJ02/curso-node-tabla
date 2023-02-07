const { crearArchivo, crearArchivos } = require("./helpers/multiplicar");
const argv = require('./config/yargs');


console.clear();

// crearArchivo(base)
//     .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
//     .catch((err) => console.log(err));

crearArchivos(argv.b, argv.l, argv.h)
.then((nombreArchivo) => console.log(nombreArchivo, "creado"))
.catch((err) => console.log(err));
