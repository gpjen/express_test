const express = require("express")
const router = express.Router()

const {
    getMhss,
    getMhs,
    addMhs,
    delMhs
} = require("./mahasiswa")

router.get('/mahasiswa', getMhss)
router.get('/mahasiswa/:id', getMhs)
router.post('/mahasiswa', addMhs)
router.delete('/mahasiswa/:id', delMhs)


module.exports = router