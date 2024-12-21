```javascript
// Example of a Tailwind CSS configuration file (tailwind.config.js)
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Adding a custom color
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="bg-custom-blue p-4">
    <p>This should be blue.</p>
  </div>
</body>
</html>
```