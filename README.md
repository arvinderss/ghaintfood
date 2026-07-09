# Ghaint Food

Static single-page website for Ghaint Food, a Ludhiana takeaway. Pure HTML/CSS/JS — no framework, no build step, no backend. Deploys straight to GitHub Pages.

This README doubles as the site's low-level design (LLD) reference — architecture, module responsibilities, state, and configuration — so a future maintainer (human or agent) can understand the whole system without re-reading every file first.

## Folder structure

```
ghaintfood/
├── index.html          # all page content/markup, JSON-LD, meta tags
├── css/
│   └── styles.css      # all styling (mobile-first, light/dark theming via CSS custom properties)
├── js/
│   ├── menu-data.js    # menu items + tiffin data — edit this when prices/items/descriptions change
│   ├── i18n.js         # English/Hindi/Punjabi translations for all UI copy and menu names
│   └── main.js         # config constants + theme/language switching + rendering + cart/checkout logic
├── assets/
│   ├── logo.png         # real logo — used as favicon and header/hero logo
│   └── favicon.svg      # earlier placeholder mark, kept for reference/rollback
├── CNAME                # custom domain for GitHub Pages
└── README.md
```

## Architecture

Three plain `<script>` tags, loaded in dependency order, no bundler or module system:

```
index.html
  └─ <script src="js/i18n.js">       (1) pure data: translations — no dependencies
  └─ <script src="js/menu-data.js">  (2) pure data: menu/tiffin — no dependencies
  └─ <script src="js/main.js">       (3) logic: reads (1) and (2), renders into index.html, wires events
```

- **`js/i18n.js`** and **`js/menu-data.js`** are data-only — no functions, no side effects, safe to edit without touching logic.
- **`js/main.js`** is the only file with behavior. It renders the menu/tiffin from `menu-data.js` translated via `i18n.js`, manages the cart/checkout, and wires every interactive element.
- **`css/styles.css`** never contains business logic; it only reads CSS custom properties (design tokens) declared once in `:root`.
- **`index.html`** holds markup, ids that `main.js` targets by `getElementById`, and `data-i18n*` attributes that `main.js` sweeps on load and on every language switch.

### Page load sequence

`js/main.js`'s `DOMContentLoaded` handler runs, in order:

1. `initLang()` — reads the `lang` cookie, sets `currentLang` (defaults to `"en"`).
2. `initTheme()` — reads the `theme` cookie, applies `data-theme` on `<html>` (or leaves it unset to follow OS `prefers-color-scheme`).
3. `initImagesPref()` — reads the `images` cookie, applies `data-images="off"` on `<html>` if the visitor previously turned photos off.
4. `applyStaticTranslations()` — sweeps every `[data-i18n]` / `[data-i18n-html]` / `[data-i18n-aria]` element and fills it from `UI_TEXT`.
5. `renderMenu()` / `renderTiffin()` — build the menu grid and tiffin section from `MENU` / `TIFFIN`, translated per item.
6. `wireOrderButtons()`, `wireCart()`, `wireNavToggle()`, `wireChipClickDelegation()`, `wireChipObserver()`, `wireLogoFallback()`, `wireThemeToggle()`, `wireImagesToggle()`, `wireLangSwitch()` — attach all event listeners (each is idempotent/safe to call once).
7. `setFooterYear()` — fills the copyright year.

Switching language later (`setLang()`) re-runs steps 4–5 plus cart/chip re-rendering via `rerenderLocalizedContent()`, but never re-runs step 6 (listeners are attached once via delegation, so newly-rendered DOM nodes are automatically covered).

### State (module-level, all in `js/main.js`)

| Variable | Type | Lifecycle | Purpose |
|---|---|---|---|
| `cart` | `{ [id]: { name, price, category, qty } }` | **In-memory only** — resets on every page reload (no `localStorage`, deliberately — see Known limitations) | The shopping cart |
| `currentLang` | `"en" \| "hi" \| "pa"` | Persisted in the `lang` cookie (1 year) | Active UI language |
| `orderMode` | `"Pickup" \| "Delivery"` | In-memory only, defaults to `"Pickup"` on every load | Cart checkout mode |
| `deliveryAddress` | `string` | In-memory only | Free-text address, required only when `orderMode === "Delivery"` |
| `categoryObserver` | `IntersectionObserver \| null` | Re-created on every render (`wireChipObserver()`) | Highlights the active category chip while scrolling |

Theme (`data-theme` attribute on `<html>`) is persisted in the `theme` cookie (1 year); if absent, the site follows the OS `prefers-color-scheme` live. Images on/off (`data-images` attribute on `<html>`) follows the same pattern, persisted in the `images` cookie; if absent, images are shown.

### Function reference (`js/main.js`)

| Area | Functions | Responsibility |
|---|---|---|
| Cookies | `getCookie`, `setCookie` | Read/write `theme` and `lang` cookies (1 year, `SameSite=Lax; Secure`) |
| Escaping | `escapeHtml` | Escapes data-derived values before they enter the `innerHTML` menu/cart templates (defense-in-depth) |
| Theme | `systemPrefersDark`, `isDarkActive`, `applyTheme`, `updateThemeToggleUI`, `initTheme`, `toggleTheme`, `wireThemeToggle` | Light/dark theme state, the sun/moon toggle, and the `theme-color` meta tag |
| Images on/off | `isImagesOff`, `applyImagesPref`, `updateImagesToggleUI`, `initImagesPref`, `toggleImagesPref`, `wireImagesToggle` | The food-photo show/hide toggle next to the language switcher |
| i18n | `t`, `localize`, `translateCategory`/`Item`/`Note`/`TiffinItem`/`Availability`/`Description`, `cartLineDisplayName`, `applyStaticTranslations`, `updateLangSwitchUI`, `initLang`, `setLang`, `wireLangSwitch`, `rerenderLocalizedContent` | Translation lookups and the EN/हि/ਪੰ switcher |
| Link builders | `waLink`, `rupee`, `upiLink` | Build `wa.me`/`upi://` URLs (via `encodeURIComponent`/`URLSearchParams`, never raw string concatenation) |
| Rendering | `renderMenu`, `renderTiffin`, `slugify`, `findCartItem` | Build the menu/tiffin DOM from data + translations, filtering out `status: "unavailable"` entries first; `slugify` derives stable cart ids from English names |
| Cart math | `cartCount`, `cartTotal`, `computeTotals` | Item count, items subtotal, and `{ itemsSubtotal, deliveryFee, grandTotal }` |
| Checkout flow | `setOrderMode`, `validateCheckout`, `showCheckoutError`, `clearCheckoutError`, `handleCheckoutClick`, `buildCheckoutMessage` | Pickup/Delivery mode switching, pre-checkout validation, inline error display, and the WhatsApp message text |
| Cart mutation | `addToCart`, `changeQty`, `removeFromCart`, `onCartChange` | Add/adjust/remove cart lines; `onCartChange` is the single re-render entry point after any mutation |
| Cart UI | `updateCartControlsUI`, `updateCartFab`, `renderCartDrawer`, `openCart`, `closeCart`, `wireCart` | Per-card add/stepper toggling, the floating cart badge, and the cart drawer itself |
| Misc wiring | `wireOrderButtons`, `wireNavToggle`, `wireChipClickDelegation`, `wireChipObserver`, `wireLogoFallback`, `setFooterYear` | Generic WhatsApp buttons, mobile nav, category chip scroll-spy, logo fallback, footer year |

### Image-failure fallback

Every menu-card image and the tiffin image use a **wrapper + sibling fallback** pattern rather than relying on the browser's broken-image icon:

```html
<div class="menu-card-img-wrap">
  <img class="menu-card-img" src="..." loading="lazy">
  <div class="menu-card-img-fallback" hidden>Item Name</div>
</div>
```

`renderMenu()` attaches a one-shot `error` listener per `<img>` (safe because each card is a fresh DOM node every render). `renderTiffin()` instead assigns `image.onerror = ...` as a property (not `addEventListener`), because `#tiffinImage` is a **static, reused** element across re-renders — using `addEventListener` there would stack a new listener on every language switch.

### Images on/off toggle

A round icon button next to the language switcher lets a visitor hide every food photo (menu cards and the tiffin) for a denser, text-only view — the image icon shows the crossed-out variant while images are on (click to turn them off), mirroring the sun/moon convention of "the icon shown is the action a click performs."

- Purely a CSS toggle: `applyImagesPref()` sets/removes `data-images="off"` on `<html>`; `css/styles.css` collapses `.menu-card-img-wrap` and `.tiffin-visual` entirely (not just the `<img>`) so cards shrink to name/description/price with no leftover blank space.
- No re-render is involved and `renderMenu()`/`renderTiffin()` are unaware of this feature — it works on whatever's already in the DOM, so it can't drift out of sync with the menu data.
- This is a **visual-only** toggle: it does not stop already-rendered images from having been fetched, and does not skip the network request for images not yet on screen. It's for a cleaner/denser reading view, not bandwidth savings.
- Persisted in the `images` cookie (1 year), same pattern as `theme`/`lang`; defaults to on (images shown) if the cookie is absent.

### Sold out / unavailable items

Listing management is a single optional `status` field on any item in `js/menu-data.js` (or on `TIFFIN`) — there is **no on-site or admin UI** for this by design; the site owner edits the data file directly.

- Omitted or `"available"` (default): shown normally.
- `"sold-out"`: the item/tiffin stays visible — dimmed via `.is-sold-out` — but its Add-to-cart control is replaced with a `.sold-out-badge` pill reading the translated "Sold Out" label. Use this when stock has temporarily run out but the item is still on the regular menu.
- `"unavailable"`: the item is dropped entirely before rendering, as if it weren't in the file at all. Use this for items never actually offered or permanently discontinued. `renderMenu()` filters these out first and also drops any category left with zero items afterward, so an empty heading/chip never appears.

Both states apply identically to `TIFFIN`: `renderTiffin()` hides the whole `#tiffin` section for `"unavailable"`, or shows `#tiffinSoldOutBadge` in place of its cart controls for `"sold-out"`.

## Configuration & constants

**Design principle**: every value that JavaScript actually reads or writes at runtime has exactly one source of truth. Values baked into static `<head>` markup (meta tags, JSON-LD, favicon links) are a deliberate, documented exception — see "Why some things are still duplicated" below.

### Single-sourced (safe to edit in one place)

| Constant | File | Used by |
|---|---|---|
| `WHATSAPP_NUMBER`, `UPI_VPA`, `UPI_PAYEE_NAME`, `DELIVERY_CHARGE`, `WHATSAPP_CONFIGURED`, `ORDER_LABEL` | `js/main.js` (top) | Every WhatsApp/UPI link and the checkout message on the whole page |
| `THEME_COLOR_LIGHT`, `THEME_COLOR_DARK` | `js/main.js` (top) | `applyTheme()`'s runtime updates to `<meta name="theme-color">` |
| `THEME_COOKIE`, `LANG_COOKIE`, `IMAGES_COOKIE` | `js/main.js` (top) | Cookie names for persisted theme/language/images-on-off choice |
| `DEFAULT_LANG`, `SUPPORTED_LANGS` | `js/i18n.js` (top) | Language switcher + fallback logic |
| All design tokens (colors, fonts, radius, shadow) | `css/styles.css` `:root` (+ dark-mode overrides) | Every component on the page |
| `IMG.*` shared category photos | `js/menu-data.js` (top) | Menu item `image` fields |
| All UI copy (EN/HI/PA) | `js/i18n.js` `UI_TEXT`, incl. `footer_address` and `footer_hours` | Rendered via `data-i18n` — the HTML only holds a no-JS fallback that gets overwritten on load |

### Intentionally duplicated (static HTML, not JS-driven)

These live in `index.html`'s `<head>` as raw, static markup **on purpose**: browsers paint `<title>`/`<meta>`/`favicon` before any JS runs, and search engines and link-preview bots (WhatsApp, Facebook, Twitter) parse `<meta>`/JSON-LD **without executing JavaScript at all**. Writing these at runtime via JS would leave crawlers and share previews seeing blank or stale content. Achieving a true single source for these would require a small build/templating step (generating `index.html` from a data file before each deploy) — a deliberate trade-off against this site's "no build step" design goal.

| Value | Appears in | Keep in sync with |
|---|---|---|
| Phone number | JSON-LD `telephone` (`+91...` format) | `WHATSAPP_NUMBER` in `js/main.js` (digits-only format — different format by design, `wa.me` and `tel:`/schema.org conventions differ) |
| Business name/address | `<title>`, meta description, `og:*`, JSON-LD `name`/`address` | `footer_address` in `js/i18n.js` (visible footer copy) — JSON-LD's structured fields can't be a single string anyway |
| `assets/logo.png` path | 5 places: 2 favicon `<link>`s, `og:image`, header `<img>`, hero `<img>` | Each other — all 5 must share the **same** `?v=` cache-busting query string (bump all 5 together when the image file changes) |
| `theme-color` initial value | Static `<meta name="theme-color">` | `THEME_COLOR_LIGHT` in `js/main.js` (JS overwrites this a moment after load anyway) |

Each of these has an inline HTML comment at its location pointing back here.

## Before you go live

1. **Logo/favicon**: `assets/logo.png` is already the real logo, used for the favicon and the header/hero. If you replace the image file, bump the `?v=` query string in all 5 places listed above.
2. **Confirm your WhatsApp/UPI/delivery config.** Open [js/main.js](js/main.js) and check the constants at the top (`WHATSAPP_NUMBER`, `UPI_VPA`, `UPI_PAYEE_NAME`, `DELIVERY_CHARGE`). If `WHATSAPP_NUMBER` is ever left blank, the checkout button automatically shows "Ordering not configured yet" instead of a broken link.
3. **Update the address & hours.** `footer_address`/`footer_hours` in [js/i18n.js](js/i18n.js) drive the visible footer text; the JSON-LD address block in [index.html](index.html)'s `<head>` is a separate, structured copy — update both (search for `TODO`).
4. **Edit the menu.** All items, categories, prices, descriptions and images live in [js/menu-data.js](js/menu-data.js) — the page renders itself from that file.
5. **Swap the placeholder photos.** Most items still use a generic stock photo (Wikimedia Commons, shared per category). Replace the `IMG.*` URLs at the top of [js/menu-data.js](js/menu-data.js) with your own photos (or per-item `image` URLs) whenever you're ready.

### Cart & checkout logic

- Customers add items to a cart from the menu (quantity stepper on each card, `addToCart`/`changeQty`), then open the cart via the floating cart button (`openCart`).
- The cart drawer (`renderCartDrawer`) shows an itemized invoice: items subtotal, a Pickup/Delivery toggle, a delivery fee row (only for Delivery), and the grand total — fees are always itemized, never merged silently into the total (`computeTotals`).
- Choosing **Delivery** reveals a required address field. Clicking either checkout button runs `validateCheckout()` first (cart non-empty; address non-blank for Delivery); on failure, `showCheckoutError()` displays a short inline message and nothing is sent.
- **Checkout on WhatsApp** (`buildCheckoutMessage`) opens WhatsApp with: order label, mode, itemized lines (`qty × name — ₹subtotal`), subtotal, delivery fee (if applicable), total payable, address (if applicable), the UPI payment link, a payment-screenshot reminder, and a closing thank-you line. The field labels are fixed English by design (an exact format), not translated. The UPI link in the message is built from the same `upiLink()`/`grandTotal` as the on-page button below, so the two can never show a different amount.
- **Pay via UPI** opens the same `upi://pay` deep link pre-filled with the exact grand total — a payment *request*, not automated verification. It only works as a tap target from the same device completing the order (desktop browsers can't launch a UPI app from either the button or the WhatsApp message link), so the UPI ID is also shown as copyable plain text beside the button.
- **The cart is in-memory only** — no `localStorage`. GitHub Pages has no backend to persist anything server-side, and this was a deliberate choice (not just an omission) to keep the trust model simple: nothing survives a reload, including cart, order mode and address.

### Theme (light/dark) and language (English/Hindi/Punjabi)

- The sun/moon button toggles light/dark. With no explicit choice, the site follows the visitor's OS `prefers-color-scheme`; the toggle overrides that and is remembered in the `theme` cookie.
- The EN/हि/ਪੰ buttons switch nav, hero, menu (incl. item descriptions), tiffin, about, cart, and the WhatsApp order message's translatable parts — saved in the `lang` cookie.
- To add a language: add its code to `SUPPORTED_LANGS` in `js/i18n.js`, add a translation for every key in `UI_TEXT` and `MENU_I18N`, and add a matching button to `#langSwitch` in `index.html`.
- To add a menu item: add it to `js/menu-data.js` — if there's no matching `MENU_I18N.items`/`.descriptions` entry, the site falls back to the English text rather than breaking.

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

## Known limitations / non-goals

These are deliberate design decisions, not oversights:

- **No backend, no build step.** Everything ships as static files GitHub Pages serves as-is. This keeps deploys trivial (`git push`) but means no server-side validation, no database, and no templating — see "Configuration & constants" above for what that costs in terms of duplicated meta/JSON-LD values.
- **No cart/order persistence.** The cart, order mode, and delivery address are in-memory JS state only; a reload clears them. There is deliberately no `localStorage`.
- **No automated payment verification.** "Pay via UPI" opens a pre-filled payment request; confirming payment actually happened is a manual step (customer sends a screenshot on WhatsApp).
- **No test suite.** Changes are verified manually (or via a headless browser during development) — add/remove cart items, toggle Pickup/Delivery, trigger validation errors, inspect the built WhatsApp/UPI links, force an image failure, toggle dark mode, check mobile width, and confirm no `localStorage` writes occur.
- **Single-locale SEO/social metadata.** `<title>`, meta description, and `og:*` tags are always in English regardless of the visitor's selected language, since they're static HTML read before/without JS.

## Security posture

Static site, no backend — the attack surface is small, but a few hardening measures are in place:

- **Content-Security-Policy** (`<meta http-equiv>` in `index.html`'s `<head>`): pins scripts/styles/fonts/images to a known allow-list, blocking any injected foreign script or exfiltration target. There are **no** inline scripts or inline styles, so the policy needs no `'unsafe-inline'` — keep it that way. **If you move menu images (`js/menu-data.js`) off `upload.wikimedia.org`, add the new host to `img-src`** or the photos will be blocked.
- **Output escaping.** `escapeHtml()` wraps every data-derived value (item names, descriptions, image URLs) before it reaches the `innerHTML` templates. The only user-typed input — the delivery address — never touches the DOM as HTML; it flows solely into the `wa.me` message via `encodeURIComponent`.
- **`Referrer-Policy: strict-origin-when-cross-origin`** (`<meta name="referrer">`) and **`SameSite=Lax; Secure`** preference cookies.
- **Known gap:** clickjacking protection (`frame-ancestors` / `X-Frame-Options`) can't be set from a `<meta>` tag, and GitHub Pages doesn't allow custom response headers — so framing protection would require a host that can set headers (e.g. Cloudflare in front of the site).
