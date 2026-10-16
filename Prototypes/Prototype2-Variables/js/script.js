/**
 * Building Lights
 * Parsa Fard
 * 
 * Variables Prototype #2
 */

"use strict";

//create sky object
let sky = {
    red:0,
    green:0,
    blue:0,
    x:250,
    y:250,
    size:500
}
//define function to draw a building 
function building() {
    push();
    noStroke();
    fill(30,30,30);
    rect(100,50,300,500);
}

//create window object
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
 * the drawing creates a building and sky that changes colours when the user moves their mouse to the right. 
 * The windows light up and start to glow when the mouse moves right. 
*/
function draw() {

    //create background using sky object and control colour variables using mouse X position. 
    background(sky.red,sky.green,sky.blue);
    sky.blue = mouseX;
    sky.green = (mouseX-500)
    sky.red = (mouseX-500)
    
    //add glow to the window that increases when mouse moves right 
    
    //draw building
    building();

    //draw windows
    push();

    //add glow to the window that increases when mouse moves right 
    drawingContext.shadowBlur = mouseX-500;               
   drawingContext.shadowColor = color(250,250,250); 

    //draw windows
    fill(windows.red,windows.green,windows.blue);
    //first row
    rect(150,100,50,50);
    rect(225,100,50,50);
    rect(300,100,50,50);
    //second row
    rect(150,175,50,50);
    rect(225,175,50,50);
    rect(300,175,50,50);
    //third row
    rect(150,250,50,50);
    rect(225,250,50,50);
    rect(300,250,50,50);
    //fourth row
    rect(150,325,50,50);
    rect(225,325,50,50);
    rect(300,325,50,50);
     //fifth row
    rect(150,400,50,50);
    rect(225,400,50);
    rect(300,400,50,50);
    //sixth row 
    rect(150,250,50,50);
    rect(225,250,50,50);
    rect(300,250,50,50);

    //make windows turn yellow when mouse moves to the right of the canvas. 
    windows.red = mouseX;
    windows.green =mouseX;

    pop();
}