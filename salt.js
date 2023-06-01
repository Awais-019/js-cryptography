const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

let users = [];

function signup(email, password) {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64);

  const user = { email, password: `${salt}:${hashedPassword}` };

  users.push(user);

  return user;
}

function login(email, password) {
  const users = users.find((user) => user.email === email);

  const [salt, hashedPassword] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(hashedBuffer, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    console.log("Logged in!");
  } else {
    console.log("Wrong password!");
  }
}
