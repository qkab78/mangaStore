var express = require('express');
var router = express.Router();

var mangas = require('../controllers/Mangas'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', mangas.index);
router.post('/', mangas.addManga);
/* POST Création d'un nouvel utilisateur */
//router.post('/', mangas.create);
router.get('/details/:_id', mangas.indexById);
router.put('/edit/:_id', mangas.updateManga);
router.delete('/delete/:_id', mangas.deleteManga);
module.exports = router;