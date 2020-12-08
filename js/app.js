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
     game.handleInteraction(event.target.innerHTML)
   }
 })

 // let buttons = document.querySelectorAll('.key')
 // console.log(buttons)
 // buttons.addEventListener('click', (event) => {
 //   console.log(event.class)
 // })
