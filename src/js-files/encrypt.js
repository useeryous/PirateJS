import crypto, { Cipher } from 'node:crypto';

let message = 'Hello World';
let key = giveKeyToken();
getKey(key);
encrypt(message, key);

console.log('Encrypted message:', message);
console.log('Key:', key);

decrypt(message, key);

console.log('Decrypted message:', message);

function encrypt(message, key) {
    const Cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(key));
    message = Cipher.update(message, 'utf8', 'hex');
    message += Cipher.final('hex');

    return message;
}

function giveKeyToken() {
    let unkey = crypto.randomBytes(32).toString('hex');

    return unkey;
}

function getKey(unkey) {
    unkey = unkey.toString();
    let key = ('');
    for (let i = 0; i < unkey.length; i += 2) {
        key += String.fromCharCode(parseInt(unkey.substr(i, 2), 16));
    }
    return key;
}

function decrypt(message, key) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(key));
    message = decipher.update(message, 'hex', 'utf8');
    message += decipher.final('utf8');
}