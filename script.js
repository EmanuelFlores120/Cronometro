var timerInterval;
var startTime;
var elapsedTime = 0;
var running = false;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 10); // Actualiza cada 10 ms para los milisegundos
    running = true;
  }
}

function updateTimer() {
  var currentTime = new Date().getTime();
  elapsedTime = Math.floor((currentTime - startTime));
  var hours = Math.floor(elapsedTime / 3600000);
  var minutes = Math.floor((elapsedTime - (hours * 3600000)) / 60000);
  var seconds = Math.floor((elapsedTime - (hours * 3600000) - (minutes * 60000)) / 1000);
  var milliseconds = elapsedTime - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);

  document.getElementById('timer').innerHTML = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds) + '<span class="ms">.' + padNumber(milliseconds, 3) + '</span>';
}

function padNumber(number, length = 2) {
  return ('0'.repeat(length) + number).slice(-length);
}

function pauseTimer() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
    running = false;
  }
