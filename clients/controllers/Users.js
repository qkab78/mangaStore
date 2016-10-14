require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User');


var Users = {
    index: function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;

            // object of all the users
            console.log(users);
            res.render('users/index', {"users": users});
        });

        
    },
    create: function (req, res) {
        var bodyParse = req.body;
        var u = new User({
            nom: bodyParse.nom,
            prenom: bodyParse.prenom,
            email: bodyParse.email,
            mdp: bodyParse.mdp
        });

        u.save(function (err) {
            if (err) { throw err;  }
            console.log('User inserted');
        });

        console.log(u);
        res.json(u);
    },
    update: function (req, res) {

        User.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // change the users location
            user.nom = bodyParse.nom;

            // save the user
            user.save(function (err) {
                if (err) throw err;

                console.log('User successfully updated!');
            });

        });

        res.end();
    },
    delete: function (req, res) {

        User.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // delete him
            user.remove(function (err) {
                if (err) throw err;

                console.log('User successfully deleted!');
            });
        });

        res.end();
    },

    connect: function(req, res){
        bodyParse = req.body;
        connect_json = {
            email: bodyParse.email,
            mdp: bodyParse.mdp,
            confMdp: bodyParse.confMdp
        }

        console.log('--------Informations rentrées LogIn--------');
        console.log('infos rentrées : ');
        console.log('email : ' + connect_json.email);
        console.log('password : ' + connect_json.mdp);
        console.log('confirmation password : ' + connect_json.confMdp);

        User.findOne({'email': connect_json.email}, function(err, userEnStock){
            if (!userEnStock) { console.log("l'user n'existe pas en base ! veuillez vérifier vos IDs !");}
            else{
                var mdp = bodyParse.mdp;
                var userMdp = userEnStock.mdp;

                if (mdp == userMdp) {
                    req.session.id = userEnStock._id;
                    req.session.email = userEnStock.email;
                    console.log("===========================Données de la session=====================================");
                    console.log("===========================EMAIL=====================================");
                    console.log(req.session.email);
                    console.log("===========================ID=====================================");
                    console.log(req.session.id);
                    res.redirect('http://localhost:3000');
                }
            }
        });
    },

    disconnect: function(req, res){
        session.destroy();
    }
};

module.exports = Users;