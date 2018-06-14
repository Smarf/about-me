'use strict';

var pointsTracker = 0;

alert ('Please answer the following questions with Yes or No answers');

function quizGame () {

  // Question 1
  var abduction = prompt('Have I ever been abducted by aliens?').toLowerCase();
  if (abduction === 'yes') {
    alert('If it happened, I have no memory of it. I was once stranded on the side of Mount Shasta for 3 days which is known for it\'s high level of UFO activity...');
    pointsTracker = pointsTracker + 1;
  }

  if(abduction === 'no') {
    alert('Not yet. But I want to believe...');
    pointsTracker - 1;
  }

  console.log('Their answer is', abduction + ' to the alien question');

  var skater = prompt('Do you think I can skateboard?').toLowerCase();
  if (skater === 'yes') {
    alert('Actually, I\'m terrible at it. But I *do* know how to snowboard.');
    pointsTracker = pointsTracker -1 ;
  }

  if (skater === 'no') {
    alert('You are correct.');
    pointsTracker +1;
  }

  console.log('Can I skateboard?',skater);

  var glutens = prompt('Am I gluten free?').toLowerCase();
  if (glutens === 'yes') {
    alert('No way, I love pizza waaaay too much');
    pointsTracker = pointsTracker -1;
  }
  if (glutens === 'no') {
    alert('Bread is delicious. It makes you fat. But it is delicious.');
    pointsTracker +1;
  }
  console.log('Am I good with the glutens?',glutens);

  var lid = prompt('Do I often leave my lid up?').toLowerCase();
  if (lid === 'no') {
    alert('They\'ll steal my secrets!');
    pointsTracker + 1;
  }

  if (lid === 'yes') {
    alert('Hey, I\'m a trusting type of guy');
    pointsTracker -1;

    console.log('My lid discipline is on point',lid);

    var pulpFiction = prompt('Have I seen Pulp Fiction so much that I can recite Samuel Jackson\'s Bible quote from memory?').toLowerCase();
    if (pulpFiction === 'yes') {
      alert('Ezekiel 25:17? Ezekiel 25:17. "The path of the righteous man is beset on all sides by  the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you.');
      pointsTracker = pointsTracker + 2;
      alert('You get a bonus point for that one!');
    }

    if (pulpFiction === 'no') {
      alert('Actually, I can.');
      pointsTracker -1;
    }
    console.log('Do they think I\'ve seen Pulp Fiction waaaay too many times?',pulpFiction);
  }
}
quizGame();

function pigsGame () {
  var totalGuesses = 0;
  var howManyPigs = 0;
  var pigNumber = 5;

  for(var i = 0; i < 4; i++) {
    howManyPigs = parseInt(prompt('You have 4 guesses to find out how many Guinea Pigs I\'ve owned.'));
    totalGuesses++;
    console.log('user has made ' + totalGuesses + 'guesses');
    if(howManyPigs === pigNumber) {
      alert('Exactly right! You must be psychic.');
      pointsTracker++;
      break;
    }
    if (howManyPigs < pigNumber) {
      alert('That\'s way too low!');
      alert('Try again');
    }
    if (howManyPigs > pigNumber) {
      alert ('That\'s way too many!');
      alert ('Try again');
    }
    if (totalGuesses === 4) {
      alert('you ran out of guesses!');
      break;
    }
  }
}
pigsGame();


var correctGuess = false;
var carTracker = 0;

do {
  var ownedCars = ['honda', 'toyota', 'chevy', 'subaru'];
  var carGuess = prompt('Can you guess the make (not model) of a car I\'ve owned?').toLowerCase();
  if(carGuess !== (ownedCars.includes(carGuess)) {
    correctGuess = false;
    carTracker++;
  }
  if(carGuess === ownedCars.includes(carGuess)) {
    alert('Wow, nice guess!');
    pointsTracker++;
    break;
  } while (carTracker > 6);
};

// alert('You scored ' + pointsTracker + ' out of 6 possible points!');