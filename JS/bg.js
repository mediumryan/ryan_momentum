const container = document.getElementById('main_container');

// 이미지 파일 배열
const imgArr = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
];

// 랜덤 이미지 파일 받기
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 배경화면에 랜덤 이미지 삽입
const randomImage = getRandomElement(imgArr);
container.style.backgroundImage = `url('Images/${randomImage}')`;