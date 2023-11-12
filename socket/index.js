const express = require("express");
const app = express();

const port = 8081;

app.get("", (req,res)=>{
    res.send("Order called");
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
})