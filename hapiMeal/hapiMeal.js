
var fs = require('fs');

var key = fs.readFileSync('/srv/Radium-LIS/private/www.radiumlis.com.key');
var cert = fs.readFileSync('/srv/Radium-LIS/private/radiumlis.com.crt_plus');

var options = {
	key: key,
	cert: cert
};

var https = require('https');

var main = function(req, res) {
	res.writeHead(200);
	res.end("hello");
}

https.createServer(options, main).listen(5100);

console.log('Sever running at https://radiumlis.com:5100/');
