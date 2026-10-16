/**
 * Rocket Launch
 * Parsa Fard
 * 
 * rocket launch animation 
 */

"use strict";

/**
 * create Canvas 
*/

let rocket = {
    body: {
        x:-50,
        y:100,
        w:100,
        h:150
    },
    angle: 0,
    maneuver:0.3,
    velocity: 0.1,
    acceleration: 0.1,
    emissionJitter:0
    
}


function stars() {
    push();
    fill(200,200,200);
    ellipse(random(frameCount),random(frameCount),2,2);
    pop();
}



//Creates the canvas
function setup() {
    createCanvas(500, 500);

    angleMode(DEGREES);
}

/**
 * Draws the rocket launching 
*/
function draw() {
    background(0,0,0);

    //draw rocket 
    push();
    rocket.body.y -= rocket.velocity;
    rocket.velocity += rocket.acceleration;
    translate(width/2, height/2);
    rotate(rocket.angle);
    rocket.angle += 0.1;
    rocket.angle += rocket.maneuver;

    rocket.emissionJitter+=5
    let delta  = sin(rocket.emissionJitter)
    console.log(delta)
    let emissionOne = rocket.body.y+300 +delta*5;
    //console.log(sin(rocket.emissionJitter));

     //draw fire coming out of jets 
    push();
    drawingContext.shadowBlur = 50;               
    drawingContext.shadowColor = color(250,100,100); 
    noStroke();
    fill(200,100,50);
    //jet fire 1
    triangle(rocket.body.x-10, rocket.body.y+160, rocket.body.x+20, rocket.body.y+160, rocket.body.x +5, emissionOne);
    //jet fire 2
    triangle(rocket.body.x+80, rocket.body.y+160, rocket.body.x+110, rocket.body.y+160, rocket.body.x +90, emissionOne);
    //jet fire 3
    triangle(rocket.body.x+30, rocket.body.y+160, rocket.body.x+70, rocket.body.y+160, rocket.body.x +50, emissionOne);
    pop();

    push();
    noStroke();
    fill(80,80,80);
    rect(rocket.body.x, rocket.body.y, rocket.body.w, rocket.body.h);
    pop();

    //draw the tip of the rocket
    push();
    noStroke();
    fill(80,80,80);
    triangle(rocket.body.x, rocket.body.y, 50, rocket.body.y, rocket.body.x+50, rocket.body.y-80);

    //draw window 
    push();
    drawingContext.shadowBlur = 20;               
    drawingContext.shadowColor = color(200,200,200); 
    fill(0,50,100);
    stroke(100,100,100);
    strokeWeight(8);
    ellipse(rocket.body.x+50, rocket.body.y+10, 40,60);
    pop();

    drawJets();
}

function drawJets(){
    //draw the jets of the rocket 
    //jet 1
    push();
    noStroke()
    fill(90,90,90);
    rect(rocket.body.x-10, rocket.body.y+70, 30,100,10);
    pop();

    //jet 2
    push(); 
    noStroke();
    fill(90,90,90);
    rect(rocket.body.x+80, rocket.body.y+70, 30,100,10);
    pop();

    //jet 3
    push(); 
    noStroke();
    fill(90,90,90);
    rect(rocket.body.x+30, rocket.body.y+80, 40,100,10);
    pop();
}

