function computerPlay() 
{
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playerPlay()
{
    let answer = prompt("What is your choice: Rock, Paper or Scissors?").toLowerCase();    
    return answer;
}

function playRound()
{ 
    let computerChoice = computerPlay();
    let playerChoice = playerPlay();
    let result;
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    let roundResult;
    while (round <=5 ){
        roundResult = playRound();
        round++;
        if (roundResult === "You win") playerScore++;    
        if (roundResult === "You lose") computerScore++;
    }

    if (playerScore > computerScore) {
            finalResult = "Wow, you won!!";
    }
    else if (playerScore === computerScore) {
            finalResult = "It's a tie!";
    }
    else {
        finalResult = "Oops, you lost... try again!";
    }

return finalResult;
}
    

game();