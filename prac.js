let RandomNumber=parseInt(Math.random()*100+1);
const UserInput=document.querySelector('#guessField');
const SubmitButton=document.querySelector('#subt');
const PreviousGuess=document.querySelector('.guesses') ;
const RemainingGuess=document.querySelector('.lastResult');
const LoworHigh=document.querySelector('.lowOrHi');
const result=document.querySelector('.lastResult')
const resultParas=document.querySelector('.resultParas')
const p=document.createElement('p');
const list=document.createElement('p');
let GuessNum=1;
let GuessNumberList=[];
let playGame=true;
if (playGame){
  SubmitButton.addEventListener('click',function(e){
    e.preventDefault();
    const Guess_Number=parseInt(UserInput.value);
    Validate_Guess(Guess_Number);
  })
}
function Validate_Guess(Guess_Number){
  if (isNaN(Guess_Number)){
    alert('Entere Something which is Number')
  }else if (Guess_Number>100){
    alert('Entere number in the Range 1-100')
  }else if(Guess_Number<=0){
    alert('Entere number above the Zero')
  }else{
    GuessNumberList.push(Guess_Number);
    if (GuessNumberList.length===10){

      list.innerHTML=`${GuessNumberList}`;
      CleanUp_Guess(Guess_Number);
      if (Guess_Number===RandomNumber){
        Display_Message('Congratulate You got it')
      }else{
        Display_Message('Game Over Your Attemp is Complete')
      }
      End_Game()
    }else{
      check_Guess(Guess_Number)
      CleanUp_Guess(Guess_Number)
    }
  }
}
function check_Guess(Guess_Number){
  if (Guess_Number<RandomNumber){
    Display_Message('Too Low be high')
  }
  else if(Guess_Number>RandomNumber){
    Display_Message('To High be Low')
  }
  else{
    Display_Message('Correct Guess You go it ')
    End_Game()
    CleanUp_Guess()
  }
}
function CleanUp_Guess(Guess_Number){
  UserInput.value='';
  GuessNum++;
  PreviousGuess.innerHTML+=`${Guess_Number} `;
  RemainingGuess.innerHTML=`${10-GuessNumberList.length}`
}
function Display_Message(message){
  LoworHigh.innerHTML=`${message}`
}
function End_Game(){
  UserInput.value='';
  UserInput.setAttribute('disabled','');
  playGame=false;
  p.classList.add('button');
  p.innerHTML=`<h2 id="NewGame">Start New Game</h2>`;
  resultParas.appendChild(p);
  Start_Game()
}
function Start_Game(){
  const StartButton=document.querySelector('#NewGame');
  StartButton.addEventListener('click',function(e){
    e.preventDefault();
    UserInput.removeAttribute('disabled');
    RemainingGuess.innerHTML='10';
    GuessNum=1;
    playGame=true;
    resultParas.removeChild(p);
    PreviousGuess.innerHTML='';
  })
}
