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
│   ├── i18n.js         # English/Hindi/Punjabi translations for all UI copy and menu names
│   └── main.js         # site config (WhatsApp/UPI) + theme/language switching + rendering + interactions
├── assets/
│   ├── logo.png         # ← add your logo here (see below)
│   └── favicon.svg
├── CNAME                # custom domain for GitHub Pages
└── README.md
```

## Before you go live

1. **Add the logo.** Save your logo image as `assets/logo.png` (square image, at least 200×200px works best). Until it's there, the site shows a fallback teal/orange "G" monogram automatically — nothing breaks.
2. **Confirm your WhatsApp number and UPI ID.** Open [js/main.js](js/main.js) and check the constants at the top:
   ```js
   const WHATSAPP_NUMBER = "917719727000";
   const UPI_VPA = "kaurrajinder2618-1@okicici";
   const UPI_PAYEE_NAME = "Ghaint Food";
   const DELIVERY_CHARGE = 30; // flat fee for Delivery mode
   ```
   The cart's "Pay via UPI" button and the WhatsApp checkout message are both built from these, so keep them accurate. If `WHATSAPP_NUMBER` is ever left blank, the checkout button automatically shows "Ordering not configured yet" instead of a broken link.
3. **Update the address & hours** in the footer of [index.html](index.html) (search for `TODO`).
4. **Edit the menu.** All items, categories, prices and images live in [js/menu-data.js](js/menu-data.js) — the page renders itself from that file, so you never need to touch the HTML to update prices.
5. **Swap the placeholder images.** Every item currently uses a generic stock photo (Wikimedia Commons, shared per category) so the menu doesn't look empty. Replace the `IMG.*` URLs at the top of [js/menu-data.js](js/menu-data.js) with your own photos (or per-item `image` URLs) whenever you're ready — nothing else needs to change.

### How ordering works

- Customers add items to a cart from the menu (quantity stepper on each card), then open the cart via the floating cart button.
- The cart drawer shows an itemized invoice: items subtotal, a Pickup/Delivery toggle, a delivery fee row (only shown for Delivery), and the grand total payable — fees are always itemized, never merged silently into the total.
- Choosing **Delivery** reveals a required address field. Clicking either checkout button first validates the cart (non-empty) and, for Delivery, the address (non-blank); on failure a short inline message appears next to the buttons and nothing is sent.
- **Checkout on WhatsApp** opens WhatsApp with an itemized message (mode, line items, subtotal, delivery fee if applicable, total payable, address if applicable, and a reminder to send a payment screenshot next).
- **Pay via UPI** opens a `upi://pay` deep link pre-filled with your UPI ID and the exact grand total, acting as a payment request. It only works from the same device that's completing the order — desktop browsers can't launch a UPI app, so the UPI ID is also shown as copyable plain text beside the button for that case.
- There's no automatic payment verification since this is a static site with no backend — the customer is asked to send a payment confirmation screenshot in the same WhatsApp chat as the next message.
- **The cart is in-memory only.** There is deliberately no `localStorage`/persistence — GitHub Pages can't hold server-side state, and the cart, order mode and address are all reset by a page reload.

### Theme (light/dark) and language (English/Hindi/Punjabi)

- The sun/moon button in the header toggles between light and dark themes. With no explicit choice, the site follows the visitor's OS-level `prefers-color-scheme`; the toggle overrides that and is remembered in a `theme` cookie (1 year).
- The EN/हि/ਪੰ buttons switch the whole site — nav, hero, menu, tiffin, about, cart, and the WhatsApp order message itself — between English, Hindi and Punjabi. The choice is saved in a `lang` cookie (1 year).
- All static copy lives in `js/i18n.js` under `UI_TEXT` (marked in `index.html` with `data-i18n` / `data-i18n-html` / `data-i18n-aria` attributes). Menu category/item names, the pizza note, tiffin items and availability live in the same file under `MENU_I18N`, keyed by the English strings used in `js/menu-data.js`.
- To add a language: add its code to `SUPPORTED_LANGS` in `js/i18n.js`, add a translation for every key in `UI_TEXT` and `MENU_I18N`, and add a matching button to `#langSwitch` in `index.html`.
- To add a menu item: just add it to `js/menu-data.js` as before — if there's no matching entry in `MENU_I18N.items`, the site falls back to showing the English name in every language rather than breaking.

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

### Fixing "Your connection is not private" / `ERR_CERT_COMMON_NAME_INVALID` on `www.ghaintfood.com`

This is a DNS/GitHub Pages configuration issue, not something in this repo's code — no file change here can fix it. Diagnosis: `www.ghaintfood.com` currently resolves via **A records** straight to GitHub Pages' IPs, but GitHub only issues a TLS certificate for the exact domain(s) it recognizes as configured for this site (the one in the `CNAME` file, `ghaintfood.com`, plus its `www.` counterpart *if* DNS is set up the way GitHub expects). Because of that mismatch, browsers hitting `www.ghaintfood.com` get served GitHub's generic `*.github.io` certificate, which doesn't cover that hostname — hence the warning.

To fix it:
1. At your DNS registrar, change the `www` record from an A record to a **CNAME** pointing at `<your-username>.github.io` (not at the raw Pages IPs).
2. In the repo's **Settings → Pages**, remove the custom domain, save, then re-add `ghaintfood.com` and save again — this forces GitHub to re-check DNS and re-issue the certificate for both the apex domain and `www`.
3. Wait for the "DNS check successful" message (can take anywhere from a few minutes to a few hours after the DNS change propagates), then re-enable **Enforce HTTPS**.
4. Avoid linking to `www.ghaintfood.com` anywhere until the cert is confirmed working — prefer the apex `ghaintfood.com`, which already has a valid certificate.

## Editing content later

- **Menu/prices/images** → [js/menu-data.js](js/menu-data.js)
- **WhatsApp number, UPI ID, delivery fee** → [js/main.js](js/main.js) (constants at the top: `WHATSAPP_NUMBER`, `UPI_VPA`, `UPI_PAYEE_NAME`, `DELIVERY_CHARGE`)
- **Copy (hero, about, tiffin description, checkout UI)** → [index.html](index.html) (English source text) + [js/i18n.js](js/i18n.js) (all three languages). The WhatsApp checkout message's field labels ("Mode:", "Subtotal:", "Delivery:", "Total payable:", "Address:") are a fixed English format and live directly in `buildCheckoutMessage()` in [js/main.js](js/main.js) rather than in `js/i18n.js`.
- **Colors/fonts/spacing** → [css/styles.css](css/styles.css) (`:root` CSS variables control the whole palette; dark-theme overrides sit right below in the `prefers-color-scheme`/`[data-theme="dark"]` blocks)
