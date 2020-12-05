/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 let game
 let resetButton = document.getElementById('btn__reset')
 resetButton.addEventListener('click', (event) => {
   game = new Game()
   game.startGame()
 })
