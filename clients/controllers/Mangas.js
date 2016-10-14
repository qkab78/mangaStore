Manga = require('../models/Manga');


/*var mongoose = require('mongoose');
var Manga = mongoose.model('Manga');*/

var Mangas = {
    /*index: function (req, res) {

        Manga.find({}, function (err, mangas) {
            if (err) throw err;

            // object of all the mangas
            console.log(mangas);
        });

        res.render('index', { mangas: mangas});
    },*/
    create: function (req, res) {
        var bodyParse = req.body;
        var manga = new Manga({
            titre: bodyParse.titre,
            description: bodyParse.description,
            image_url: bodyParse.image_url
        });

        manga.save(function (err, mangaAjoute) {
            if (err) { throw err; }
            else{
                console.log('Le manga '+mangaAjoute.titre+' a correctement été crée !');
            }            
        });
        console.log(manga);
        console.log("========================Données du form==================");
        console.log("Titre: "+bodyParse.titre);
        console.log("Description: "+bodyParse.description);
        console.log("Image_url: "+bodyParse.image_url);

        res.json(manga);
    },
    update: function (req, res) {

        var bodyParse = req.body;
        Manga.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // change the users location
            user.titre = bodyParse.titre;

            // save the user
            user.save(function (err) {
                if (err) throw err;

                console.log('Le manga a correctement été modifié !');
            });

        });

        res.end();
    },
    delete: function (req, res) {

        Manga.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // delete him
            user.remove(function (err) {
                if (err) throw err;

                console.log('Le manga a correctement été éffacé !');
            });
        });

        res.end();
    },
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