const selectBoxes = document.querySelectorAll(".select-box");
const optionsContainers = document.querySelectorAll(".options-container");

for (let i = 0; i < 3; i++) {
  selectBoxes[i].addEventListener("click", () => {
    optionsContainers[i].classList.toggle("active");
  });
}
