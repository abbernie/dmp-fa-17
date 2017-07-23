
var x1a, y1a, x2a, y2a, x3a, y3a;
var x1b, y1b, x2b, y2b, x3b, y3b;

var ran1, ran2, ran3, ran4, ran5, ran6;

var inc = 0;

var colora, colorb;

function setup(){
	createCanvas(720,1080);
	x1a = 30;
	y1a = 50;
	x2a = 40;
	y2a = 55;
	x3a = 60;
	y3a = 80;

	x1b = random(50,75);
	y1b = random(200,500);
	x2b = random(100, 500);
	y2b = random(300, 915);
	x3b = random(100,650);
	y3b = random(300,1080);

	ran1 = random(255);
	ran2 = random(255);
	ran3 = random(255);
	ran4 = random(255);
	ran5 = random(255);
	ran6 = random(255);


	colora = color(random(255),random(255),random(255),random(255));
	colorb = color(random(255),random(255),random(255),random(255));


}

function draw(){
	background(255);

	if(mouseIsPressed){
		x1b = random(50,75);
		y1b = random(200,500);
		x2b = random(100, 500);
		y2b = random(300, 915);
		x3b = random(100,650);
		y3b = random(300,1080);

		ran1 = random(255);
		ran2 = random(255);
		ran3 = random(255);
		ran4 = random(255);
		ran5 = random(255);
		ran6 = random(255);

		inc = 0;
	}

	x1a = lerp(x1a, x1b, inc/100);
	y1a = lerp(y1a, y1b, inc/100);
	x2a = lerp(x2a, x2b, inc/100);
	y2a = lerp(y2a, y2b, inc/100);
	x3a = lerp(x3a, x3b, inc/100);
	y3a = lerp(y3a, y3b, inc/100);

	fill(colora);
	triangle(x1a,y1a,x2a,y2a,x3a,y3a);

	fill(colorb);
	triangle(x1a+ran1,y1a+ran2,x2a+ran3,y2a+ran4,x3a+ran5,y3a+ran6);

	inc = (inc + 1)%100;
	
}