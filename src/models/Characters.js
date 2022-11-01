let { getCharacters } = require('../data/dataBase')
const character = {

    allChar: () => {
        let allCharacters = getCharacters;
        return allCharacters;
    },

    findByPk: (id) => {
        let allCharacters = getCharacters;
        let characterById = allCharacters.find(character => character.id === +id);
        return characterById;
    },

    findByUniverse: (universe) => {

        let characterByUniverse = []

        getCharacters.forEach(character => {
            if (character.universe === universe) {
                characterByUniverse.push(character);
            }
        });
        return characterByUniverse
    },

    findBySpecie: (specie) => {

        let characterBySpecie = []

        getCharacters.forEach(character => {
            if (character.specie == specie) {
                characterBySpecie.push(character)

            }
        });
        return characterBySpecie
    },
    
    findByRol: (rol) => {

        let characterByRol = []

        getCharacters.forEach(character => {
            if (character.role == rol) {
                characterByRol.push(character)

            }
        });
        return characterByRol
    },

    menuOptionsRole: () => {
        let roles = getCharacters.map(rol => rol.role)      
   
        let filtRol = roles.reduce((tags, rol) => {
          return [ ...tags, rol]
        }, []).filter((rol, index, self) => index === self.indexOf(rol))
        return filtRol.sort()
    },
    menuOptionsSpecies: () => {
        let species = getCharacters.map(specie => specie.specie)      
   
        let filtSpecies = species.reduce((tags, specie) => {
          return [ ...tags, specie]
        }, []).filter((specie, index, self) => index === self.indexOf(specie))
        return filtSpecies.sort()
    }

}
module.exports = character;