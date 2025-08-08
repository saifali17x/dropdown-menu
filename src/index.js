import menuIcon from './dropdown-menu.png'; // Webpack will handle this

export class ImageDropdown {
  constructor({ containerId, items = [], customIcon = null }) {
    this.container = document.getElementById(containerId);
    this.items = items;
    this.customIcon = customIcon;
    this.createDropdown();
  }

  createDropdown() {
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    // Image button
    const img = document.createElement('img');
    img.src = this.customIcon || menuIcon;
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

  // Public methods for external control
  show() {
    const menu = this.container.querySelector('.dropdown-menu');
    if (menu) menu.classList.add('show');
  }

  hide() {
    const menu = this.container.querySelector('.dropdown-menu');
    if (menu) menu.classList.remove('show');
  }

  toggle() {
    const menu = this.container.querySelector('.dropdown-menu');
    if (menu) menu.classList.toggle('show');
  }

  updateItems(newItems) {
    this.items = newItems;
    const menu = this.container.querySelector('.dropdown-menu');
    if (menu) {
      menu.innerHTML = '';
      this.items.forEach((item) => {
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
    }
  }
}
