
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

exports.addMhs = (req, res) => {
    const {nim, nama, jurusan} = req.body

    const sql = `SELECT * FROM mahasiswa WHERE nim=${nim}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        if (result.length > 0) {
            res.status(200).json({
                status: false,
                message: "nim has other mahasiswa"
            })
        } else {
            const sql = `INSERT INTO mahasiswa (nim, nama, jurusan) VALUES('${nim}', '${nama}', '${jurusan}')`
            db.query(sql, (err, result) => {
                if (err) throw err.message
                res.status(200).json({
                    status: false,
                    message: "add data mahasiswa",
                    data: result
                })
            })

        }
    })
}


exports.updateMhs = (req, res) => {
    const {nim, nama, jurusan} = req.body
    const sql = `UPDATE mahasiswa SET nim=${nim}, nama='${nama}', jurusan='${jurusan}' WHERE nim=${nim}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        res.status(200).json({
            status: true,
            message: result.message,
            data: result
        })
    })
}


exports.deleteMhs = (req, res) => {
    const {id} = req.params
    const sql = `DELETE FROM mahasiswa WHERE id=${id}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        res.status(200).json({
            message: result.message,
            data: result
        })
    })
}









