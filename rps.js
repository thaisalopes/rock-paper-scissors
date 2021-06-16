let playerChoice = "";
let computerChoice = "";
let result = "";
let i = 0;
function computerPlay() 
{
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    computerChoice = choices[random];
    return computerChoice;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (i >= 5) {
            resetGame()
            playerChoice = button.id;
            computerPlay();
            playRound();
            console.log (playerChoice);
            console.log (computerChoice);
            div.textContent += " " + result;
            i++;
            game();
        }
        else {
            playerChoice = button.id;
            computerPlay();
            playRound();
            console.log (playerChoice);
            console.log (computerChoice);
            div.textContent += " " + result;
            i++;
            game();
        }
    });
});
  
const div = document.querySelector('div');

function playRound() {   
    if(computerChoice === playerChoice) {
        result = "It's a tie";
    }
    else if (computerChoice === "rock") {
        if (playerChoice === "paper") {
            result = "You win";
        }
        else {
            result = "You lose";
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
            result = "You win";
        }
        else {
            result = "You lose";
        }
    }
    else {
        if(playerChoice === "rock") {
            result = "You win";
        }
        else {
            result = "You lose";
        }
    }
   return result;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult = "";
    finalResult = "";
    div.textContent = "";
    i = 0;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult ="";
    let finalResult = "";
    if (i <5 ){
        if (roundResult === "You win") playerScore++;    
        if (roundResult === "You lose") computerScore++;
    }
    else {
        if (playerScore > computerScore) {
            finalResult = "Wow, you won!!";
        }
        else if (playerScore === computerScore) {
            finalResult = "It's a tie!";
        }
        else {
        finalResult = "Oops, you lost... try again!";
        }
        div.textContent += " Final Result = " + finalResult;
        
return finalResult;
    }
}