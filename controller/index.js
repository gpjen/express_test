const express = require('express')
const router = express.Router()


//mahasiswa
const {
    getMhs,
    getOneMhs,
    addMhs,
    updateMhs,
    deleteMhs
} = require('../models/mahasiswa')

router.get('/mahasiswa', getMhs)
router.get('/mahasiswa/:id', getOneMhs)
router.post('/mahasiswa', addMhs)
router.put('/mahasiswa', updateMhs)
router.delete('/mahasiswa/:id', deleteMhs)


//dosen
const {
    getDosen,
    getOneDosen,
    addDosen,
    updateDosen,
    delDosen
    
} = require('../models/dosen')

router.get('/dosen', getDosen)
router.get('/dosen/:id', getOneDosen)
router.post('/dosen', addDosen)
router.put('/dosen', updateDosen)
router.delete('/dosen/:id', delDosen)


module.exports = router