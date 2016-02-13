/*
	Curso NodeJS
	Oscar Villafuerte
	Crear render de vistas

	- Lo que devuelve la respuesta de readFile es un archivo
		en binario, para trabajar con el es mejor pasarlo a string
	- El metodo nativo de JS eval hace que una cadena de texto
		sea tomada en cuenta como codigo JS
	- El metodo .match sirve para utilizar expresiones regulares


*/

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
	fs.readFile("./index.html", function(err, html){
		var parseHtml = html.toString();

		var variables = parseHtml.match(/[^\{\}]+(?=\})/g);

		var nombre = "Oscar";

		for (var i = 0; i < variables.length; i++) {
			var value = eval(variables[i]);
			parseHtml = parseHtml.replace("{"+ variables[i] +"}", value);
		};

		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write(parseHtml);
		res.end();

	});
}).listen(8080);