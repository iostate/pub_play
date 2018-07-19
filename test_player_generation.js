var _ = require('lodash');
var Chance = require('chance');
let chance = new Chance();

function generateRandomName() {
  return chance.name();
}

function generateRandomPosition() {
  var positions = ['PG', 'SG', 'SF', 'PF', 'C'];
  var randomIndex = Math.floor(Math.random() * 5);

  return positions[randomIndex];
}

function playerObjectGenerator(length) {
  return _.map(_.range(0, length), function(index) {
    return {
      number: index,
      name: generateRandomName(),
      position: generateRandomPosition(),
    };
  });
}

var players = playerObjectGenerator(25);

for (i in players) {
  console.log('Name: ' + players[i].name + ' - ' + players[i].number);
  console.log('Position: ' + players[i].position);
}
