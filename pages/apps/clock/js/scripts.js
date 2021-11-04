// function to get the current time and format for seconds, minutes, hours, AM/PM
class DigitalClock {
  constructor(element) {
    this.element = element;
  }
  start() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 500);
  }

  updateTime() {
    const parts = this.getTimeParts();
    const minutesFormatted = parts.minutes.toString().padStart(2, "0");
    const secondsFormatted = parts.seconds.toString().padStart(2, "0");
    const timeFormatted = `${parts.hours} : ${minutesFormatted} : ${secondsFormatted}`;
    clockElement.textContent = timeFormatted;
    const amPm = parts.isMeridian ? " AM" : " PM";
    state.textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();
    return {
      hours: now.getHours() % 12 || 12,
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      isMeridian: now.getHours() < 12,
    };
  }
}

// connect the clockDisplay to current time
const clockElement = document.getElementById("clockDisplay");
const state = document.getElementById("ampm");
const clockObject = new DigitalClock(clockElement);
clockObject.start();
