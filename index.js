var http = require('http');
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('' +
`<html>
  <head></head>
  <body>
    Data render at browser page
    <script>
      /********** Browser start ********/
      /* This code is run in the browser */
      console.log('print in browser console ');
      /********** Browser end ********/
    </script>
  </body>
</html>`);
    console.log('print in Node.js engine');   
    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
}).listen(3000);
