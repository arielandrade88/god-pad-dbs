let {getCharacters} = require('../data/dataBase')
let {findByPk, findByUniverse, menuOptionsRole, menuOptionsSpecies} = require('../models/Characters')

module.exports = {
    index: (req, res) => {

    let navOptionsRole = menuOptionsRole()
    let navOptionsSpecie = menuOptionsSpecies()

        res.render('index', {
            title: 'DBS - Inicio',
            navOptionsRole,
            navOptionsSpecie
        })

    },
}
