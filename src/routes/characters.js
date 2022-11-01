var express = require('express');
const {  allChar, godPad, species, rol, guerrerosById,  } = require('../controllers/CharactersController');
var router = express.Router();

/* todos los personajes  */
router.get('/todos', allChar)

/* personajes por universos */
router.get('/universo/:universo/', godPad)

/* personajes por ID */
router.get('/universo/:universo/:id/', guerrerosById)

/* personajes por especies */
router.get('/especie/:especie', species)

/* personajes por rol */
router.get('/rol/:rol', rol)

module.exports = router;
