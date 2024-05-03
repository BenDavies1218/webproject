// Declare variables
let cssThemes = [];
let pageTheme = "dark";

// Retrieve stored CSS themes from local storage
function getStoredCssThemes() {
  const storedThemes = localStorage.getItem("cssThemes");
  cssThemes = storedThemes ? JSON.parse(storedThemes) : [];
  return cssThemes;
}

// Retrieve stored page theme from local storage
function getStoredPageTheme() {
  const storedTheme = localStorage.getItem("pageTheme");
  pageTheme = storedTheme || "dark";
  return pageTheme;
}

// Update CSS themes in local storage
function setCssThemesToStorage() {
  localStorage.setItem("cssThemes", JSON.stringify(cssThemes));
}

// Update page theme in local storage
function setPageThemeToStorage() {
  localStorage.setItem("pageTheme", pageTheme);
}

// Initialize data from local storage
function initializeDataFromStorage() {
  const storedCssThemes = localStorage.getItem("cssThemes");
  const storedPageTheme = localStorage.getItem("pageTheme");

  if (storedCssThemes && storedPageTheme) {
    getStoredCssThemes();
    getStoredPageTheme();
  } else {
    setCssThemesToStorage();
    setPageThemeToStorage();
  }
}

// Call initialization function
initializeDataFromStorage();
