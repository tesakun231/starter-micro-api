const exec = require('child_process').exec, child;
const myShellScript = exec('lscpu');
myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});

var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!'+os.cpus());
    res.end();
}).listen(process.env.PORT || 3000);
