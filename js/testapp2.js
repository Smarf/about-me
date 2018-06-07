//array that holds the cars I've owned
var ownedCars = ['honda', 'toyota', 'chevy', 'subaru'] 

// prompt the user to guess the make of a car I've owned 
var carGuess = prompt('Can you guess the make (not model) of a car I\'ve owned?').toLowerCase();

for(var i = 0; i <= 6; i++) {
  console.log('i is referring to:', ownedCars);
  // compares what the user entered to all of the elements in the array
  if(owedCars.includes(carGuess)) {
    // indicates a correct guess 
    alert('Wow, nice guess!');
  } else {
    // indicates a wrong guess
    alert('Nope. Try again.');
    carguess = prompt ('Can you guess the make (not model) of a car I\'ve owned?').toLowerCase();
  } 
}
alert('You ran out of guesses!');