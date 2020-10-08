const refs = {
  themeSwitchToggle: document.getElementById('theme-switch-toggle'),
  bodyOfPage: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function selectPageTheme() {
  refs.themeSwitchToggle.addEventListener('input', () => {
    onThemeSwitch();
    saveResultOnThemeSwitch();
  });
}

function onThemeSwitch() {
  if (refs.themeSwitchToggle.checked) {
    refs.bodyOfPage.classList.remove(Theme.LIGHT);
    refs.bodyOfPage.classList.add(Theme.DARK);
  } else {
    refs.bodyOfPage.classList.remove(Theme.DARK);
    refs.bodyOfPage.classList.add(Theme.LIGHT);
  }
}

function saveResultOnThemeSwitch() {
  if (refs.themeSwitchToggle.checked) {
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

export function restorePageTheme() {
  if (localStorage.getItem('Theme') === null) {
    refs.bodyOfPage.classList.add(Theme.LIGHT);
  } else if (localStorage.getItem('Theme') === Theme.DARK) {
    refs.themeSwitchToggle.setAttribute('checked', true);
    refs.bodyOfPage.classList.add(Theme.DARK);
  }
}
