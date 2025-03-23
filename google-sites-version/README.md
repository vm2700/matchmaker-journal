
# Kismet - Static HTML/CSS Version for Google Sites

This is a simplified HTML/CSS version of the Kismet dating website, designed to be hosted on Google Sites. This version uses only HTML, CSS, and minimal JavaScript for the mobile menu toggle.

## Project Structure

```
google-sites-version/
├── index.html            # Home page
├── about.html            # About page
├── blog.html             # Blog listing page
├── blog-post1.html       # Sample blog post
├── contact.html          # Contact page
├── styles.css            # All styles for the site
└── README.md             # This file
```

## How to Use with Google Sites

1. Upload all these files to a web hosting service that supports static HTML/CSS sites (like GitHub Pages, Netlify, or similar).

2. Once uploaded, you have two options:
   - Link to these pages from your Google Site
   - Embed the pages using iframes

### To embed a page in Google Sites:

1. In Google Sites, edit your page
2. Click "Insert" > "Embed" > "Embed code"
3. Use the following code, replacing YOUR_UPLOADED_URL with the actual URL where you've hosted these files:

```html
<iframe src="YOUR_UPLOADED_URL/index.html" width="100%" height="600px" frameborder="0"></iframe>
```

4. Adjust the height as needed to fit your content

## Features

- Fully responsive design that works on mobile, tablet, and desktop
- Clean, modern aesthetic with a focus on readability
- Optimized images and styling for fast loading
- Simple navigation with mobile menu support
- Complete site with home, about, blog, and contact pages

## Customization

All styling is contained in the `styles.css` file. The site uses CSS variables for colors, fonts, and other common properties, making it easy to update the site's appearance:

```css
:root {
  --primary: #FF3357;        /* Change this to update the primary color */
  --secondary: #598F59;      /* Change this to update the secondary color */
  /* ...other variables... */
}
```

## Dependencies

This project intentionally has minimal dependencies:
- Google Fonts (Inter and Playfair Display)
- All other assets are included directly or linked to unsplash.com

## Browser Support

This site is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)
