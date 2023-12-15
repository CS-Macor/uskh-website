// Javascript for Analog Clock

const numberHoursEl = document.querySelector(".number-hours");
const barSecondsEl = document.querySelector(".bar-seconds");
const numberEl = [];
const barEl = [];

// create number hours
for (let i = 1; i <= 12; i++) {

    numberEl.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHoursEl.insertAdjacentHTML("afterbegin", numberEl.join(""));

// create bar second
for (let i = 1; i <= 60; i++) {
    barEl.push(
        `<span style="--index:${i};"><p></p></span>`
    ); 
}

barSecondsEl.insertAdjacentHTML("afterbegin", barEl.join(""));

const handHoursEl = document.querySelector(".hand.hours");
const handMinutesEl = document.querySelector(".hand.minutes");
const handSecondsEl = document.querySelector(".hand.seconds");

function getCurrentTime() {
    let dateEl = new Date();
    let currentHoursEl = dateEl.getHours();
    let currentMinutesEl = dateEl.getMinutes();
    let currentSecondsEl = dateEl.getSeconds();

    /*-------------------------
    60 seconds = 360deg so 1 sec = 360 / 60 = 6deg
    60 minutes = 360deg so 1 min = 360 / 60 = 6deg
    12 hours = 360deg so 1 hrs = 360 / 12 = 30deg

    1 hrs = 30deg that means 60 min = 30deg so 1 min = 30 / 60 = 0.5 or 1/2 deg
    SO THE FORMULA FOR HOURS IS: ( hours * 30 + minutes / 2)
    -------------------------*/

    handHoursEl.style.transform = `rotate(${currentHoursEl * 30 + currentMinutesEl / 2}deg)`;
    handMinutesEl.style.transform = `rotate(${currentMinutesEl * 6}deg)`;
    handSecondsEl.style.transform = `rotate(${currentSecondsEl * 6}deg)`;

}
//call getCurrentTime function on page load
getCurrentTime();

//call getCurrentTime to set clock hand every second
setInterval(getCurrentTime, 1000); //1000ms = 1second