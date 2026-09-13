let RandomNumber=parseInt(Math.random()*100+1);
const UserInput=document.querySelector('#guessField');
const SubmitButton=document.querySelector('#subt');
const PreviousGuess=document.querySelector('.guesses') ;
const RemainingGuess=document.querySelector('.lastResult');
const LoworHigh=document.querySelector('.lowOrHi');
let GuessNum=1;
const GuessNumberList=[];
let playGame=true;
if (playGame){
  SubmitButton.addEventListener('click',function(e){
    e.preventDefault();
    const Guess_Number=UserInput.value;
    Validate_Guess(Guess_Number);
    
    check_Guess(Guess_Number);
  })
}
function Validate_Guess(Guess_Number){
  if (isNaN(Guess_Number)){
    alert('Entere Something which is Number')
  }else if (Guess_Number>100){
    alert('Entere number in the Range 1-100')
  }else if(Guess_Number<=0){
    alert('Entere number above the Zero')
  }
}
function check_Guess(Guess_Number){
  if (Guess_Number<RandomNumber){
    Display_Message('Too Low be high')
  }
  else if(Guess_Number>RandomNumber){
    display_Message('To High be Low')
  }
  
}
function CleanUp_Guess(){
  //
}
function Display_Message(){
  //
}
function End_Game(){
  //
}
function Start_Game(){
  //
}
