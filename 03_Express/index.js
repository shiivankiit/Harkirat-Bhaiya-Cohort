//creating an http server
//express
const express = require("express")
const app = express();

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}
//req,res=>request and response.
app.get("/", function(req, res) {
    const n = Number(req.query.n); // Convert n to a number
    if (isNaN(n)) {
        res.send("Please provide a valid number for n.");
        return;
    }
    const ans = sum(n);
    res.send("hi there your ans is " + ans);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});