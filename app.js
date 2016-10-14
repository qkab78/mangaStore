var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
var html = require('html');

var routes = require('./clients/routes/index');
var users = require('./clients/routes/users');
var mangas = require('./clients/routes/mangas');
Manga = require('./clients/models/Manga');
var app = express();

app.use(express.static(__dirname+"/clients"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({secret: "any",
				saveUninitialized:true,
				resave: true }));

//app.use('/', routes);
app.use('/users', users);
app.use('/mangas', mangas);

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/clients/index.html'));
	console.log("L'accueil a été affichée !");
});

app.get('/inscription', function(req, res){
	res.sendFile(path.join(__dirname+'/clients/views/inscription.html'));
	console.log('Un user va s\'inscrire...');
});

app.get('/connexion', function(req, res){
	res.sendFile(path.join(__dirname+'/clients/views/connexion.html'));
	console.log('Un user va se connecter...');
});

app.get('/ajoutManga', function(req, res){
	res.sendFile(path.join(__dirname+'/clients/views/ajoutManga.html'));
	console.log('Un user va ajouter un manga');
});

app.listen(3000);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/mangastore', function(err) {
  if (err) { throw err; }
  console.log('Connexion à la bdd...');
}); 

module.exports = app;