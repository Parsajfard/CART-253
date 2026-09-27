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
  },
  //rage
  rage: {
    x: 5,
    y: -5
  },
  minRage: {
    x: -200,
    y:-200
  },
  maxRage:{
    x: 200,
    y: 200
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
    y: 200,
    size: 50,
    velocity: {
      x: 0,
      y: 0
    },
    minVelocity: {
      x: -3,
      y: -2
    },
    maxVelocity: {
      x: 3,
      y: 2
    },
    acceleration: {
      x: 0.1,
      y: -0.02
    }
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

    // move the bird
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;

    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);

    bird.x += bird.velocity.x;
    bird.y += bird.velocity.y;

    // Colour of sky from blue to black 
    sky.fill.r -= 1;
    sky.fill.g -= 1;
    sky.fill.b -= 1;

    // Mr. Furious turns red 
    mrFurious.fill.g -= 1;
    mrFurious.fill.b -= 1;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 75, 225)
    mrFurious.fill.b = constrain(mrFurious.fill.b, 75, 225)

    // Mr. Furious starts shaking from anger
    mrFurious.x = random(190, 210);
    mrFurious.x += mrFurious.rage.x;
    mrFurious.y += mrFurious.rage.y;

    mrFurious.x = constrain(mrFurious.x, mrFurious.minRage.x, mrFurious.maxRage.x);
    mrFurious.y = constrain(mrFurious.y, mrFurious.minRage.y, mrFurious.maxRage.y);

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
