$(document).ready(function () {
  const loginForm = $("#login_container");
  const loginInput = $("#login_input");
  const greeting = $("#greeting");

  const USER_KEY = "userName";
  const HIDDEN_CLASS = "hidden";

  function getLoginValue() {
    const username = loginInput.val();
    loginForm.addClass(HIDDEN_CLASS);
    greeting.removeClass(HIDDEN_CLASS);
    greeting.text(`Hello, ${username}`);
    localStorage.setItem(USER_KEY, username);
  }

  function submitLogin(e) {
    e.preventDefault();
    getLoginValue();
  }

  loginForm.on("submit", submitLogin);

  const localUserName = localStorage.getItem(USER_KEY);

  if (localUserName) {
    loginForm.addClass(HIDDEN_CLASS);
    greeting.text("Hello, " + localUserName);
    greeting.removeClass(HIDDEN_CLASS);
  } else {
    loginForm.removeClass(HIDDEN_CLASS);
    greeting.addClass(HIDDEN_CLASS);
  }
});
