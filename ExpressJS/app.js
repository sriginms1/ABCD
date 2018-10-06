var express = require('express');
var app = express();

var path = require('path');

var handlebar = require('hbs');
app.set('view engine', 'hbs')

// app.get('/', function(req, res) {
//     res.send('hello world')
// })

// app.get('/home', function (req, resp) {
//     resp.send('<h1>In my home page</h1>')
// })

app.get('/home', function (req, resp) {
    resp.render('home.hbs')
})


app.get('/user/:id', function(request, response) {
    response.send('user ' + request.params.id);
  });

var indexData = {
    title: "Index",
    year: new Date()
}
app.get('/', function(req, res) {
    res.render('index.hbs', indexData)
});


app.listen(3000)