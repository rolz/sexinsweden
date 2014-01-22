//Declaring variables
var degrees = 0;
var canvasWidth = 120;        // The widht of the canvas
var canvasHeight = 120;   
var scrImg = new Image();
scrImg.src = '../assets/img/screw/screw.svg';
var c = document.getElementById("screw");
var ctx = c.getContext("2d");    // The height of the canvas

$('#screw').click(canvasApp);

  function canvasApp() {
    window.setInterval(drawScreen, 1);
  }
    
  function drawScreen() {

    
    // console.log(ctx);
    
      drawImageRot(scrImg,0,0,canvasHeight,canvasWidth,degrees);
    }

    function drawImageRot(img,x,y,width,height,deg){
      if (degrees == 361) {
          return;
          degrees = 0
        } else {
          degrees += 1
          ctx.clearRect(0,0, 120, 120)
        }
        
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

    }


  
// });