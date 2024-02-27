const fs = require('fs');

const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        
    let salida = ''; 
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida +=` ${base} X ${i} = ${base * i}\n`;
        consola +=` ${colors.red(base)} ${'X'.green} ${colors.yellow(i)} ${'='.green} ${colors.cyan(base * i)}\n`;
    }

    if (listar){
        
    console.log('===================='.green);
    console.log('   Tabla del: '.green, colors.blue(base));
    console.log('===================='.green);

        console.log(consola);
    }


    /*con writeFile
    fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
        if(err) throw err;

        console.log(`tabla-${base}.txt creado`);
    })*/

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
    
    /*return new Promise ((resolve, reject) =>{
        console.log('====================');
        console.log(`   Tabla del: ${base}`);
        console.log('====================');

        let salida = '';

        for (let i = 1; i < 11; i++) {
            salida +=` ${base} * ${i} = ${base * i}\n`;
        }

        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt creado`);
    })*/
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}