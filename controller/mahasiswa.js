
const db = require('../databases/mysql')

exports.getMhs = (req, res) => {
    const sql = "SELECT * FROM mahasiswa"

    db.query(sql, (error, result) => {
        if (error) throw error.message

        res.status(200).json({
            status: true,
            message: "get method mahasiswas",
            data: result
        })
    })
}