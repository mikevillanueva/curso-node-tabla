const { crearArchivo } = require('./helpers/multiplicar');

require('colors');
//otra forma de usar colors
//const colors = require('colors');

const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.b);


//const [,,arg3 = 'base=5'] = process.argv;
//const [ , base = 5 ] = arg3.split('=')
//console.log(base);

//const base = 5;

crearArchivo(argv.b, argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.magenta))
    .catch( err => console.log(err));