img = "";
function preload(){
    img = loadImage("Bed.jpg");
}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.position(350, 180);
}
function draw() {
    image(img, 0, 0, 640, 420);
}
function Home() {
    window.location = "index.html";
}