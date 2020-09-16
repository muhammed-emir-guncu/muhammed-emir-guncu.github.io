var da=0
var dr=150
var aa=0
var ar=65
var y=[]
function setup() {
 let cnv= createCanvas(500, 500);
  cnv.position(windowWidth/2-250,windowHeight/2-250)
  da=radians(0)
  aa=radians(180)
  for(var z=0;z<80;z++){
  y[z]=[random(0,width),random(0,height)]
  }
}

function draw() {
 background(0,0,0)
  stroke(255,255,255)
  for(var k=0;k<80;k++){
    point(y[k][0],y[k][1])
  }
  stroke(192, 202, 51)
  for(var i =radians(0);i<radians(360);i=i+radians(10)){
    line(250,250,cos(i)*250+250,sin(i)*250+250)
  }
  stroke(0,0,0)
  fill(	240, 244, 195)
  circle(250,250,100)
  circle(250,250,90)
  circle(250,250,80)
  fill(	238, 255, 65)
  circle(250,250,70)
  fill(0, 229, 255)
  circle(cos(da)*dr+250,sin(da)*dr+250,50)
  fill(224, 224, 224
)
  
  circle(cos(aa)*ar+(cos(da)*dr+250),sin(aa)*ar+(sin(da)*dr+250),25)
  da=da+radians(1)
  aa=aa+radians(3)
  
  
}
