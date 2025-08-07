import './styles.css';
import menuIcon from './dropdown-menu.png'; // Webpack will handle this

export class ImageDropdown {
  constructor({ containerId, items = [] }) {
    this.container = document.getElementById(containerId);
    this.items = items;
    this.createDropdown();
  }

  createDropdown() {
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    // Image button
    const img = document.createElement('img');
    img.src = menuIcon;
    img.alt = 'menu';
    img.width = 35;
    img.id = 'dropdown-button';

    // Menu
    const menu = document.createElement('div');
    menu.classList.add('dropdown-menu');

    this.items.forEach((item, idx) => {
      if (item.type === 'divider') {
        const hr = document.createElement('hr');
        menu.appendChild(hr);
      } else {
        const a = document.createElement('a');
        a.href = item.href || '#';
        a.textContent = item.label;
        if (item.onClick) {
          a.addEventListener('click', (e) => {
            e.preventDefault();
            item.onClick();
          });
        }
        menu.appendChild(a);
      }
    });

    // Toggle logic
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    // Close menu on outside click
    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });

    dropdown.appendChild(img);
    dropdown.appendChild(menu);
    this.container.appendChild(dropdown);
  }
}

// Example usage
if (process.env.NODE_ENV === 'development') {
  new ImageDropdown({
    containerId: 'dropdown-container',
    items: [
      { label: 'Toggle darkmode', onClick: () => alert('Darkmode toggled!') },
      { type: 'divider' },
      { label: 'Source Code', href: 'https://github.com/saifali17x' },
      { type: 'divider' },
      { label: 'Account', onClick: () => alert('Account clicked!') },
      { type: 'divider' },
      { label: 'More coming soon...' },
    ],
  });
}
