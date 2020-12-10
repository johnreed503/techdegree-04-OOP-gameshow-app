/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//instantiates a new game object and starts the game
 let game
 let resetButton = document.getElementById('btn__reset')
 resetButton.addEventListener('click', (event) => {
   game = new Game()
   game.startGame()
 })

//listens for mouse clicks on the onscreen keyboard
 const keys = document.getElementById('qwerty')
 keys.addEventListener('click', (event) => {
   if (event.target.className === 'key') {
     game.handleInteraction(event.target)
   }
 })

//listens for letters from the keyboard
 document.addEventListener('keyup', (event) => {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
   if (alphabet.includes(event.key)) {
   let transformed
   let letters = document.querySelectorAll('button')
   for (let i = 0; i < letters.length; i++) {
     if (letters[i].innerHTML === event.key) {
       transformed = letters[i]
     }
   }
   if (transformed.disabled === false) {
     game.handleInteraction(transformed)
   }
 }
 })
