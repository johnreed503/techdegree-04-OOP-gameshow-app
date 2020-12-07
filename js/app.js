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
