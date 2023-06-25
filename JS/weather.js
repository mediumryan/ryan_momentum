$(function () {
  const weatherLocation = $(".weather_location");
  const temp = $(".weather_temp");
  const weather = $(".weather_weather");

  // API 데이터 불러오기
  function callData(lat, lon) {
    const API_KEY = "30a223157b4e106a3d4631fa76a27b4a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        // 불러온 데이터를 처리하는 코드 작성
        weatherLocation.text(data.name);
        temp.text(`${Math.floor(data.main.temp)} °C`);
        weather.text(data.weather[0].main);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  // 사용자의 위도, 경도값 받아오기
  function success(pos) {
    const crd = pos.coords;

    const lat = crd.latitude;
    const lon = crd.longitude;

    // 데이터가 있을 때 한 번 호출
    callData(lat, lon);

    // 이후 30초마다 호출
    setInterval(() => {
      callData(lat, lon);
    }, 30000);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);
});
