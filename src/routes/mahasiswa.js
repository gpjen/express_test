const db = require("../controllers/mysql")

exports.getMhss = (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).json({
            status: "get data mahasiswa's",
            data: result
        })
    })
}

exports.getMhs = (req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM mahasiswa WHERE id="${id}"`

    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(201).json({
            status: "get data mahasiswa",
            data: result
        })
    })
}

exports.addMhs = (req, res) => {
    const {nim, nama, jurusan} = req.body

    let sql = `SELECT * FROM mahasiswa WHERE nim=${nim}`
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.status(200).json({
                status : `Nim ganda`
            })
        }else{
            sql = `INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (${nim}, '${nama}', '${jurusan}')`
        
            db.query(sql, (err, result) => {
                if (err) throw err
                
                res.status(200).json({
                    status : `${nama} ditambahkan`
                })
            })
        }
    })
}

exports.delMhs = (req, res) => {
    const {id} = req.params
    const sql = `DELETE FROM mahasiswa WHERE id=${id}`

    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).json({
            status: "data dihapus"
        })
    })
}