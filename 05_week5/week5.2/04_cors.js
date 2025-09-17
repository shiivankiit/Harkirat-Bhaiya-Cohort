//Assignment:--Create a backend server in node.js,that returns the sum endpoint
//2:-Write am HTML file,that hits the backend server using the `fetch`api.
const express = require("express")
const cors=require('cors')
const app = express()

app.use(express.json())
app.use(cors())//here you can also specify a domian to whom who acess.
app.post("/sum",function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer:a+b
    })

})
app.listen(3000);