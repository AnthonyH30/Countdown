const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

const btnOpenModal = document.querySelector('.btn-sub');
const btnCloseModal = document.querySelector('.btn-send');
const modal = document.querySelector('.modal');

const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')

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

function openModal(){
    modal.classList.add('active');
}

function closeModal(){
    modal.classList.remove('active');
    btnCloseModal.setAttribute('disabled', 'disabled')
}

function clearModal(){
    inputName.value = '';
    inputEmail.value = '';
}

function checkInputs(){
    if(inputName.value.length > 0 && inputEmail.value.length > 0){
        btnCloseModal.removeAttribute('disabled');
        btnCloseModal.setAttribute('active');
    }else{
        btnCloseModal.setAttribute('disabled', 'disabled');
        btnCloseModal.removeAttribute('active');
    }
}




countdown()
setInterval(countdown, 1000)

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
inputEmail.addEventListener('change', checkInputs);
btnCloseModal.addEventListener('click', clearModal);
