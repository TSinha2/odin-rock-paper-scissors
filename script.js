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