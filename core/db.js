const mysql = require('mysql');

const dbCon =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'd-quizz'
});

dbCon.connect(function (err) {
    if(err) throw err;
    console.log("Database connection established");
})

module.exports = dbCon;