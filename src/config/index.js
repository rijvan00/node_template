const env = process.env.NODE_ENV;
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}
const config = require(`./${env}`);
module.exports = config;
