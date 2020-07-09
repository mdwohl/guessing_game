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

