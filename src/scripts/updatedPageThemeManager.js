const themes = {
  light: {
    "theme-50": "#f7fbff",
    "theme-100": "#f0f6ff",
    "theme-200": "#e0eeff",
    "theme-300": "#d1e5ff",
    "theme-400": "#c2dcff",
    "theme-500": "#b3d4ff",
    "theme-600": "#6babff",
    "theme-700": "#2483ff",
    "theme-800": "#005fdb",
    "theme-900": "#004094",
    "theme-950": "#003170",
  },
  dark: {
    "theme-50": "#f7fbff",
    "theme-100": "#dbe9fc",
    "theme-200": "#000000",
    "theme-300": "#000000",
    "theme-400": "#000000",
    "theme-500": "#000000",
    "theme-600": "#000000",
    "theme-700": "#000000",
    "theme-800": "#000000",
    "theme-900": "#000000",
    "theme-950": "#000000",
  },
};

// Update page theme heading
function updatePageThemeHeading() {
  document.getElementById("pageThemeHeading").textContent =
    getStoredPageTheme();
}

// Update page theme button text
function updatePageThemeButtonText() {
  const buttonToUpdate = document.getElementById("pageThemeButton");
  const textToShow =
    getStoredPageTheme() === "dark"
      ? "Toggle to Light Mode"
      : "Toggle to Dark Mode";
  buttonToUpdate.textContent = textToShow;
}

// Toggle page theme
function togglePageTheme() {
  const pageTheme = getStoredPageTheme() === "dark" ? "light" : "dark";
  setPageThemeToStorage(pageTheme);
  applySavedTheme();
}

// Apply theme from local storage
function applySavedTheme() {
  updatePageThemeButtonText();
  updatePageThemeHeading();
  updateCssVariables();
}

// Update CSS variables based on current theme
function updateCssVariables() {
  const themeName = getStoredPageTheme();
  for (const variable in themes[themeName]) {
    document.documentElement.style.setProperty(
      `--${variable}`,
      themes[themeName][variable]
    );
  }
}

// Get stored page theme
function getStoredPageTheme() {
  return localStorage.getItem("pageTheme") || "light";
}

// Set page theme to local storage
function setPageThemeToStorage(theme) {
  localStorage.setItem("pageTheme", theme);
}

// Event listener for page theme button
document
  .getElementById("pageThemeButton")
  .addEventListener("click", togglePageTheme);

// Apply saved theme on page load
applySavedTheme();
