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
     console.log(event.target)
   }
 })

 document.addEventListener('keyup', (event) => {
   //console.log(event.key)
   let transformed
   let letters = document.querySelectorAll('.key')
   for (let i = 0; i < letters.length; i++) {
     if (letters[i].innerHTML === event.key) {
       transformed = letters[i]
     }
   }
   //let transformed =
   game.handleInteraction(transformed)

 })

 // let buttons = document.querySelectorAll('.key')
 // console.log(buttons)
 // buttons.addEventListener('click', (event) => {
 //   console.log(event.class)
 // })
