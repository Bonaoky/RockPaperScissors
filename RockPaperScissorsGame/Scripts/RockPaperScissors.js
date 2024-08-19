let score = JSON.parse(localStorage.getItem('score')) || {

  wins: 0,

  losses: 0,

  ties: 0
};
updateScoreElement();

/* if (!score) {
  score = {

    wins: 0,

    losses: 0,

    ties: 0
  };
}
  */

function pickComputerMove() {

  const randomNumber = Math.random();

    let computerMove = ' ';


    if (randomNumber >=0 && randomNumber <1/3) {

        computerMove = 'rock';

      }else if (randomNumber >=1/3 && randomNumber < 2/3) {

        computerMove = 'paper';

      }else if (randomNumber >=2/3 && randomNumber <1) {

        computerMove = 'Scissors';
      }

    return computerMove;
}

  function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = ' ';

    if (playerMove === 'paper') {

        if (computerMove === 'rock') {
        result = 'You win.';
      }else if (computerMove === 'paper') {
        result = 'Tie.';
      }else if (computerMove === 'Scissors') {
        result= 'You lose.';
      }

    }else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
      result = 'Tie.';
      }else if (computerMove === 'paper') {
        result = 'You lose.';
      }else if (computerMove === 'Scissors') {
        result= 'You win.';
      }

    }else if (playerMove === 'Scissors') {

      if (computerMove === 'rock') {
      result = 'You lose.';
      }else if (computerMove === 'paper') {
        result = 'You win.';
      }else if (computerMove === 'Scissors') {
        result= 'Tie.';
      }

    }

    if (result === 'You win.' ) {

      score.wins += 1;

    }else if (result === 'You lose.') {

      score.losses += 1;

    }else if (result === 'Tie.') {

      score.ties += 1;
    }

    

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `${result}`;

    document.querySelector('.js-moves').innerHTML = ` You
<img src="Images/${playerMove}-emoji.png" class="move-icon">
<img src="Images/${computerMove}-emoji.png" class="move-icon">
Computer`;

    

    /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)*/
  }

  function updateScoreElement() {

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
