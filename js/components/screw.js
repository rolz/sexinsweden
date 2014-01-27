//Elements
var c = document.getElementById("screw");
var d = document.getElementById("screwtext");
var r = document.getElementById("reset");

//Declaring variables
var canvasWidth = 150;        // The width of the canvas
var canvasHeight = canvasWidth;       // The height of the canvas
var radian = Math.PI/180;
var center = canvasWidth/2;
var lW = canvasWidth/50;
var lineEnd = canvasWidth/4
var radCirc = center - lW;
var ctx = c.getContext("2d");    
var degrees = 0;
window.onload = canvasApp();
c.onclick = clickScrew;
r.onclick = resetScrew;
var times = 0;
var status = 1;
var render = window.requestAnimationFrame(drawRevolution);
// var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


function canvasApp() {
  resetCanvas();
  drawRevolution();
}

function drawScrew() {
  var angle = degrees * radian;
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

function clickScrew() {
  window.cancelAnimationFrame(render);
  times += 1;
  d.innerHTML = "<center><h2>"+times+"</h2></center>";
  drawRevolution();
}

function drawRevolution() {
  degrees += 0.4;
  resetCanvas();
  drawScrew();
  requestAnimationFrame(drawRevolution);
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

function resetScrew() {
  // degrees = 0;
  times = 0;
  d.innerHTML = "<center><h2>"+times+"</h2></center>";
  window.cancelAnimationFrame(drawRevolution);
}