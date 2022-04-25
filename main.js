function preload() {

}
function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,200,100,320,240);
    fill("black");
    stroke("black");
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill("blue");
    stroke("blue");
    rect(90,40,460,20);
    rect(90,420,460,20)
    rect(40,90,20,300);
    rect(580,90,20,300);
}
function take_snapshot(){
    save('student_name.png');
}
