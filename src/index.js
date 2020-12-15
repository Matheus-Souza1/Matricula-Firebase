const express = require("express");
const routes = require('./routes/index');

const app = express();

app.use(express.json());
routes(app);

app.get("/version", (req,res)=>{
    return res.send({version:"1.0.1"})
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });

app.listen(process.env.PORT || 3333,()=>{
    console.log("start ", process.env.PORT);
});