const express = require('express');
const app = express();


app.set("trust proxy",true);

app.use((req, res, next)=>{
    req.execution = Date.now();
    if(true){  
        next();
    }
})

app.get("/api/request-logger",(req, res)=>{
    res.json({
        success: true,
        message: {
            RequestMethod: req.method,
            url: `${req.url}`,
            ip: "::1" ? "127.0.0.1" : req.ip,
            ExecutedIn: `${Date.now() - req.execution}ms`

        }
    }) 
})

app.listen(1000)