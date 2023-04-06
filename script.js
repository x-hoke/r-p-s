const valuesArr = ["ROCK","PAPER","SCISSORS"]
const playerSelection = prompt(`Take your choice:PAPER,ROCK,SCISSORS`)

console.log(playerSelection)
const computerSelection = getComputerChoise()
function playerSelectionUp(playerSelection){
    return playerSelection.toLocaleUpperCase
}

function singleRound(playerSelection,computerSelection){
    if((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection ==="ROCK")){
        console.log(`You win your ${playerSelection} beats computers ${computerSelection}`)
    }else if((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection ==="PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        console.log(`You lose computer picks ${computerSelection} what beats your ${playerSelection}`)
    }else if(playerSelection === computerSelection){
        console.log(`Your selection is ${playerSelection} , well, computer choose ${computerSelection} too, its draw `)
    }
   
}
function getComputerChoise(){
    const random = Math.floor(Math.random() * valuesArr.length);
    console.log(valuesArr[random])
    return (valuesArr[random])
        
}



singleRound(playerSelection,computerSelection)



