/**
 * Conditionals Prototype #3
 * Parsa Fard
 * 
 * This is an abstract drawing of a series of rectangles that rotate 
 * and avoid the user's mouse. 
 */

"use strict";

let rect1 = { x: 100, y:100};
let rect2 = { x: 250, y:250};
let rect3 = { x:400, y: 150};

/**
 * The setup creates the canvas. 
*/
function setup() {
    createCanvas(500,500); 
    
    drawRect(rect1); 
    drawRect(rect2); 
    drawRect(rect3); 
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('green') 

}

//draw the rectangle using rect variables
function drawRect(r) {
    push(); 
    translate(r.x, r.y); 
    rotate(angle); 
    fill(255); 
    noStroke(); 
    rect(0,0,60,30); 
    pop(); 
}