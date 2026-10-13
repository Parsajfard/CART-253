/**
 * Dandelion
 * Parsa Fard
 * 
 * this is a simple drawing of a Dandelion
 */

"use strict";

//define the function to draw the dandelion stem
function dandelionStem() {
    push();
    rect(350,350,2,350);
    fill(200,200,200);
    pop();
}

//define the function to draw the dandelion bulb
function dandelionBulb() {
    push();
    ellipse(351,350,20,20)
    noStroke();
    fill(200,200,200);
    pop();
}

//define the function to draw the dandelion bulb
function dandelionBeaksandSeeds() {
//Seed #1
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,250,250);
    ellipse(250,250,10,10);
    pop();

//Seed #2
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,300,220);
    ellipse(300,220,10,10);
    pop();

//Seed #3
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,220,290);
    ellipse(220,290,10,10);
    pop();

//Seed #4
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,220,290);
    ellipse(220,290,10,10);
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
    background(20, 25, 25);

    dandelionStem();
    dandelionBeaksandSeeds();
    dandelionBulb();


    


}