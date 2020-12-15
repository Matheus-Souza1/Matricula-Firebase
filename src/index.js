const express = require("express");

const app = express();

app.use(express.json());

app.get("/version", (req,res)=>{
    return res.send({version:"1.0.1"})
})

app.listen(process.env.PORT || 3333,()=>{
    console.log("start ", process.env.PORT);
});