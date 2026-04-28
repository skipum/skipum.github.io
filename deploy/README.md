# Intelligent Logistics — marketing site

Drop-in static site. One page (`index.html`) + two assets.

## Deploy

### Netlify Drop (fastest)
1. Go to https://app.netlify.com/drop
2. Drag this entire `deploy` folder onto the page.
3. Done — you'll get a live URL.

### Cloudflare Pages (drag-and-drop)
1. Go to https://pages.cloudflare.com
2. Connect / sign in, then drag this `deploy` folder.

### GitHub Pages
1. Create a public repo (e.g. `intelligent-logistics-site`).
2. Upload everything inside this `deploy` folder (so `index.html` is at the repo root).
3. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. URL: `https://<username>.github.io/<repo-name>/`

## Files
- `index.html` — the full site (CSS + JS inline)
- `assets/il-mark.png` — IL logo mark
- `assets/screenshot-tracking.png` — hero product screenshot

## Updating the site
Edit `index.html` and re-deploy (drag the folder again, or push the repo).

The "Request a demo" form opens the user's mail client to `il-demo@contax.com` with their details pre-filled.
