const express = require('express')
const router = express.Router()

const {
    getMhs
} = require('./mahasiswa')

router.get('/mahasiswa', getMhs);


module.exports = router