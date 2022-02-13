const express = require('express')
const morgan = require('morgan')
const router = require('./src/routes/index')

const app = express()
const port = 5000

app.use(morgan('dev'))
app.use(express.json())

//group
app.use('/api/v1', router)

//endpoint
app.get("/", (req, res) =>{
    res.send("mantap")
})





app.use((req, res) => {
    res.send("<h1 style='text-align:center; margin-top:100px'>404</h1>")
})

app.listen(port, ()=>{
    console.log("server runing on port", port);
})