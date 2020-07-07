'use strict';

var userName = prompt('Welcome! Thanks for visiting. What is your name?');
alert('Nice to meet you ' + userName + '!');

var whereMikeBorn = prompt('Question 1: was I born in Chicago?').toLowerCase();

if(whereMikeBorn === 'y' || whereMikeBorn === 'yes'){
  alert('That is correct. I was born in Chicago in 1986.');
  console.log('Q1: Where was I born? ' + whereMikeBorn + ' is correct.');
} else {
  alert('That is incorrect.');
  //console.log('Q1: Where was I born? ' + whereMikeBorn + ' is incorrect.');
}

var playsGuitar = prompt('Question 2: do I play the guitar?').toLowerCase();

if(playsGuitar === 'y' || playsGuitar === 'yes'){
  alert('That is correct! I started playing almost 25 years ago.');
  console.log('Q2: Do I play the guitar? ' + playsGuitar + ' is correct.');
} else {
  alert('And you thought you knew me! Of course I play the guitar.');
  //console.log('Q2: Do I play the guitar? ' + playsGuitar + ' is incorrect.');
}

var baseballTeam = prompt('Question 3: Do I follow the Seattle Mariners?').toLowerCase();

if(baseballTeam === 'y'|| baseballTeam === 'yes'){
  alert('You got it! Go Mariners!');
  console.log('Q3: Do I follow the Seattle Mariners? ' + baseballTeam + ' is correct.');
} else {
  alert('Incorrect! Even though they have not made the playoffs in 20 years, I still root for the Mariners...unless they play the Cubs.');
  //console.log('Q3: Do I follow the Seattle Mariners? ' + baseballTeam + ' is incorrect.');
}

var hasCats = prompt('Question 4: Do I have cats?').toLowerCase();

if(hasCats === 'y' || hasCats === 'yes'){
  alert('Correct! I have two cats. Blanco and Elwood are their names.');
  console.log('Q4: Do I have cats? ' + hasCats + ' is correct.');
} else {
  alert('Incorrect! I have two cats and they are just fantastic.');
  //console.log('Q4: Do I have cats? ' + hasCats + ' is incorrect.');
}
  
var isDawg = prompt('Question 5: Did I go to University of Washington?').toLowerCase();

if(isDawg === 'y' || isDawg === 'yes'){
  alert('Correct! Go Dawgs!');
  console.log('Q5: Did I go to UW? ' + isDawg + ' is correct.');
} else {
  alert('Incorrect! I went to UW, and look great in purple.');
  //console.log('Q5: Did I go to UW? ' + isDawg + ' is incorrect.');
}

alert('Well, ' + userName + ' thanks for playing! See you around.');

