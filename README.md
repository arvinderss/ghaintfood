# Ghaint Food

Static single-page website for Ghaint Food, a Ludhiana takeaway. Pure HTML/CSS/JS — no framework, no build step, no backend. Deploys straight to GitHub Pages.

## Folder structure

```
ghaintfood/
├── index.html          # all page content/markup
├── css/
│   └── styles.css      # all styling (mobile-first)
├── js/
│   ├── menu-data.js    # menu items + tiffin data — edit this when prices/items change
│   └── main.js         # site config (WhatsApp/Zomato/Swiggy) + rendering + interactions
├── assets/
│   ├── logo.png         # ← add your logo here (see below)
│   └── favicon.svg
├── CNAME                # custom domain for GitHub Pages
└── README.md
```

## Before you go live

1. **Add the logo.** Save your logo image as `assets/logo.png` (square image, at least 200×200px works best). Until it's there, the site shows a fallback teal/orange "G" monogram automatically — nothing breaks.
2. **Add your Zomato & Swiggy URLs.** Open [js/main.js](js/main.js) and fill in:
   ```js
   const CONFIG = {
     whatsappNumber: "919914829511",
     zomatoUrl: "",  // paste your Zomato listing URL here
     swiggyUrl: ""   // paste your Swiggy listing URL here
   };
   ```
   Until these are filled in, the Zomato/Swiggy buttons show as "coming soon" (disabled) so there are no dead links live.
3. **Update the address & hours** in the footer of [index.html](index.html) (search for `TODO`).
4. **Edit the menu.** All items, categories and prices live in [js/menu-data.js](js/menu-data.js) — the page renders itself from that file, so you never need to touch the HTML to update prices.

## Local preview

No build step needed — just open `index.html` in a browser, or serve it locally for a closer-to-production feel:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one) and push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Ghaint Food website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
5. Your site will build at `https://<your-username>.github.io/<your-repo>/`.

### Custom domain (ghaintfood.com)

This repo already includes a `CNAME` file containing `ghaintfood.com`, so GitHub Pages will pick it up automatically.

1. At your domain registrar, add these DNS records for `ghaintfood.com`:
   - **A records** for the apex domain pointing to GitHub Pages' IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record** for `www` pointing to `<your-username>.github.io`.
2. In **Settings → Pages → Custom domain**, confirm it shows `ghaintfood.com` and click **Save**.
3. Once DNS propagates (can take up to 24 hours), check **Enforce HTTPS** in the same settings panel.

## Editing content later

- **Menu/prices** → [js/menu-data.js](js/menu-data.js)
- **WhatsApp number, Zomato/Swiggy links** → [js/main.js](js/main.js) (`CONFIG` object at the top)
- **Copy (hero, about, tiffin description)** → [index.html](index.html)
- **Colors/fonts/spacing** → [css/styles.css](css/styles.css) (`:root` CSS variables at the top control the whole palette)
