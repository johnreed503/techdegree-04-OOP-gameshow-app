/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0
     this.phrases = [
       new Phrase('Raining Cats And Dogs'),
       new Phrase('Let The Cat Out Of The Bag'),
       new Phrase('Hold Your Horses'),
       new Phrase('Long In The Tooth'),
       new Phrase('Crocodile Tears')
     ]
     this.activePhrase = null
   }

//selects random phrase
  getRandomPhrase() {
    let randomPhraseIndex = Math.floor((Math.random() * this.phrases.length));
    let randomPhrase = this.phrases[randomPhraseIndex]
    return randomPhrase
  };

//starts game
  startGame() {
    //todo fix this reset somehow to be more elegant and not flash what its doing
    const wrongKeyReset = document.querySelectorAll('.wrong')
    for (let i = 0; i < wrongKeyReset.length; i++) {
      wrongKeyReset[i].className = 'key'
      wrongKeyReset[i].disabled = false
    }
    const chosenKeyReset = document.querySelectorAll('.chosen')
    for (let i = 0; i < chosenKeyReset.length; i++) {
      chosenKeyReset[i].className = 'key'
      chosenKeyReset[i].disabled = false
    }
    this.missed = 0
    let screenOverlay = document.getElementById('overlay')
    screenOverlay.style.visibility = 'hidden'
    let randomPhrase = this.getRandomPhrase()
    let currentPhrase = randomPhrase
    currentPhrase.addPhraseToDisplay()
    this.activePhrase = currentPhrase
    //reset the hearts
    const lives = document.querySelectorAll('.tries')
    for (let i = 0; i < lives.length; i++){
      lives[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">'
    }
  };

  //checks for win, returns boolean value
  checkForWin() {
    const letters = document.querySelectorAll('.hide')
    if (letters.length === 0){
      return true
    } else {
      return false
    }
  };

//displays game over message based on boolean value of checkForWin()
  gameOver(gameWon) {
    let screenOverlay = document.getElementById('overlay')
    screenOverlay.style.visibility = 'visible'
    let h1 = document.getElementById('game-over-message')
    if (gameWon === true) {
      screenOverlay.className = 'win'
      h1.innerHTML = 'Great Job!'
      h1.style.fontSize = '60px';
    } else {
      screenOverlay.className = 'lose'
      h1.innerHTML = 'Better luck next time!'
      h1.style.fontSize = '30px';
    }


  };
  //removes live from scoreboard, calls gameOver if no lives remaining
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
//TODO handles interactions from event listeners in app.js
  handleInteraction(button) {
    button.disabled = true
    let currentPhrase = new Phrase(this.activePhrase.phrase)
    if (currentPhrase.checkLetter(button.innerHTML) === true){
      currentPhrase.showMatchedLetter(button.innerHTML)
      button.className += ', chosen'
    } else {
      this.removeLife()
      button.className += ', wrong'
    }
    if (this.checkForWin() === true) {
      this.gameOver(true)
    }
  }


 }
