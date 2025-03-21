function guessNumberGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let guess;

  while (parseInt(guess) !== secretNumber) {
    guess = prompt("Guess a number between 1 and 100:");

    if (parseInt(guess) > secretNumber) {
      alert("Too high!");
    } else if (parseInt(guess) < secretNumber) {
      alert("Too low!");
    }
  }

  alert("You won! The number is " + secretNumber);
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; // החזר 0 עבור מערך ריק
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
