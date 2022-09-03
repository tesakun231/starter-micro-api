var os = require('os');
var http = require('http');
http.createServer(function (req, res) {
    console.log(os.cpus());
    console.log(os.totalmem());
    console.log(os.freemem())
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!'+os.cpus());
    res.end();
}).listen(process.env.PORT || 3000);
