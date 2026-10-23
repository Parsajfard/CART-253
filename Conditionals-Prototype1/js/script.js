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
    x: 230,
    y: 150,
    w: 25,
    h: 10, 
    startingPoint: {
        x:150,
        y:150
    },
    moving: false 
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
    
    drawLaser();
    drawLaserGunTrigger();
    drawLaserGun();
    shootLaser();
    drawAlien();
    

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

function drawLaser() {
    push();

    drawingContext.shadowBlur = 100;
    drawingContext.shadowColor = 100,300,30;

    fill(0,200,0);
    rect(laser.x, laser.y, laser.w, laser.h)
    pop();

}

function shootLaser() {
    let d= dist(mouseX, mouseY, trigger.x, trigger.y);
    if (mouseIsPressed === true && d < trigger.size) {
        laser.moving = true;
    }
    if (laser.moving === true) {
        laser.x += 10;
    }
    if (laser.x === 500) {
        laser.x = laser.startingPoint.x;
        laser.moving = false;
    }
}

function drawAlien() {

    //draw Alien Head 
    push();
    fill(255,255,255);
    noStroke();
    ellipse(400,160,70);
    pop();

    //draw Alien Eye 1
    push();
    fill(20,20,20);
    noStroke();
    ellipse(393,145,15);
    pop();

    //draw Alien Eye 2
    push();
    fill(20,20,20);
    noStroke();
    ellipse(380,160,15);
    pop();

    //draw Alien Eye 3
    push();
    fill(20,20,20);
    noStroke();
    ellipse(404,160,15);
    pop();

    //draw eye highlight 1
    push();
    fill(20,20,20);
    noStroke();
    ellipse(404,160,15);
    pop();


}
