/*
	Curso NodeJS
	Codigo: Oscar Villafuerte

	- Los modulos se llaman mediante el metodo require
	- la funcion que maneja el metodo createServer tiene 
		2 parametros el de la solicitud y el de respuesta
	- Este metodo devuelve un objeto, al cual se le
		puede asignar un puerto para que escuche peticiones.
*/

var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("Peticion exitosa!!!");
	respuesta.end("Hola Mundo!!");
}

var server = http.createServer(manejador);

server.listen(8080);