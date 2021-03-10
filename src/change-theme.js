const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const theme = localStorage.getItem('theme');

inputRef.addEventListener('change', onChangeTheme);

if (!theme) {
  setLightTheme();
}
if (theme === Theme.LIGHT) {
  setLightTheme();
}
if (theme === Theme.DARK) {
  setDarkTheme();
}

function onChangeTheme() {
  inputRef.checked ? setDarkTheme() : setLightTheme();
}

function setLightTheme() {
  bodyRef.classList.remove(Theme.DARK);
  bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
}

function setDarkTheme() {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  inputRef.checked = true;
}
