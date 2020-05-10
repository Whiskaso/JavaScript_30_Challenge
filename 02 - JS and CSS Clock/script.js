const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();



    secondHand.style.transform = `rotate(${90 + seconds*(360/60)}deg)`;
    minuteHand.style.transform = `rotate(${90 + minutes*(360/60)}deg)`;
    hourHand.style.transform = `rotate(${90 + hours*(360/12)}deg)`;
}

setInterval(setDate, 1000);