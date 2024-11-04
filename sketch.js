let face1;
let face2;

function setup() {
  createCanvas(400, 400);

  face1 = new face(color(random(255), random(255), random(255)));
  face2 = new face(color(random(255), random(255), random(255)));
}

function draw() {
  background(220)
  face1.display();
  face2.display();


  

}

function face(tempfaceColor) {
  this.face1Color = tempfaceColor;
  this.face1Xposition = 0;
  this.face1Yposition = height/2;
  this.face1Size = 50;

  this.face2Color = tempfaceColor;
  this.face2Xposition = 40;
  this.face2Yposition = height/2;
  this.face2Size = 50;
 
  this.cir1Color = tempfaceColor;
  this.cir1Xposition = 5;
  this.cir1Yposition = 260;
  this.cir1Radius = 30;

  this.cir2Color = tempfaceColor;
  this.cir2Xposition = 85;
  this.cir2Yposition = 260;
  this.cir2Radius = 30;
  
  this.display = function() {
    
    noStroke()
    fill(this.face1Color);
    this.face1Xposition = this.face1Xposition + 1;
    this.face1Yposition = this.face1Yposition + 0;
    rect(this.face1Xposition, this.face1Yposition, this.face1Size);

    noStroke()
    fill(this.face1Color);
    this.face2Xposition = this.face2Xposition + 1;
    this.face2Yposition = this.face2Yposition + 0;
    rect(this.face2Xposition, this.face2Yposition, this.face2Size);
   
    fill(0)
    circle(this.cir1Xposition, this.cir1Yposition, this.cir1Radius)
    this.cir1Xposition = this.cir1Xposition + 1;
    this.cir1Yposition = this.cir1Yposition + 0;

    fill(0)
    circle(this.cir2Xposition, this.cir2Yposition, this.cir2Radius)
    this.cir2Xposition = this.cir2Xposition + 1;
    this.cir2Yposition = this.cir2Yposition + 0;

  }

}