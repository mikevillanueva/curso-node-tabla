const argv = require ('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplcar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el número hasta donde queires la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check ((argv, options) => {
                    if (isNaN (argv.b)) {
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                    console.log('yargs', argv);
                })
                .argv;

module.exports = argv;