/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0
     this.phrases =   [{'phrase' : 'test phrase one'}, {'phrase': 'test phrase two'}]
     this.activePhrase = null
   }

   /**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
  getRandomPhrase() {
    let randomPhraseIndex = Math.floor((Math.random() * this.phrases.length));
    let randomPhrase = this.phrases[randomPhraseIndex]
    return randomPhrase
  };

  /**
 * Begins game by selecting a random phrase and displaying it to user
 */
  startGame() {
    let screenOverlay = document.getElementById('overlay')
    screenOverlay.style.visibility = 'hidden'
    let randomPhrase = this.getRandomPhrase()
    this.activePhrase = randomPhrase
    let currentPhrase = new Phrase(this.activePhrase.phrase)
    currentPhrase.addPhraseToDisplay()
  };

//TODO
  handleInteraction() {
    let keys = document.querySelectorAll('key')
    keys.addEventListener('click', (event) => {
        console.log('Hello from inside the event listener')
        let key = event.target.innerHTML
        console.log(key)
        let currentPhrase = new Phrase(this.activePhrase.phrase)
        currentPhrase.checkLetter(key)
    })
  }



 }
