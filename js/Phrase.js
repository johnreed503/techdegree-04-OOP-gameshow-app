/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase()
   }

  //displays hidden phrase on board
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
  //checks if letter is included in phrase
  checkLetter(letter) {
    if (this.phrase.includes(letter)){
      return true
    } else {
      return false
    }
  };
  //shows letter if matched
  showMatchedLetter(letter) {
    const listArea = document.querySelectorAll('.phrase, li')
    for (let i = 0; i < listArea.length; i ++){
      if (listArea[i].innerHTML === letter) {
        listArea[i].className = `show`
      }
    }
  };
 }
