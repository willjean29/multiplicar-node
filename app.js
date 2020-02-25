const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear','Genera un archivo con la tabla multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
console.log(argv);
let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then((archivo) => console.log(`Archivo creado : ${archivo}`))
        .catch((error) => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

