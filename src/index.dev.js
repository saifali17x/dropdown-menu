import './styles.css';
import { ImageDropdown } from './index.js';

// Example usage for development
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
