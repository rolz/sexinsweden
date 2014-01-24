//Elements
var c = document.getElementById("screw");
var d = document.getElementById("screwtext");
var more = document.getElementById("more");
var less = document.getElementById("less");

//Declaring variables
var canvasWidth = 300;        // The width of the canvas
var canvasHeight = canvasWidth;       // The height of the canvas
var radian = Math.PI/180;
var speed = 10;
var center = canvasWidth/2;
var lW = canvasWidth/50;
var lineEnd = canvasWidth/4
var radCirc = center - lW;
var ctx = c.getContext("2d");    
var degrees = 0;
window.onload = canvasApp();
c.onclick = drawRevolution;
// less.onclick = unscrew;
var times = 0;
var status = 1;
var angle = 0;

function canvasApp() {
  resetCanvas();
  drawScrew();
}

function drawScrew() {
  
  // draw circle
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = lW;
  ctx.arc(center, center, radCirc, radian*0, radian*360, false)
  ctx.stroke();
  ctx.closePath();

  //set center
  ctx.translate(center, center);

  ctx.lineWidth = Math.floor(lW*3)
  ctx.lineCap = "round";

  ctx.rotate(angle);
  drawLine(0,0,lineEnd,0);
  drawLine(0,0,0,lineEnd);
  drawLine(lineEnd*-1,0,0,0);
  drawLine(0,lineEnd*-1,0,0);
}

function drawRevolution() {

  if (degrees == 360 || degrees == -360) {
    degrees = 0;
    clearInterval(timer);
    // timer= setInterval(function(){drawRevolution()},speed);
    // return null;

  } else if (degrees == 0) {
    times += 1;
    d.innerHTML = "<h1>"+times+"</h1>";
    timer= setInterval(function(){drawRevolution()},speed);
    degrees += 2
    angle = degrees * radian;
  
  } else {
    degrees += 2
    angle = degrees * radian;
  }
  resetCanvas();
  drawScrew();
};

function drawLine(startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
}

function resetCanvas() {
  var h=c.height;
  var w=c.width;
  c.width=w;
  c.height=h;
  ctx.setTransform(1,0,0,1,0,0);
}