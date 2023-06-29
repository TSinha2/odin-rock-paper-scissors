function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase()
    computerSelection = getComputerChoice().toLowerCase()

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