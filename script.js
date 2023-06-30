function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection)
    {
        return 0
    }

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissors")
        {
            return 1 // User won 
        }
        if (computerSelection == "paper")
        {
            return -1 // User lost 
        }        
    }

    if (playerSelection == "paper")
    {
        if (computerSelection == "scissors")
        {
            return -1 // User won 
        }
        if (computerSelection == "rock")
        {
            return 1 // User lost 
        }        
    }

    if (playerSelection == "scissors")
    {
        if (computerSelection == "paper")
        {
            return 1 // User won 
        }
        if (computerSelection == "rock")
        {
            return -1 // User lost 
        }        
    }    
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt()
        computerSelection = getComputerChoice()
        outcome = playRound(playerSelection, computerSelection)
        console.log("You chose " + playerSelection)
        console.log("The computer chose " + computerSelection)

        if (outcome == 1)
        {
            console.log("You won!")
        }
        if (outcome == -1)
        {
            console.log("You lost!")
        }
        if (outcome == 0)
        {
            console.log("You drew!")
        }
    }
}

const buttons = document.querySelectorAll('.opn');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    // alert(button.className.split(" ")[0]);
    let humanChoice = button.className.split(" ")[0]
    let compChoice = getComputerChoice()
    output = playRound(humanChoice, compChoice)
    let humanScore = document.getElementsByClassName("human-score")[0].innerText;
    let compScore = document.getElementsByClassName("computer-score")[0].innerText;
    let choiceStr = ` You chose ${humanChoice}, and the computer chose ${compChoice.toLowerCase()}.`
    if (output === 1)
    {
        document.getElementsByClassName("human-score")[0].innerText = Number(humanScore) + 1 
        document.getElementsByClassName("outcome-text")[0].innerText = "You won!" + choiceStr
    }
    if (output === -1)
    {
        document.getElementsByClassName("computer-score")[0].innerText = Number(compScore) + 1 
        document.getElementsByClassName("outcome-text")[0].innerText = "You lost!" + choiceStr
    }    
    if (output === 0)
    {
        document.getElementsByClassName("computer-score")[0].innerText = Number(compScore) + 1 
        document.getElementsByClassName("outcome-text")[0].innerText = "It's a tie!" + choiceStr
    }    
  });
});