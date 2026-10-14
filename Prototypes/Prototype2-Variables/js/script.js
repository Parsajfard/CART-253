/**
 * Building Night Lights
 * Parsa Fard
 * 
 * Variables Prototype #2
 */

"use strict";

let sky = {
    red:0,
    green:0,
    blue:0,
    x:250,
    y:250,
    size:500
}

function building() {
    push();
    noStroke();
    fill(30,30,30);
    rect(100,50,300,500);
}

let windows = {
    red:0,
    green:0,
    blue:0
}


/**
 * Create Canvas 
*/
function setup() {
    createCanvas(500,500);

}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(sky.red,sky.green,sky.blue);
    sky.blue = mouseX;
    sky.green = (mouseX-500)
    sky.red = (mouseX-500)
    
    //draw building
    building();

    //draw windows
    push();
    fill(windows.red,windows.green,windows.blue);
    rect(150,100,50,50);
    rect(225,100,50,50);
    rect(300,100,50,50);
}