'use strict';

alert ('Please answer the following questions with Yes or No answers');

var abduction = prompt('Have I ever been abducted by aliens?').toLowerCase();

  if (abduction === 'yes') {
    alert('If it happened, I have no memory of it. I was once stranded on the side of Mount Shasta for 3 days which is known for it\'s high level of UFO activity...');
  } else if(abduction === 'no') {
    alert('Not yet. But I want to believe...');
  }
    else {
      alert('You didn\'t answer yes or no');
    }
console.log('Their answer is', abduction + ' to the alien question')

var skater = prompt('Do you think I can skateboard?').toLowerCase();
  if (skater === 'yes') {
    alert('Actually, I\'m terrible at it. But I *do* know how to snowboard.');
  }
  else {
    alert('You are correct.')
  }
  console.log('Can I skateboard?',skater)

var glutens = prompt('Am I gluten free?').toLowerCase();

    if (glutens === 'yes') {
      alert('No way, I love pizza waaaay too much');
    }
    else {
      alert('Bread is delicious. It makes you fat. But it is delicious.');
    }
console.log('Am I good with the glutens?',glutens)

var lid = prompt('Do I often leave my lid up?').toLowerCase();
    if (lid === 'no') {
      alert('They\'ll steal my secrets!');
    }
    else {
      alert('Hey, I\'m a trusting type of guy');
    }
console.log('My lid discipline is on point',lid)

var pulpFiction = prompt('Have I seen Pulp Fiction so much that I can recite Samuel Jackson\'s Bible quote from memory?').toLowerCase();
    if (pulpFiction === 'yes') {
      alert('Ezekiel 25:17? Ezekiel 25:17. "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you.');
    }
    else {
      alert('Actually, I can.')
    }
    console.log('Do they think I\'ve seen Pulp Fiction waaaay too many times?',pulpFiction)



  
