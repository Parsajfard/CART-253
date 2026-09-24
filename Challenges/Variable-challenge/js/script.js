/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

// The Colour of the Sky 
let sky = {
    fill: {
        r: 150,
        g: 200,
        b: 255
    }
};

// The Position of the Annoying Bird
let bird = {
    x: 0,
    y: 200
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    // Colour of sky from blue to black 
    sky.fill.r -= 1;
    sky.fill.g -= 1;
    sky.fill.b -= 1;



    // Mr. Furious turns red 
    mrFurious.fill.g -= 1;
    mrFurious.fill.b -= 1;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 75, 225)
    mrFurious.fill.b = constrain(mrFurious.fill.b, 75, 225)

    //Sky changes from black to blue 

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    // Draw Annoying bird
    push();
    noStroke();
    fill(255, 0 ,0 );
    ellipse(bird.x, bird.y, 40);
    pop();
}
