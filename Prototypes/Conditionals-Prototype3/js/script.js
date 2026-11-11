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

let angle = 0; 

/**
 * The setup creates the canvas. 
*/
function setup() {
    createCanvas(500,500); 
    background('green') 
}


/**
 * Drawing calls functions to draw rectangles and rotate the angle variable
*/
function draw() {

    angle += 0.03;

    background('green') 

    avoidMouse(rect1); 
    avoidMouse(rect2);
    avoidMouse(rect3); 

    drawRect(rect1); 
    drawRect(rect2); 
    drawRect(rect3); 

}

function avoidMouse(r) {
    if (dist(mouseX, mouseY, r.x, r.y) < 80) 
        r.x += (r.x - mouseX) *0.15;
        r.y += (r.y = mouseY) * 0.15; 

    if (r.x < 30 || r.x > 470 || r.y < 30 || r.y > 470) {
        r.x = random(50,450); 
        r.y = random(50, 450); 
    }

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