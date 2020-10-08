const refs = {
  themeSwitchToggle: document.getElementById('theme-switch-toggle'),
  bodyOfPage: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.themeSwitchToggle.addEventListener('input', onSwitchToggleClick);
refs.themeSwitchToggle.addEventListener('input', saveResultOnSwitchToggleClick);

export function onSwitchToggleClick() {
  if (refs.themeSwitchToggle.checked) {
    refs.bodyOfPage.classList.remove(Theme.LIGHT);
    return refs.bodyOfPage.classList.add(Theme.DARK);
  }
  refs.bodyOfPage.classList.remove(Theme.DARK);
  refs.bodyOfPage.classList.add(Theme.LIGHT);
}

export function saveResultOnSwitchToggleClick() {
  if (refs.themeSwitchToggle.checked) {
    return localStorage.setItem('Theme', Theme.DARK);
  }
  localStorage.setItem('Theme', Theme.LIGHT);
}

export function restorePageTheme() {
  if (localStorage.getItem('Theme') === null) {
    refs.bodyOfPage.classList.add(Theme.LIGHT);
  } else if (localStorage.getItem('Theme') === 'light-theme') {
  } else {
    refs.themeSwitchToggle.setAttribute('checked', true);
    refs.bodyOfPage.classList.add(Theme.DARK);
  }
}
