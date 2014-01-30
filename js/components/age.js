var ageArray = ["Stop screwing around, you're too young", 5.6, 5.28, 5.55, 4.13, 3.84, 4.08, 2.65, 1.91]
var arrayPosition;
var yourAge = age;
var age = document.getElementById('ageOutput').value

function getAge(age) {
    window.clearInterval(rotSpeed2);
    age = document.getElementById('ageOutput').value
    speed1 = 0.4;
    if (age < 17) {
    	speed1 = 0;
        arrayPosition=0;
    } else if (age >=18 && age <=20) {
    	speed1 += 0.6;
        arrayPosition=1;
    } else if (age >= 21 && age <=25) {
    	speed1 += 0.5;
        arrayPosition=2;
    } else if (age >= 26 && age <=30) {
    	speed1 += 0.6;
        arrayPosition=3;
    } else if (age >= 31 && age <=40) {
    	speed1 += 0.4;
        arrayPosition=4;
    } else if (age >= 41 && age <=50) {
    	speed1 += 0.4;
        arrayPosition=5;
    } else if (age >= 51 && age <=60) {
    	speed1 += 0.4;
        arrayPosition=6;
    } else if (age >= 61 && age <=69) {
    	speed1 += 0.3;
        arrayPosition=7;
    } else if (age >= 70 && age <=100) {
    	speed1 += 0.2;
        arrayPosition=8;
    }
    f.innerHTML = ageArray[arrayPosition];
    rotSpeed2 = setInterval(function(){drawSweden()},1);
	rotSpeed2;

    $("body").css("overflow", "scroll");
};

//drop down menu 
$(document).ready(function() {
    $('select#group-choice').change(function() {
    window.clearInterval(rotSpeed2);
    speed1 = 0.4;
        if(!age){
            age=18;
        }
    var value= $(this).context.value
    if(value=="Students"){
        f.innerHTML="5.05";
        speed1 = speed1 + 0.6;
    }
    else if(value=="Singles"){
        speed1 = speed1 + 0.1;
        f.innerHTML="1.49";
    }
    else if(value=="Swedes who are 70+"){
        speed1 = speed1 + 0.2;
        f.innerHTML="1.91";
    }
    else if(value=="Swedes your age"){
        getAge(yourAge);
        return false;
    }
    rotSpeed2 = setInterval(function(){drawSweden()},1);
    rotSpeed2;
})
});
