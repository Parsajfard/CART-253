/**
 * Class 1
 * Parsa Fard
 * 
 * This project creates an abstract representation of the solar system.
 */

"use strict";

/**
 * This function creates a canvas that is the size of the window and sets the background color to black.
*/
function setup() {
    createCanvas (windowWidth,windowHeight);
    background (0,0,0);
}


/**
 * My Drawing makes an abstract representation of the earth's orbit around the sun. 
 * The earth is represented by a white circle that rotates around the center of the canvas, which represents the sun. 
 * The sun is represented by a yellow circle in the center of the canvas. 
 * The stars are represented by small white circles that are randomly placed on the canvas. 
 * The satellite is represented by a red rectangle that rotates around the center of the canvas, and a rectangles that represent the solar panels of the satellite. 
 * There is also aliens represented by a green circle and rectangle. 
 * The drawing is intentionally abstract! 
*/
function draw() {
    //background is intentionally not cleared to create a trail effect for the moving objects. 
    //call the function to draw the different elements of the solar system.
    draw_the_sun();
    draw_the_earth();
    draw_the_stars();
    draw_the_satellite();
    draw_the_shooting_star();
    draw_the_aliens();
}

//function to draw the sun
function draw_the_sun() {
    //draw the sun
    push();
    translate (width/2, height/2);
    fill (255,255,0);
    ellipse (0,0,200,200);
    pop();
}

//function to draw the earth
function draw_the_earth() {
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.01);
    fill (255,255,255);
    ellipse (100,0,50,50);
    pop();
}

//function to draw the stars
function draw_the_stars() {
    push();
    translate (width/2, height/2);
    fill (255,255,255);
    for (let i = 0; i < 100; i++) {
        let x = random(-width/2, width/2);
        let y = random(-height/2, height/2);
        ellipse (x,y,5,5);
    }   
    pop();
}

//function to draw a satellite
function draw_the_satellite() {
    //draw the body of the satellite
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.01);
    fill (255,0,0);
    rect (150,0,50,10);
    pop();

    //draw the solar panels of the satellite
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.01);
    fill (0,255,0);
    rect (150,0,10,50);
    pop();  
    rectMode(CENTER);  
}

//function to draw a shooting star
function draw_the_shooting_star() {
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.03);
    fill (255,255,255);
    ellipse (250,0,5,5);
    pop();
}

//function to draw aliens 
function draw_the_aliens() {
    //draw the aliens body
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.02);
    fill (0,255,0);
    ellipse (300,0,20,20);
    pop();

    //draw the aliens arms
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.02);
    fill (0,255,0);
    rect (300,0,10,30);
    pop();

    //draw the aliens legs
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.02);
    fill (0,255,0);
    rect (300,0,10,30);
    pop();

    //draw the aliens eyes
    push();
    translate (width/2, height/2);
    rotate (frameCount * 0.02);
    fill (0,0,0);
    ellipse (300,0,5,5);
    pop();          
}   
