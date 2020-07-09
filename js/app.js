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


var hasCats = prompt('Question 4: Do I have cats?').toLowerCase();
function likesCats() {

  if (hasCats === 'y' || hasCats === 'yes') {
    alert('Correct! I have two cats. Blanco and Elwood are their names.');
    console.log('Q4: Do I have cats? ' + hasCats + ' is correct.');
    correctGuesses++;
  } else {
    alert('Incorrect! There are indeed cats, and they are just fantastic.');
    //console.log('Q4: Do I have cats? ' + hasCats + ' is incorrect.');
  }
}
likesCats();


var isDawg = prompt('Question 5: Did I go to University of Washington?').toLowerCase();

function likesDawg() {

  if (isDawg === 'y' || isDawg === 'yes') {
    alert('Correct! Go Dawgs!');
    console.log('Q5: Did I go to UW? ' + isDawg + ' is correct.');
    correctGuesses++;
  } else {
    alert('Incorrect! I went to UW, and look great in purple.');
    //console.log('Q5: Did I go to UW? ' + isDawg + ' is incorrect.');
  }
}
likesDawg();

//var catNumberQuestion = prompt('Question 6: How many cats do I have? You have four guesses.');
// Question no 6 while loop

var count = 0;
function reallyLikesCats() {

  while (count < 4) {
    var catNumberQuestion = prompt('Question 6: How many cats do I have? You have four guesses.');
    catNumberQuestion = parseInt(catNumberQuestion);
    if (catNumberQuestion === 2) {
      alert('Correct! Blanco and Elwood are my two cats.');
      correctGuesses++;
      break;
    }
    else if (catNumberQuestion < 2) {
      count++;
      alert('Not quite. Remember, cats are like martinis. One is too few...');
    }
    else if (catNumberQuestion > 2) {
      count++;
      alert('That is too many cats! For me at least.');
    }
    if (count === 4) {
      alert('Well, ' + userName + ' thanks for playing! I have two cats, by the way!');
    }
  }
}
reallyLikesCats();