require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User');


var Users = {
    index: function (req, res) {
        User.getUsers(function(err, users) {
            if (err) {throw err;}
            res.json(users);
        });
    },
    indexById: function (req, res) {
        User.getUserById(req.params._id,function(err, user) {
            if (err) {throw err;}
            res.json(user);
        });  
    },
    addUser: function (req, res) {
        var user = req.body;
        User.addUser(user, function(err, user) {
            if (err) {throw err;}
            res.json(user);
        });
    }, 
    updateUser: function (req, res) {
        var id = req.params._id;
        var user = req.body;
        User.updateUser(id, user, {}, function (err, user) {
            if (err) { throw err;}
            res.json(user);
        });
    },
    deleteUser: function (req, res) {
        var id = req.params._id;
        User.deleteUser(id, function (err, user) {
            if (err) { throw err;}
            res.json(user);
        });
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