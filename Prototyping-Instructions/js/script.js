/**
 * Dog eating a hot dog 
 * Parsa Fard
 * 
 * this is a simple drawing of a dog eating a hot dog. 
 */

"use strict";

function drawDog() {
    //dog ears
    push();
    fill(200, 150, 70);
    triangle(200, 200, 300, 300, 250, 340);
    triangle(500, 200, 400, 300, 450, 340);
    pop();
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
    //dog nose
    push();
    fill(200, 150, 70);
    ellipse(320, 350, 30, 30);
    pop();
    //dog mouth
    push();
    fill(255, 0, 0);
    arc(320, 400, 100, 100, 0, PI);
    pop();
}

function drawHotDog() {
    //hot dog bun 
    push();
    fill(255, 200, 100);
    rect(300, 400, 200, 50, 20);
    pop();
    //hot dog sausage
    push();
    fill(255, 0, 0);
    rect(300, 400, 200, 30, 20);
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
    drawHotDog();

    


    


}