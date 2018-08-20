'use strict';

var imageEl = document.getElementById('some-goat');

var allGoats = [];

function Goat(name) {
  this.name = name;
  this.timesShown = 0;
  this.path = `img/${name}.jpg`;
  allGoats.push(this);
}

var allGoatNames = ['cruisin-goat', 'float-your-goat', 'goat-away',
                    'goat-out-of-hand', 'kissing-goat', 'sassy-goat',
                  'smiling-goat', 'sweater-goat'];

allGoatNames.forEach(function(goatName) {
  new Goat(goatName);
});

function showRandomGoat() {
  var rando = Math.floor(allGoatNames.length * Math.random());
  imageEl.src = allGoats[rando].path;
  console.log(allGoats);
}

showRandomGoat();
