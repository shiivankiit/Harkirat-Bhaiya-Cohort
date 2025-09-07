const express = require('express');
const app = express();

// Our "database" in memory
var users = [{
    name: "john",
    kidneys: [
        { healthy: false }   // Initially john has 1 unhealthy kidney
    ]
}]

// Middleware to parse JSON request body
app.use(express.json());

/*
  GET /
  Returns: total kidneys, healthy kidneys, unhealthy kidneys
*/
app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;  //geaves john kidney array.
    const numberOfKidneys = johnKidneys.length; //it counts how many kidney john has.

    // Count healthy kidneys properly
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    // Unhealthy = total - healthy
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
});

/*
  POST /
  Add a new kidney (healthy or unhealthy)
  Example body: { "isHealthy": true }
*/
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy; // read from request body
    users[0].kidneys.push({ healthy: isHealthy }); // add new kidney
    res.json({ msg: "Kidney added successfully!" });
});

/*
  PUT /
  Make all kidneys healthy
*/
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({ msg: "All kidneys updated to healthy!" });
});

/*
  DELETE /
  Remove all unhealthy kidneys
*/
app.delete("/", function (req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({ healthy: true });
        }
    }
    users[0].kidneys = newKidneys; // ✅ fixed: use "users" not "user"
    res.json({ msg: "All unhealthy kidneys removed!" });
});

// Start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
