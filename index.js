class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  //site-interface interaction
  updateClock(days, hours, mins, secs) {
    document.querySelector(`${this.selector} [data-value="days"]`).textContent =
      days;
    document.querySelector(
      `${this.selector} [data-value="hours"]`
    ).textContent = hours;
    document.querySelector(`${this.selector} [data-value="mins"]`).textContent =
      mins;
    document.querySelector(`${this.selector} [data-value="secs"]`).textContent =
      secs;
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      this.updateClock(days, hours, mins, secs);
    }, 1000);
    document.querySelector(
      `${this.selector} .title `
    ).textContent = `Until ${this.targetDate.getDate()}/${
      this.targetDate.getMonth() + 1
    }/${this.targetDate.getFullYear()} left:`;
  }
}

//creating new instance
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 1, 2021'),
});

timer.start();

//calculation code
const pad = value => String(value).padStart(2, '0');

const getTimeComponents = function (time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
};
