onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");
  const yesGif = document.querySelector(".yes-gif");
  const noGif = document.querySelector(".no-gif");

  // Hide both GIFs initially (not necessary if you use the CSS default)
  yesGif.style.display = "none";
  noGif.style.display = "none";

  // Reset button colors
  function resetButtonColors() {
    yesBtn.classList.remove("selected");
    noBtn.classList.remove("selected");
  }

  yesBtn.addEventListener("click", () => {
    yesGif.style.display = "block"; // Show Yes GIF
    noGif.style.display = "none"; // Hide No GIF
    resetButtonColors(); // Reset button colors
    yesBtn.classList.add("selected");
  });

  noBtn.addEventListener("click", () => {
    noGif.style.display = "block"; // Show No GIF
    yesGif.style.display = "none"; // Hide Yes GIF
    resetButtonColors(); // Reset button colors
    noBtn.classList.add("selected");
  });
});
