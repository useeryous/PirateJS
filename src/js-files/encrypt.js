const crypto = require('node:crypto');

function generateSalt() {
    const salt = crypto.randomBytes(16).toString('hex');
    return salt;
}

function generateIV() {
    const iv = crypto.randomBytes(16).toString('hex');
    return iv;
}

function generatePassword() {
    const password = crypto.randomBytes(32).toString('hex');
    return password;
}

function generateKey(password, salt) {
    const key = crypto.scryptSync(password, salt, 32);
    return key;
}

function encrypt(text, password) {
    const iv = generateIV();
    const salt = generateSalt();
    const key = crypto.scryptSync(password, salt, 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        salt: salt,
        encryptedData: encrypted
    };
}

function decrypt(encryptedData, password, iv, salt) {
    const key = crypto.scryptSync(password, salt, 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

function encryptKeys(key, iv, saly, algorithm) {
    const encryptedKey = encrypt(key, password);
    const encryptedIV = encrypt(iv, password);
    const encryptedSalt = encrypt(salt, password);
    const encryptedAlgorithm = encrypt(algorithm, password);

    return {
        key: encryptedKey,
        iv: encryptedIV,
        salt: encryptedSalt,
        algorithm: encryptedAlgorithm
    };
}

module.exports = {
    generateSalt,
    generateIV,
    generatePassword,
    generateKey,
    encrypt,
    decrypt,
    encryptKeys
};