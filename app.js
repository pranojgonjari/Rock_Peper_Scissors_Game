let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {

    console.log("game was draw.");
    msg.innerText = "Game was draw play again";
    msg.style.backgroundColor = "#011638";
};

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){
        userscore++;
        userscorePara.innerHTML = userscore;
        msg.innerText = `You Win...! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorePara.innerHTML = compscore;
        msg.innerText = `You Lost...! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
  //  console.log("user choice =", userChoice);
    //genrate comp choice
    const compChoice = genCompChoice();
    //console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        
        drawGame();
    } else{

        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
        choice.addEventListener("click",() => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
});