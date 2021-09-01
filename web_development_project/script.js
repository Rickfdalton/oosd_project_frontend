const selectBoxes = document.querySelectorAll(".select-box");
const optionsContainers = document.querySelectorAll(".options-container");
const selecteds = document.querySelectorAll(".selected");
const searchbars = document.querySelectorAll(".search-bar");

const filterList = (searchTerm, optionsList) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach((option) => {
    let label =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

for (let i = 0; i < 3; i++) {
  selecteds[i].addEventListener("click", () => {
    optionsContainers[i].classList.toggle("active");
    searchbars[i].classList.toggle("active");
  });
}

const hosOptions = document.querySelectorAll(".hos-option");
for (let i = 0; i < hosOptions.length; i++) {
  hosOptions[i].addEventListener("click", () => {
    // document.querySelector(".hos-selected").style.backgroundColor = "#00454a";
    document.querySelector(".hos-selected").style.border = "1px solid white";
    document.querySelector(".hos-selected").textContent =
      hosOptions[i].textContent;
  });
}

const facOptions = document.querySelectorAll(".fac-option");
for (let i = 0; i < facOptions.length; i++) {
  facOptions[i].addEventListener("click", () => {
    // document.querySelector(".fac-selected").style.backgroundColor = "#00454a";
    document.querySelector(".fac-selected").style.border = "1px solid white";

    document.querySelector(".fac-selected").textContent =
      facOptions[i].textContent;
  });
}

const disOptions = document.querySelectorAll(".dis-option");
for (let i = 0; i < disOptions.length; i++) {
  disOptions[i].addEventListener("click", () => {
    // document.querySelector(".dis-selected").style.backgroundColor = "#00454a";
    document.querySelector(".dis-selected").style.border = "1px solid white";
    document.querySelector(".dis-selected").textContent =
      disOptions[i].textContent;
  });
}

// adding search functionality
searchbars[0].addEventListener("keyup", function (e) {
  filterList(e.target.value, hosOptions);
});

searchbars[1].addEventListener("keyup", function (e) {
  filterList(e.target.value, facOptions);
});

searchbars[2].addEventListener("keyup", function (e) {
  filterList(e.target.value, disOptions);
});
