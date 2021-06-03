const timer = document.getElementById("watch");
const st = document.getElementById("start-btn");
const stp = document.getElementById("stop-btn");
const reset = document.getElementById("reset");
const time = document.getElementById("watch");
// defining second, minute, hour
var s = 0;
var m = 0;
var h = 0;

timer_running = false;

st.addEventListener("click", startTimer);

function startTimer() {
  // timer_running = true;
  if (timer_running == false) {
    console.log("Hello");
    s += 1;
    sec = s;
    min = m;
    hr = h;

    if (s == 59) {
      m += 1;
      s = 0;
    }
    if (m == 59) {
      h += 1;
      m = 0;
    }

    if (s < 10) {
      sec = "0" + s;
    }
    if (m < 10) {
      min = "0" + m;
    }
    if (h < 10) {
      hr = "0" + h;
    }
    time.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("startTimer()", 1000);
  }
}

stp.addEventListener("click", function () {
  if (timer_running == false) {
    timer_running = true;
  }
});

reset.addEventListener("click", function () {
  // timer_running = false;
  time.innerHTML = "00:" + "00:" + "00"
});
