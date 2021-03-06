module.exports = getFakeObjects;

var Chance = require('chance');
var random = require('lodash-compat/number/random');
var times = require('lodash-compat/utility/times');

var chance = new Chance();

function getFakeObjects(max) {
  var nbHits = random(1, max || 10);
  return times(nbHits, getOneHit);
}

function getOneHit() {
  return {
    objectID: chance.word({length: 10}),
    description: chance.paragraph({sentences: random(1, 3)}),
    popularity: random(1, 100)
  };
}
