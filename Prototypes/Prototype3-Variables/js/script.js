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
    angleMode(DEGREES);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220);

    //setup time variables
    let h = hour();
    let m = minute();
    let s = second();

    //draw circle for clock
    translate (width/2, height/2);
    ellipse(0, 0, 250, 250);

    let hAngle = map(h-12,0,12,0,260);
    let Mangle = map(m, 0, 60, 0, 360);
    let sAngle = map(s, 0, 60, 0, 360);

    let hx = 2




}