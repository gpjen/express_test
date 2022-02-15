const mysql = require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mysql_express"
})

con.connect( err => {
    if (err) throw err

    console.log("koneksi database berhasil");
})

module.exports = con