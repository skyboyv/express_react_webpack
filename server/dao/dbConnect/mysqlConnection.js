const mysql = require('mysql');
const config = require('../dbConfig/mysqlConfig');
const {host, user, password, database} = config;


const pool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
});

// const getConnection = (sql,param)=> {
//     return new Promise((resolve, reject) => {
//         pool.getConnection(function (err, connect) {
//             connect.query(sql,param, function (err, rows) {
//                 if (err) {
//                     reject(err);
//                 }
//                 resolve(rows);
//                 connect.release();
//             })
//
//         })
//     })
//
// }

const getConnection = function (paramSql, paramWhere, callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err)
            return
        }
        connection.query(paramSql, paramWhere, callback)
        connection.release()
    })
}

module.exports = getConnection;