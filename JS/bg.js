const container = document.getElementById("main_container");

// 이미지 파일 배열
const imgArr = [
  "https://mediumryan.github.io/momemtum_clone/Images/1.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/2.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/3.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/4.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/5.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/6.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/7.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/8.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/9.jpg",
  "https://mediumryan.github.io/momemtum_clone/Images/10.jpg",
];

// 랜덤 이미지 파일 경로 얻기
function getRandomImagePath(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// 배경화면에 랜덤 이미지 적용
const randomImagePath = getRandomImagePath(imgPaths);
container.style.backgroundImage = `url('${randomImagePath}')`;
