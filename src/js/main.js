function hamburgerToggle() {
  let menuToggle = document.getElementById("hamburgerToggle");
  let lineTop = document.querySelector(".line-top");
  let lineMiddle = document.querySelector(".line-middle");
  let lineBottom = document.querySelector(".line-bottom");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("clicked");
    lineTop.classList.toggle("line-up");
    lineMiddle.classList.toggle("line-hidden");
    lineBottom.classList.toggle("line-down");
  });
}
hamburgerToggle();
