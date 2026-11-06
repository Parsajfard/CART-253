/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500); 
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    complexCircles(width/2,height/2);


}

function complexCircles(x,y) {
    push();
    fill(255,191,0);
    ellipse(x,y,80,80);
    fill(255,2,255);
    ellipse(x,y,60,60);
    fill(255,191,0);
    ellipse(x,y,40,40)
    pop();

}