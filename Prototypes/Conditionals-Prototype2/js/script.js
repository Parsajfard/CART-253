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
    drawYetiHead(); 
    


}

function drawYetiHead() {

    //draw the handle of the axe
    push(); 
    fill(255);
    noStroke();
    arc(250, 200, 200, 200, PI, TWO_PI,);
    pop();

    push(); 
    fill(255); 
    noStroke(); 
}
     
