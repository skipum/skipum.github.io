# Intelligent Logistics — marketing site

Static, multi-page deployable site.

## Pages
- `/` — home
- `/product/` — platform features
- `/use-cases/` — index of 8 use cases
- `/use-cases/<slug>/` — 8 detail pages
- `/customers/` — testimonials + logo wall
- `/about/` — company / numbers / principles
- `/success/` — Customer Success
- `/contact/` — demo form (mailto: il-demo@contax.com)
- `/404.html` — not-found page

## Deploy

### Netlify Drop
Drag the `site` folder onto https://app.netlify.com/drop.

### Cloudflare Pages
Drag the `site` folder at https://pages.cloudflare.com.

### GitHub Pages
Push the contents of `site` to a repo's root. Pages → Source: main / root.
The `CNAME` file maps to `intelligentlogistics.contax.com` — change it to your own domain or delete it.

## SEO
- `sitemap.xml` lists all 15 URLs.
- `robots.txt` allows everything except `/404.html`.
- Every page has `<meta description>`, OG tags, Twitter card, and canonical URL.
- Edit the canonical/CNAME if you ship under a different domain.

## Updating
- Shared CSS: `css/site.css`
- Shared JS: `js/site.js`
- Each page is a self-contained HTML file with the nav and footer baked in.

The contact form opens the user's mail client to `il-demo@contax.com` with their details pre-filled. To use a real form backend (Formspree, Netlify Forms, etc.), swap the submit handler in `js/site.js`.
