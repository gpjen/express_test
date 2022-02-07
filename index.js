const express = require('express')
const app = express();
const port = 5000


//endpoint

app.get("/", (req, res) =>{
    res.send("okee")
})


app.listen(port, ()=>{
    console.log("server runing on port", port);
})