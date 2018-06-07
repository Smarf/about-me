'use strict';
// the number of guinea pigs I've owned
var pigNumber = 5;

// Prompt for user to make a guess
var howManyPigs = parseInt(prompt('You have 4 guesses to find out how many Guinea Pigs I\'ve owned.'));


for(var i = 0; i < 4; i++) {
    console.log(howManyPigs);
    console.log('howManyPigs is referring to:', pigNumber);
  if(howManyPigs === pigNumber) {
    alert('Exactly right! You must be psychic.');
    break;

  } else if (howManyPigs < pigNumber) {
    alert('That\s way too low!');
    howManyPigs = parseInt(prompt ('Try again'));

  } else if (howManyPigs > pigNumber) {
    alert ('That\'s way too many!');
    howManyPigs = parseInt(prompt ('Try again'));

  } else {
    console.log('you have reached the end of the guesses');
    alert("Please enter a number")
  } 
}