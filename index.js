const refs = {
     startBtn: document.querySelector("#start"),
     stopBtn: document.querySelector("#stop"),
}

let watch = null;
let startDate = 

function startWatch() {
    watch = setInterval(() => {}, 1000)
}

function stopWatch() {
   clearInterval(watch);
}

refs.startBtn.addEventListener("click", startWatch);
refs.stopBtn.addEventListener("click", stopWatch);