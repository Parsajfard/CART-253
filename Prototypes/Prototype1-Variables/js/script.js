/**
 * Variables Prototype 1
 * Parsa Fard
 * 
 * This is variables prototype 1
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(500,500);
}


/**
 * 
*/
function draw() {
    background(0,0,0);

    //draw the circle 
    push();
    drawingContext.shadowBlur = 15;                 // The radius/size of the glow
    drawingContext.shadowColor = color(250,250,250); 
    fill(100,100,255);
    stroke(0,0,250);
    line(mouseY+100,mouseX+100,250,400);
    line(mouseX+100,mouseY+100,200,400);
    line(mouseX+200,mouseY+200,150,400);
    line(mouseX-100,mouseY-100,100,400);
    line(mouseY+300,mouseX+300,100,400);
    pop();

}