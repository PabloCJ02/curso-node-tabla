const fs = require("fs");
const colors = require('colors');


const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log("=======================");
        console.log("  Tabla del:", base);
        console.log("=======================");

        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida)

        const data = `tabla-${base}.txt`;
        
        (data)
        ? resolve(data)
        : reject('Disculpa algo salio mal')
    });
};

const crearArchivos = async(base = 5, l = false, h = 10) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;

        }
    
        if(l){
            console.log("=======================".red);
            console.log("  Tabla del:".cyan, base);
            console.log("=======================".red);
        
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo,
    crearArchivos
};
