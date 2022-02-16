const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3010

//midleware
app.use(express.json())
app.use(morgan('dev'))

//routing
app.get('/', (req, res) => {
    res.send("mantap konek berhasil")
})

app.use((req, res) => {
    res.send(`error404 : ${req.path}`)
})

app.listen(port, () => {
    console.log("server running on port : ", port);
})