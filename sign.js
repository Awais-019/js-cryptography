const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const message = "I am a message";

const sign = createSign("RSA-SHA256");

sign.update(message);

const signature = sign.sign(privateKey, "hex");

const verify = createVerify("RSA-SHA256");

verify.update(message);

const isCorrect = verify.verify(publicKey, signature, "hex");

console.log(isCorrect);
