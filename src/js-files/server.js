const { 
    generateSalt,
    generateIV,
    generatePassword,
    generateKey,
    encrypt,
    decrypt,
    encryptKeys
} = require('./encrypt');

const { frontend } = require('./frontend.js')

function setUpSecureServer() {
    const https = require('node:https');
    const dns = require('node:dns');
    const path = require('node:path');
    const url = require('node:url');
    const os = require('node:os');
    const fs = require('node:fs');

    const server = https.createServer({
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
}