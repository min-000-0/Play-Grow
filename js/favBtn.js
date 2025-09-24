const favBtns = document.querySelectorAll(".favBtn");

favBtns.forEach((favBtn) => {
  favBtn.addEventListener("click", () => {
    const icon = favBtn.querySelector("i");
    icon.classList.toggle("fi-rr-heart");
    icon.classList.toggle("fi-sr-heart");
  });
});
