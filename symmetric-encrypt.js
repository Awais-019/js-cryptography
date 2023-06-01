const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

const message = "I am a message";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

const encrypted = cipher.update(message, "utf8", "hex") + cipher.final("hex");
console.log(encrypted);

const decipher = createDecipheriv("aes256", key, iv);

const decrypted =
  decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");

console.log(decrypted);
