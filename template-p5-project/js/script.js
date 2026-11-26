/**
 * Final Prototype
 * Parsa Fard
 * 
 * Final Prototype
 */

"use strict";

let video;
let video2; 

/**
 * Setup creates canvas
*/
function setup() {
    createCanvas(640, 360);
    video = createVideo(['/assets/images/IMG_3576.mp4'])
    video.size(width,height); 

    video.showControls();
}
/**
 * 
*/
function draw() {
    image(video, 0, 0);
    



}