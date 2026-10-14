/**
 * Abstract Penguin
 * Parsa Fard
 * 
 * this is a drawing of an abstract penguin
 */

"use strict";

function backgroundCircles() {
    //first row of circles
    push();
    noStroke();
    fill(180,180,180);
    ellipse(100,100,100,100);
    ellipse(200,100,100,100);
    ellipse(300,100,100,100);
    ellipse(400,100,100,100);
    ellipse(500,100,100,100);
    ellipse(600,100,100,100);
    //second row of circles 
    ellipse(100,200,100,100);
    ellipse(200,200,100,100);
    ellipse(300,200,100,100);
    ellipse(400,200,100,100);
    ellipse(500,200,100,100);
    ellipse(600,200,100,100);
     //third row of circles 
    ellipse(100,300,100,100);
    ellipse(200,300,100,100);
    ellipse(300,300,100,100);
    ellipse(400,300,100,100);
    ellipse(500,300,100,100);
    ellipse(600,300,100,100);
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
    background(230,230,230);

    backgroundCircles();

    


    


}