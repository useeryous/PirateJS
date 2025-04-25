const { 
    generateSalt,
    generateIV,
    generatePassword,
    generateKey,
    encrypt,
    decrypt,
    encryptKeys
} = require('./encrypt');

function setUpSecureServer() {
    const https = require('node:https');
    const dns = require('node:dns');
    const path = require('node:path');
    const url = require('node:url');
    const os = require('node:os');
    const fs = require('node:fs');

    

}