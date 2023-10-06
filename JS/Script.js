// Jquery to click on button Previous and Next slide picture with pagination number
$(document).ready(function () {
    var slider = $('.slider');
    var i = 0;
    var all = slider.length;
    slider.hide();
    slider.eq(i).show();
    $(".slide-number").eq(i).css({
        "background-color": 'yellow',
        'color': 'blue'
    });

    $('.btn-next').click(function () {
        slider.eq(i).hide();
        $(".slide-number").eq(i).css({
            "background-color": 'green',
            'color': 'white'
        });
        i++;
        if (i >= all) {
            i = 0;
        }
        $(".slide-number").eq(i).css({
            "background-color": 'yellow',
            'color': 'blue'
        });
        slider.eq(i).show();

    })
    $('.btn-previous').click(function () {
        slider.eq(i).hide();
        $(".slide-number").eq(i).css({
            "background-color": 'green',
            'color': 'white'
        });
        i--;
        if (i < 0) {

            i = all - 1;

        }
        $(".slide-number").eq(i).css({
            "background-color": 'yellow',
            'color': 'blue'
        });
        slider.eq(i).show();
    })
});

// javascript to click to change images
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');
const changePic = document.getElementById('changePic');
pic1.addEventListener('click', function () {
    changePic.setAttribute('src', "https://m.media-amazon.com/images/I/81jGGIJTgJL._AC_UY218_.jpg");

})
pic2.addEventListener('click', function () {
    changePic.setAttribute('src', "https://m.media-amazon.com/images/I/81mbudCbPLL._AC_SL1500_.jpg");

})
pic3.addEventListener('click', function () {
    changePic.setAttribute('src', "https://images-na.ssl-images-amazon.com/images/I/61wfk4OzocL._AC_UL160_SR160,160_.jpg");

})
pic4.addEventListener('click', function () {
    changePic.setAttribute('src', "https://images-na.ssl-images-amazon.com/images/I/71hrx6vNjPL._AC_UL160_SR160,160_.jpg");

})
