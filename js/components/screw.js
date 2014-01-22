//Declaring variables
var canvasWidth = 300;        // The width of the canvas
var canvasHeight = canvasWidth;       // The height of the canvas
var radian = Math.PI/180;
var speed = 1;
var center = canvasWidth/2;
var lW = canvasWidth/50;
var lineEnd = canvasWidth/4
var radCirc = center - lW;
var c = document.getElementById("screw");
var d = document.getElementById("screwtext");
var ctx = c.getContext("2d");    
var degrees = 0;
window.onload = canvasApp();
c.onclick = drawRevolution;
var times = 0;
d.innerHTML = "<h1>"+times+"</h1>";

function canvasApp() {
  drawScreen();
}
    
function drawScreen() {
  // reset canvas
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0, 300, 300);
  // draw circle
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = lW;
  ctx.arc(center, center, radCirc, radian*0, radian*360, false)
  
  ctx.stroke();
  ctx.closePath();

  // set center
  ctx.translate(center, center);

  // draw cross
  ctx.lineWidth = Math.floor(lW*3)
  ctx.lineCap = "round";
  drawLine(0,0,lineEnd,0);
  drawLine(0,0,0,lineEnd);
  drawLine(lineEnd*-1,0,0,0);
  drawLine(0,lineEnd*-1,0,0);

};

function drawRevolution() {
  if (degrees == 360) {
      degrees = 0
      times += 1
      d.innerHTML = "<h1>"+times+"</h1>";
      clearInterval(timer);
      return null;
  } else if (degrees == 0) {
      timer= setInterval(function(){drawRevolution()},speed);
      degrees += 1
      var angle = degrees * radian;
  } else {
    degrees += 1
    var angle = degrees * radian;
  }
  
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = lW;
    ctx.arc(center, center, radCirc, radian*0, radian*360, false)
  //full circle
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
};

function drawLine(startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
}