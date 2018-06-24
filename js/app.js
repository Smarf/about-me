'use strict';

var pointsTracker = 0;

alert ('Please answer the following questions with Yes or No answers');

quizGame();
pigsGame();
carGuessingGame();

function quizGame () {

  // Question 1
  var abduction = prompt('Have I ever been abducted by aliens?').toLowerCase();
  if (abduction === 'yes') {
    alert('If it happened, I have no memory of it. I was once stranded on the side of Mount Shasta for 3 days which is known for it\'s high level of UFO activity...');
    pointsTracker = pointsTracker += 1;
  }

  if(abduction === 'no') {
    alert('Not yet. But I want to believe...');
  }

  // Question 2

  console.log('Their answer is', abduction + ' to the alien question');

  var skater = prompt('Do you think I can skateboard?').toLowerCase();
  if (skater === 'yes') {
    alert('Actually, I\'m terrible at it. But I *do* know how to snowboard.');
  }

  if (skater === 'no') {
    alert('You are correct.');
    pointsTracker += 1;
  }

  console.log('Can I skateboard?',skater);

  // Question 3

  var glutens = prompt('Am I gluten free?').toLowerCase();
  if (glutens === 'yes') {
    alert('No way, I love pizza waaaay too much');
  }
  if (glutens === 'no') {
    alert('Bread is delicious. It makes you fat. But it is delicious.');
    pointsTracker += 1;
  }
  console.log('Am I good with the glutens?',glutens);

  // Question 4

  var travel = prompt('Have I ever been to Europe?').toLowerCase();
  if (travel === 'no') {
    alert('I hadn\'t been outside of the country for most of my life, but I finally went a few yeas ago!');
  }

  if (travel === 'yes') {
    alert('Correct');
    pointsTracker += 1;

    console.log('Do they think I\'ve been to Europe', travel);

    // Question 5

    var pulpFiction = prompt('Have I seen Pulp Fiction so much that I can recite Samuel Jackson\'s Bible quote from memory?').toLowerCase();
    if (pulpFiction === 'yes') {
      alert('Ezekiel 25:17? Ezekiel 25:17. "The path of the righteous man is beset on all sides by  the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you.');
      pointsTracker = pointsTracker += 2;
      alert('You get a bonus point for that one!');
    }

    if (pulpFiction === 'no') {
      alert('Actually, I can.');
    }
    console.log('Do they think I\'ve seen Pulp Fiction waaaay too many times?',pulpFiction);
  }
}


function pigsGame () {
  var totalGuesses = 0;
  var howManyPigs = 0;
  var pigNumber = 5;

  for(var i = 0; i < 5; i++) {
    howManyPigs = parseInt(prompt('You have 5 guesses to find out how many Guinea Pigs I\'ve owned.'));
    totalGuesses++;
    i++;

    console.log('user has made ' + totalGuesses + 'guesses');

    if(howManyPigs === pigNumber) {
      alert('Exactly right! You must be psychic.');
      pointsTracker += 5;
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
    }
  }
}


function carGuessingGame() {
  var carsOwned = ['honda', 'toyota', 'subaru', 'chevy'];
  var carGuessCounter = 0;
  // they have 6 attempts to guess the make of a car I've owned
  for (var i = 0; i < 6; i++) {
    var carGuess = prompt('Can you guess a car I\'ve owned? You have six tries. It doesn\'t have to be the exact model, just the make, like BMW for example.').toLowerCase();
    carGuessCounter += 1;
    if (carsOwned.indexOf(carGuess) >= 0) {
      pointsTracker += 1;
      alert('You must be psychic!');
      break;
    } else {
      alert('Try again!');
      if (carGuessCounter === 6) {
        alert('You ran out of guesses! Here are the cars I\'ve owned: ' + carsOwned[0] + ', ' + carsOwned[1] + ', ' + carsOwned[2] + ', ' + carsOwned[3] + '.');
        break;
      }
    }
  }
}

alert('You scored ' + pointsTracker + ' out of a possible 17 points!');