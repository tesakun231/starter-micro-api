var http = require('http');
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo man!');
    res.end();
}).listen(process.env.PORT || 3000);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
