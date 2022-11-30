
var img;

function preload() {
  
  img = loadImage('assets/yoshi.jpg');
}

function setup() {
	createCanvas(500, 500);

	textFont("Arial");

 
}

function draw() {

	image(img, 0, 0, mouseX * 2, mouseY * 2);
	
	background(0, 200, 100, 1.0);

	textSize(60);

	text("It's me Yoshi!", 90, 100);

	textSize(50);

	text("Yahoooo!", 140, 440);
}