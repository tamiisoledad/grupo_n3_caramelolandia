require('dotenv').config();
const mysql2 = require('mysql2');

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    "dialectModule" : mysql2
  },
  "test": {
    username: "root",
    password: "hidekel21",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  "production": {
    username: "root",
    password: "hidekel21",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
