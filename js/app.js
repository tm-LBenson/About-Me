'use strict';

//declare variables and arrays
let userScore = 0;
let numGameGuesses = 4;
let videoGameGuesses = 6;
let usersName = prompt('What is your name?');
let instruments = 12;
const steamLibrary = ['among us', 'the escapists', 'factorio', 'the forest', 'grand thevy auto v', 'halo infinite', 'halo: the master chief collection', 'lost arc', 'microsoft flight sumulator', 'mordhau', 'new world', 'path of exile', 'project zomboid', 'rimworld', 'satisfactory', 'sea of thieves', 'subspace continuum', 'terraria', 'valheim', 'we happy few'];

const questions = [
  //Question 1 and answers for question 1
  ['Do I have any pets? yes or no?','y','n', 'Correct! I have a cat!', 'Incorrect! I have a cat!'],
  //Question 2 and answers for question 2
  ['Do I a daughter? yes or no?','y', 'n', 'Correct! I have a daughter!','Incorrect! I have a daughter!'],
  //Question 3 and answers for question 3
  ['Do I drive a truck? yes or no?','n', 'y', 'Correct! I have a car!','Incorrect! I have a car!'],
  //Question 4 and answers for question 4
  ['Do I like sports? yes or no?','n', 'y', 'Correct! I have little interest with sports!','Incorrect! I have little interest with sports!'],
  //Question 5 and answers for question 5
  ['Have I ever met the President of the United States yes or no?','n', 'y','I have never met the President!','Incorrect! I have never met the President!']
];

function greet(usersName) {
  //Get the users name, and capatalize the first letter of their name
  usersName = usersName.toLowerCase().split('');
  usersName[0] = usersName[0].toUpperCase();
  usersName = usersName.join('');
  alert(`Welcome to my site ${usersName}`);
}

// Creating function
function firstFive() {
  /*Iterate through the questions array, reading each question.
  Alert response to user based on reply stored in array.*/
  for (let i = 0; i < questions.length; i++) {
    let ans = prompt(questions[i][0]).toLowerCase();
    if (ans[0] === questions[i][1]) {
      alert(questions[i][3]);
      userScore++;
    } else if (ans[0] === questions[i][2]) {
      alert(questions[i][4]);
    } else {
      alert('Invalid response!');
      //reset the question due to invalid input(subtract 1 from current i iteration)
      i--;
    }
  }
}

//question 6
function numberGame(instruments) {
/*Ask the user how many instruments I own, and compair to how many instruments
in the instruments variable. Give the user a number a guesses based on the numGameGuesses variable */
  while (numGameGuesses >= 0) {

    let guessingGame = Number(prompt(`You have ${numGameGuesses} guesses to answer how many musical instruments I own.`));
    if (isNaN(guessingGame)) {
      alert('Not a valid number!');
    } else if (guessingGame === instruments) {
      userScore++;
      alert('12 is correct!');
      break;
    } else if (guessingGame < instruments) {
      alert('Higher!');
    } else if (guessingGame > instruments) {
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
  /*Have the user guess a game title in my steam library, give them a number of guesses based on
  the variable videoGameGuesses */
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

// function viewSteam(steamLibrary){

// }

// THE INVOCATION SECTION
greet(usersName);
firstFive();
numberGame(instruments);
guessGame();
// viewSteam(steamLibrary);


alert(`Thanks for visiting my site ${usersName} your score is ${userScore} out of 7`);
