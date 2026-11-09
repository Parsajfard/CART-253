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
    drawYetiBody(); 
    


}

function drawYetiBody() {

    // draw the head of the Yeti
    push(); 
    fill(255);
    noStroke();
    arc(250, 200, 200, 200, PI, TWO_PI,);
    pop();

    // draw the body of the Yeti
    push(); 
    fill(255); 
    noStroke(); 
    rect(150,200,200,150);
    pop(); 

    // draw the right and left leg of the yeti 
    push(); 
    fill(255); 
    noStroke(); 
    rect(150,300,80,150,50); 
    rect(270,300,80,150,50); 
    pop(); 

    // draw the right and left arm of the yeti 
    push(); 
    fill(255); 
    noStroke(); 
    rect(100,210,80,150,50); 
    rect(320,210,80,150,50); 
    pop(); 
}

function drawYetiEyes() {
    
}
     
