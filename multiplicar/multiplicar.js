const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite = 10) => {
	console.log('==================='.green);
	console.log(`tabla de ${base}`.green);
	console.log('==================='.green);
	for(let i = 1; i <= limite; i++){
		console.log(`${base} * ${i} = ${base * i}`);
	}
}



let crearArchivo = (base, limite = 10) =>{
	return new Promise((resolve,reject) => {

		if(!Number(base)){
			reject(`El valor introducido ${base} no es un numero`);
			return;
		}

		let data = '';
		 
		for (let i = 1; i <=limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`; //+= es para concatenar
		}
		 
		 //para guardar el resultado en un archivo.
		 fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data,(err) => {
		 	if (err) 
		 		reject (err);
		 	else
		 		resolve (`tabla-${base}-al-${limite}.txt`.green);
		 });
	});
}

//forma 1 de exportar un archivo 
module.exports = {
	crearArchivo,
	listarTabla
}
// forma dos seria en lugar de definir la funcion con un let
//hacerlo como module.export.<NombreDeLaFuncion>
//la ventaja de hacerlo de la promera forma es que si se tiene mas de 1 
//funcion se pueden exportar dentro de 1 sola.