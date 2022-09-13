'use scrict';
//each variable is created to be falsey for the while loop
let petsQuestion = '';
let childQuestion = '';
let truckQuestion = '';
let sportsQuestion = '';
let presQuestion = '';
// check to see if the question is answered
while(!petsQuestion){
// get user input through a prompt and use a method to turn input to lowercase
  petsQuestion = prompt('Do I have any pets? yes or no?').toLowerCase();
  console.log(`the user input was ${petsQuestion}`);
  // check if first letter if user input is the letter y
  if (petsQuestion[0] === 'y'){
    alert('Correct! I have a cat!');
  // check if the first letter of user input is the letter n
  }else if(petsQuestion[0] === 'n'){
    alert('Incorrect! I have a cat!');
  // if the letter 'n' or 'y' was not inputted as the first letter, reset the user answer to remain falsey
  }else{
    petsQuestion = '';
    alert('Invalid response');
  }
}

while(!childQuestion){
  childQuestion = prompt('Do I a daughter? yes or no?').toLowerCase();
  console.log(`the user input was ${childQuestion}`);
  if (childQuestion[0] === 'y'){
    alert('Correct! I have a daughter!');
  }else if(childQuestion[0] === 'n'){
    alert('Incorrect! I have a daughter!');
  }else{
    childQuestion = '';
    alert('Invalid response');
  }
}

while(!truckQuestion){
  truckQuestion = prompt('Do I drive a truck? yes or no?').toLowerCase();
  console.log(`the user input was ${truckQuestion}`);
  if (truckQuestion[0] === 'y'){
    alert('Incorrect! I have a car!');
  }else if(truckQuestion[0] === 'n'){
    alert('Correct! I have a car!');
  }else{
    truckQuestion = '';
    alert('Invalid response');
  }
}

while(!sportsQuestion){
  sportsQuestion = prompt('Do I like sports? yes or no?').toLowerCase();
  console.log(`the user input was ${sportsQuestion}`);
  if (sportsQuestion[0] === 'y'){
    alert('Incorrect! I have little interest with sports!');
  }else if(sportsQuestion[0] === 'n'){
    alert('Correct! I have little interest with sports!');
  }else{
    sportsQuestion = '';
    alert('Invalid response');
  }
}

while(!presQuestion){
  presQuestion = prompt('Have I ever met the President of the United States yes or no?').toLowerCase();
  console.log(`the user input was ${presQuestion}`);
  if (presQuestion[0] === 'y'){
    alert('Incorrect! I have never met the President!');
  }else if(presQuestion[0] === 'n'){
    alert('Correct! I have never met the President!');
  }else{
    presQuestion = '';
    alert('Invalid response');
  }
}
