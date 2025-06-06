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

var wordToGuess = document.getElementById('word-to-guess')
var previous = document.getElementById('previous-word')
var incorrect = document.getElementById('incorrect-letters')
var remaining = document.getElementById('remaining-guesses')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')

var correct = 0
var incorrect = 0

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