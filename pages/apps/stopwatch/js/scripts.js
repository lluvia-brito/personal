// setup for cleaner code
let second = 0;
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// this code should regulate the counting of seconds

const stopwatch = {
  second: 0,
  start: function () {
    if (!this.interval) {
      const self = this;
      function count(val) {
        return val > 9 ? val : "0" + val;
      }
      this.interval = setInterval(function () {
        self.second += 1;
        seconds.innerHTML = count(++second % 60);
        minutes.innerHTML = count(parseInt(second / 60, 10));
      }, 1000);
    }
  },
  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },
  reset: function () {
    clearInterval(this.interval);
    second = 0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    delete this.interval;
  },
};

// Event listeners for each button
start.addEventListener("click", function () {
  stopwatch.start();
});
pause.addEventListener("click", function () {
  stopwatch.pause();
});
reset.addEventListener("click", function () {
  stopwatch.reset();
});
