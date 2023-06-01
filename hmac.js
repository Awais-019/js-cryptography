const { createHmac } = require("crypto");

const key = "supersecretkey";
const message = "I am a message";

const hmac = createHmac("sha256", key).update(message).digest("hex");

console.log(hmac);

const key2 = "supersecretkey2";

const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac2);
