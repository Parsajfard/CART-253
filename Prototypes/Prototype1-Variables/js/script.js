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

function stage() {
    noStroke();
    fill(230,230,230);
    rect(0,400,100);
}

/**
 * 
*/
function draw() {
    background(0,0,0);

    //draw the circle 
    push();
    drawingContext.shadowBlur = 10;                 // The radius/size of the glow
    drawingContext.shadowColor = color(250,250,250); 
    fill(100,100,255);
    stroke(0,0,250);

    //right side lights
    line(mouseX+50,mouseY-50,250,400);
    line(mouseX+100,mouseY-100,350,400);
    line(mouseX+150,mouseY-150,400,400);
    line(mouseX+200,mouseY-200,450,400);
    pop();

    //left side lights 
    //draw the circle 
    push();
    drawingContext.shadowBlur = 10;                 // The radius/size of the glow
    drawingContext.shadowColor = color(250,250,250); 
    fill(100,100,255);
    stroke(0,0,250);

    //right side lights
    line(mouseY+50,mouseX-50,50,400);
    line(mouseY+100,mouseX-100,150,400);
    line(mouseY+150,mouseX-150,200,400);
    line(mouseY+200,mouseX-200,250,400);
    pop();

    //draw stage
    stage();

}