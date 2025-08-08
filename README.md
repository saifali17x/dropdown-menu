Here’s a clean, professional `README.md` you can drop straight into your repo — it’ll make your GitHub and npm page look legit and easy to understand.

---

````markdown
# @saifali17x/dropdown-menu

A lightweight, customizable dropdown menu component with image-based toggle support.  
Perfect for adding quick action menus to your web projects.

![Dropdown Menu Preview](./src/dropdown-menu.png)

---

## 🚀 Features

- **Lightweight**: No dependencies, pure vanilla JavaScript
- **Customizable**: Use any image as toggle button
- **Flexible**: Easy to integrate into any project
- **Interactive**: Smooth show/hide animations
- **Programmatic Control**: Public methods for external control
- **Responsive**: Works on all screen sizes

---

## 📦 Installation

```bash
npm install @saifali17x/dropdown-menu
```

---

## 🛠 Usage

### Basic Usage

**1. Import the component and styles**

```js
import '@saifali17x/dropdown-menu/dist/styles.css';
import { ImageDropdown } from '@saifali17x/dropdown-menu';
```

**2. Add a container element**

```html
<div id="my-dropdown"></div>
```

**3. Initialize the dropdown**

```js
const dropdown = new ImageDropdown({
  containerId: 'my-dropdown',
  items: [
    { label: 'Profile', onClick: () => console.log('Profile clicked') },
    { type: 'divider' },
    { label: 'Settings', href: '/settings' },
    { label: 'Logout', onClick: () => logout() },
  ],
});
```

### Advanced Usage

**Custom Icon**

```js
const dropdown = new ImageDropdown({
  containerId: 'my-dropdown',
  customIcon: '/path/to/your/icon.png',
  items: [
    { label: 'Option 1', onClick: () => {} },
    { label: 'Option 2', href: '/option2' },
  ],
});
```

**Programmatic Control**

```js
// Show the dropdown
dropdown.show();

// Hide the dropdown
dropdown.hide();

// Toggle the dropdown
dropdown.toggle();

// Update items dynamically
dropdown.updateItems([
  { label: 'New Item 1', onClick: () => {} },
  { type: 'divider' },
  { label: 'New Item 2', href: '/new-item' },
]);
```

### Item Configuration

Each item in the `items` array can have these properties:

```js
{
  label: 'Display text',           // Required: Text to display
  href: '/some-url',              // Optional: Link URL
  onClick: () => { /* action */ }, // Optional: Click handler
  type: 'divider'                 // Special: Creates a divider line
}
```

### Plain HTML Usage

```html
<link
  rel="stylesheet"
  href="./node_modules/@saifali17x/dropdown-menu/dist/styles.css"
/>
<script src="./node_modules/@saifali17x/dropdown-menu/dist/index.js"></script>

<div id="my-dropdown"></div>

<script>
  const dropdown = new ImageDropdown({
    containerId: 'my-dropdown',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', onClick: () => alert('About clicked') },
    ],
  });
</script>
```

---

## 🎨 Customization

### CSS Customization

You can override the default styles:

```css
.dropdown-menu {
  background: #2c3e50;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dropdown-menu a:hover {
  background: #34495e;
}

.dropdown img {
  width: 40px;
  height: 40px;
}
```

### Positioning

The dropdown automatically positions itself below the button. You can adjust positioning with CSS:

```css
.dropdown-menu {
  top: 100%;
  left: 0;
  /* or */
  right: 0;
  /* or center it */
  left: 50%;
  transform: translateX(-50%);
}
```

---

## 📂 File Structure

```
dist/
  ├── assets/
  │   └── dropdown-menu.png
  ├── index.js          # Main component
  ├── styles.css        # Styles
  └── index.html        # Demo page
src/
  ├── index.js          # Source code
  ├── index.dev.js      # Development entry
  ├── styles.css        # Source styles
  ├── template.html     # Demo template
  └── dropdown-menu.png # Default icon
```

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you'd like to change.

---

## 📜 License

[MIT](LICENSE)

```

```
````
