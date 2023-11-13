const express = require("express");
const app = express();

const port = 8081;

app.get('/', (req, res) => {
    res.send('<h1>Speedy</h1> <h4>I love you </h4> ');
  })
app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
})