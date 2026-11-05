/**
 * Lines
 * Parsa Fard and Beth Templeton
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
   //Declare 
    let x = 0; 
    let y = 0;
    let strokeColor = 0
    let gradient = {
        r:5,
        g:5,
        b:5
    }

    for (let y = 0; y < height; y += 1) {
    stroke(gradient.r,gradient.g,gradient.b)
    line(0, y, width, y);
    gradient.r +=1;
    gradient.g +=0.55;
    gradient.b += 0.50;
}

    while (x < height) {
        push();
        stroke(strokeColor);
        line(x,y,x,height);
        x+=50;
        strokeColor+=25;
    }

strokeColor=0;

while (y < width) {
    stroke(strokeColor);
    line(x,y,0,y);
    y+=50;
    strokeColor+=25;
}
}