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
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(250,245,240);

    //get the time
    let hr = hour()
    let mn = minute()
    let sc = second()

    let tt = str(hr)+" : "+str(mn)+" : "+str(sc);
    stroke(20)
    fill(20)
    textSize(20)
    text(tt,50,50)

}