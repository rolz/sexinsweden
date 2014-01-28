//Elements
var c = document.getElementById("screwYou");
var d = document.getElementById("screwYouText");
var e = document.getElementById("screwThem");
var f = document.getElementById("screwThemText");
var r = document.getElementById("reset");
var ctx = c.getContext("2d");
var etx = e.getContext("2d");

//Declaring variables
var canvasWidth = 250;        // The width of the canvas
var canvasHeight = canvasWidth;       // The height of the canvas
var radian = Math.PI/180;
var center = canvasWidth/2;
var lW = canvasWidth/50;
var lineEnd = canvasWidth/4
var radCirc = center - lW;   
var start = 0;
var degrees = 0;
window.onload = screwYou();
// window.onload = screwThem();
c.onclick = clickScrew;
r.onclick = resetScrew;
var times = 0;
var status = 1;
var increment = 4;
var speed = 1;
var rotSpeed = setInterval(function(){drawRevolution()},speed)
// var render = window.requestAnimationFrame(drawRevolution);
// var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


function precise_round(num,decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function screwYou() {
  resetYou();
  rotSpeed;
}

function screwThem() {
  resetThem();
  drawSweden();
}

function drawScrew(canvas) {
  var angle = degrees * radian;
  // draw circle
  canvas.beginPath();
  canvas.strokeStyle = "black";
  canvas.lineWidth = lW;
  canvas.arc(center, center, radCirc, radian*0, radian*360, false)
  canvas.stroke();
  canvas.closePath();

  //set center
  canvas.translate(center, center);

  canvas.lineWidth = Math.floor(lW*3)
  canvas.lineCap = "round";

  canvas.rotate(angle);
  drawLine(canvas,0,0,lineEnd,0);
  drawLine(canvas,0,0,0,lineEnd);
  drawLine(canvas,lineEnd*-1,0,0,0);
  drawLine(canvas,0,lineEnd*-1,0,0);
}

function clickScrew() {
  window.clearInterval(rotSpeed);
  // window.cancelAnimationFrame(render);
  times += 1;
  speed = speed * 0.1;
  console.log(speed);
  d.innerHTML = "<center><h1>"+times+"</h1></center>";
  rotSpeed = setInterval(function(){drawRevolution()},speed);
  // drawRevolution();
  // window.clearInterval(rotSpeed);
  rotSpeed;
}

function drawRevolution() {
  if (degrees > 360) {
    degrees = 0
  } else {
  // var newspeed = (increment*speed)/10;
  // // console.log(newspeed);
  // newspeed = precise_round(newspeed, 1);
  degrees += 0.4;
  degrees = precise_round(degrees, 1);
  // degrees = (degrees).toFixed(1);r
  // console.log(degrees);
};
  resetYou();
  drawScrew(ctx);
  // requestAnimationFrame(drawRevolution);
};

function drawSweden() {
  degrees += 0.4;
  resetThem();
  drawScrew(etx);
  // requestAnimationFrame(drawSweden);
};

function drawLine(canvas, startX, startY, endX, endY) {
  canvas.beginPath();
  canvas.moveTo(startX, startY);
  canvas.lineTo(endX, endY);
  canvas.stroke();
  canvas.closePath();
}

function resetYou() {
  var h=c.height;
  var w=c.width;
  c.width=w;
  c.height=h;
  ctx.setTransform(1,0,0,1,0,0);
}

function resetThem() {
  var h=e.height;
  var w=e.width;
  e.width=w;
  e.height=h;
  etx.setTransform(1,0,0,1,0,0);
}

function resetScrew() {
  window.clearInterval(rotSpeed);
  // window.cancelAnimationFrame(render);
  times = 0;
  speed = 10;
  d.innerHTML = "<center><h1>"+times+"</h1></center>";
  rotSpeed = setInterval(function(){drawRevolution()},speed);
  // drawRevolution();
  // window.clearInterval(rotSpeed);
  // rotSpeed;
}