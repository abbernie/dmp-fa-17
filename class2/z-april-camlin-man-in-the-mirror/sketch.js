// This is a comment! It won't be rendered.

//Setup happens once when you run the sketch
function setup() {
  //Create and size a canvas (w, h)
  createCanvas(400,650);

  //Draw a black background across the canvas
  background(175);

  for(i = displayWidth; i > -20; i-=25){
    for(j = 0; j < displayHeight; j+=5){
      fill(0);
      rect(i-j,j,10,5);
    }
  }

  //grey squares


 // // var y = 25; //j=25
 //  var squareLoc = 125;

  for(x = 25; x < displayWidth; x+=125){
    for(y = 25; y < displayHeight; y+=125){
      noStroke();
      fill(175);
      rect(x,y,100,100);



    }
  }

stripes(125,25);


function stripes(xpos,ypos){
    //square stripes
  var x = xpos;
  var x1 = x;
  var y = ypos;
  for(i = 0; i < 100; i+=25){
    for(j = y; j < x1; j+=5){

      fill(255,0,0);
      rect(i+j,j,10,5);
    }
    x1-=25;
  }

  x1 = x;

  for(i = 0; i < x; i+=25){
    for(j = y; j < x1; j+=5){
      fill(255,0,0);
      
      rect(j,i+j,10,5);
    }
    if(x1>50){
      x1-=25;
    } else {
      x1-=24;
    }
  }

}



}

function draw() {
  console.log(mouseX, mouseY);
  
}

