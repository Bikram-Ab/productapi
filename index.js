const express = require("express");
const cors = require("cors")
const app = express();
const port =  process.env.PORT || 3000;
app.use(cors())

const apiData = require("./product.json")

app.get("/",(req,res) => {
    res.send("Hellow i am live")
})

app.get("/product",(req,res) => {
    res.send(apiData)
})

app.listen(port,() => {
    console.log("i am live again",port)
})