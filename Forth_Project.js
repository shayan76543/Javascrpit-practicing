const randomNumber=parseInt(Math.random()*100+1)
const userInput=document.querySelector('#guessField');
const submitButton=document.querySelector('#subt');
const previousGuess=document.querySelector('.guesses');
const remaningGuesses=document.querySelector('.lastResult');
const ResultOfGuess=document.querySelector('.lowOrHi');
let Guesses=[];
let numberG=1;
let playGame=true;
if(playGame){
  addEventListener('click',function(e){
    e.preventDefault();
    Validation(userInput);
  })}
else

}

function Validation(){
  if (isNaN(userInput)){
    alert('please enter Valid Number')
  }else if (userInput<0){
    alert('please Entere value above the Zero')
  }else if(userInput>100){
    alert('please Entere Value under the age 1-100 range')
  }else{
  guesses.push(userInput)
  if (userInput===randomNumber){
    CleanUp()
    displayMessage(`Game over.random Number Was ${userInput}`)
    endGame()
  }
  else{
    CleanUp()
    check()
  }
  } 
}
function check(userInput){
  if (userInput===userInput){
    displayMessage('Your Guess are correct.Congratulate....')
    endGame()
  }
  else if (userInput>randomNumber){
    displayMessage('Your Guess Number are to Much High....')
  }else if (userInput<randomNumber){
    displayMessage('Your Guess Number are to Much low....')
  }
  }

function CleanUp(userInput){

}
function displayMessage(){

}
function StartNewGame(){

}
function endGame(){

}
