
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('mysql_express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("koneksi database berhasil")
} catch (error) {
    console.log(error.message);
}

module.exports = {sequelize, DataTypes}