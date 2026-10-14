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
    noStroke();
    fill(250,70,80);
    ellipse(100,400,50,70);
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

    backgroundCircles();
    middleCircles();
    eyeballs();
    snakeMouth();

    


    


}