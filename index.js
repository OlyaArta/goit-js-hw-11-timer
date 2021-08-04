const refs = {
    startBtn: document.querySelector("#start"),
    stopBtn: document.querySelector("#stop"),
    secondsText: document.querySelector(".seconds"),
    minutesText: document.querySelector(".minutes"),
    hoursText: document.querySelector(".hours"),
    daysText: document.querySelector(".days"),
    countTimer: document.querySelector("#countdown"),
  };

   let targetDate = new Date('Jul 17, 2019');
   const time = targetDate - new Date;
  
  function timer() {
    result = time;
    seconds = Math.floor((time % (1000 * 60)) / 1000);
    minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    days = Math.floor(time / (1000 * 60 * 60 * 24));

    refs.secondsText.textContent = seconds;
    refs.minutesText.textContent = minutes;
    refs.hoursText.textContent = hours;
    refs.daysText.textContent = days;
  }
  
  let watchId = null;
  let result = null;
  let seconds = null;
  let minutes = null;
  let hours = null;
  let days = null;
  
  function startWatch() {
    targetDate;
    watchId = setInterval(timer, 1000);
  }

function stopWatch() {
    clearInterval(watchId);
  }

refs.startBtn.addEventListener("click", startWatch);
refs.stopBtn.addEventListener("click", stopWatch);


