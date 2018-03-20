// TODO: add your solutions here!
// 1. Build your own concatenation
// Return a new string that is the combination of two arguments passed into the function
//
// Example: dog and house will return doghouse
//
// Function signature (only look at this after you've thought about what it should look like)

function concatenation(a,b){
  return a+b

}
// 2. Repeat a phrase
// Display an argument phrase to the console n times
//
// Function signature (only look at this after you've thought about what it should look like)

function repeatPhrase(phrase,n){
  for (var i = 0; i < n; i++) {
    console.log(phrase)
  }
}

repeatPhrase('All work and no play makes Jack a dull boy.', 100)


//Q3
function power(num, exp) {
  let powered = 1;
    for (var i = 1; i <= exp; i++) {
      powered*=num;
    }
    return powered;
}

//Q4
function areaOfCircle(radius) {
    return Math.PI*radius*radius //return 3.14*radius*radius;
}

//Q5
function pythagoreanTheorem(a,b){
  let c = power(a,2)+power(b,2)
  return c;
}

// 6. Is X Evenly Divisible by Y ?
// Return a boolean value whether or not X can be divided by Y without any remainders.
// Hint: Explore the world of Modulus operators!
// Function signature (only look at this after you've thought about what it should look like)

function isXEvenlyDivisibleByY(numberX,numberY){
  // if (numberX % numberY === 0){
  //   return true;
  // } else {
  //   return false
  // }
  return numberX % numberY === 0 ? true : false;
}

// 7. Vowel Count:
// Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y
// Function signature (only look at this after you've thought about what it should look like)
// Challenge: Can you alter the code to count both upper case AND lower case?

function vowelCount(word) {
  let vowels = ['a','e','i','o','u'];
  let numberOfOccurences = 0;
  let wordArray = word.toLowerCase().split('');
  wordArray.forEach(function(letter){
    if (vowels.indexOf(letter)!== -1){
      numberOfOccurences++;
    }
  });
  return numberOfOccurences;
}

// 8. Does the array contain "wdi"?
// Given an array, return true if it contains the string "wdi" and false if it does not contain that string.

// findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
// findWdi(['a','b','c']) // returns false
// Function signature (only look at this after you've thought about what it should look like)

function doesContainWDI(array){
  let stringInSearch= 'wdi';
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(stringInSearch)!==-1){
      return true
    }
    else false
  }
}

// 9. Find the longest word in a sentence
// Given a string representing a sentence, return the longest word in that sentence.
//
// Function signature (only look at this after you've thought about what it should look like)

function findLongestWord(sentence){
  let wordArray= sentence.split(' ');
  let currentLongestWord = wordArray[0];
  wordArray.forEach(function(word){
    if(word.length>currentLongestWord.length){
      currentLongestWord=word;
    }
  })
  return currentLongestWord;
}

//10. Build an ASCII Triangle!
function printTriangle(num){
  let star = "";
  for (var i = 0; i < num; i++) {
    star += "*"
    console.log(star);
  }
}
// 11. Create a heads-or-tails game.
// In a separate file, create a super-simple HTML page that contains an element with the id result, and link your HTML page to a js file. In that js file, define 3 functions:
//
// A function that returns either "heads" or "tails", the result of a coin flip.
// A function that, when called, prompts the user to guess either "heads" or "tails" and returns their guess.
// A function that takes in a string and puts that string into the result element on your page.
// Then, write a fourth function that wraps all of these functions into one, so that calling that fourth function will prompt the user to guess heads or tails, flip a coin, and then tell the user whether or not they were right. Make sure that calling just that function from the console works as expected.
console.log("js loaded");

function headsTails(){
  let coinflip = Math.floor(Math.random()*2)
  if (coinflip===0){
    return "heads"
  } else {return "tails"}
}

function whatsYourGuess(){
  usersGuess = prompt('Coin flip. Whats your guess? Enter: heads / tails' );
  return usersGuess;
}

function stringToElement(string){
  $('#result').text(string);
}

function playGame() {
  let headsOrTails = headsTails();
  let usersGuess = whatsYourGuess();
  if(usersGuess === headsOrTails) {
    stringToElement(`You got it! It was ${headsOrTails}!`)
  } else {
    stringToElement(`Nope, it was ${headsOrTails}.`)
  }
}
$(document).ready(function() {
  playGame();
})




// 12. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
// Example: printPyramid(10);
//
//            *
//           * *
//          * * *
//         * * * *
//        * * * * *
//       * * * * * *
//      * * * * * * *
//     * * * * * * * *
//    * * * * * * * * *
//   * * * * * * * * * *
// Warning: This is a surprisingly tricky interview-level exercise. Try at your own risk!

// function printPyramid(length) {
// TODO: Place your code here
// }
