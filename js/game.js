import getDictionary from './dictionary.js'

export class Game {
  #state = 'IDLE'
  #dictionary = []
  #currentWordIndex = 0
  #startTime
  #endTime

  async startRound() {
    if (this.#state === 'ROUND_RUNNING') return false
    this.#dictionary = await getDictionary()
    this.#state = 'ROUND_RUNNING'
    this.#startTime = Date.now()
    this.#currentWordIndex = 0
    return true
  }

  endRound() {
    this.#state = 'ROUND_END'
    this.#endTime = Date.now()
  }

  getGameState() {
    return this.#state
  }

  getRoundTime() {
    return Math.round((this.#endTime - this.#startTime) / 1_000)
  }

  getDictionarySize() {
    return this.#dictionary.length
  }

  getNextWord() {
    const word = this.#dictionary[this.#currentWordIndex]

    if (this.#currentWordIndex > this.getDictionarySize()) {
      this.endRound()
      return null
    }
    this.#currentWordIndex++
    return word
  }
}
