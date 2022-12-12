let getIcon = document.getElementById("first")
let password = document.getElementById("input")
// for icon
getIcon.addEventListener("click", () => {
    if (password.type === "password") {
      getIcon.classList.add("fa-eye-slash");
      getIcon.classList.remove("fa-eye");
      password.type = "text";
    } else {
      getIcon.classList.remove("fa-eye-slash");
      getIcon.classList.add("fa-eye");
      password.type = "password";
    }
  });
  