//const valuesArr = ["ROCK","PAPER","SCISSORS"]
//const playerSelection ="ROCK"
//const computerSelection = //getComputerChoise()
function singleRound(playerSelection,computerSelection){
    if((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection ==="ROCK")){
        console.log(`You win ${playerSelection} beats ${computerSelection}`)
    }else if((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection ==="PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        console.log(`You lose ${computerSelection} beats ${playerSelection}`)
    }else if(playerSelection === computerSelection){
        console.log(`Your selection is ${playerSelection} , well, computer choose ${computerSelection} too, its draw `)
    }
   
}
/*function getComputerChoise(){
    const random = Math.floor(Math.random() * valuesArr.length);
    console.log(valuesArr[random]);
    return (valuesArr[random])
    
}*/



singleRound("SCISSORS","SCISSORS")



