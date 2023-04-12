const loginForm = document.getElementById('login_container');
const loginInput = document.querySelector('#login_input');
const greeting = document.getElementById('greeting');

// 로컬 저장소 키값
const USER_KEY = 'userName';

const HIDDEN_CLASS = 'hidden';

// 인풋값을 받아 로컬 저장소에 저장 + 디스플레이 효과
function getLoginValue() {
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = 'Hello, ' + username;
  localStorage.setItem(USER_KEY, username);
}

// 서브밋 핸들러
function submitLogin(e) {
  e.preventDefault();
  getLoginValue();
}

loginForm.addEventListener('submit', submitLogin);

// 로컬 저장소의 유저명
const localUserName = localStorage.getItem(USER_KEY);

// 새로고침 시 오류방지
if(localUserName) {
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.innerText = 'Hello, ' + localUserName;
  greeting.classList.remove(HIDDEN_CLASS);
} else {
  loginForm.classList.remove(HIDDEN_CLASS);
  greeting.classList.add(HIDDEN_CLASS);
}
