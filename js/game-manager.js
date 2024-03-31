import { Game } from './game.js'

const game = new Game()

const resultPane = document.getElementById('results')
const wordPlaceholder = document.getElementById('word-placeholder')
const startRoundButton = document.getElementById('start-round-button')

let currentWord

function setCurrentWord(word) {
  if (!word?.length) {
    currentWord = game.getNextWord()
  } else {
    currentWord = word
  }
  wordPlaceholder.textContent = currentWord
}

function setRoundTime(element) {
  const roundTime = game.getRoundTime()
  const seconds = String(roundTime % 60).padStart(2, '0')
  const minutes = String(Math.round(roundTime / 60)).padStart(2, '0')
  const timeElapsed = `${minutes}:${seconds}`

  element.textContent = `Time: ${timeElapsed}`
}

function showResults() {
  const timerPlaceholder = document.createElement('p')
  const wordCounterPlaceholder = document.createElement('p')

  setRoundTime(timerPlaceholder)
  wordCounterPlaceholder.textContent = `Word count: ${game.getDictionarySize()}`
  resultPane.appendChild(timerPlaceholder)
  resultPane.appendChild(wordCounterPlaceholder)
}

function hideResults() {
  const elements = resultPane.querySelectorAll('*')

  for (const element of elements) {
    element.remove()
  }
}

function onTyping(e) {
  if (currentWord[0] === e.key) {
    setCurrentWord(currentWord.substring(1))
  }
  if (!currentWord) {
    endRound()
    return
  }
}

async function startRound() {
  if (await game.startRound()) {
    hideResults()
    setCurrentWord()
    document.addEventListener('keypress', onTyping)
  }
}

function endRound() {
  game.endRound()
  showResults()
  document.removeEventListener('keypress', onTyping)
}

startRoundButton.addEventListener('click', startRound)
