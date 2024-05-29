class ContTimer {
  constructor(timeDuration, timeUpdate, timeComplete) {
    this.initialDuration = timeDuration;
    this.timeDuration = timeDuration;
    this.timeUpdate = timeUpdate;
    this.timeComplete = timeComplete;
    this.timer = null;
    this.paused = false;
    this.restart = false
  }

  start() {
    this.timer = setInterval(()=>{
      this.timeDuration = this.timeDuration - 1;
      this.updateTime();

      if(this.timeDuration <= 0){
        this.stop()
        this.timeComplete()
      }
    },1000)
  }
  startTimer(){
    
  }

  pause() {
    this.paused = true;
    this.stop();
  }

  resume() {
    this.paused = false;
    this.stop()
    this.start();
  }

  stop(){
    clearInterval(this.timer)
  }

  restartTimer(){
    this.timeDuration = this.initialDuration;
    this.updateTime();
    this.stop();
    this.start();
  }

  updateTime(){
      const hours = Math.floor(this.timeDuration / 3600);
      const minute = Math.floor((this.timeDuration % 3600)/60)
      const second = Math.floor((this.timeDuration % 60))

      const formattedTime = [
        hours.toString().padStart(2, '0'),
        minute.toString().padStart(2, '0'),
        second.toString().padStart(2, '0')
      ].join(':');

      this.timeUpdate(formattedTime)
  }
} // Class CountTimer End

const pauseButton = document.querySelector('#pause');
const resumeButton = document.querySelector('#resume');
const restartButton = document.querySelector('#restart');
const startTimer = document.querySelector('.startTimer');

const timeDisplay = document.querySelector('#timer');
const timer = new ContTimer(
  600,
  time => {
    timeDisplay.textContent = time;
  },
  () => {
    timeDisplay.textContent = 'Time is up!';
    alert('Countdown completed!');
  }
);

timer.start();

pauseButton.addEventListener('click', function(){
  timer.pause();
  resumeButton.removeAttribute('disabled');
  pauseButton.setAttribute('disabled', 'disabled');
})

resumeButton.addEventListener('click', function(){
  timer.resume();
  pauseButton.removeAttribute('disabled');
  resumeButton.setAttribute('disabled', 'disabled');
})

restartButton.addEventListener('click', function(){
  timer.restartTimer();
  if(pauseButton.hasAttribute('disabled')){
    pauseButton.removeAttribute('disabled');
  }
  resumeButton.setAttribute('disabled', 'disabled');
})


const selectHours =  document.querySelector('#hour');
const selectMinute =  document.querySelector('#minute');
const selectSecond =  document.querySelector('#second');
initTimeDropdonw()

startTimer.addEventListener('click', function(){
  timer.stop();
  const hours = selectHours.value;
  const minutes = selectMinute.value;
  const seconds = selectSecond.value;

  let duration = 1; 
  let FixedGetMinutes = 60;
  if (hours > 0 ) {
    duration += hours * FixedGetMinutes * 60 * 1;
  } else {
    duration = hours * FixedGetMinutes * 60 * 1;
  }

  if (minutes > 0 && hours !== 0 ) {
    duration += minutes * 60 * 1;
  } else {
    duration = minutes * 60 * 1;
  }
  duration = parseInt(duration) + parseInt(seconds);

  timer.initialDuration = duration;
  timer.timeDuration = duration;
  
  timer.start();
})

function initTimeDropdonw(){
  for (let i = 0; i <= 12; i++) {
      const option = document.createElement('option');
      option.textContent = i;
      option.value = i;
      selectHours.appendChild(option);
  }
  for (let i = 0; i < 60; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    option.value = i;
    selectMinute.appendChild(option);
  }
  for (let i = 0; i < 60; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    option.value = i;
    selectSecond.appendChild(option);
  }

}

