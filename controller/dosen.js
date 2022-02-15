
const db = require('../databases/mysql')

exports.getDosen = (req, res) => {
    const sql = `SELECT * FROM dosen`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        res.status(200).json({
            status: true,
            message: "get data dosens",
            data: result
        })
    })
}