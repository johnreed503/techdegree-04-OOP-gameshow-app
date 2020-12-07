/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase()
   }

  /**
   * Display phrase on game board
  */
  addPhraseToDisplay() {
    const listArea = document.querySelector('phrase, ul')
    let html = ''
    let str = this.phrase
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' '){
          html += `<li class="space"> </li>`
        } else{
          html += `<li class="hide letter ${str[i]}">${str[i]}</li>`
        }
    }
    listArea.innerHTML = html
  };

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check */
  checkLetter(letter) {
    if (this.phrase.includes(letter)){
      return true
    } else {
      return false
    }
  };

  /**
  * Displays passed letter on screen after a match is found * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const listArea = document.querySelectorAll('.phrase, li')
    console.log(listArea)
    for (let i = 0; i < listArea.length; i ++){
      if (listArea[i].innerHTML === letter) {
        listArea[i].className = `show`
      }
    }

  };





 }
