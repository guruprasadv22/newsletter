const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    let firstName = req.body.fname;
    let lastName = req.body.lname;
    let email = req.body.userEmail;
    console.log(firstName, lastName, email);
});

app.listen(3002, function() {
    console.log("Server running on port 3002");
})