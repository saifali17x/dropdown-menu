// Default menu icon as data URL (base64 encoded PNG)
const defaultMenuIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAASvElEQVR42u3da2xc9ZnH8d9/kg2EQIEtAeIgkwpBUiAJu5As11YgoVCRdByQFlpRVZulUtlVkYpU0gK7tBuVLk1VUVW7WqkLUcm+YLci2EloiZCgbS6U+8VtSYJQU4tMQgILKSXB2TjPvvCMPY7Hc/HMnAf7+X78Zub4zOg5ls7X54w9c5IJQFQ57wEA+CEAQGAEAAiMAACBEQAgMAIABEYAgMAIABAYAQACIwBAYAQACIwAAIERACAwAgAERgCAwAgAEBgBAAIjAEBgBAAIjAAAgREAIDACAARGAIDACAAQGAEAAiMAQGAEAAiMAACBEQAgMAIABEYAgMAIABAYAQACIwBAYAQACIwAAIERACAwAgAERgCAwAgAEBgBAAIjAEBgBAAIjAAAgREAIDACAARGAIDACAAQGAEAAiMAQGAEAAiMAACBEQAgMAIABEYAgMAIABDY1OYeno5TpzrKvmZpmvcmAZNYv/aqUPbVZ/3NPF2y8T5wppaqS9dquvdPBAjskJ5Utzba/vE9fBwBSOeoS3ldwekD8DFxVFvVo257s9EHNhSAlPS3ulvzvbcWQEW9+q7+xxrYqRsIQLpG39fF3lsIoKoXdac9Ve/KdQYgLdT9WuK9ZQDqskkr7dV6VqzjPD51pof1Ers/MGEs0Uvp4dRZe8WaRwDpOj2ik7y3B0DDDuhme6L6KjWOANLXtZHdH5iQTtbG9PXqq1Q5AkjT9B/6O+9tANCUNfqqHR7rm2MGIJ2ux3S59+wAmrZNy21f5W+NMYA0XxtVx0sIACaAPi213krfqBiANEvPa7b3zABaZrcW2Z7Riyu8CJiOVze7PzCpzFZ3On704kp/BfiJFntPC6DFFusnoxeOCkBaqVu8JwXQBreklccuOuY1gLRUPbzLD5ikjipvG8sXjAhAOk8v6CTvGQG0zQe6xHYO3x352341uz8wqZ2k1eV3y44A0pXa7D0dgLa7yraUbpYHYJsu854MQNs9Y0P/4zt0CpCWs/sDIVyWlpduFo8A0lT1ap73XAAysV3z7Yg0fASwgt0fCGOeVgzeSCYpJfXpLO+ZAGTmLXWalY4ALmX3B0I5S5dKpQB0eU8DIGNdUikAee9ZAGQsL0k5Kc3TXO9ZAGRsbpo3eATA738govxgALq85wDgoEtKOkN7lLwnAZA506yczmf3B0JKOj/Hp/8BYc3OqcN7BgBOOggAEBcBAAIjAEBgBAAIrCPpIx3nPQUAF/1J1vyzAJiYuAgIEBgBAAIjAEBgBAAIjAAAgREAIDACAARGAIDACAAQGAEAAiMAQGAEAAiMAACBEQAgMAIABEYAgMAIABAYAQACIwBAYAQACIwAAIERACAwAgAERgCAwAgAEBgBAAIjAEBgBAAIjAAAgREAIDACAARGAIDACAAQGAEAAiMAQGAEAAiMAACBEQAgMAIABEYAgMAIABAYAQACIwBAYAQACIwAAIERACAwAgAERgCAwAgAEBgBAAIjAEBgBAAIjAAAgREAIDACAARGAIDACAAQGAEAAiMAQGAEAAiMAACBEQAgMAIABEYAgMAIABAYAQACIwBAYAQACIwAAIERACAwAgAERgCAwAgAEBgBAAIjAEBgBAAI7P8BzYWFq0T7AQMAAAAASUVORK5CYII=';

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
    img.src = this.customIcon || defaultMenuIcon;
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
