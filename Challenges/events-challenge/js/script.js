/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let mouseTriggerball = {
    x:0,
    y:200,
    size:50,
    fillColor: {
        r:100,
        g:100,
        b:100
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);
    background(0);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background () ;
    fill (mouseTriggerBall.fillColor.r,
        mouseTriggerBall.fillColor.g,
        mouseTriangleBall.fillColor);
}

function mousePressed() {
    console.log(mouseX, mouseY)
    fill(random(255), random(255), random(255));
   ellipse (mouseX, 
    mouseY, mouseTriggerball.size);
    noStroke();
}

function mouseReleased() {
    fill(random(255), random(255), random(255));
   ellipse (mouseX +100, 
    mouseY, mouseTriggerball.size);
    noStroke();
}

