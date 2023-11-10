const express = require("express");
const app = express();


const port = 8082;

app.get("/", (req,res)=>{
    res.send("Payment called");
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
})