'use strict';

/*

&& - is the "logical and"
One False and it will not run
|| - is the "logical or" (double pipe)
! - the "logical not" bang

*/
let score = 0;

console.log('Hello Welcome To My Site!');

alert('Hello Welcome To My Site!');
let username = prompt('What is your name?');

alert('Welcome ' + username);

game1();
game2();
game3();

alert(`your score is ${score} out of 7`);

console.log(score);
alert('Thank you for learning more about me ' + username);


//game 1 function
function game1() {
  let doYouEnjoyCoding = prompt('Do you enjoy coding? yes or no?').toLowerCase();

  if (doYouEnjoyCoding === 'yes' || doYouEnjoyCoding === 'y') {
    console.log('Thats awesome! I like coding too!');
    alert('Thats awesome! I like coding too!');
    score++;
  } else if (doYouEnjoyCoding === 'no' || doYouEnjoyCoding === 'n') {
    console.log('You are wrong I do like coding');
    alert('You are wrong I do like coding');
    score++;
  }

  let doIhaveFavLang = prompt('Do I have a favorite programming language? yes or no?');

  if (doIhaveFavLang === 'yes' || doIhaveFavLang === 'y') {
    console.log('I love javascript!');
    alert('I love javascript!');
    score++;
  } else if (doIhaveFavLang === 'no' || doIhaveFavLang === 'n') {
    console.log('Nope, I like javascript!');
    alert('Nope, I like javascript!');
    score++;

  }

  let doIhavefavpartabtcoding = prompt('Do you have a favorite aspect about web development? yes or no?');

  if (doIhavefavpartabtcoding === 'yes' || doIhavefavpartabtcoding === 'y') {
    console.log('Yes I do, thats correct I love styling & aesthetic!');
    alert('Yes I do, thats correct I love styling & aesthetic!');
    score++;
  } else if (doIhavefavpartabtcoding === 'no' || doIhavefavpartabtcoding === 'n') {
    console.log('Nope, I love styling & aesthetic');
    alert('Nope, I love styling & aesthetic');
    score++;
  }

  let myfavhobby = prompt('Do you have a favortie hobby? yes or no?');

  if (myfavhobby === 'yes' || myfavhobby === 'yes') {
    console.log('Yes I do, I love skateboarding!');
    alert('Yes I do, I love skateboarding');
    score++;
  } else if (myfavhobby === 'no' || myfavhobby === 'n') {
    console.log('I actually enjoy skateboarding');
    alert('I actually enjoy skateboarding');
    score++;
  }

  let smalltownorbigtown = prompt('Are you from a small town? yes or no?');

  if (smalltownorbigtown === 'yes' || smalltownorbigtown === 'yes') {
    console.log('Yes I am from a small town of about 7k residents!');
    alert('Yes I am from a small town of about 7k residents!');
    score++;
  } else if (smalltownorbigtown === 'no' || smalltownorbigtown === 'n') {
    console.log('I am actually from a small town of 7k residents');
    alert('I am actually from a small town of 7k residents');
    score++;
  }
}

function game2() {
  let howmanydogsdoihave = parseInt(prompt('Guess how many dogs I have between 1-10? '));
  let x = 2; //numberofDogsIhave
  let i = 4; //attemptsremain
  while (i > 0) {
    if (howmanydogsdoihave === 2) {
      console.log('You guessed it i have 2 dogs!');
      alert('You guessed it i have 2 dogs!');
      score++;
      break;
    }
    else if (i === 0) {
      console.log('you are out of attempts');
      alert('you are out of attempts');
      break;
    }
    else if (howmanydogsdoihave < 0) {
      console.log('That number is not between 1-10, try again: ');
      howmanydogsdoihave = parseInt(prompt('That number is not between 1-10, try again: '));
      i--;
    }
    else if (howmanydogsdoihave > 10) {
      console.log('That number is not between 1-10, try again: ');
      howmanydogsdoihave = parseInt(prompt('That number is not between 1-10, try again: '));
      i--;
    }
    else if (howmanydogsdoihave > x) {
      console.log('Too high try again');
      howmanydogsdoihave = parseInt(prompt('Too high try again'));
      i--;
    }
    else if (howmanydogsdoihave < x) {
      console.log('Too low try again');
      howmanydogsdoihave = parseInt(prompt('Too low try again'));
      i--;
    }
    else {
      console.log('That is not a number, try again: ');
      howmanydogsdoihave = parseInt(prompt('That is not a number, try again: '));
      i--;
    }
  }
}

function game3() {
  let favCompany = ['baker', 'enjoi', 'element', 'chocolate'];
  let guessCompany = prompt('What Skate Company do I like?');
  let guessAttempts = 6;
  let userCorrect = false;

  // need to user input in color array
  while (guessAttempts) {
    guessAttempts--;
    alert(`you have ${guessAttempts} attempts left.`);

    for (let i = 0; i < favCompany.length; i++) {
      if (guessCompany === 'baker') {
        userCorrect = true;
      }
    }
    if (userCorrect === true) {
      score++;
      userCorrect = false;
      alert('correct');
      break;
    } else if (guessAttempts > 0) {
      alert('sorry, guess again');
      guessCompany = prompt('What company do I like?');
    }
  }
}
