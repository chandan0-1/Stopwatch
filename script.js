// ---------fetching all the component using their ID
const start_btn = document.getElementById("start-btn");
const stp_btn = document.getElementById("stop-btn");
const reset_btn = document.getElementById("reset-btn");
const time = document.getElementById("watch");

// defining second, minute, hour
var s = 0;
var m = 0;
var h = 0;

// -Setting a variable which helps me to control the timer
timer_running = false;

//-- Adding eventListener to the buttons
start_btn.addEventListener("click", startTimer);
stp_btn.addEventListener("click", stopTimer);
reset_btn.addEventListener("click", resetTimer);


// function to start countdown after clicking on the start button
function startTimer(){
  if (timer_running == false){
    timer_running = true;
    timerCycle();
  }
}


// function to stop countdown after clicking on the stop button
function stopTimer() {
  if (timer_running == true) {
    timer_running = false;
  }
};


// function to reset countdown after clicking on the reset button
function resetTimer() {
  timer_running = false;
  time.innerHTML = "00:" + "00:" + "00";
  // resetting the value with 0 again
  s = 0
  m = 0
  h = 0
};


// function to keep running after clicking on the start button untill the stop button will not be pressed
function timerCycle() {

  if(timer_running == true) {
    s += 1;
    sec = s;
    min = m;
    hr = h;

    // adding +1 when either min or hr completed till 59
    if (s == 59) {
      m += 1;
      s = 0;
    }
    if (m == 59) {
      h += 1;
      m = 0;
    }

    // adding 0 infront of the each hour, minute, and Second when they are single digit
    if (s < 10) {
      sec = "0" + s;
    }
    if (m < 10) {
      min = "0" + m;
    }
    if (h < 10) {
      hr = "0" + h;
    }

    // rendering the new time after each sec and calling same function again
    time.innerText = hr + ":" + min + ":" + sec;
    setTimeout("timerCycle()", 1000);
  }
}
