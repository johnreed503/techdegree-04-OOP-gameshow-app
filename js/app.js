/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //TODO
 //CHANGED
 //FIXME
 let game
 let resetButton = document.getElementById('btn__reset')
 resetButton.addEventListener('click', (event) => {
   game = new Game()
   game.startGame()
 })

 const keys = document.getElementById('qwerty')
 keys.addEventListener('click', (event) => {
   if (event.target.className === 'key') {
     game.handleInteraction(event.target)
   }
 })


//listens for letters from the keyboard
 document.addEventListener('keyup', (event) => {
   let transformed
   let letters = document.querySelectorAll('button')
   //console.log(letters)
   for (let i = 0; i < letters.length; i++) {
     if (letters[i].innerHTML === event.key) {
       transformed = letters[i]
     }
   }
   //console.log(transformed)
   if (transformed.disabled === false) {
     game.handleInteraction(transformed)
     //console.log(letters)
   }
 })

 // let buttons = document.querySelectorAll('.key')
 // console.log(buttons)
 // buttons.addEventListener('click', (event) => {
 //   console.log(event.class)
 // })
