(function initTheme() {
  const theme = localStorage.getItem('theme') || 'auto';
  setTheme(theme);
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.header__theme-menu-button');
  
  const currentTheme = document.documentElement.classList.contains('theme-light') ? 'light' : 
                      document.documentElement.classList.contains('theme-dark') ? 'dark' : 'auto';
  setActiveButton(themeButtons, currentTheme);

  themeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const chosenTheme = button.dataset.theme;
      setTheme(chosenTheme);
      setActiveButton(themeButtons, chosenTheme);
    });
  });
});

function setTheme(theme) {
  document.documentElement.className = 'page';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

function setActiveButton(buttonsArray, theme) {
  buttonsArray.forEach((button) => {
    button.classList.remove('header__theme-menu-button_active');
    button.removeAttribute('disabled');
  });
  
  const target = Array.from(buttonsArray).find(
    (button) => button.dataset.theme === theme
  );
  
  if (target) {
    target.classList.add('header__theme-menu-button_active');
    target.setAttribute('disabled', true);
  }
}