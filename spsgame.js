let userScore= 0;
let compScore= 0; 
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice =() => {
    const options= ["rock", "paper", "scissors"];
    const randomIdx= Math.floor(Math.random() *3);
    return options[randomIdx];
 //rock,paper,scissors are selected randomly
}
const drawGame = ()=>{
    msg.innerText= "DRAW. Play Again.";
    msg.style.backgroundColor= "#081b31";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `You won. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }

}
const playGame = (userChoice) => {
    console.log("user's choice= ", userChoice);
    //generate computer's choice 
    const compChoice = genCompChoice();
    console.log("comp's choice= ", compChoice);

    if( userChoice === compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin= true;
        if( userChoice=== "rock"){ //paper,scissors
            userWin= compChoice ==="paper"? false: true;
        }
        else if(userChoice=== "paper"){// scissors, rock
            userWin= compChoice === "scissors"? false: true;
        }
        else{//rock, paper
            userWin= compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
}) 