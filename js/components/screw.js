
$(document).ready(function() {
  var canvasWidth = 125;        // The widht of the canvas
  var canvasHeight = 125;       // The height of the canvas
  var scrImg = new Image();
  scrImg.src = '../assets/img/screw/screw.png';
  var cv = document.getElementById("screw");
  var ctx = cv.getContext("2d");
  var degrees = 0

  $(window).load(function() {
    drawImageRot(scrImg,0,0,125,125,degrees);
  });

  $("#screw").click(drawImageRot(scrImg,0,0,125,125,degrees));
  
  function drawImageRot(img,x,y,width,height,deg){
      ctx.clearRect ( 0 , 0 , 125 , 125 );
      //Convert degrees to radian 
      var rad = deg * Math.PI / 180;

      //Set the origin to the center of the image
      ctx.translate(x + width / 2, y + height / 2);

      //Rotate the canvas around the origin
      ctx.rotate(rad);

      //draw the image    
      ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

      //reset the canvas  
      ctx.rotate(rad * ( -1 ) );
      ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
      if (degrees == 360) {
        return;
      } else {
        degrees = degrees + 1
      }
      console.log(degrees);

      setTimeout(drawImageRot(scrImg,0,0,125,125,degrees),1000);
  }

});