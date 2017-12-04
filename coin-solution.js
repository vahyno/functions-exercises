console.log("js loaded");

function flipCoin() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

function getGuess() {
  return prompt("Guess either heads or tails!");
}

function showResult(result) {
  $("#result").text(result);
}

function playGame() {
  let flippedCoin = flipCoin();
  let guess = getGuess();
  if(guess === flippedCoin) {
    showResult(`Correct! It was ${flippedCoin}!`)
  } else {
    showResult(`Sorry, it was ${flippedCoin}.`)
  }
}
$(document).ready(function() {
  playGame();
})
