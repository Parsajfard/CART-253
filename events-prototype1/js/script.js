/**
 * 
 * Parsa Fard
 * 
 * Final Project
 */

"use strict";

// Creates the canvas 
function setup() {
    createCanvas(400,400); 

    background(0); 
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

function mousePressed() {
    push();
    noStroke(); 
    fill(255,255,0); 
    ellipse(mouseX,mouseY,50); 
    pop();
}