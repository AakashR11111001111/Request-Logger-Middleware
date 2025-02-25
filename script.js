const express = require('express');
const app = express();

const PORT = process.env.PORT || 1000

app.set("trust proxy",true);

app.use((req, res, next)=>{
    req.execution = Date.now();
    if(true){  
        next();
    }
})

app.get("/api/request-logger",(req, res)=>{
    setTimeout(() => {
        res.json({
            success: true,
            message: {
                RequestMethod: req.method,
                url: `${req.url}`,
                ip: req.ip,
                ExecutedIn: `${Date.now() - req.execution}ms`,
            }
        })
    }, Math.floor(Math.random()*3000));
})

app.listen(PORT, ()=> console.log(`Server Up and Running on Port ${PORT}`))