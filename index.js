//word bank array
var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

//grab html elements
var wordToGuess = document.getElementById('word-to-guess')
var previous = document.getElementById('previous-word')
var incorrect = document.getElementById('incorrect-letters')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')
var incorrectGuesses = [];
var remainingGuess = 10;



//pull random word from array and insert underscores and count down attempts
const randomIndex = Math.floor(Math.random() * words.length);

const randomWord = words[randomIndex];

document.getElementById('word-to-guess').textContent = "_______";

document.getElementById('remaining-guesses').textContent = 10; {
  function attempt() {
    if (count > 0) {
      document.getElementById(incorrectGuesses).textContent = count;
    }}}

//grab keystroke event
document.getElementById("letter-input").addEventListener("input", function(){
  const letter = this.value.toLowerCase();
  if (letter.length === 1 && letter >= 'a' && letter <= 'z'){
    checkGuess(letter);
    this.value = "";
  }

})

//if key pressed matches letter in words array
document.addEventListener('keydown', function(event){
  const pressedKey = event.key.toLowerCase();
  if (words.includes(pressedKey)){
    wordToGuess.innerHTML += pressedKey;
  }
})

//updates display
function updateGameDisplay() {
  document.getElementById('word-to-guess').innerText = textContent.join('');
  document.getElementById('incorrect').innerText = incorrectGuesses.join(',');
  document.getElementById('remaining-guesses').innerText = remainingGuessDisplay;
}

//incorrect guess

function checkGuess(letter) {
  if (randomWord.includes(letter)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        textContent[i] = letter;
      }
    }
  } else {
    incorrectGuesses.push(letter);
    remainingGuessDisplay--;
  }
  updateGameDisplay();
  checkGameStatus();

}

//game state

function checkGameStatus() {
  if (textContent.join('') === selectedWord) {
    updateGameDisplay();
  } else if (remainingGuessDisplay === 0) {
    resetGame();
  }
}

function resetGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  textContent = Array(selectedWord.length).fill("_");
  incorrectGuesses = [];
  remainingGuessDisplay = 10;
  updateGameDisplay();
}








/* Newer Old Code

var wordToGuess = document.getElementById('word-to-guess')
var previous = document.getElementById('previous-word')
var incorrect = document.getElementById('incorrect-letters')
var remaining = document.getElementById('remaining-guesses')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')


//if key pressed matches letter in words array
document.addEventListener('keydown', function(event){
  const pressedKey = event.key.toLowerCase();
  if (words.includes(pressedKey)){
    wordToGuess.innerHTML += pressedKey;
  }
})

const randomIndex = Math.floor(Math.random() * words.length);

const randomWord = words[randomIndex];

document.getElementById('word-to-guess').textContent = "_______";

document.getElementById('remaining-guesses').textContent = 10; {
  function attempt() {
    if (count > 0) {
      document.getElementById(remaining).textContent = count;
    }}}

document.getElementById("letter-input").addEventListener("input", function(){
  const letter = this.ariaValueMax.toLowerCase();
  if (letter.length === 1 && letter >= 'a' && letter <= 'z'){
    checkGuess(letter);
    this.value = "";
  }

})



function displayUnderscoredWord() {
  //choose a random word
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  //create a string of underscores with the same length
  const underscoredWord = '_'.repeat(randomWord.length);

  //display the underscored word
  const wordDisplay = document.getElementById('wordDisplay');
  wordDisplay.textContent = underscoredWord;

  //store actual word
  wordDisplay.dataset.actualWord = randomWord;

  //display 10 guesses at start and countdown with each attempt

  
}





/*

const randomIndex = Math.floor(Math.random() * words.length);

const randomWord = words[randomIndex];

document.getElementById('word-to-guess').textContent = randomWord;


var wordToGuess = document.getElementById('word-to-guess')
var previous = document.getElementById('previous-word')
var incorrect = document.getElementById('incorrect-letters')
var remaining = document.getElementById('remaining-guesses')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')

var correct = 0
var incorrect = 0

/*

document.onkeyup = function(e) {
  wordToGuess.textContent = e.key
  var key = e.key.toLowerCase()
  if (words.indexOf(key) == -1) return

  var letter = words[Math.floor(Math.random() * words.length)]
  console.log(words)

  if (key === letter) {
    correct++
    wordToGuess.textContent = correct
  } else {
    incorrect++
    incorrect.textContent = incorrect
  }
}

/*pulls keystroke and prints on screen




wordToGuess.textContent = e.key*/




/*
OLD CODE
var random = Math.floor(Math.random() * words.length);
window.onload = function(random, words[random]);

/*
var wordToGuess = document.getElementById('word-to-guess')

var h2 = document.getElementById("h2");
var text = document.createTextNode(words)

function getRandomIndex(words) {
  return Math.floor(Math.random() * Array.length);
}

function getRandomObject(words) {
  const randomIndex = getRandomIndex(words);
  return words[randomIndex];
}

console.log(words)



/*window.onload = function getWord(words) {
  if (Array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * Array.length);
  return array[randomIndex];

}*/