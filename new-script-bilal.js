const computerPlay = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const logAndAlert = (message) => {
  console.log(message);
  alert(message);
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === null) {
    return 'cancel';
  }

  playerSelection = playerSelection.toLowerCase();

  const outcomes = {
    rock: { win: 'scissors', lose: 'paper' },
    paper: { win: 'rock', lose: 'scissors' },
    scissors: { win: 'paper', lose: 'rock' }
  };

  logAndAlert(`You wield ${playerSelection} with the hope of defeating the evil AI's ${computerSelection}!`);

  if (playerSelection === computerSelection) {
    logAndAlert('It\'s a draw! Neither side prevails!');
    return 'tie';
  } else if (outcomes[playerSelection].win === computerSelection) {
    logAndAlert(`Congratulations! Your ${playerSelection} crushes the evil AI's ${computerSelection}!`);
    return 'win';
  } else {
    logAndAlert(`Oh no! The evil AI's ${computerSelection} dominates your ${playerSelection}!`);
    return 'lose';
  }
};

const calculateResult = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return 'Victory! With your indomitable spirit, you have overcome the AI and claimed the Artifact of Victory!';
  } else if (playerScore < computerScore) {
    return 'Alas! The AI has proven too powerful this time. But fear not, for the battle continues until the Artifact of Victory is reclaimed!';
  } else {
    return 'It\'s a stalemate! Neither side emerges victorious. The battle rages on!';
  }
};

const cancelGame = () => {
  logAndAlert('The game has been canceled. Farewell!');
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    logAndAlert(`Round ${round} begins!`);

    let playerSelection = prompt('Choose your weapon: Rock, Paper, or Scissors');
    while (playerSelection !== null && !['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
      playerSelection = prompt('Invalid choice! Please choose again: Rock, Paper, or Scissors');
    }
    
    if (playerSelection === null) {
      cancelGame();
      return;
    }

    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);

    if (result === 'win') {
      playerScore++;
    } else if (result === 'lose') {
      computerScore++;
    }
  }

  logAndAlert(`The battle rages on! Your score: ${playerScore}, AI's score: ${computerScore}`);

  const resultMessage = calculateResult(playerScore, computerScore);
  logAndAlert(resultMessage);

  playAgain();
};

const playAgain = () => {
  const playAgain = confirm('Do you dare to challenge the AI once more in your quest for the Artifact of Victory?');
  if (playAgain) {
    logAndAlert('Prepare yourself for another round of battle!');
    game();
  } else {
    logAndAlert('Thank you for your bravery, warrior. Until we meet again on the battlefield! Farewell!');
  }
};

logAndAlert("Welcome, brave warrior, to the Rock Paper Scissors Battle!");
logAndAlert(`In a world ravaged by the forces of darkness, a malevolent AI has risen to power, enslaving humanity and plunging the world into chaos.

But there is hope. Legends speak of an ancient artifact, the Artifact of Victory, said to possess the power to defeat the AI and restore peace to the land.

You, courageous hero, have been chosen to go on a perilous journey to reclaim the artifact and free humanity from the AI's tyranny.

Prepare yourself for a series of battles against the AI's minions. Only by emerging victorious in a best-of-five duel can you hope to claim the artifact.`);

logAndAlert(`Instructions:

1. Choose your weapon: Rock, Paper, or Scissors.

2. The AI will also choose its weapon.

3. The winner of each round is determined by the rules of Rock Paper Scissors.

4. Whoever wins the best-of-5 is declared the overall winner.`);

logAndAlert(`Are you ready to face the challenge and reclaim the Artifact of Victory? Let the battle begin!`);

game();
