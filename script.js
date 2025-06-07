window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    document.getElementById("existing").style.display = "inline";
  }
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  alert(`Logged in as ${username}`);

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.getElementById("existing").style.display = "inline";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.getElementById("existing").style.display = "none";
  }
});

document.getElementById("existing").addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});

