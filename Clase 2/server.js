/*
	Curso NodeJS
	Codigo: Oscar Villafuerte
	Clase 2: Leer archivos y programacion asincrona

	- 

*/

var http = require("http");
var fs = require("fs");

//var html = fs.readFileSync("./index.html");

http.createServer(function (req, res) {
	fs.readFile("./index.html", function (err, html) {
		res.writeHeader(200, {"Content-Type": "text/html"});
		res.write(html);
		res.end();
	});
}).listen(8080);