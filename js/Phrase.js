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
    let str = this.phrase.phrase
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' '){
          html += `<li class="space"> </li>`
        } else{
          html += `<li class="hide letter ${str[i]}">${str[i]}</li>`
        }
    }
    listArea.innerHTML = html
  };




 }
