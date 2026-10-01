/**
 * Conditionals-challenge
 * Beth Templeton
 * 
 * This will be a program in which the user can push a circle on the canvas using their 
 * own circle. 
 */


const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

let target = {
    x: 200,
    y: 50,
    size: 50,
    fillStates: {
        hit: "#00b95a",
        miss: "#f7f9f8"
    },
    currentFillState: "#f7f9f8"
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  drawTarget();
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  movePuck();
  checkTarget();

}

/**
 * Sets the user position to the mouse position
 */
  function drawTarget() {
        push();
        fill(target.currentFillState);
        stroke(0);
        strokeWeight(3);
        circle(target.x, target.y, target.size);
        pop();
    }

function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function movePuck(){
    let distance = dist(user.x, user.y, puck.x, puck.y);
    console.log(distance);
  

    if(distance < puck.size/2 + user.size/2){
        // puck.x = puck.x+1;
        // puck.y = puck.y+1;
   // }


    if(user.y < puck.y){
        // puck.y++;
      //  if(distance < puck.y){
            puck.y++;
       // }
    }
    else if(user.y > puck.y){
      //  if(distance < puck.y){
        puck.y--;
       // }
    }

        if(user.x < puck.x){
          //  if(distance < puck.x){
        puck.x++;
      //  }
    }
    else if(user.x > puck.x){
       // if(distance < puck.x){
        puck.x--;
       // }
    }
}
      puck.y = constrain(puck.y, 50, 350);
    puck.x = constrain(puck.x, 50, 350);


}

function checkTarget(){
    let distance = dist(target.x, target.y, puck.x, puck.y);
    if(distance < puck.size/2){
        target.currentFillState = target.fillStates.hit;
    }
    else{
        target.currentFillState = target.fillStates.miss;
    }
}