/**
 * Conditionals Prototype #2 
 * Parsa Fard
 * 
 * This is a simple drawing of a Yeti that looks at 
 * the position of the mouth and opens it mouth when you hover over it. 
 */

"use strict";

//variables for the yeti's eyeball highlights 
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

//variables for the yeti's mouth
let mouth = {
    x: 248, 
    y:200, 
    width: 50, 
    height: 6, 
    closedHeight: 6, 
    openHeight: 40
};


/**
 * Setup creates canvas
*/
function setup() {
    createCanvas(500,500); 
    
}


/**
 * the draw function calls the functions necessary to draw the yeti. 
*/
function draw() {
    background('skyblue');

    //call the functions that draw the yeti 
    drawYetiBody(); 
    moveEyes(); 
    drawYetiEyes();
    drawYetiMouth();
    openYetiMouth();
}

//function that draws the yeti's body
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

//function that draws the yeti's eyes
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

//function that allows the eyes to move
function moveEyes() {
    if (mouseX > 250) {
        eyeball.right.x += 2;
        eyeball.left.x +=2; 
    }
    else if (mouseX < 250) {
        eyeball.right.x -= 2; 
        eyeball.left.x -= 2; 
    }

    if (mouseY > 170) {
        eyeball.right.y += 2; 
        eyeball.left.y += 2; 
    }
    else if (mouseY < 170) { 
        eyeball.right.y -= 2; 
        eyeball.left.y -= 2; 
    }
    

    eyeball.right.x = constrain(eyeball.right.x, 200,220); 
    eyeball.left.x = constrain(eyeball.left.x, 275, 295); 
    eyeball.right.y = constrain(eyeball.right.y,160, 180);
    eyeball.left.y = constrain(eyeball.left.y,160,180); 
}

//function that draws the mouth of the yeti
function drawYetiMouth() {
    
    //draw the mouth 
    push(); 
    fill(0,20,20); 
    noStroke(); 
    ellipse(mouth.x, mouth.y, mouth.width, mouth.height); 
    pop(); 
}

//function that allows the yeti's mouth to open
function openYetiMouth() {
    if (dist(mouseX, mouseY, mouth.x, mouth.y) <30) {
        fill(0);
        ellipse(mouth.x, mouth.y, mouth.width, mouth.openHeight);
     }  
     else {
        fill(0);
        ellipse(mouth.x, mouth.y, mouth.width, mouth.closedHeight);
     }
}
