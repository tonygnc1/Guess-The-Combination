const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');
let score = 0;
let gamePlay = false;
button.addEventListener('click', function() {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    gameArea.innerHTML = '';
    maker();
    message.innerHTML = 'Guess the Combination';
    button.innerHTML = 'Check Combo';
  } else {
    score++;
    message.innerHTML = 'Guesses ' + score;
    console.log('checker');
    const numbers = document.querySelectorAll('.numb');
    let winCondition = 0;
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = 'green';
        numbers[i].style.color = 'white';
        console.log('Match');
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? 'blue' : 'red';
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = 'black';
        console.log('No Match');
      }
      if (winCondition == numbers.length) {
        gameOver();
      }
    }
  }
});

function gameOver() {
  message.innerHTML = 'You solved the combination in ' + score + ' guesses';
  gamePlay = false;
  button.innerHTML = 'Restart Game';
}

function maker() {
  for (let x = 0; x < 4; x++) {
    let el = document.createElement('input');
    el.setAttribute('type', 'number');
    el.max = 9;
    el.min = 0;
    el.order = 0;
    el.size = 1;
    el.style.width = '60px';
    el.classList = 'numb';
    el.value = 0;
    el.style.margin = '5px';
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    gameArea.appendChild(el);
  }
}
