  
const mysql = require("mysql2/promise");
const { env } = require("process");
require('dotenv').config();

const Pool = mysql.createPool({
    timezone:"+09:00",
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    // database: "test",
    port: 3306
});

module.exports = Pool;