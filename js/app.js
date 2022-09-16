'use strict';

//declare variables and arrays
let userScore = 0;
let numGameGuesses = 4;
let videoGameGuesses = 6;
let usersName = '';


const steamLibrary = ['among us', 'the escapists', 'factorio', 'the forest', 'grand thevy auto v', 'halo infinite', 'halo: the master chief collection', 'lost arc', 'microsoft flight sumulator', 'mordhau', 'new world', 'path of exile', 'project zomboid', 'rimworld', 'satisfactory', 'sea of thieves', 'subspace continuum', 'terraria', 'valheim', 'we happy few'];


function greet() {
  usersName = prompt('What is your name?').toLowerCase().split('');
  usersName[0] = usersName[0].toUpperCase();
  usersName = usersName.join('');
  alert(`Welcome to my site ${usersName}`);
  return usersName;
}

//Implementing first 5 questions as objects within an array and using a for loop

let invalid = 'Invalid response!';

// intitializing array of questions
const questions = [
  ['Do I have any pets? yes or no?','y','n', 'Correct! I have a cat!', 'Incorrect! I have a cat!'],
  ['Do I a daughter? yes or no?','y', 'n', 'Correct! I have a daughter!','Incorrect! I have a daughter!'],
  ['Do I drive a truck? yes or no?','n', 'y', 'Correct! I have a car!','Incorrect! I have a car!'],
  ['Do I like sports? yes or no?','n', 'y', 'Correct! I have little interest with sports!','Incorrect! I have little interest with sports!'],
  ['Have I ever met the President of the United States yes or no?','n', 'y','I have never met the President!','Incorrect! I have never met the President!']
];

// Creating function
function firstFive() {
  for (let i = 0; i < questions.length; i++) {
    let ans = prompt(questions[i][0]).toLowerCase();
    if (ans[0] === questions[i][1]) {
      alert(questions[i][3]);
      userScore++;
    } else if (ans[0] === questions[i][2]) {
      alert(questions[i][4]);
    } else {
      alert(invalid);
      //reset the question due to invalid input
      i--;
    }
  }
}

//question 6
function numberGame() {

  while (numGameGuesses >= 0) {

    let guessingGame = Number(prompt(`You have ${numGameGuesses} guesses to answer how many musical instruments I own.`));
    if (isNaN(guessingGame)) {
      alert('Not a valid number!');
    } else if (guessingGame === 12) {
      userScore++;
      alert('12 is correct!');
      break;
    } else if (guessingGame < 12) {
      alert('Higher!');
    } else if (guessingGame > 12) {
      alert('Lower!');
    }
    numGameGuesses--;
    if (numGameGuesses === 0) {
      alert('I own 12 musical instruments!');
      break;
    }
  }
}

//question 7
function guessGame() {
  while (videoGameGuesses > 0) {
    let steamGuess = prompt(`You have ${videoGameGuesses} guesses to name a game thats in my Steam Library`).toLowerCase();
    let correctAnswer;
    for (let i = 0; i < steamLibrary.length; i++) {
      // console.log(`compairing ${steamGuess} to ${steamLibrary[i]}`);
      if (steamGuess === steamLibrary[i]) {
        userScore++;
        correctAnswer = steamLibrary[i];
        alert(`${correctAnswer} is correct!`);
        videoGameGuesses = 0;
        break;
      }
    }
    if (steamGuess !== correctAnswer) {
      videoGameGuesses--;
      alert(`${steamGuess} is incorrect`);
    }
  }

  alert('Click "OK" to view my entire Steam Library');
  alert(steamLibrary);
}

// THE INVOCATION SECTION
let nameReminder = greet();
firstFive();
numberGame();
guessGame();



alert(`Thanks for visiting my site ${nameReminder} your score is ${userScore} out of 7`);
