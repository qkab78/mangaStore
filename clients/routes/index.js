var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'index.html'));
	console.log("L'accueil a été affichée !");
});

router.get('/inscription', function(req, res){
	res.sendFile(path.join(__dirname+'/views/inscription.html'));
	console.log('Un user va s\'inscrire...');
});

router.get('/connexion', function(req, res){
	res.sendFile(path.join(__dirname+'/views/connexion.html'));
	console.log('Un user va se connecter...');
});

router.get('/ajoutManga', function(req, res){
	res.sendFile(path.join(__dirname+'/views/ajoutManga.html'));
	console.log('Un user va ajouter un manga');
});

module.exports = router;