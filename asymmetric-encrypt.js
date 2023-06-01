const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const message = "I am a message";

const encrypted = publicEncrypt(publicKey, Buffer.from(message));

console.log(encrypted.toString("hex"));

const decrypted = privateDecrypt(privateKey, encrypted);

console.log(decrypted.toString());
