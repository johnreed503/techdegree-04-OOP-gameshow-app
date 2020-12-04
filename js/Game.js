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

 }
