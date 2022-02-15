const express = require('express')
const router = express.Router()


//mahasiswa
const {
    getMhs,
    getOneMhs,
    addMhs,
    updateMhs
} = require('./mahasiswa')

router.get('/mahasiswa', getMhs)
router.get('/mahasiswa/:id', getOneMhs)
router.post('/mahasiswa', addMhs)
router.put('/mahasiswa', updateMhs)


//dosen
const {
    getDosen
} = require('./dosen')

router.get('/dosen', getDosen)


module.exports = router