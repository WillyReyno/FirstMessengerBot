var http = require('http');

var server = http.createServer(function(request, response) {
	response.setHeader("content-type", "text/html");
	response.write('<h3>Bonjour</h3>');
	response.end();
});

server.listen(3000);

console.log('serveur démarré !');