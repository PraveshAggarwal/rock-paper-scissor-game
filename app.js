let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-cond");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);  /* math.random() 0 se 1 ke beach random number deta h jese he isse 3 se multiply krenge iske range 0 se 2 ho jayge  && math.floor se value integer meh ayge decimal meh nahi  0, 1, 2 meh se koi be value aa jayege */
    return options[randIdx];  /* randIdx ke value ko hum array ke index ke tarah use krneg  array jo options ke andr store h*/
}

const drawGame = () => {
    drawScore ++
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
    
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice(); /* it give computer choice*/

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false: true;  /* yeh value userWin meh update ho jayge*/
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false: true;
        }
        else{
            userWin = compChoice ==="rock" ? false: true;  
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


//  To generate choice of user
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice =  choice.getAttribute("id");  /* to select id of our choice*/
        playGame(userChoice);
    });
});