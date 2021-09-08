img = "";
function preload(){
    img = loadImage("Dog_Chair.jpg");
}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.position(350, 180);
}
function draw() {
    image(img, 0, 0, 640, 420);
    stroke('red');
    noFill();
    rect(30, 20, 250, 360);
    text("Chair", 30, 10);
    stroke('yellow');
    noFill();
    rect(250, 90, 300, 300);
    text("Dog", 250, 80);
}
function Home() {
    window.location = "index.html";
}