/**
 * Conditionals Prototype #2 
 * Parsa Fard
 * 
 * This is a simple interface where the user picks their tool, perhaps for the start of an adventure. 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500); 
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    drawAxe(); 
    


}

function drawAxe() {

    //draw the handle of the axe
    push(); 
    fill(255); 
    noStroke(); 
    rect(200,200,200,200)
    pop(); 

}