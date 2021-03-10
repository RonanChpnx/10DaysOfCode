const zoomColor = 7;
const saturation = 60;
const lightness = 100;
const scrollSpeed = 1.2;

function setup() {
  createCanvas(650, 650);
  colorMode(HSB);
  background(5);
}

function draw() {
  
  let c = frameCount * scrollSpeed % 360;
  for(let i = 0; i < height; i++){
    stroke((c+i/1)%360, 100, 100);
    line(0, i, width, height/2);
  }
}