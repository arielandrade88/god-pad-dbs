let fs = require('fs');

module.exports = {
    getCharacters : JSON.parse(fs.readFileSync('./src/data/characters.json', 'utf-8'))
}