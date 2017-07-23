// setup global variables

// the (x,y) coordinates of our line
var x1 = 50;
var x2 = 50;
var y1 = 200;
var y2 = 65;


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

}

function draw() {
  background(255);

  if(inc == 0){
    x1b = random(50,200);
    y1b = random(50,200);
    x2b = random(20,320);
    y2b = random(20, 200);
  }


  x1 = lerp(x1,x1b,inc/100);
  y1 = lerp(y1,y1b,inc/100);
  x2 = lerp(x2,x2b,inc/100);
  y2 = lerp(y2,y2b,inc/100);

  strokeWeight(3);
  line(this.x1,this.y1,this.x2,this.y2);


  inc = (inc + 1)%100;
  console.log(inc);


  
}




