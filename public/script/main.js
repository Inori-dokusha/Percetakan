function hamburgerToggle() {
  let menuToggle = document.getElementById("hamburgerToggle");

  menuToggle.addEventListener("click", () => {
    menuToggle.style.backgroundColor = "blue";
  });
}

hamburgerToggle();
