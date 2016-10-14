var express = require('express');
var router = express.Router();

var mangas = require('../controllers/Mangas'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', mangas.index);
router.post('/', mangas.addManga);
/* POST Création d'un nouvel utilisateur */
//router.post('/', mangas.create);
router.get('/:_id', mangas.indexById);
router.put('/:_id', mangas.updateManga);
router.delete('/:_id', mangas.deleteManga);
module.exports = router;