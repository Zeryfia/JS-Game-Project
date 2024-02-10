https://zeryfia.github.io/JS-Game-Project/

# Rock Paper Scissors Battle Game Documentation

## Overview

The Rock Paper Scissors Battle game is a console-based JavaScript game where the player battles against an evil AI by choosing between rock, paper, or scissors. The game consists of a series of rounds, where the player and the AI make their selections, and the winner of each round is determined based on the classic rules of Rock Paper Scissors. The game continues until one side wins the best-of-five rounds

## Features

1. **Player Interaction**: The player interacts with the game by choosing their weapon (rock, paper, or scissors) through prompts.
2. **Randomized AI Selection**: The AI opponent randomly selects its weapon for each round.
3. **Game Logic**: The game logic determines the winner of each round based on the chosen weapons and displays the outcome to the player.
4. **Scorekeeping**: The game keeps track of the player's and AI's scores throughout the rounds.
5. **Game Cancellation**: The player can cancel the game at any time, and the game will gracefully exit.

## Functions

1. `computerPlay()`: Generates a random selection of rock, paper, or scissors for the AI opponent.
2. `validateInput(text, arr)`: Validates the player's input to ensure it is one of the accepted options (rock, paper, or scissors).
3. `playerOption()`: Allows the player to choose their weapon through prompts. Validates the input and handles cancellation.
4. `cancelGame()`: Displays a cancellation message and exits the game.
5. `playRound(playerSelection, computerSelection)`: Plays a single round of the game, determining the winner based on the selected weapons.
6. `displayFinalResults(playerPoints, computerPoints)`: Displays the final results of the game based on the player's and AI's scores.
7. `game()`: Controls the flow of the game, including rounds, scorekeeping, and game cancellation.
8. `playAgain()`: Prompts the player to play again or exit the game.

## Usage

1. Upon starting the game, the player is welcomed and provided with instructions.
2. The player chooses their weapon for each round through prompts.
3. The game displays the outcome of each round and updates the score.
4. After five rounds, the game declares the winner based on the final score.
5. The player can choose to play again or exit the game.

## Dependencies

The game does not have any external dependencies and can be played directly in the browser console.

## Conclusion

The Rock Paper Scissors Battle game provides an engaging and interactive experience for players, challenging them to outsmart the evil AI opponent and emerge victorious. With its intuitive gameplay and clear feedback, it offers hours of entertainment for players of all ages.
