var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var mangaSchema = new Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
    image_url: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

// Nous exportons notre modèle avec comme nom "User", 'users' sera le nom de notre "table"
var Manga = module.exports = mongoose.model('Manga', mangaSchema, 'mangas');

//Va chercher tous les mangas de la base
module.exports.getMangas = function (callback, limit) {
	Manga.find(callback).limit(limit);
}

//Va chercher un manga de la base
module.exports.getMangaById = function (id, callback) {
	Manga.findById(id, callback);
}
//Va ajouter un manga de la base
module.exports.addManga = function (manga, callback) {
	Manga.create(manga, callback);
}
//Va modifier un manga de la base
module.exports.updateManga = function (id, manga, options, callback) {
	var query = {_id : id}
	var update = {
		title: manga.title,
		description: manga.description,
		image_url: manga.image_url
	}
	Manga.findOneAndUpdate(query, update, options, callback);
}
//Va supprimer un manga de la base
module.exports.deleteManga = function (id, callback) {
	var query = {_id : id}
	Manga.remove(query, callback);
}