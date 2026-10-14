/**
 * Abstract Penguin
 * Parsa Fard
 * 
 * this is a drawing of an abstract penguin
 */

"use strict";

function backgroundCircles() {
    //first row of circles
    push();
    noStroke();
    fill(195,195,180);
    ellipse(100,100,100,100);
    ellipse(200,100,100,100);
    ellipse(300,100,100,100);
    ellipse(400,100,100,100);
    ellipse(500,100,100,100);
    ellipse(600,100,100,100);
    //second row of circles 
    ellipse(100,200,100,100);
    ellipse(200,200,100,100);
    ellipse(400,200,100,100);
    ellipse(500,200,100,100);
    ellipse(600,200,100,100);
     //third row of circles 
    ellipse(100,300,100,100);
    ellipse(200,300,100,100);
    ellipse(300,300,100,100);
    ellipse(500,300,100,100);
    ellipse(600,300,100,100);
     //fourth row of circles 
    ellipse(100,400,100,100);
    ellipse(500,400,100,100);
    ellipse(600,400,100,100);
     //fifth row of circles 
    ellipse(300,500,100,100);
    ellipse(400,500,100,100);
    ellipse(500,500,100,100);
    ellipse(600,500,100,100);
    ellipse(600,500,100,100);
      //6th row of circles 
    ellipse(100,600,100,100);
    ellipse(200,600,100,100);
    ellipse(300,600,100,100);
    ellipse(400,600,100,100);
    ellipse(500,600,100,100);
    ellipse(600,600,100,100);
    ellipse(600,600,100,100);
}

function middleCircles() {
    //first row of circles
    push();
    noStroke();
    fill(150,150,150);
    ellipse(100,100,80,80);
    ellipse(200,100,60,60);
    ellipse(300,100,50,50);
    ellipse(400,100,50,50);
    ellipse(500,100,80,80);
    ellipse(600,100,80,80);
    //second row of circles 
    ellipse(100,200,80,80);
    ellipse(200,200,80,80);
    ellipse(400,200,50,50);
    ellipse(500,200,50,50);
    ellipse(600,200,50,50);
     //third row of circles 
    ellipse(100,300,80,80);
    ellipse(200,300,80,80);
    ellipse(300,300,80,80);
    ellipse(500,300,70,70);
    ellipse(600,300,60,60);
     //fourth row of circles 
    ellipse(100,400,80,80);
    ellipse(500,400,80,80);
    ellipse(600,400,70,70);
     //fifth row of circles 
    ellipse(300,500,80,80);
    ellipse(400,500,80,80);
    ellipse(500,500,70,70);
    ellipse(600,500,80,80);
    ellipse(600,500,80,80);
      //6th row of circles 
    ellipse(100,600,70,70);
    ellipse(200,600,70,70);
    ellipse(300,600,60,60);
    ellipse(400,600,70,70);
    ellipse(500,600,80,80);
    ellipse(600,600,70,70);
    ellipse(600,600,60,60);
    pop();
}

function eyeballs(){
    //eyeball
    push();
    noStroke();
    fill(250,250,250);
    ellipse(100,300,70,50);
    ellipse(200,300,70,50);
    pop();

    //eyerises 
    push();
    noStroke();
    fill(0,20,0);
    ellipse(100,300,20,50);
    ellipse(200,300,20,50);
    pop();

    //eye highlight
    push();
    noStroke();
    fill(250,250,250);
    ellipse(105,295,5,5);
    ellipse(205,295,5,5);
    pop();
}

//snake mouth
function snakeMouth(){
    //tongue
    push();
    noStroke();
    fill(250,70,80);
    ellipse(100,400,50,70);
    pop();
    //tougue line
    push();
    stroke(150,50,50);
    strokeWeight(2);
    line(100,434,100,366);
    pop();
}

function snakeScales(){
    //pink scales
    push();
    noStroke();
    fill(240,160,160);
    ellipse(100,100,50,50);
    ellipse(200,100,40,40);
    ellipse(300,100,50,50);
    ellipse(400,100,40,40);
    ellipse(500,100,50,50);
    ellipse(600,100,50,50);
    //second row of circles 
    ellipse(100,200,40,40);
    ellipse(200,200,50,50);
    ellipse(400,200,60,60);
    ellipse(500,200,50,50);
    ellipse(600,200,40,40);
     //third row of circles 
    ellipse(300,300,50,50);
    ellipse(500,300,50,50);
    ellipse(600,300,50,50);
     //fourth row of circles 
    ellipse(500,400,50,50);
    ellipse(600,400,50,50);
     //fifth row of circles 
    ellipse(300,500,50,50);
    ellipse(500,500,50,50);
      //6th row of circles 
    ellipse(100,600,50,50);
    ellipse(300,600,50,50);
    ellipse(600,600,50,50);
    pop();
    //green scales
    //first row
    push();
    noStroke();
    fill(150,250,150);
    ellipse(100,100,40,40);
    ellipse(200,100,40,40);
    ellipse(300,100,40,40);
    ellipse(400,100,40,40);
    ellipse(500,100,40,40);
    ellipse(600,100,50,50);
    //second row of circles 
    ellipse(100,200,40,40);
    ellipse(200,200,40,40);
    ellipse(400,200,40,40);
    ellipse(500,200,40,40);
    ellipse(600,200,40,40);
     //third row of circles 
    ellipse(300,300,40,40);
    ellipse(500,300,40,40);
    ellipse(600,300,40,40);
     //fourth row of circles 
    ellipse(500,400,40,40);
    ellipse(600,400,40,40);
     //fifth row of circles 
    ellipse(300,500,40,40);
    ellipse(400,500,40,40);
    ellipse(500,500,40,40);
    ellipse(600,500,40,40);
    ellipse(600,500,40,40);
      //6th row of circles 
    ellipse(100,600,40,40);
    ellipse(200,600,40,40);
    ellipse(300,600,40,40);
    ellipse(400,600,40,40);
    ellipse(500,600,40,40);
    ellipse(600,600,40,40);
    ellipse(600,600,40,40);
    pop();
}

function scaleDetails(){
    //pink scales
    push();
    noStroke();
    fill(50,50,250);
    //first row of circles
    ellipse(100,100,60,60);
    ellipse(400,100,40,40);
    ellipse(500,100,60,60);
    ellipse(600,100,50,50);
    //second row of circles 
    ellipse(400,200,70,70);
    ellipse(500,200,55,55);
    ellipse(600,200,40,40);
     //third row of circles 
    ellipse(300,300,60,60);
    ellipse(500,300,50,50);
    ellipse(600,300,50,50);
     //fourth row of circles 
    ellipse(500,400,60,60);
    ellipse(600,400,50,50);
     //fifth row of circles 
    ellipse(300,500,55,55);
    ellipse(500,500,55,55);
      //6th row of circles 
    ellipse(100,600,50,50);
    ellipse(300,600,60,60);
    ellipse(600,600,50,50);
    pop();
    //green scales
    //first row
    push();
    noStroke();
    fill(250,120,50);
    ellipse(100,100,40,40);
    ellipse(200,100,50,50);
    ellipse(300,100,40,40);
    ellipse(400,100,45,45);
    ellipse(500,100,40,40);
    ellipse(600,100,50,50);
    //second row of circles 
    ellipse(100,200,40,40);
    ellipse(200,200,40,40);
    ellipse(400,200,50,50);
    ellipse(500,200,40,40);
    ellipse(600,200,40,40);
     //third row of circles 
    ellipse(300,300,40,40);
    ellipse(500,300,60,60);
    ellipse(600,300,40,40);
     //fourth row of circles 
    ellipse(500,400,50,50);
    ellipse(600,400,40,40);
     //fifth row of circles 
    ellipse(300,500,40,40);
    ellipse(400,500,40,40);
    ellipse(500,500,45,45);
    ellipse(600,500,40,40);
    ellipse(600,500,40,40);
      //6th row of circles 
    ellipse(100,600,40,40);
    ellipse(200,600,40,40);
    ellipse(300,600,50,50);
    ellipse(400,600,40,40);
    ellipse(500,600,60,60);
    ellipse(600,600,40,40);
    ellipse(600,600,40,40);
    pop();
}

/**
 * The setup creates the canvas. 
*/
function setup() {
    createCanvas(700,700);
}


/**
 * draw function draws the dog and hot dog on the canvas. */
function draw() {
    background(248,245,235);

    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(250,250,250);

    backgroundCircles();
    middleCircles();
    eyeballs();
    snakeMouth();

    push();
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = color(150,150,250);
    scaleDetails();
    pop();

    snakeScales();




    


}