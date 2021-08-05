class Timer {
  constructor() {
      this.watch = null;
      this.target = new Date('Jul 17, 2023');
      this.sec = document.querySelector('[data-value="secs"]');
      this.min = document.querySelector('[data-value="mins"]');
      this.hour = document.querySelector('[data-value="hour"]');
      this.day = document.querySelector('[data-value="day"]');

      this.action = this.action.bind(this);
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
  }  

  action() {
      const timerId = this.target - new Date();
      const sec = Math.floor((timerId % (1000 * 60)) / 1000);
      const min = Math.floor((timerId % (1000 * 60 * 60)) / (1000 * 60));
      const hour = Math.floor((timerId % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const day = Math.floor(timerId / (1000 * 60 * 60 * 24));

    this.sec.textContent = sec;
    this.min.textContent = min;
    this.hour.textContent = hour;
    this.day.textContent = day;
  }

  start() {
      this.watch = setInterval(this.action, 1000);
  }

  stop() {
      clearInterval(this.watch);
  }

  init() {
      this.action();
  }
}

const watchTimer = new Timer();
watchTimer.init();

