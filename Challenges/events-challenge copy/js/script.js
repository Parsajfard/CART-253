/**
 * The Only Move Is Not To Play
 * Parsa Fard, Beth Templeton 
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);

  //Listen for change of connection and call the appropriate function 
  //if we're online we win
window.addEventListener ("offline", lose);
  //if we're offline we lose 
window.addEventListener ("online", test);

document.addEventListener ("visibilitychange" , () => {
    if (document.hidden) {
        lose();
    }
});

}

function test() {
    console.log("online");
}
/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

//make the user lose if a key is pressed 
function lose(){
        gameOver = true;
}

function keyPressed () {
    lose();
}

//make the user lose if the mouse is moved
function mouseMoved() {
   lose();
}

//make the user lose if the mouse is pressed
function mousePressed() {
    lose();
}

//make the user lose if the mouse wheel is moved
function mouseWheel() {
    lose();
}

