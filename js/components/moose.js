
window.onload = function(){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	//Lets resize the canvas to occupy the full page
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = 2*H/3;
	var drawnLines=[];
	var age=18;
	var previousAge=18;
	var exponent1=0;
	
	//Some variables
	var length, divergence, reduction, line_width, start_points = [];
	

	init();
	
	function init()
	{

		//filling the canvas white
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, W, H);
		
		//Lets draw the trunk of the tree
		//lets randomise the variables
		//length of the trunk - 100-150
		length = 120;
		//angle at which branches will diverge - 10-60
		divergence= 70;
		//Every branch will be 0.75times of the previous one - 0.5-0.75
		//with 2 decimal points
		reduction = 0.65;
		//width of the branch/trunk
		line_width = 15;
		
		//This is the end point of the trunk, from where branches will diverge
		var trunk = {x: W/2, y: H/2+22, angle: 90};
		//It becomes the start point for branches
		start_points = []; //empty the start points on every init();
		start_points.push(trunk);
		
		//Y coordinates go positive downwards, hence they are inverted by deducting it
		//from the canvas height = H
		
		branches();
	}
	
	//Lets draw the branches now
	function branches()
	{
		//reducing line_width and length
		length = length * reduction;
		line_width = line_width * reduction;
		ctx.lineWidth = line_width;
		
		var new_start_points = [];
		ctx.beginPath();
		for(var i = 0; i < start_points.length; i++)
		{
			var sp = start_points[i];
			//2 branches will come out of every start point. Hence there will be
			//2 end points. There is a difference in the divergence.
			var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
			var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);
			
			//drawing the branches now
			ctx.moveTo(sp.x, H-sp.y);
			ctx.lineTo(ep1.x, H-ep1.y);
			ctx.moveTo(sp.x, H-sp.y);
			ctx.lineTo(ep2.x, H-ep2.y);
			
			drawnLines.push({start_X1:sp.x, start_Y1:H-sp.y, end_X1:ep1.x, end_Y1:H-ep1.y, start_X2:sp.x, start_Y2:H-sp.y, end_X2:ep2.x, end_Y2:H-ep2.y, draw_width:line_width})
			//Time to make this function recursive to draw more branches
			ep1.angle = sp.angle+divergence;
			ep2.angle = sp.angle-divergence;

			new_start_points.push(ep1);
			new_start_points.push(ep2);
		}
		if(length > 50) ctx.strokeStyle = "black";
		else ctx.strokeStyle = "white";
		ctx.stroke();
		start_points = new_start_points;

		if(length > 2) branches ();		
	}
	
	function get_endpoint(x, y, a, length)
	{
		var epx = x + length * Math.cos(a*Math.PI/180);
		var epy = y + length * Math.sin(a*Math.PI/180);
		return {x: epx, y: epy};
	}

function ageLines(number, color){
	number=number/10
	console.log(number)

	if(color=="black"){
	var barrier=Math.pow(2,number)
	var barrier2=Math.pow(2,number+1)

	for (var n = barrier-1; n <barrier2-1 ; n++) {
		ctx.beginPath();
		ctx.lineWidth=drawnLines[n].draw_width;
	    ctx.moveTo(drawnLines[n].end_X2, drawnLines[n].end_Y2);
		ctx.lineTo(drawnLines[n].start_X2, drawnLines[n].start_Y2);
		ctx.moveTo(drawnLines[n].end_X1, drawnLines[n].end_Y1);
		ctx.lineTo(drawnLines[n].start_X1, drawnLines[n].start_Y1);
		ctx.strokeStyle=color;
		ctx.stroke();
	};
	}
	else{
		var barrier=Math.pow(2,number)
		var barrier2=Math.pow(2,number+1)
		for (var n = barrier2-2; n >barrier-2 ; n--) {
			ctx.beginPath();
			ctx.lineWidth=drawnLines[n].draw_width*5;
		    ctx.moveTo(drawnLines[n].end_X2, drawnLines[n].end_Y2);
			ctx.lineTo(drawnLines[n].start_X2, drawnLines[n].start_Y2);
			ctx.moveTo(drawnLines[n].end_X1, drawnLines[n].end_Y1);
			ctx.lineTo(drawnLines[n].start_X1, drawnLines[n].start_Y1);
			ctx.strokeStyle=color;
			ctx.stroke();
	};

}
//number = parseInt(number, 10)
//exponent = number/10;
//
//var startPointsRemoved= Math.pow(2, exponent)
//console.log("startpointsremoved: "+startPointsRemoved)

//var barrier=start_points.length/2+1
//
//for (var n = 0; n <barrier-1; n++) {
//	start_points.pop()
//};


}
$(document).ready(function() {
  $("[name=range]").on("change", function() {
    $("[for=range]").val(this.value);
    previousAge=age
  	age=this.value
  	console.log("previousAge: "+previousAge+" age: "+age)
  if(age%10==0&&previousAge<age){
  	console.log("add lines")
	ageLines(age,"black");

  }
  else if(age%10==0 && previousAge>age){
  	console.log("remove lines")
  	ageLines(age,"white");

  }

  }).trigger("change");

  
  
});

}

