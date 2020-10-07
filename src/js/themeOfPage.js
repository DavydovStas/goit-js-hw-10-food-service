const refs = {
  themeSwitchToggle: document.getElementById('theme-switch-toggle'),
  bodyOfPage: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

restorePageTheme();

refs.themeSwitchToggle.addEventListener('input', onSwitchToggleClick);

function onSwitchToggleClick() {
  if (refs.themeSwitchToggle.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    refs.bodyOfPage.classList.remove(Theme.LIGHT);
    return refs.bodyOfPage.classList.add(Theme.DARK);
  }
  localStorage.setItem('Theme', Theme.LIGHT);
  refs.bodyOfPage.classList.remove(Theme.DARK);
  refs.bodyOfPage.classList.add(Theme.LIGHT);
}

function restorePageTheme() {
  if (localStorage.getItem('Theme') === 'light-theme') {
    return;
  }
  refs.themeSwitchToggle.setAttribute('checked', true);
  refs.bodyOfPage.classList.add(Theme.DARK);
}
