const express = require('express')
const router = express.Router()

const {
    getDosens,
    getDosen,
    addDosen,
    updateDosen,
    delDosen
} = require('./dosen')

router.get('/dosen', getDosens)
router.get('/dosen/:nid', getDosen)
router.post('/dosen', addDosen)
router.put('/dosen', updateDosen)
router.delete('/dosen/:nid', delDosen)

module.exports = router