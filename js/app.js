'use scrict';
let petsQuestion = '';
let childQuestion = '';
let truckQuestion = '';
let sportsQuestion = '';
let presQuestion = '';
let userScore = 0;
let numGameGuesses = 4;

let usersName = prompt('What is your name?').toLowerCase().split('');
usersName[0] = usersName[0].toUpperCase();
usersName = usersName.join('');
// console.log(usersName);
alert(`Welcome to my site ${usersName}`);

while(!petsQuestion){
  petsQuestion = prompt('Do I have any pets? yes or no?').toLowerCase();
  if (petsQuestion[0] === 'y'){
    userScore++;
    alert('Correct! I have a cat!');
  }else if(petsQuestion[0] === 'n'){
  // console.log('Incorrect! I have a cat!');
    alert('Incorrect! I have a cat!');
  }else{
    petsQuestion = '';
    // console.log('Invalid response');
    alert('Invalid response');
  }
}

while(!childQuestion){
  childQuestion = prompt('Do I a daughter? yes or no?').toLowerCase();
  if (childQuestion[0] === 'y'){
    userScore++;
    // console.log('Correct! I have a daughter!');
    alert('Correct! I have a daughter!');
  }else if(childQuestion[0] === 'n'){
    // console.log('Incorrect! I have a daughter!');
    alert('Incorrect! I have a daughter!');
  }else{
    childQuestion = '';
    // console.log('Invalid response');
    alert('Invalid response');
  }
}

while(!truckQuestion){
  truckQuestion = prompt('Do I drive a truck? yes or no?').toLowerCase();
  if (truckQuestion[0] === 'y'){
    // console.log('Incorrect! I have a car!');
    alert('Incorrect! I have a car!');
  }else if(truckQuestion[0] === 'n'){
    userScore++;
    // console.log('Correct! I have a car!');
    alert('Correct! I have a car!');
  }else{
    truckQuestion = '';
    // console.log('Invalid response');
    alert('Invalid response');
  }
}

while(!sportsQuestion){
  sportsQuestion = prompt('Do I like sports? yes or no?').toLowerCase();
  if (sportsQuestion[0] === 'y'){
    // console.log('Incorrect! I have little interest with sports!');
    alert('Incorrect! I have little interest with sports!');
  }else if(sportsQuestion[0] === 'n'){
    userScore++;
    // console.log('Correct! I have little interest with sports!');
    alert('Correct! I have little interest with sports!');
  }else{
    sportsQuestion = '';
    // console.log('Invalid response');
    alert('Invalid response');
  }
}

while(!presQuestion){
  presQuestion = prompt('Have I ever met the President of the United States yes or no?').toLowerCase();
  if (presQuestion[0] === 'y'){
    // console.log('Incorrect! I have never met the President!');
    alert('Incorrect! I have never met the President!');
  }else if(presQuestion[0] === 'n'){
    userScore++;
    // console.log('Correct! I have never met the President!');
    alert('Correct! I have never met the President!');
  }else{
    presQuestion = '';
    // console.log('Invalid response');
    alert('Invalid response');
  }
}


let gameOn = true;
while(gameOn === true && numGameGuesses >= 0){

  let guessingGame = Number(prompt(`You have ${numGameGuesses} guesses to answer how many musical instruments I own.`));
  if (isNaN(guessingGame)){
    alert('Not a valid number!');
  }else if(guessingGame === 12){
    userScore++;
    alert('12 is correct!');
    gameOn = false;
  }else if(guessingGame < 12){
    alert('Higher!');
  }else if(guessingGame > 12){
    alert('Lower!');
  }
  numGameGuesses--;
  if (numGameGuesses === 0){
    alert('I own 12 musical instruments!');
    break;
  }
}


alert(`Thanks for visiting my site ${usersName} your score is ${userScore}!`);
