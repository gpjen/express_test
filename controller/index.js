const express = require('express')
const router = express.Router()


//mahasiswa
const {
    getMhs,
    getOneMhs
} = require('./mahasiswa')

router.get('/mahasiswa', getMhs)
router.get('/mahasiswa/:id', getOneMhs)


//dosen
const {
    getDosen
} = require('./dosen')

router.get('/dosen', getDosen)


module.exports = router