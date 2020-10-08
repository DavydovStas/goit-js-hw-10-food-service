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
    refs.bodyOfPage.classList.add(Theme.DARK);
    return;
  }
  refs.bodyOfPage.classList.remove(Theme.DARK);
  refs.bodyOfPage.classList.add(Theme.LIGHT);
}

export function saveResultOnSwitchToggleClick() {
  if (refs.themeSwitchToggle.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    return;
  }
  localStorage.setItem('Theme', Theme.LIGHT);
}

export function restorePageTheme() {
  if (localStorage.getItem('Theme') === null) {
    refs.bodyOfPage.classList.add(Theme.LIGHT);
    return;
  } else if (localStorage.getItem('Theme') === 'light-theme') {
    return;
  } else {
    refs.themeSwitchToggle.setAttribute('checked', true);
    refs.bodyOfPage.classList.add(Theme.DARK);
  }
}
