const favBtns = document.querySelectorAll(".favBtn");

favBtns.forEach((favBtn) => {
  favBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const icon = favBtn.querySelector("i");
    icon.classList.toggle("fi-rr-heart");
    icon.classList.toggle("fi-sr-heart");
  });
});
