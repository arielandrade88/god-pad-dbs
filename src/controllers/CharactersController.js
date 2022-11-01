
const { menuOptionsSpecies, menuOptionsRole, findByUniverse, findBySpecie, findByRol, findByPk, allChar } = require('../models/Characters')
const [
    navOptionsRole,
    navOptionsSpecie
] = [
        menuOptionsRole(),
        menuOptionsSpecies()
    ]

module.exports = {
    allChar: (req, res) => {
        let allCharacters = allChar()

        res.render('charactersByFilter', {
            title: `universo ${req.params.universo}`,
            navOptionsRole,
            navOptionsSpecie,
            id: req.params.universo,
            characters: allCharacters,

        });
    },
    godPad: (req, res) => {
        characterByUniverse = findByUniverse(req.params.universo)

        charactersWars = []
        characterByUniverse.forEach(character => {
            if (character.role === "Guerrero") {
                charactersWars.push(character);
            }
        });

        angel = []
        characterByUniverse.forEach(char => {
            if (char.role === "Angel") {
                angel.push(char);
            }
        });

        god = []
        characterByUniverse.forEach(char => {
            if (char.role === "Dios destructor") {
                god.push(char);
            }
        });

        kaio = []
        characterByUniverse.forEach(char => {
            if (char.role === "Kaio-shin") {
                kaio.push(char);
            }
        });

        res.render('godPad', {
            title: `universo ${req.params.universo}`,
            navOptionsRole,
            navOptionsSpecie,
            id: req.params.universo,
            charactersWars,
            angel,
            god,
            kaio,
        });
    },
    guerrerosById: (req, res) => {
        personaje = findByPk(req.params.id);

        res.render('partials/charDetail', {
            title: `universo ${req.params.universo}`,
            id: req.params.universo
        })
    },

    rol: (req, res) => {
        let characterByRol = findByRol(req.params.rol)

        res.render('charactersByFilter', {
            title: 'DBS - Inicio',
            characters: characterByRol,
            navOptionsRole,
            navOptionsSpecie
        })
    },
    species: (req, res) => {
        let characterBySpecie = findBySpecie(req.params.especie)

        res.render('charactersByFilter', {
            title: 'DBS - Inicio',
            characters: characterBySpecie,
            navOptionsRole,
            navOptionsSpecie
        })
    },
}