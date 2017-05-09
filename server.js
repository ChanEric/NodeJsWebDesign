var express = require('express');

var app = express();



app.set('view engine', 'jade');

app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index.ejs');
	});

app.get('/index.html', function(req, res) {
	res.render('index.ejs')
	});

app.get('/login.html', function(req, res) {
	res.render('login.ejs')
	});

app.get('/todolist.html', function(req, res) {
	res.render('todolist')
	});

app.get('/login.html', function(req, res) {
	res.render('login')
	});


app.use(function(req, res, next){
	res.writeHead(404);
    res.setHeader('Content-Type', 'text/plain');
    res.end(404, 'Page introuvable !');
});
app.listen(8080);