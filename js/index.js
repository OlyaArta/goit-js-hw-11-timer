//////////////////////// Variant1 ////////////////////
      //// запуск таймера после загрузки браузера ///////////////////////////

 const refs = {
    startBtn: document.querySelector("#start"),
    stopBtn: document.querySelector("#stop"),
    secondsText: document.querySelector(".seconds"),
    minutesText: document.querySelector(".minutes"),
    hoursText: document.querySelector(".hours"),
    daysText: document.querySelector(".days"),
    countTimer: document.querySelector("#countdown"),
  }; 

    const targetDate = new Date('Jul 17, 2023');
  
  function timer() {
    const time = targetDate - new Date();
    seconds = Math.floor((time % (1000 * 60)) / 1000);
    minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    days = Math.floor(time / (1000 * 60 * 60 * 24));

    refs.secondsText.textContent = seconds < 10 ? `0${seconds}` : seconds;
    refs.minutesText.textContent = minutes < 10 ? `0${minutes}` : minutes;
    refs.hoursText.textContent = hours < 10 ? `0${hours}` : hours;
    refs.daysText.textContent = days < 10 ? `0${days}` : days;
  }
  
  let watchId = null;
  let seconds = null;
  let minutes = null;
  let hours = null;
  let days = null;
  
  function startWatch() {
    watchId = setInterval(timer, 1000);
  }

function stopWatch() {
    clearInterval(watchId);
  }

document.addEventListener("DOMContentLoaded", startWatch);
//refs.startBtn.addEventListener("click", startWatch);
//refs.stopBtn.addEventListener("click", stopWatch); 

//////////////////////// Variant2 /////////////////////
 ////// запуск таймера кнопками старт и стоп//////////////////////////

/*class countdownTimer {
  constructor() {
    this.watchId = null;
    this.targetDate = new Date('Jul 17, 2023');
    this.startBtn = document.querySelector("#start");
    this.stopBtn = document.querySelector("#stop");
    this.seconds = document.querySelector(".seconds");
    this.minutes = document.querySelector(".minutes");
    this.hours = document.querySelector(".hours");
    this.days = document.querySelector(".days");

    this.action = this.action.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
  }

  action() {
    const time = this.targetDate - new Date();
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    this.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.days.textContent = days < 10 ? `0${days}` : days;
  }

  startWatch() {
    this.watchId = setInterval(this.action, 1000);
  }

  stopWatch() {
    clearInterval(this.watchId);
  }

  init() {
   this.startBtn.addEventListener("click", this.startWatch);
   this.stopBtn.addEventListener("click", this.stopWatch);
  }
}

const watch = new countdownTimer();
watch.init(); */

