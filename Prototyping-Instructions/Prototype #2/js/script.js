/**
 * Abstract Drawing
 * Parsa Fard
 * 
 * this is a simple abstract drawing
 */

"use strict";

//define the function for a series of circles that gradually change in colour
function abstractCircles() {

//circle #1
    push();
    noFill();
    stroke(200,190,250);
    strokeWeight(20);
    ellipse(350, 500, 400, 300);
    pop();

//circle #2
    push();
    noFill();
    stroke(200,190,225);
    strokeWeight(20);
    ellipse(350, 450, 400, 300);
    pop();

//circle #3
    push();
    noFill();
    stroke(200,190,200);
    strokeWeight(20);
    ellipse(350, 400, 400, 300);
    pop();

//circle #4
    push();
    noFill();
    stroke(200,190,175);
    strokeWeight(20);
    ellipse(350, 350, 400, 300);
    pop();

//circle #5
    push();
    noFill();
    stroke(200,190,150);
    strokeWeight(20);
    ellipse(350, 300, 400, 300);
    pop();

//circle #6
    push();
    noFill();
    stroke(200,190,125);
    strokeWeight(20);
    ellipse(350, 250, 400, 300)
    pop();
}

//define the function for a center line behind the circle with some white glow
function centerLine() {

    push();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = 'white';
    stroke(255,255,255);
    strokeWeight(8);
    line(350,700,350,0);
    pop();
}



/**
 * The setup creates the canvas. 
*/
function setup() {
    createCanvas(700,700);
}


/**
 * draw function draws the dog and hot dog on the canvas. */
function draw() {
    background(225, 225, 230);

    //draw a center line that is behind the circles
    centerLine();

    abstractCircles();

    //mirror abstract circles over x-axis
    push();
    translate(0,500);
    scale(1,-1)
    abstractCircles();
    pop();

    //mirror abstract circles over x-axis and move them down
    push();
    translate(0,1000);
    scale(1,-1)
    abstractCircles();
    pop();
}