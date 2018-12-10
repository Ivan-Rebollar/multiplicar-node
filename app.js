//requireds

//const fs = require('fs');

/*const fs = require('express')archivos que no vienen por default en node;
const fs = require('./fs');archivos que nosotros escribimos*/

//let base = 7;

//let data = '';
 
 /*for(let i = 1; i <= 10; i++){
 	let mult = base * i;
 	console.log(mult);
 }*/
//otra forma

/*for (let i = 1; i <= 10; i++) {
	data += `${base} * ${i} = ${base * i}\n`; //+= es para concatenar
}
 
 //para gauardar un el resultado en un archivo.
 fs.writeFile(`tablas/tabla-${base}.txt`,data,(err) => {
 	if (err) throw err;
 	console.log(`El archivo tabla-${base}.txt ha sido creado`);
 });*/

/* crearArchivo(base)
 .then(archivo => console.log(`Archivo creado: ${archivo}`));*/

 //////////////
 //Se todo el codigo comentado se pasa al archivo multiplicar.js para 
 //realizar la logica desde otro archivo y mandarla a esta



//---------rehaciendo el codigo parta que funciones el export
 
const argv = require('./config/yargs').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch(comando) {
	case 'listar':
		listarTabla( argv.base, argv.limite);
		//console.log('Listar'); solo imprime en consola que entro en este case
	break;
	
	case 'crear':
		crearArchivo(argv.base, argv.limite)
 			.then(archivo => console.log(`Archivo creado: ${archivo}`))
 			.catch(e => console.log(e));
		//console.log('crear');
	break;

	default: 
		console.log('Comando no reconocido');	
}

//console.log(argv);se imprime en consola los argumentos que se tienen en argv
//let base = '5';
// console.log(process.argv);
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1] //split sirve para cambiar de un string a un arreglo y separa
//let argv2 = process.argv;
//console.log(argv.base);
//console.log('Limite', argv.limite);

 //console.log(multiplicar); --> regresa {crearArchivo: [Function: crearArchivo]}
 //lo que quiere decir esto es que multiplicar tiene una fincion que crea un archivo



 