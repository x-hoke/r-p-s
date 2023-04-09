const valuesArr = ["ROCK","PAPER","SCISSORS"]
let playerWins = 0;
let computerWins = 0;

function game(){
    
    for(let i = 0;i<5;i++){
        const playerSelectionInitial = prompt(`Take your choice:PAPER,ROCK,SCISSORS`)
    const playerSelection = playerSelectionInitial.toUpperCase()
    const computerSelection = getComputerChoise()
    singleRound(playerSelection,computerSelection)
    console.log(`you:${playerWins}, computer :${computerWins}`)
    }
    
}




function singleRound(playerSelection,computerSelection){
    if((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection ==="ROCK")){
        console.log(`You win your ${playerSelection} beats computers ${computerSelection}`)
        playerWins++;
    }else if((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection ==="PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        console.log(`You lose computer picks ${computerSelection} what beats your ${playerSelection}`)
        computerWins++
    }else if(playerSelection === computerSelection){
        console.log(`Your selection is ${playerSelection} , well, computer choose ${computerSelection} too, its draw `)
        
    }
   
}
function getComputerChoise(){
    const random = Math.floor(Math.random() * valuesArr.length);
    return (valuesArr[random])
        
}



game()
if(playerWins>computerWins){
    console.log(`Your score: ${playerWins}, Computer score: ${computerWins}, You win, Congratz!!!`)
}else if(playerWins<computerWins){
    console.log(`Player score: ${playerWins}, Computer score: ${computerWins}, Computer beats you, emoji:sadge`)
}else{
    console.log(`Its tie`)
}




