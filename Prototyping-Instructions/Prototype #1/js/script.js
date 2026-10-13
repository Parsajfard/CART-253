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

//Seed #1
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,350,215);
    ellipse(350,215,10,10);
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
    line(350,350,210,340);
    ellipse(210,340,10,10);
    pop();

//Seed #4
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,220,400);
    ellipse(220,400,10,10);
    pop();

//Seed #5
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,250,450);
    ellipse(250,450,10,10);
    pop();

//Seed #6
    push();
    stroke(200,200,200);
    strokeWeight(0.5);
    line(350,350,300,480);
    ellipse(300,480,10,10);
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

    //mirror Dandelion beaks and Seeds on Y axis
    push();
    translate(width,0);
    scale(-1,1);
    dandelionBeaksandSeeds();
    pop();

    //Draw another layer of seeds on the right side, closer to the Bulb, slightly rotate clockwise
    push();
    translate(730,250);
    rotate(-100);
    scale(-0.8,0.8);
    dandelionBeaksandSeeds();
    pop();

    //Draw another layer of seeds closer to the Bulb, closer to the Bulb, slightly rotated clockwise
    push();
    translate(150,10);
    rotate(-50);
    scale(0.8)
    dandelionBeaksandSeeds();
    pop();

    //draw dandelion bulb
    dandelionBulb();
    


}