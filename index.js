var http = require('http');

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
}).listen(3000);
