/**
 * Conditionals Prototype #2 
 * Parsa Fard
 * 
 * This is a simple drawing of a Yeti
 */

"use strict";

let eyeball = {
    right: {
        x: 210,
        y:170
    },
    left: {
        x: 285,
        y:170
    }
}


/**
 * Setup creates canvas
*/
function setup() {
    createCanvas(500,500); 
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');

    //call the functions that draw the yeti 
    drawYetiBody(); 
    drawYetiEyes();
    moveEyes(); 

}

function drawYetiBody() {

    // draw the head of the Yeti
    push(); 
    fill(255);
    noStroke();
    arc(250, 200, 200, 200, PI, TWO_PI,);
    pop();

    // draw the body of the Yeti
    push(); 
    fill(255); 
    noStroke(); 
    rect(150,200,200,150);
    pop(); 

    // draw the right and left leg of the yeti 
    push(); 
    fill(255); 
    noStroke(); 
    rect(150,300,80,150,50); 
    rect(270,300,80,150,50); 
    pop(); 

    // draw the right and left arm of the yeti 
    push(); 
    fill(255); 
    noStroke(); 
    rect(100,210,80,150,50); 
    rect(320,210,80,150,50); 
    pop(); 
}

function drawYetiEyes() {

    //drae eye balls
    push(); 
    fill(0);
    noStroke(); 
    circle(210,170,40); 
    circle(285,170,40); 
    pop(); 

    //draw highlights in the eye
    push(); 
    fill(255);
    noStroke(); 
    circle(eyeball.right.x,eyeball.right.y,10); 
    circle(eyeball.left.x,eyeball.left.y,10); 
    pop(); 
}
     
function moveEyes() {
    if (mouseX > eyeball.right.x) {
        eyeball.right.x += 2;
        eyeball.left.x +=2; 
    }
    else if (mouseX < eyeball.right.x) {
        eyeball.right.x -= 2; 
        eyeball.left.x -= 2; 
    }
}