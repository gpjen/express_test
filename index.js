// import
const express = require('express')
const morgan = require('morgan')
const router = require('./controller/index')

//running import
const app = express()
const port = 3005

//midleware
app.use(morgan('dev'))
app.use(express.json())


//routing-group
app.use('/api/v1', router)

//routing
app.get('/', (req, res) => {
    res.status(200).json({
        status: "true",
        path: req.path
    })
})

// handle roting not fount
app.use((req, res) => {
    res.send("page not fount")
})

// start server
app.listen(port, () => {
    console.log("app running port : ", port);
})