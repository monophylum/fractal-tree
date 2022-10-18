var rotation = PI / 4;
var slider;

function setup(){
    createCanvas(900,900)
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}
function draw() {
    background(51);
    rotation = slider.value();
    stroke(255);
    translate(450, height)
    branch(200);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    
    if (len>2){
    
        push();
        rotate(rotation);
        branch(len * 0.67);
        pop();
        push();
        rotate(-rotation);
        branch(len * 0.67);
        pop();              
    }
}