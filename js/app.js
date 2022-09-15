'use scrict';
let petsQuestion = '';
let childQuestion = '';
let truckQuestion = '';
let sportsQuestion = '';
let presQuestion = '';
let userScore = 0;
let numGameGuesses = 4;
let videoGameGuesses = 6;
let usersName = prompt('What is your name?').toLowerCase().split('');
const steamLibrary = ['among us', 'the escapists', 'factorio', 'the forest', 'grand thevy auto v', 'halo infinite', 'halo: the master chief collection', 'lost arc', 'microsoft flight sumulator', 'mordhau', 'new world', 'path of exile', 'project zomboid', 'rimworld', 'satisfactory', 'sea of thieves', 'subspace continuum', 'terraria', 'valheim', 'we happy few'];
usersName[0] = usersName[0].toUpperCase();
usersName = usersName.join('');
// console.log(usersName);
alert(`Welcome to my site ${usersName}`);


//Implementing first 5 questions as objects within an array and using a for loop

let invalid = 'Invalid response!';

// intitializing objects

let question1 = {
  question: 'Do I have any pets? yes or no?',
  right1: 'yes',
  right2: 'y',
  correct: 'Correct! I have a cat!',
  wrong1: 'no',
  wrong2: 'n',
  incorrect: 'Incorrect! In have a cat!'
};

let question2 = {
  question: 'Do I a daughter? yes or no?',
  right1: 'yes',
  right2: 'y',
  correct: 'Correct! I have a daughter!',
  wrong1: 'no',
  wrong2: 'n',
  incorrect: 'Incorrect! I have a daughter!'
};

let question3 = {
  question: 'Do I drive a truck? yes or no?',
  right1: 'no',
  right2: 'n',
  correct: 'Correct! I have a car!',
  wrong1: 'yes',
  wrong2: 'y',
  incorrect: 'Incorrect! I have a car!'
};

let question4 = {
  question: 'Do I like sports? yes or no?',
  right1: 'no',
  right2: 'n',
  correct: 'Correct! I have little interest with sports!',
  wrong1: 'yes',
  wrong2: 'y',
  incorrect: 'Incorrect! I have little interest with sports!'
};

let question5 = {
  question: 'Have I ever met the President of the United States yes or no?',
  right1: 'no',
  right2: 'n',
  correct: 'I have never met the President!',
  wrong1: 'yes',
  wrong2: 'y',
  incorrect: 'Incorrect! I have never met the President!'
};


// intitializing array of objects
let fiveQuestion = [question1, question2, question3, question4, question5];

// Creating function
function firstFive() {
  for (let i = 0; i < fiveQuestion.length; i++) {
    let ans = prompt(fiveQuestion[i].question).toLowerCase();
    if (ans === fiveQuestion[i].right1 || ans === fiveQuestion[i].right2) {
      alert(fiveQuestion[i].correct);
    } else if (ans === fiveQuestion[i].wrong1 || ans === fiveQuestion[i].wrong2) {
      alert(fiveQuestion[i].incorrect);
    } else {
      alert(invalid);
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


firstFive();




alert(`Thanks for visiting my site ${usersName} your score is ${userScore} out of 7`);
