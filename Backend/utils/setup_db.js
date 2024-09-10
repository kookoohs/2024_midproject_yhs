const mysql = require('mysql2');
let mysqldb;

const setup = async () => {
    if (mysqldb) {
        return { mysqldb };
    }

    try {
        mysqldb = mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });
        mysqldb.connect();
        // console.log("MySQL 접속 성공.");

        return { mysqldb };
    } catch (err) {
        console.error("DB 접속 실패.", err);
        throw err;
    }
};


module.exports = { setup };