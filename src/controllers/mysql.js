const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mysql_express"
})

con.connect(err => {
    if (err) throw err

    console.log("berhasil koneksi database");
})

module.exports = con