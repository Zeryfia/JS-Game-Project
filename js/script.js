let DATA = {
  computerOption: '',
  playerOption: '',
  playerPoints: 0,
  computerPoints: 0
}

window.onload = () => {
  console.log('Rock, Paper, Scissors Game\n Type ROCK, PAPER OR SCISSORS\n In case you type a incorrect option you will lose the round');
  game(playRound)
}

const computerPlay = () => {
  // Get the random computer option
}
const playerSelection = () => {
  // Get the player selection with prompt
}

const playRound = (computerPlay, playerSelection) => {
  computerPlay();
  playerSelection();
  comparision(DATA)
}

const comparision = (DATA) => {
  // Compare the options and control the errors like cancel the propmt alert and wrong options example. (type endiinfwenfiw)

  // More examples
  /*} else if (DATA.playerOption == 'ROCK' && DATA.computerOption == 'SCISSORS') {
      console.log('You say ' + DATA.playerOption + '\n' + 'Computer says ' + DATA.computerOption + '\n' + 'You win!! ROCK beats SCISSORS')
      DATA.playerPoints++;
      console.log('Player: '+DATA.playerPoints+ '\n' + 'Computer: '+DATA.computerPoints)
  } */

}

const results = (DATA) => {
  // Check who is the winner and show the points of each one
  
}

const game = (playRound) => {
  for (let i = 0; i < 5; i++) {
      console.log('Type an option')
      playRound(computerPlay, playerSelection);
  }
  results(DATA)
}