// Declare Js Data
let cssThemes = [];

let pageTheme = ["dark"];

// Read the local storage

/**
 * Retrieve the latest stored
 *
 * @returns {Array of objects. All of the stored cssThemes}
 */
function getStoredCssTheme() {
  let rawJsonStringcssThemes = localStorage.getItem("cssThemes");
  cssThemes = JSON.parse(rawJsonStringcssThemes);
  return cssThemes;
}

/**
 * Retrieve the latest stored data for page themes from local storage
 *
 * @returns {String. should be "light" or "dark"}
 */
function getStoredPageTheme() {
  pageTheme = localStorage.getItem("pageTheme");
  return pageTheme;
}

// Create/update localStorage
function setCssThemeToStorage() {
  let dataAsJsonString = JSON.stringify(cssThemes);
  localStorage.setItem("cssThemes", dataAsJsonString);
}

function setPageThemeToStorage() {
  localStorage.setItem("pageTheme", pageTheme);
}

// Check if data exists if it does then retrieve else set to default.

if (
  localStorage.getItem(
    "pageTheme" && localStorage.getItem("cssThemes")?.length > 0
  )
) {
  getStoredCssTheme();
  getStoredPageTheme();
} else {
  setCssThemeToStorage();
  setPageThemeToStorage();
}
