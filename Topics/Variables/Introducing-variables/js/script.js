/**
 * Introducing variables
 * Parsa Fard
 * 
 * Learning what a varible is and does
 */

"use strict";

/**
 * Create a canvas 
*/
function setup() {
    createCanvas(640, 480);

}


/**
 * Draws a circle where the mouse is clicked
 */
function draw() {
    background(0);

    // Draw the circle
    push();
    fill(255,255,0);
    noStroke();
    ellipse(mouseX, mouseY, mouseX, mouseY);
    pop();

    // Draw second circle 
    push();
    fill(mouseX,mouseY,0);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    pop();

    // Draw second circle 
    push();
    fill(mouseX,mouseY,0);
    noStroke();
    ellipse(mouseY, mouseX, 100, 100);
    pop();
}