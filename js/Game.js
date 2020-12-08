/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0
     this.phrases =   [
       {'phrase' : 't'},
       {'phrase' : 'two'},
       {'phrase' : 'three'}
     ]
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
    this.missed = 0
    let screenOverlay = document.getElementById('overlay')
    screenOverlay.style.visibility = 'hidden'
    let randomPhrase = this.getRandomPhrase()
    let currentPhrase = new Phrase(randomPhrase.phrase)
    currentPhrase.addPhraseToDisplay()
    this.activePhrase = currentPhrase
    //reset the hearts
    const lives = document.querySelectorAll('.tries')
    for (let i = 0; i < lives.length; i++){
      lives[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">'
    }
  };

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't
  won */
  // checkForWin() {
  //   const letters = document.querySelectorAll('.phrase, li')
  //   for (let i = 0; i < letters.length; i++) {
  //     if (letters[i].className !== 'show'){
  //       return false
  //     }
  //   return true
  //   }
  // };
  checkForWin() {
    const letters = document.querySelectorAll('.space, .hide')
    if (letters.length === 0){
      return true
    } else {
      return false
    }
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game */
  gameOver(gameWon) {
    let screenOverlay = document.getElementById('overlay')
    screenOverlay.style.visibility = 'visible'
    let h1 = document.getElementById('game-over-message')
    if (gameWon === true) {
      screenOverlay.class = 'win'
      h1.innerHTML = 'Great Job!'
    } else {
      screenOverlay.class = 'lose'
      h1.innerHTML = 'Better luck next time!'
    }
  };
  /**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */

removeLife() {
  this.missed ++
  const lives = document.querySelectorAll('.tries')
  if (this.missed === 5) {
    this.gameOver(false)
  } else {
    for (let i = 0; i < lives.length; i++){
      if (lives[i].innerHTML === '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">') {
        lives[i].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">'
        return
    }
}
}
};

//TODO
  handleInteraction(button) {
    //console.log(this.checkForWin())
    let currentPhrase = new Phrase(this.activePhrase.phrase)
    if (currentPhrase.checkLetter(button) === true){
      currentPhrase.showMatchedLetter(button)
    } else {
      this.removeLife()
    }
    if (this.checkForWin() === true) {
      this.gameOver(true)
    }
  }



 }
