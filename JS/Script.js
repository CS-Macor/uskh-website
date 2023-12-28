
// javascript to create Digital Clock
const hour=document.getElementById("hour");
const minutes=document.getElementById("minutes");
const second=document.getElementById("second");
const ampm=document.getElementById("ampm");
const contentEl=document.querySelector(".content");

function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm="AM";


     if (h >= 12 && s >=1) {
        h = h - 12; //this line is for time-formate set by taking 12h rather than 24h
        /*ampm = "PM";*/
        document.getElementById("ampm").innerText="PM";
        document.getElementById("ampm").style.color="white";
        
        document.getElementById("hour").style.color="white";
        document.getElementById("minutes").style.color="white";
        document.getElementById("second").style.color="white";

        document.querySelector(".text1").style.color="white";
        document.querySelector(".text2").style.color="white";
        document.querySelector(".text3").style.color="white";
        document.querySelector(".content p").style.color= "red"; 
        document.querySelector(".content p").style.color= "red"; 
        document.querySelector(".content p").style.fontSize="31px";
        document.querySelector(".content p").style.letterSpacing="10px";

    }
  
    else{
        document.getElementById("ampm").innerText="AM";
        document.getElementById("ampm").style.backgroundColor="black";

    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText=h;
    minutes.innerText=m;
    second.innerText=s;
    ampm, (innerText=ampm);
    setTimeout(()=>{
        updateClock();

    }, 1000);

}
updateClock();

//Javascrip to creat Humberger Menu
const menuEl = document.querySelector('.menu');
const closeMenuEl = document.querySelector('.closeMenu');
const openMenuEl = document.querySelector('.openMenu');

openMenuEl.addEventListener('click', show);
closeMenuEl.addEventListener('click', close);

function show() {
    menuEl.style.display = 'flex';
    menuEl.style.top = '0';
}
function close() {
    menuEl.style.top = '-120%';
}

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
