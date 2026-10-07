/**
 * Dog eating a hot dog 
 * Parsa Fard
 * 
 * this is a simple drawing of a dog eating a hot dog. 
 */

"use strict";

function drawDog() {
    //dog face
    ellipse(350, 350, 200, 200);
    //dog outer eyes
    push();
    fill(255, 255, 255);
    ellipse(360, 270, 50, 50);
    ellipse(270, 270, 50, 50);
    pop();
    //dog irises
    push();
    fill(0, 0, 0);
    ellipse(360, 270, 20, 20);
    ellipse(270, 270, 20, 20);
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
    background(255, 255, 0);

    drawDog();


    


    


}