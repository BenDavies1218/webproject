// Get elements for color picker
const navBarInput = document.getElementById("navBarInput");
const navBarPreview = document.getElementById("navBarPreview");

const textInput = document.getElementById("textInput");
const textPreview = document.getElementById("textPreview");

const navbarMainColor = document.querySelector(".column");
const allText = document.querySelectorAll(".text");

navBarPreview.style.backgroundColor = "#ffffff";
textPreview.style.backgroundColor = "#ffffff";

// Event listener for navigation bar color input change
navBarInput.addEventListener("input", (event) => {
  navBarColor = event.target.value;
  navBarPreview.style.backgroundColor = navBarColor;
  navbarMainColor.style.backgroundColor = navBarColor;
});

// Event listener for text color input change
textInput.addEventListener("input", (event) => {
  textColor = event.target.value;
  textPreview.style.backgroundColor = textColor;
  allText.forEach((element) => {
    element.style.color = textColor;
  });
});

// Function to get selected colors
function getSelectedColors() {
  return {
    navBar: navBarColor,
    text: textColor,
  };
}
