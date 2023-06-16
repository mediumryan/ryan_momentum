const container = document.getElementById("main_container");

// 이미지 파일 배열
const imgArr = [
  "../Images/1.jpg",
  "../Images/2.jpg",
  "../Images/3.jpg",
  "../Images/4.jpg",
  "../Images/5.jpg",
  "../Images/6.jpg",
  "../Images/7.jpg",
  "../Images/8.jpg",
  "../Images/9.jpg",
  "../Images/10.jpg",
];

// 랜덤 이미지 파일 경로 얻기
function getRandomImagePath(arr) {
  return arr[(randomIndex = Math.floor(Math.random() * arr.length))];
}

// 배경화면에 랜덤 이미지 적용
const randomImagePath = getRandomImagePath(imgArr);
container.style.backgroundImage = `url('${randomImagePath}')`;
