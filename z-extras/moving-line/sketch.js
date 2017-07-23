// setup global variables

// the (x,y) coordinates of our line
<<<<<<< Updated upstream
var x1a = 50;
var y1a = 200;
var x2a = 50;
var y2a = 65;
=======
var x1 = 50;
var x2 = 50;
var y1 = 200;
var y2 = 65;
>>>>>>> Stashed changes


// (x,y) coordinates of where we want our line to move to
var x1b = 0; 
var y1b = 0; 
var x2b = 0; 
var y2b = 0;

// the incrementor that will take it there
var inc = 0;

function setup() {
  //Create and size a canvas (w, h)
  createCanvas(300,300);
<<<<<<< Updated upstream
  frameRate(30);
=======
>>>>>>> Stashed changes

}

function draw() {
<<<<<<< Updated upstream
  // draw the background white
  background(255);

  if(mouseIsPressed){
=======
  background(255);

  if(inc == 0){
>>>>>>> Stashed changes
    x1b = random(50,200);
    y1b = random(50,200);
    x2b = random(20,320);
    y2b = random(20, 200);
<<<<<<< Updated upstream

    inc = 0;
  }


  x1a = lerp(x1a,x1b,inc/100);
  y1a = lerp(y1a,y1b,inc/100);
  x2a = lerp(x2a,x2b,inc/100);
  y2a = lerp(y2a,y2b,inc/100);

  strokeWeight(3);
  line(x1a,y1a,x2a,y2a);
=======
  }


  x1 = lerp(x1,x1b,inc/100);
  y1 = lerp(y1,y1b,inc/100);
  x2 = lerp(x2,x2b,inc/100);
  y2 = lerp(y2,y2b,inc/100);

  strokeWeight(3);
  line(this.x1,this.y1,this.x2,this.y2);
>>>>>>> Stashed changes


  inc = (inc + 1)%100;
  console.log(inc);


  
}


<<<<<<< Updated upstream
// function draw(){

//   background(255);

//   if(mouseIsPressed){
//     x1b = random(50,200);
//     y1b = random(50,200);

//     inc = 0;
//   }

//   x1a = lerp(x1a,x1b,inc);
//   y1a = lerp(y1a,y1b,inc);

//   fill(255,0,0);
//   rect(x1a,y1a,50,50);

//   inc+=0.1;
//   console.log(inc);
// }


=======
>>>>>>> Stashed changes


