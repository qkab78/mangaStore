var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var userSchema = new Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    email: {type: String, required: true},
    mdp: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "User", 'users' sera le nom de notre "table"
var User = module.exports = mongoose.model('User', userSchema, 'users');

//Va chercher tous les users de la base
module.exports.getUsers = function (callback, limit) {
	User.find(callback).limit(limit);
}

//Va chercher un user de la base
module.exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}
//Va ajouter un user de la base
module.exports.addUser = function (user, callback) {
	User.create(user, callback);
}
//Va modifier un user de la base
module.exports.updateUser = function (id, user, options, callback) {
	var query = {_id : id}
	var update = {
		email: user.email,
		mdp: user.mdp
	}
	User.findOneAndUpdate(query, update, options, callback);
}
//Va supprimer un user de la base
module.exports.deleteUser = function (id, callback) {
	var query = {_id : id}
	User.remove(query, callback);
}