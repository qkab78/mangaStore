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
exports.model = mongoose.model('User', userSchema, 'users');