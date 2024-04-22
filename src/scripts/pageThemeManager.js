// Update the pageThemeHeading text
function updatePageThemeHeading() {
  let headingToUpdate = document.getElementById("pageThemeHeading");
  headingToUpdate.textContent = getStoredPageTheme();
}

// Update the pageThemeButton text

function updatePageThemeButton() {
  let buttonToUpdate = document.getElementById("pageThemeButton");

  let textToShow = "";

  if (getStoredPageTheme() == "dark") {
    textToShow = "toggle To Light Mode";
  } else {
    textToShow = "Toggle to Dark Mode";
  }

  buttonToUpdate.textContent = textToShow;
}

// add onclick to pageThemeButton

function togglePageTheme() {
  if (getStoredPageTheme() == "dark") {
    pageTheme = "light";
  } else {
    pageTheme = "dark";
  }
  setPageThemeToStorage();
  updatePageThemeButton();
  updatePageThemeHeading();
}
let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);
