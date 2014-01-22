
$(document).ready(function() {
  var canvasWidth = 125;        // The widht of the canvas
  var canvasHeight = 125;       // The height of the canvas
  var scrImg = new Image();
  scrImg.src = '../assets/img/screw/screw.png';
  var c = document.getElementById("screw");
  var ctx = c.getContext("2d");
  var degrees = 0;

  scrImg.onload = function() {
    canvasApp();
  };

  // $("#screw").click(drawImageRot(scrImg,0,0,125,125,degrees));
  function canvasApp() {
    window.setInterval(drawScreen, 1);
  }
    
  function drawScreen() {
      drawImageRot(scrImg,0,0,canvasHeight,canvasWidth,degrees);
    }

    function drawImageRot(img,x,y,width,height,deg){
        
      if (degrees == 360) {
          return;
        } else {
          degrees += 1
        }

        ctx.restore();
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
        
        
        console.log(degrees);
        
        // drawImageRot(scrImg,0,0,125,125,degrees);
    }
  
});