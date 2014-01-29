jQuery(window).load(function(){
    var images = [['assets/img/enough_sex/not_enough_sex.svg', "38% think they don't have enough sex"],['assets/img/enough_sex/too_much_sex.svg',"1% think they have too much sex"],['assets/img/enough_sex/not_sure.svg',"10% are not sure"],['assets/img/enough_sex/enough_sex.svg',"31% think they have enough sex"]];
    var i = 0;
    console.log(images);
    function changeImage() {
            $('#enough-sex-1').empty();
            if (i > 2) {
                i=0;
            } else {
                i=i+1;
            }
            $('#enough-sex-1').append('<img src="' + images[i][0] + '"><p id="enough-text">' + images[i][1] + '</p>');
    };

    changeImage();
    // Set an interval to continue
    setInterval(changeImage, 3000);
});