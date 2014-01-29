var ageArray = ["Stop screwing around, you're too young", 5.6, 5.28, 5.55, 4.13, 3.84, 4.08, 2.65, 1.91]

// Single and lack a stable relationship	1.49
// Student	5.05
// In a relationship for about half a year	13.66
// Have usually over 8 years older partners	7.58
// Who met their partner through a dating site	4.85

function getAge() {
    window.clearInterval(rotSpeed2);
    var age = document.getElementById('ageOutput').value
    speed1 = 0.4;
    if (age < 17) {
    	speed1 = 0;
    	f.innerHTML = ageArray[0];
    } else if (age >=18 && age <=20) {
    	speed1 = speed1 + 0.6;
    	f.innerHTML = ageArray[1];
    } else if (age >= 21 && age <=25) {
    	speed1 = speed1 + 0.5;
    	f.innerHTML = ageArray[2];
    } else if (age >= 26 && age <=30) {
    	speed1 = speed1 + 0.6;
    	f.innerHTML = ageArray[3];
    } else if (age >= 31 && age <=40) {
    	speed1 = speed1 + 0.4;
    	f.innerHTML = ageArray[4];
    } else if (age >= 41 && age <=50) {
    	speed1 = speed1 + 0.4;
    	f.innerHTML = ageArray[5];
    } else if (age >= 51 && age <=60) {
    	speed1 = speed1 + 0.4;
    	f.innerHTML = ageArray[6];
    } else if (age >= 61 && age <=69) {
    	speed1 = speed1 + 0.3;
    	f.innerHTML = ageArray[7];
    } else if (age >= 70 && age <=100) {
    	speed1 = speed1 + 0.2;
    	f.innerHTML = ageArray[8];
    }
    rotSpeed2 = setInterval(function(){drawSweden()},1);
	rotSpeed2;

    $("body").css("overflow", "scroll");
};

