/** Database config for database. */


const { Client } = require("pg");
const {DB_URI} = require("./config");

let db = new Client({
  user: "client",
  password: "password",
  host: "localhost",
  port: 5432,
  database: DB_URI
});

db.connect();


module.exports = db;
