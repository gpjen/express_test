const db = require('../databses/mysql')


exports.getDosens = (req, res) =>{
    const sql = "SELECT * FROM dosen"
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).json({
            status: "get dosens",
            data: result
        })
    })
}

exports.getDosen = (req, res) =>{
    const {nid} = req.params
    const sql = `SELECT * FROM dosen WHERE nid=${nid}`
    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).json({
            status: "get dosen",
            data: result
        })
    })
}

exports.addDosen = (req, res) => {
    const { nid, nama, gelar, gaji_pokok, tunjangan } = req.body

    const sql = `SELECT * FROM dosen WHERE nid =${nid}`
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(sql)
        if (result.length == 0) {
            const sql = `INSERT INTO dosen (nid, nama, gelar, gaji_pokok, tunjangan) VALUES (${nid}, '${nama}', '${gelar}', ${gaji_pokok}, ${tunjangan})`
            db.query(sql)
            res.status(200).json({
                status: "data telah ditambahkan"
            })
        } else {
            res.status(400).json({
                status: "nid tidak boleh sama"
            })
        }
    })
}

exports.updateDosen = (req, res) => {
    const {nid, nama, gelar, gaji_pokok, tunjangan} = req.body
    const sql = `UPDATE dosen Set nama='${nama}', gelar='${gelar}', gaji_pokok=${gaji_pokok}, tunjangan=${tunjangan} WHERE nid=${nid}`

    db.query(sql, (err, result) => {
        if (err) throw err

        res.status(200).json({
            status: "update data",
            message: result.message
        })
    })
}

exports.delDosen = (req, res) => {
    const {nid} = req.params

    const sql = `DELETE FROM dosen WHERE nid=${nid}`
    db.query(sql, (err) => {
        if (err) throw err

        res.status(200).json({
            status: "delete data"
        })
    })
}