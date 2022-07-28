const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

const launchDay = '30 May 2023';

function countdown(){

    const launchDayDate = new Date(launchDay);
    const currentDate = new Date();

    const totalSeconds = (launchDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minsEl.innerHTML = formateTime(mins);
    secondsEl.innerHTML = formateTime(seconds);

}

function formateTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)