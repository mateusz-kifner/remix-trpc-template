const path = require("path");

const remixServerPath = path.join(__dirname, "build", "server", "index.js");

process.argv.push(remixServerPath);
process.env.PORT = "80";
process.env.NODE_ENV = "production";
process.env.PWD = __dirname;

require("./node_modules/@remix-run/serve/dist/cli.js");
