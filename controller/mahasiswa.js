
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

exports.getOneMhs = (req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM mahasiswa WHERE id=${id}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        if (result.length > 0) {
            res.status(200).json({
                status: true,
                message: "get selectted mahasiswa",
                data: result
            })
        }else{
            res.status(200).json({
                status: false,
                message: "no data mahasiswa",
                data: []
            })
        }
    })
}