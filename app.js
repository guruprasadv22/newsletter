const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    
});

app.listen(3001, function() {
    console.log("Server running on port 3001");
})