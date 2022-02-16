
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

exports.getOneDosen = (req, res) => {
    const {id} = req.params
    const sql = `SELECT * FROM dosen WHERE id=${id}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        res.status(200).json({
            status: true,
            message: "get data dosen",
            data: result
        })
    })
}

exports.addDosen = (req, res) => {
    const {nid, nama, gelar, gaji_pokok, tunjangan} = req.body
    const sql = `SELECT * FROM dosen WHERE nid=${nid}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        if (result.length > 0) {
            res.status(200).json({
                status: false,
                message: "nid has other dosen"
            })

        } else {
            const sql = `INSERT INTO dosen (nid, nama, gelar, gaji_pokok, tunjangan) VALUE (${nid}, '${nama}', '${gelar}', ${gaji_pokok}, ${tunjangan})`
            db.query(sql, (err, result) => {
                if (err) throw err.message

                res.status(200).json({
                    status: true,
                    message: "add data dosen",
                    data: result
                })
            })
        }
    })

}

exports.updateDosen = (req, res) => {
    const {nid, nama, gelar, gaji_pokok, tunjangan} = req.body
    const sql = `UPDATE dosen SET nama='${nama}', gelar='${gelar}', gaji_pokok=${gaji_pokok}, tunjangan=${tunjangan} WHERE nid=${nid}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        if (result.changedRows > 0) {
            res.status(200).json({
                status: true,
                message: "update data dosen"
            })
        } else {
            res.status(200).json({
                status: false,
                message: "no change update data dosen"
            })
        }

    })
}


exports.delDosen = (req, res) => {
    const {id} = req.params
    const sql = `DELETE FROM dosen WHERE id=${id}`
    db.query(sql, (err, result) => {
        if (err) throw err.message

        res.status(200).json({
            staus: true,
            message: "delete data dosen",
            data: result
        })
    })
}