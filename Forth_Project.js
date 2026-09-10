let randomNumber=parseInt(Math.random()*100+1)
const userInput= document.querySelector('#guessField');
const submitButton=document.querySelector('#subt');
const previousGuess=document.querySelector('.guesses');
const remaningGuesses=document.querySelector('.lastResult');
const ResultOfGuess=document.querySelector('.lowOrHi');
const p=document.createElement('p');
let Guesses=[];
let numberG=1;
let playGame=true;
if(playGame){
  submitButton.addEventListener('click',function(e){
    e.preventDefault();
    if (!playGame){
      return;
    }
    const guess=parseInt(userInput.value)
    Validation(guess);
  })}
function Validation(guess){
  if (isNaN(guess)){
    alert('please enter Valid Number')
  }else if (guess<0){
    alert('please Entere value above the Zero')
  }else if(guess>100){
    alert('please Entere Value under the age 1-100 range')
  }else{
  Guesses.push(guess)
  if (guess === randomNumber) {
    CleanUp(guess);
    displayMessage('Your guess is correct! Congratulations!');
    endGame();
  }
  else if (numberG===10){
    CleanUp(guess)
    displayMessage(`Game over.random Number Was ${randomNumber}`)

    endGame()
  }
  else{
    CleanUp(guess)
    check(guess)
  }
  } 
}
function check(guess){
  if (guess===randomNumber){
    displayMessage('Your Guess are correct.Congratulate....')
    endGame()
  }
  else if (guess>randomNumber){
    displayMessage('Your Guess Number are to Much High....')
  }else if (guess<randomNumber){
    displayMessage('Your Guess Number are to Much low....')
  }
  }

function CleanUp(guess){
  previousGuess.innerHTML+=`${guess} `;
  
  userInput.value='';
  remaningGuesses.innerHTML=`${10-numberG}`
  numberG++
}
function displayMessage(message){
  ResultOfGuess.innerHTML=`<h2>${message}</h2>`
}
function StartNewGame(){
  const newGame=document.querySelector('#newGame');
  newGame.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    numberG=1;   
    Guesses=[];
    playGame=true;
    previousGuess.innerHTML='';
    remaningGuesses.innerHTML=10;
    userInput.removeAttribute('disabled')
    ResultOfGuess.removeChild(p);
  })
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  playGame=false;
  p.classList.add('button');
  p.innerHTML='<h2 id="newGame">Start NewGame</h2>';
  ResultOfGuess.appendChild(p);
  StartNewGame();
}
