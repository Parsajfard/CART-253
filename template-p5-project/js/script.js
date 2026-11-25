/**
 * Final Prototype
 * Parsa Fard
 * 
 * Final Prototype
 */

"use strict";

let img; 

/**
 * Setup creates canvas
*/
async function setup() {
    img = await loadImage('assets/images/clown.png');
    createCanvas(1920,1080); 
    background(51)
    createCapture(VIDEO); 
}
/**
 * 
*/
function draw() {
    background(0); 
    image(img,900,400); 

    let c = get(900,400,1000,1000); 

    square(c, 400, 400); 

   

}