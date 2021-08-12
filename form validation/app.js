let user = document.getElementById("uname");
let pass = document.getElementById("password");
let uerror = document.getElementById("u-error");
let perror = document.getElementById("p-error");

function vaild() {
  if (user.value.length < 5) {
    uerror.style.opacity = 1;
  } else {
    uerror.style.opacity = 0;
  }
  if (pass.value.length < 8) {
    perror.style.opacity = 1;
  } else {
    perror.style.opacity = 0;
  }

  user.value = "";
  pass.value = "";
}
