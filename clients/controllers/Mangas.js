Manga = require('../models/Manga');


/*var mongoose = require('mongoose');
var Manga = mongoose.model('Manga');*/

var Mangas = {
    
    index: function (req, res) {
        Manga.getMangas(function(err, mangas) {
            if (err) {throw err;}
            res.json(mangas);
        });
    },
    indexById: function (req, res) {
        Manga.getMangaById(req.params._id,function(err, manga) {
            if (err) {throw err;}
            res.json(manga);
        });  
    },
    addManga: function (req, res) {
        var manga = req.body;
        Manga.addManga(manga, function(err, manga) {
            if (err) {throw err;}
            res.json(manga);
        });
    }, 
    updateManga: function (req, res) {
        var id = req.params._id;
        var manga = req.body;
        Manga.updateManga(id, manga, {}, function (err, manga) {
            if (err) { throw err;}
            res.json(manga);
        });
    },
    deleteManga: function (req, res) {
        var id = req.params._id;
        Manga.deleteManga(id, function (err, manga) {
            if (err) { throw err;}
            res.json(manga);
        });
    }
};

module.exports = Mangas;