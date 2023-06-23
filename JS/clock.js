$(document).ready(function () {
  const clock = $("#clock_container");

  // Date() 메소드를 이용해서 현지 시간 가져오기
  function getCurrentTime() {
    const currentDate = new Date();
    const currentTimeString = currentDate.toLocaleTimeString("ko-KR");
    clock.text(currentTimeString);
  }

  // 1초에 한번씩 시간 변경
  getCurrentTime();
  const currentTime = setInterval(getCurrentTime, 1000);
});
