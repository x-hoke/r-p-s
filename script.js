const valuesArr = ["ROCK","PAPER","SCISSORS"]
let playerWins = 0;
let computerWins = 0;
let playerSelection;

const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const rockButton = document.querySelector('#rock')
paperButton.onclick = () => {
    playerSelection = 'PAPER'
    const computerSelection = getComputerChoise()
    resultDiv.textContent = ''
    singleRound(playerSelection,computerSelection)
    console.log(`you:${playerWins}, computer :${computerWins}`)
    roundCheck(playerWins,computerWins)
}
scissorsButton.onclick = () =>{
    playerSelection = 'SCISSORS'
    const computerSelection = getComputerChoise()
    resultDiv.textContent = ''
    singleRound(playerSelection,computerSelection)
    console.log(`you:${playerWins}, computer :${computerWins}`)
    roundCheck(playerWins,computerWins)
    
} 
rockButton.onclick = () => {
    playerSelection = 'ROCK'
    const computerSelection = getComputerChoise()
    resultDiv.textContent = ''
    singleRound(playerSelection,computerSelection)
    console.log(`you:${playerWins}, computer :${computerWins}`)
    roundCheck(playerWins,computerWins)
}

const resultDiv = document.querySelector('#result')
    console.log = function(message) {
    resultDiv.innerHTML += message + '<br>'
  };


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
    const random = Math.floor(Math.random() * valuesArr.length)
    return (valuesArr[random])
        
}
function roundCheck(playerWins,computerWins){
    if (playerWins === 5 || computerWins === 5) {
        console.log(`Game over!`)
        if (playerWins > computerWins) {
          console.log(`You win the game!`)
        } else if (playerWins < computerWins) {
          console.log(`You lose the game.`)
        } else {
          console.log(`It's a tie!`)
        }
        paperButton.disabled = true;
        rockButton.disabled = true;
        scissorsButton.disabled = true;
             
      }
}



/*game()
if(playerWins>computerWins){
    console.log(`Your score: ${playerWins}, Computer score: ${computerWins}, You win, Congratz!!!`)
}else if(playerWins<computerWins){
    console.log(`Player score: ${playerWins}, Computer score: ${computerWins}, Computer beats you, emoji:sadge`)
}else{
    console.log(`Its tie`)
}
*/
/*function game(){
    
    for(let i = 0;i<5;i++){
        const playerSelectionInitial = prompt(`Take your choice:PAPER,ROCK,SCISSORS`)
    const playerSelection = playerSelectionInitial.toUpperCase()
    const computerSelection = getComputerChoise()
    singleRound(playerSelection,computerSelection)
    console.log(`you:${playerWins}, computer :${computerWins}`)
    }
    
}*/



