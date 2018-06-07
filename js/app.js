// 'use strict';

// // this code is currently broken as of 6/6/2018 @ 9:08pm and I have tried really hard to figure out
// //  why it won't run but couldn't prevail

var totalGuesses = 0;
var howManyPigs;
var pigNumber = 5;

// alert ('Please answer the following questions with Yes or No answers');

// var abduction = prompt('Have I ever been abducted by aliens?').toLowerCase();

//   if (abduction === 'yes') {
//     alert('If it happened, I have no memory of it. I was once stranded on the side of Mount Shasta for 3 days which is known for it\'s high level of UFO activity...');
//   } else if(abduction === 'no') {
//     alert('Not yet. But I want to believe...');
//   }
//     else {
//       alert('You didn\'t answer yes or no');
//     }
// console.log('Their answer is', abduction + ' to the alien question')

// var skater = prompt('Do you think I can skateboard?').toLowerCase();
//   if (skater === 'yes') {
//     alert('Actually, I\'m terrible at it. But I *do* know how to snowboard.');
//   }
//   else {
//     alert('You are correct.')
//   }
//   console.log('Can I skateboard?',skater)

// var glutens = prompt('Am I gluten free?').toLowerCase();

//     if (glutens === 'yes') {
//       alert('No way, I love pizza waaaay too much');
//     }
//     else {
//       alert('Bread is delicious. It makes you fat. But it is delicious.');
//     }
// console.log('Am I good with the glutens?',glutens)

// var lid = prompt('Do I often leave my lid up?').toLowerCase();
//     if (lid === 'no') {
//       alert('They\'ll steal my secrets!');
//     }
//     else {
//       alert('Hey, I\'m a trusting type of guy');
//     }
// console.log('My lid discipline is on point',lid)

// var pulpFiction = prompt('Have I seen Pulp Fiction so much that I can recite Samuel Jackson\'s Bible quote from memory?').toLowerCase();
//     if (pulpFiction === 'yes') {
//       alert('Ezekiel 25:17? Ezekiel 25:17. "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you.');
//     }
//     else {
//       alert('Actually, I can.')
//     }
//     console.log('Do they think I\'ve seen Pulp Fiction waaaay too many times?',pulpFiction)

// this next section satisfies the "numbered guess" project requirement
// the number of guinea pigs I've owned
// Prompt for user to make a guess

for(var i = 0; i < 4; i++) {
  howManyPigs = parseInt(prompt('You have 4 guesses to find out how many Guinea Pigs I\'ve owned.'));  
  totalGuesses++;
  console.log('user has made ' + totalGuesses + 'guesses');
  if(howManyPigs === pigNumber) {
    alert('Exactly right! You must be psychic.');
    break;
  } 
    if (howManyPigs < pigNumber) {
    alert('That\'s way too low!');
    howManyPigs = parseInt(prompt ('Try again'));
  }
   if (howManyPigs > pigNumber) {
    alert ('That\'s way too many!');
    howManyPigs = parseInt(prompt ('Try again'));
  } 
    if (totalGuesses === 4) {
    alert('you ran out of guesses!');
    break;
  } 
}
// // this next section addresses the "guess my car in an array" project requirement
// //array that holds the cars I've owned
// var ownedCars = ['honda', 'toyota', 'chevy', 'subaru'] 

// // prompt the user to guess the make of a car I've owned 
// var carGuess = prompt('Can you guess the make (not model) of a car I\'ve owned?').toLowerCase();

// for(var i = 0; i <= 6; i++) {
//   console.log('i is referring to:', ownedCars);
//   // compares what the user entered to all of the elements in the array
//   if(owedCars.includes(carGuess)) {
//     // indicates a correct guess 
//     alert('Wow, nice guess!');
//   } else {
//     // indicates a wrong guess
//     alert('Nope. Try again.');
//     carguess = prompt ('Can you guess the make (not model) of a car I\'ve owned?').toLowerCase();
//   } 
// }
// alert('You ran out of guesses!');

  
