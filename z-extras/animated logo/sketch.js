// This is a comment! It won't be rendered.

var lines;
var inc = 0;
//Setup happens once when you run the sketch
function setup() {
  //Create and size a canvas (w, h)
  createCanvas(300,300);
  lines = new Array();

  for(var i = 0; i < 4; i++){
    var myline = new MovingLine(random(displayWidth), random(displayHeight), 
<<<<<<< HEAD
      random(displayWidth), random(displayHeight));
=======
      random(displayWidth), random(displayHeight))
>>>>>>> master
    lines.push(myline);
  }

  console.log(lines.length)

}

function draw() {
  background(255);

  for(var i = 0; i < lines.length; i++){
    lines[i].update();
    lines[i].draw();
  }

  inc = (inc + 1)%100; 


  
}

var MovingLine = function(x1,x2,y1,y2){

  this.x1 = x1;
  this.y1 = x2;
  this.x2 = y1;
  this.y2 = y2;

  console.log(x1);

  this.x1b = 0; 
  this.y1b = 0; 
  this.x2b = 0; 
  this.y2b = 0;


}

MovingLine.prototype.update = function(){

  var x1 = this.x1;
  var y1 = this.y1;
  var x2 = this.x2;
  var y2 = this.y2;

<<<<<<< HEAD
  console.log(x1);

=======
>>>>>>> master
  var x1b = this.x1b; 
  var y1b = this.y1b; 
  var x2b = this.x2b; 
  var y2b = this.y2b;

    
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

}

MovingLine.prototype.draw = function(){

  var x1 = this.x1;
  var y1 = this.y1;
  var x2 = this.x2;
  var y2 = this.y2;

  strokeWeight(5);
  //Draw a rectangle with parameters x,y,width,height
  line(x1,y1,x2,y2);

}




