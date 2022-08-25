const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    console.log("here")
    res.send({
        "one": 1,
        "two": 2
    })
})

app.listen(3003, ()=>console.log("what up"))