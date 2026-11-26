/**
 * Final Prototype
 * Parsa Fard
 * 
 * Final Prototype
 */

"use strict";

let video;
let playing = false;

/**
 * Setup creates canvas
*/
function setup() {
    createCanvas(640, 360);
    video = createVideo(['/assets/images/IMG_3576.mp4'])

}
/**
 * 
*/
function draw() {
    background(0);
    image(video, 0, 0);



}