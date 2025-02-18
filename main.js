//랜덤넘버 지정
//유저가 번호를 입력한다 그리고 go버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 <유저번호 DOWN!
//랜덤번호가 >유저번호 UP!

//RESET버튼을 누르면 게임이 리셋
//3번의 기회를 다쓰면 게임이 끝(더이상 추즉불가, 버튼이 DISABLE)

//유저가 1~100범위 밖에 숫자를 입력하면 알려준다, 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
let computerNumArea = document.getElementById("computer-number");

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
  userInput.value = "";
})

function pickRandomNumber(){
  computerNum = Math.floor(Math.random()*100)+1;
  computerNumArea.textContent = `CORRECT NUMBER: ${computerNum}`;
  console.log("CORRECT",computerNum);
}

function play () {
  let userValue = userInput.value

  if(userValue<0 || userValue>100) {
    resultArea.textContent = "Please enter a number between 1~100"
    return;
  }
  
  if(history.includes(userValue)) {
    resultArea.textContent = "You've already entered this number. Please enter a different number."
    return;
  }

  chances --;
  chanceArea.textContent = `REMAINING : ${chances} TIMES`;
  console.log("chance", chances);

   if(userValue < computerNum) {
    resultArea.textContent = "UP▲";
    resultArea.style.color = "black";
  } else if (userValue > computerNum){
    resultArea.textContent = "DOWN▼";
    resultArea.style.color = "black";
  } else {
    resultArea.textContent= "CORRECT!";
    resultArea.style.color = "blue";
    gameOver = true
  }

  history.push(userValue)
  console.log(history)

  if(chances<1) {
    gameOver = true
  }

  if(gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNumber();
  resultArea.textContent = "THIS IS THE RESULT";
  resultArea.style.color = "black";
  chances = 3;
  gameOver = false;
  playButton.disabled = false;
  history = [];
  chanceArea.textContent = `REMAINING : ${chances} TIMES`;
}

pickRandomNumber()

