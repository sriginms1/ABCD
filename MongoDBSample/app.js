// Import Modules
const bodyParser = require('body-parser');
var mongoose = require('./mongoose_db');
const express = require('express');
var User = require('./userModels');

var app = express();

app.use(bodyParser.json())

app.post('/user', (req, res) => {
    var testUser = new User({name: req.body.name, age: req.body.age});
    
    testUser.save().then(function (data) {
        console.log("Data Saved" + data);
    }, function (err) {
        console.log("Found error" + err);
    })
});


app.listen(3000, () => {
    console.log("Started")
})
