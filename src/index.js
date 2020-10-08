import './styles.css';
import initMenu from './js/menu.js';
initMenu();
import {
  restorePageTheme,
  onSwitchToggleClick,
  saveResultOnSwitchToggleClick,
} from './js/themeOfPage';
restorePageTheme();
onSwitchToggleClick();
saveResultOnSwitchToggleClick();
