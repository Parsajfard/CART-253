/**
 * Conditionals Prototype 1
 * Parsa Fard
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let trigger = {
    x: 155,
    y: 170,
    size: 50
}


let laser = {
    x: 5,
    y: 5,
    w: 5,
    h: 6, 
}


/**
 * Create Canvas in Setup
*/
function setup() {
    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0,0,0);
    
    drawLaserGunTrigger();
    drawLaserGun();

}

//function to call laser gun
function drawLaserGun() {
    push();
    noStroke();
    fill(100,100,100);
    rect(130,140,130,30,30);
    pop();

    push();
    noStroke();
    fill(100,100,100);
    rect(130,150,25,60,10);
    pop();

    push();
    noStroke();
    fill(100,100,100);
    rect(100,140,80,25,5);
    pop();

    push();
    noStroke();
    fill(100,100,100);
    rect(130,120,60,10);
    pop();

    push();
    noStroke();
    fill(100,100,100);
    rect(150,120,20,30);
    pop();

    push();
    noStroke();
    fill(110,110,110);
    ellipse(210,155,10,50);
    pop();

    push();
    noStroke();
    fill(110,110,110);
    ellipse(230,155,10,45);
    pop();

    push();
    noStroke();
    fill(110,110,110);
    ellipse(250,155,10,40);
    pop();
}

function drawLaserGunTrigger() {
    push();
    noStroke();
    fill(0,200,0);
    ellipse(trigger.x,trigger.y,trigger.size);
    pop();
}
