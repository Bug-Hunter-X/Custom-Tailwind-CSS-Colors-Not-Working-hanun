# Tailwind CSS Custom Color Bug

This repository demonstrates a common issue with applying custom colors in Tailwind CSS. The `custom-blue` color is defined in `tailwind.config.js`, but it does not apply to the element in `index.html`.

## Steps to Reproduce:
1. Clone this repository.
2. Run `npm install` to install the necessary dependencies (if any).
3. Open `index.html` in your browser.

You will see that the div with the class `bg-custom-blue` does not render with the expected blue color.

## Solution:
The solution is provided in the `bugSolution.js` file.  The key is to ensure the `content` option in your Tailwind config correctly points to the relevant files where your classes are being used.