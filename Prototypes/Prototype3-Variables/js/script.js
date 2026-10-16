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
    velocity: 0.5,
    acceleration: 0.4
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
    



}