const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

//here are some components used for the webpage




//res means response
//req means request
//err means error
//data means data

const server = http.createServer((req, res) => {
    const url = req.url === '/' ? '/src/index.html' : req.url;
    const filePath = path.join(__dirname, url);
      
    fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('File Not Found');
        } else {
          const extname = path.extname(filePath);
          let contentType = 'text/html';

          switch (extname) {
            case '.js':
              contentType = 'text/javascript';
              break;
            case '.css':
              contentType = 'text/css';
              break;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});