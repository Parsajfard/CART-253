/**
 * Abstract Clock Face
 * Parsa Fard
 * 
 * This program creates an abstract clock face
 */

"use strict";

/**
 * create Canvas 
*/
function setup() {
    createCanvas(500,500);
    background (66,94,85);
    angleMode(DEGREES)
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(250,245,240);

    translate (width/2,height/2);

    //get the time
    let hr = hour()
    let mn = minute()
    let sc = second()

    //clock hands 
    strokeWeight(20);
    noFill();

    //seconds
    stroke(100,150,250);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0,0,300,300,0, secondAngle); //

}