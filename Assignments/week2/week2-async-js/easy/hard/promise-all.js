const { resolve } = require("path")

function wait1(){
    return new Promise((resolve)=>{
        setTimeout(
            ()=>{
                console.log(1000);
                resolve();
            },1000
        )
        
    })
}