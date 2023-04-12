const clock = document.getElementById('clock_container');

function getCurrentTime() {
  const currentDate = new Date();
  const currentTimeString = currentDate.toLocaleTimeString("ko-KR");
  clock.innerText = currentTimeString;
}

getCurrentTime();
const currentTime = setInterval(getCurrentTime, 1000);