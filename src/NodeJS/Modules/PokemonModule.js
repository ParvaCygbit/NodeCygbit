const pokemon = require("pokemon");

console.log("random word from pokemon module:", pokemon.random());
// console.log('all pokemon names:', pokemon.all());
console.log("pokemon by id:", pokemon.getName(1));
console.log("pokemon by name:", pokemon.getId("Grimer"));
