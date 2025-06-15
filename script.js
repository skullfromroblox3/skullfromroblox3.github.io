document.addEventListener('DOMContentLoaded', () => {
  // — Menu elements —
  const menu           = document.getElementById('menu');
  const menuToggle     = document.getElementById('menuToggle');
  const menuIconWrap   = document.getElementById('menuIconWrapper');

  // — Theme elements —
  const themeToggle    = document.getElementById('themeToggle');
  const themeLabel     = document.getElementById('themeLabel');
  const themeIconWrap  = document.getElementById('themeIconWrapper');

  // Helper to render a Feather icon into a wrapper
  function renderIcon(wrapper, name) {
    wrapper.innerHTML = feather.icons[name].toSvg({
      'aria-hidden': 'true',
      width: 24,
      height: 24
    });
  }

  // Initial Feather scan (this replaces any <i data-feather> you still have)
  feather.replace();

  // — Initialize menu icon —
  renderIcon(menuIconWrap, 'menu');

  // — Initialize theme from localStorage or default —
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeLabel.textContent = savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1);
  renderIcon(themeIconWrap, savedTheme === 'light' ? 'sun' : 'moon');

  // — Menu toggle handler —
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    renderIcon(menuIconWrap, open ? 'x' : 'menu');
  });

  // — Theme toggle handler —
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'light' ? 'dark' : 'light';

    // Flip theme
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // Update label and icon
    themeLabel.textContent = next.charAt(0).toUpperCase() + next.slice(1);
    renderIcon(themeIconWrap, next === 'light' ? 'sun' : 'moon');
  });
});