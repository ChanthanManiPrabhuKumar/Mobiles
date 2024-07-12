const API = require("./api.json");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors({origin : "*"}));

const port = 8080;

app.get("/mobiles",(req,res) => {
    return res.json(API)
})

app.listen(port,()=> console.log("server started"));

