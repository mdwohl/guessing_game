'use strict';



var correctGuesses = 0;
var userName = prompt('Welcome! Thanks for visiting. What is your name?');
alert('Nice to meet you ' + userName + '!');


var whereMikeBorn = prompt('Question 1: was I born in Chicago?').toLowerCase();

// create a function whereMikeBorn
// wrap teh if ... else statement within function
// call the Function

function getMikesBirthPlace() {

  if (whereMikeBorn === 'y' || whereMikeBorn === 'yes') {
    alert('That is correct. I was born in Chicago in 1986.');
    console.log('Q1: Where was I born? ' + whereMikeBorn + ' is correct.');
    correctGuesses++;
  } else {
    alert('That is incorrect.');
    //console.log('Q1: Where was I born? ' + whereMikeBorn + ' is incorrect.');
  }
}
getMikesBirthPlace();
console.log('Mike was born in ' + whereMikeBorn);

// create a function whereMikeBorn
// wrap teh if ... else statement within function
// call the Function

function doesPlayGuitar() {
  var playsGuitar = prompt('Question 2: do I play the guitar?').toLowerCase();

  if (playsGuitar === 'y' || playsGuitar === 'yes') {
    alert('That is correct! I started playing almost 25 years ago.');
    console.log('Q2: Do I play the guitar? ' + playsGuitar + ' is correct.');
    correctGuesses++;
  } else {
    alert('And you thought you knew me! Of course I play the guitar.');
    //console.log('Q2: Do I play the guitar? ' + playsGuitar + ' is incorrect.');
  } 
  console.log('Mike does play guitar...' + playsGuitar);
}
doesPlayGuitar();

// create a function whereMikeBorn
// wrap teh if ... else statement within function
// call the Function

var baseballTeam = prompt('Question 3: Do I follow the Seattle Mariners?').toLowerCase();

function likesBaseball() {

  if (baseballTeam === 'y' || baseballTeam === 'yes') {
    alert('You got it! Go Mariners!');
    console.log('Q3: Do I follow the Seattle Mariners? ' + baseballTeam + ' is correct.');
    correctGuesses++;
  } else {
    alert('Incorrect! Even though they have not made the playoffs in 20 years, I still root for the Mariners...unless they play the Cubs.');
    //console.log('Q3: Do I follow the Seattle Mariners? ' + baseballTeam + ' is incorrect.');
  }
}
likesBaseball();
console.log('He likes baseball .. ' + baseballTeam);