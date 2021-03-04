const shivaratri = '11 mar 2021';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const shivaratriDay = new Date(shivaratri);
    const currentDate = new Date();

    const totalSecond = Math.floor((shivaratriDay - currentDate) / 1000);

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;




    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = second;

}
//initial call
countdown();
setInterval(countdown, 1000);