// This is a comment! It won't be rendered.

var x1 = 50;
var y1 = 50;
var x2 = 320;
var y2 = 200;

var x1b, y1b, x2b, y2b;

var inc = 0;
//Setup happens once when you run the sketch
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
  console.log(inc);

  strokeWeight(5);
  //Draw a rectangle with parameters x,y,width,height
  line(x1,y1,x2,y2);

  inc = (inc + 1)%100;
   
}



