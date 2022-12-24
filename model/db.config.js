// TODO: create a '.env' file and set the configuration
module.exports = {
    host: process.env.host, // sql endpoint
    user: process.env.user, // mysql username
    password: process.env.password, // mysql password
    port: process.env.dbport, // port
    database: process.env.database, // database name
}
// TODO: Change the table name
const tableName = "db_demo";

// db.js
var mysql = require('mysql2')
var dbConfig = require('./db.config');


// for 'CRUD'
function executeSQL(sql, params, callback) {

    //create connection
    var connection = mysql.createConnection(dbConfig)

    connection.connect(function (err) {
        if (err) {
            throw err
        }

        // execute the SQL Statement
        connection.query(sql, params, function (err, results, fields) {
            if (err) {
                throw err
            }

            // the first callback is to check if there's a callback pamarater
            // the second callback returns the result.
            // result == JSON.parse(JSON.stringify(results)) 
            callback && callback(results)

            //close the connection
            connection.end(function (err) {
                if (err) {
                    console.log('query ending process failed')
                    throw err
                }
            })

        })
    })
}


// TODO: Please create 'insert', 'update' and 'delete' function
module.exports = {

    select: function (params, callback) {
        let sql = "";
        if (params.length != 0) {
            sql = `SELECT * from ${tableName} WHERE id=?`;
        } else {
            sql = `SELECT * from ${tableName}`;
        }
        executeSQL(sql, params, callback);
    },

    insert: function (params, callback) {
    },

    update: function (params, callback) {
    },

    delete: function (params, callback) {
    },
}



