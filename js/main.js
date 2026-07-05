/*
 * Ghaint Food — cart, checkout and interaction logic for the whole page.
 * Kept as one file (no bundler) so a plain <script> tag is enough on GitHub Pages;
 * every dynamic value that reaches a URL (wa.me / upi://) is built via URLSearchParams
 * or encodeURIComponent so WhatsApp/UPI links never break on special characters or emoji.
 */

// WHATSAPP_NUMBER: country code + digits only, no plus/spaces — every order button reads this.
const WHATSAPP_NUMBER = "917719727000";
// UPI_VPA: the virtual payment address that receives payment via the "Pay via UPI" deep link.
const UPI_VPA = "kaurrajinder2618-1@okicici";
// UPI_PAYEE_NAME: shown inside the customer's UPI app; its own constant so the UPI link and
// the message body can never drift out of sync if this is ever renamed.
const UPI_PAYEE_NAME = "Ghaint Food";
// DELIVERY_CHARGE: flat fee for Delivery mode. Flat because distance-based tiers need a
// backend to calculate driving distance — impossible on a static GitHub Pages host.
const DELIVERY_CHARGE = 30;
// Defensive: if a future edit blanks WHATSAPP_NUMBER, disable the WhatsApp button instead of
// shipping a broken wa.me link.
const WHATSAPP_CONFIGURED = Boolean(WHATSAPP_NUMBER && WHATSAPP_NUMBER.trim());

const THEME_COOKIE = "theme";
const LANG_COOKIE = "lang";

// Cart is in-memory only — GitHub Pages has no backend to persist it, and localStorage was
// deliberately dropped so nothing survives a reload. Same for order mode and address.
let cart = {};
let currentLang = DEFAULT_LANG;
let categoryObserver = null;
let orderMode = "Pickup"; // "Pickup" | "Delivery"
let deliveryAddress = ""; // only meaningful when orderMode === "Delivery"

/* ---------- cookies ---------- */

function getCookie(name) {
  const escaped = name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1");
  const match = document.cookie.match(new RegExp("(?:^|; )" + escaped + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

/* ---------- theme (light/dark) ---------- */

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function isDarkActive() {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "dark") return true;
  if (explicit === "light") return false;
  return systemPrefersDark();
}

function applyTheme(theme) {
  if (theme === "dark" || theme === "light") {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", isDarkActive() ? "#14100B" : "#0E4B4E");
  updateThemeToggleUI();
}

function updateThemeToggleUI() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const dark = isDarkActive();
  btn.setAttribute("aria-pressed", String(dark));
  btn.setAttribute("aria-label", t(dark ? "theme_toggle_to_light" : "theme_toggle_to_dark"));
}

function initTheme() {
  const saved = getCookie(THEME_COOKIE);
  applyTheme(saved === "dark" || saved === "light" ? saved : null);
}

function toggleTheme() {
  const next = isDarkActive() ? "light" : "dark";
  applyTheme(next);
  setCookie(THEME_COOKIE, next, 365);
}

function wireThemeToggle() {
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
}

/* ---------- language ---------- */

function t(key) {
  const entry = UI_TEXT[key];
  if (!entry) return key;
  return entry[currentLang] || entry.en || key;
}

function localize(map, key) {
  if (currentLang === "en") return key;
  return (map[key] && map[key][currentLang]) || key;
}

function translateCategory(name) { return localize(MENU_I18N.categories, name); }
function translateItem(name) { return localize(MENU_I18N.items, name); }
function translateNote(note) { return localize(MENU_I18N.notes, note); }
function translateTiffinItem(name) { return localize(MENU_I18N.tiffinItems, name); }
function translateAvailability(text) { return localize(MENU_I18N.tiffinAvailability, text); }

function translateDescription(item) {
  if (!item.description) return "";
  return localize(MENU_I18N.descriptions, item.description);
}

// Cart lines store the canonical English name; translate only for display.
function cartLineDisplayName(id, englishName) {
  if (id === "tiffin-thali") return t("tiffin_title");
  return translateItem(englishName);
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
}

function updateLangSwitchUI() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });
}

function initLang() {
  const saved = getCookie(LANG_COOKIE);
  currentLang = SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
  document.documentElement.lang = currentLang;
  updateLangSwitchUI();
}

function setLang(lang) {
  currentLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  setCookie(LANG_COOKIE, currentLang, 365);
  document.documentElement.lang = currentLang;
  updateLangSwitchUI();
  applyStaticTranslations();
  updateThemeToggleUI(); // aria-label is state-dependent, not purely static — re-apply after the sweep above
  rerenderLocalizedContent();
}

function wireLangSwitch() {
  document.getElementById("langSwitch")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    setLang(btn.dataset.lang);
  });
}

function rerenderLocalizedContent() {
  renderMenu();
  renderTiffin();
  updateCartControlsUI();
  updateCartFab();
  renderCartDrawer();
  wireChipObserver();
}

/* ---------- helpers ---------- */

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function rupee(n) {
  return `₹${n}`;
}

function upiLink(amount, note) {
  const params = new URLSearchParams({
    pa: UPI_VPA,
    pn: UPI_PAYEE_NAME,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note
  });
  return `upi://pay?${params.toString()}`;
}

/* ---------- rendering ---------- */

function renderMenu() {
  const wrap = document.getElementById("menuCategories");
  const chips = document.getElementById("categoryChips");
  if (!wrap || !chips) return;
  wrap.innerHTML = "";
  chips.innerHTML = "";

  MENU.forEach((group, i) => {
    const slug = slugify(group.category);

    // chip
    const chip = document.createElement("a");
    chip.href = `#cat-${slug}`;
    chip.className = "chip";
    chip.dataset.target = `cat-${slug}`;
    chip.textContent = translateCategory(group.category);
    chips.appendChild(chip);

    // section
    const section = document.createElement("div");
    section.className = "menu-category";
    section.id = `cat-${slug}`;

    const heading = document.createElement("h3");
    heading.textContent = translateCategory(group.category);
    if (group.note) {
      const note = document.createElement("span");
      note.className = "category-note";
      note.textContent = translateNote(group.note);
      heading.appendChild(note);
    }
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "menu-grid";
    group.items.forEach((item) => {
      const id = `${slug}-${slugify(item.name)}`;
      const displayName = translateItem(item.name);
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <div class="menu-card-img-wrap">
          <img class="menu-card-img" src="${item.image}" alt="${displayName}" loading="lazy">
          <div class="menu-card-img-fallback" hidden>${displayName}</div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${displayName}</div>
          ${item.description ? `<div class="menu-card-description">${translateDescription(item)}</div>` : ""}
          <div class="menu-card-price">${rupee(item.price)} <small>${t("label_takeaway")}</small></div>
          <div class="cart-controls" data-id="${id}">
            <button class="cart-add-btn" data-id="${id}">${t("label_add")}</button>
            <div class="cart-stepper" hidden>
              <button class="stepper-btn" data-action="dec" data-id="${id}" aria-label="${t("aria_decrease")}">−</button>
              <span class="stepper-qty" data-qty-for="${id}">0</span>
              <button class="stepper-btn" data-action="inc" data-id="${id}" aria-label="${t("aria_increase")}">+</button>
            </div>
          </div>
        </div>
      `;
      // Each card's <img> is a fresh node, so binding here (rather than in a "wire" pass)
      // never stacks duplicate listeners across re-renders (e.g. on a language switch).
      const img = card.querySelector(".menu-card-img");
      const fallback = card.querySelector(".menu-card-img-fallback");
      img.addEventListener("error", () => {
        img.hidden = true;
        fallback.hidden = false;
      });
      grid.appendChild(card);
    });
    section.appendChild(grid);

    wrap.appendChild(section);
    if (i < MENU.length - 1) {
      wrap.appendChild(document.createElement("hr")).className = "menu-divider";
    }
  });
}

function renderTiffin() {
  const list = document.getElementById("tiffinList");
  const price = document.getElementById("tiffinPrice");
  const avail = document.getElementById("tiffinAvailability");
  const image = document.getElementById("tiffinImage");
  const imageFallback = document.getElementById("tiffinImageFallback");
  if (!list || !price || !avail) return;
  list.innerHTML = "";

  TIFFIN.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = translateTiffinItem(item);
    list.appendChild(li);
  });
  price.textContent = rupee(TIFFIN.price);
  avail.textContent = translateAvailability(TIFFIN.availability);

  if (image) {
    image.hidden = false;
    image.alt = t("tiffin_alt");
    if (imageFallback) {
      imageFallback.hidden = true;
      // #tiffinImage is a static element re-used across renders (unlike menu cards), so this
      // is assigned as a property (not addEventListener) to avoid piling up duplicate handlers.
      image.onerror = () => {
        image.hidden = true;
        imageFallback.textContent = t("tiffin_title");
        imageFallback.hidden = false;
      };
    }
    image.src = TIFFIN.image;
  }
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Flat lookup of every orderable item (menu items + tiffin) by cart id.
// Names/categories stored here are the canonical English strings — translate only for display.
function findCartItem(id) {
  if (id === "tiffin-thali") {
    return { name: "Home-Style Tiffin", price: TIFFIN.price, category: "Tiffin" };
  }
  for (const group of MENU) {
    const slug = slugify(group.category);
    for (const item of group.items) {
      if (`${slug}-${slugify(item.name)}` === id) {
        return { name: item.name, price: item.price, category: group.category };
      }
    }
  }
  return null;
}

function cartCount() {
  return Object.values(cart).reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  return Object.values(cart).reduce((sum, line) => sum + line.qty * line.price, 0);
}

// Fees are always itemized separately here — grandTotal must never silently absorb the
// delivery fee without itemsSubtotal/deliveryFee also being shown to the customer.
function computeTotals() {
  const itemsSubtotal = cartTotal();
  const deliveryFee = orderMode === "Delivery" ? DELIVERY_CHARGE : 0;
  const grandTotal = itemsSubtotal + deliveryFee;
  return { itemsSubtotal, deliveryFee, grandTotal };
}

function setOrderMode(mode) {
  orderMode = mode === "Delivery" ? "Delivery" : "Pickup";
  clearCheckoutError();
  renderCartDrawer();
}

// Validates at the checkout entry point (not earlier) so browsing/adding to cart is always
// frictionless; only the act of checking out enforces cart/address requirements.
function validateCheckout() {
  if (Object.keys(cart).length === 0) {
    return { ok: false, message: t("checkout_error_empty_cart") };
  }
  if (orderMode === "Delivery" && deliveryAddress.trim() === "") {
    return { ok: false, message: t("checkout_error_address_required") };
  }
  return { ok: true };
}

function showCheckoutError(message) {
  const el = document.getElementById("cartCheckoutError");
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
}

function clearCheckoutError() {
  const el = document.getElementById("cartCheckoutError");
  if (!el) return;
  el.textContent = "";
  el.hidden = true;
}

function updateCartControlsUI() {
  document.querySelectorAll(".cart-controls").forEach((el) => {
    const id = el.dataset.id;
    const qty = cart[id]?.qty || 0;
    const addBtn = el.querySelector(".cart-add-btn");
    const stepper = el.querySelector(".cart-stepper");
    const qtyEl = el.querySelector(".stepper-qty");
    if (qty > 0) {
      addBtn.hidden = true;
      stepper.hidden = false;
      qtyEl.textContent = qty;
    } else {
      addBtn.hidden = false;
      stepper.hidden = true;
    }
  });
}

function updateCartFab() {
  const fab = document.getElementById("cartFab");
  const badge = document.getElementById("cartFabBadge");
  if (!fab || !badge) return;
  const count = cartCount();
  badge.textContent = count;
  fab.hidden = count === 0;
}

function renderCartDrawer() {
  const itemsWrap = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("cartEmpty");
  const subtotalEl = document.getElementById("cartSubtotal");
  const deliveryFeeRow = document.getElementById("cartDeliveryFeeRow");
  const deliveryFeeEl = document.getElementById("cartDeliveryFee");
  const addressField = document.getElementById("deliveryAddressField");
  const totalEl = document.getElementById("cartTotal");
  const whatsappBtn = document.getElementById("cartWhatsappBtn");
  const upiBtn = document.getElementById("cartUpiBtn");
  const upiVpaText = document.getElementById("cartUpiVpaText");
  if (!itemsWrap || !totalEl) return;

  itemsWrap.querySelectorAll(".cart-row").forEach((row) => row.remove());

  const ids = Object.keys(cart);
  if (emptyMsg) emptyMsg.hidden = ids.length > 0;

  ids.forEach((id) => {
    const line = cart[id];
    const displayName = cartLineDisplayName(id, line.name);
    const row = document.createElement("div");
    row.className = "cart-row";
    row.dataset.id = id;
    row.innerHTML = `
      <div class="cart-row-info">
        <div class="cart-row-name">${displayName}</div>
        <div class="cart-row-unit">${rupee(line.price)} each</div>
      </div>
      <div class="cart-stepper">
        <button class="stepper-btn" data-action="dec" data-id="${id}" aria-label="${t("aria_decrease")}">−</button>
        <span class="stepper-qty" data-qty-for="${id}">${line.qty}</span>
        <button class="stepper-btn" data-action="inc" data-id="${id}" aria-label="${t("aria_increase")}">+</button>
      </div>
      <div class="cart-row-total">${rupee(line.qty * line.price)}</div>
      <button class="cart-row-remove" data-action="remove" data-id="${id}" aria-label="${t("aria_remove_prefix")} ${displayName}">&times;</button>
    `;
    itemsWrap.appendChild(row);
  });

  const { itemsSubtotal, deliveryFee, grandTotal } = computeTotals();
  if (subtotalEl) subtotalEl.textContent = rupee(itemsSubtotal);
  if (deliveryFeeRow) deliveryFeeRow.hidden = orderMode !== "Delivery";
  if (deliveryFeeEl) deliveryFeeEl.textContent = rupee(deliveryFee);
  if (addressField) addressField.hidden = orderMode !== "Delivery";
  totalEl.textContent = rupee(grandTotal);
  if (upiVpaText) upiVpaText.textContent = UPI_VPA;

  if (whatsappBtn) {
    if (WHATSAPP_CONFIGURED) {
      whatsappBtn.href = waLink(buildCheckoutMessage());
      whatsappBtn.textContent = t("cart_send_whatsapp");
      whatsappBtn.classList.remove("is-disabled");
    } else {
      whatsappBtn.href = "#";
      whatsappBtn.textContent = t("cart_whatsapp_not_configured");
      whatsappBtn.classList.add("is-disabled");
    }
  }
  if (upiBtn) {
    upiBtn.textContent = t("cart_pay_upi_amount").replace("{amount}", rupee(grandTotal));
    upiBtn.href = grandTotal > 0 ? upiLink(grandTotal, `Ghaint Food order - ${rupee(grandTotal)}`) : "#";
    upiBtn.classList.toggle("is-disabled", grandTotal === 0);
  }
}

// Builds the WhatsApp checkout message. Field labels (Mode/Subtotal/Delivery/Total payable/
// Address/the closing line) are fixed English literals by design — this is an exact format
// contract, not translatable UI copy. No upi:// link is included here; UPI is its own button.
function buildCheckoutMessage() {
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    return t("wa_default_order");
  }

  const { itemsSubtotal, deliveryFee, grandTotal } = computeTotals();
  const itemLines = ids.map((id) => {
    const line = cart[id];
    const name = cartLineDisplayName(id, line.name);
    return `${line.qty} × ${name} — ${rupee(line.qty * line.price)}`;
  });

  const messageLines = ["Ghaint Food order", `Mode: ${orderMode}`, ...itemLines, `Subtotal: ${rupee(itemsSubtotal)}`];
  if (orderMode === "Delivery") {
    messageLines.push(`Delivery: ${rupee(deliveryFee)}`);
  }
  messageLines.push(`Total payable: ${rupee(grandTotal)}`);
  if (orderMode === "Delivery") {
    messageLines.push(`Address: ${deliveryAddress.trim()}`);
  }
  messageLines.push("Please send your UPI payment screenshot as the next message.");
  messageLines.push("");
  messageLines.push("Thank you for ordering with Ghaint Food!");

  return messageLines.join("\n");
}

function addToCart(id) {
  const item = findCartItem(id);
  if (!item) return;
  if (!cart[id]) {
    cart[id] = { name: item.name, price: item.price, category: item.category, qty: 0 };
  }
  cart[id].qty += 1;
  onCartChange();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  onCartChange();
}

function removeFromCart(id) {
  delete cart[id];
  onCartChange();
}

function onCartChange() {
  updateCartControlsUI();
  updateCartFab();
  renderCartDrawer();
}

function openCart() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (!overlay || !drawer) return;
  overlay.hidden = false;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (!overlay || !drawer) return;
  overlay.hidden = true;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

// Gate for both checkout buttons: validates first (cart non-empty, address if Delivery),
// shows a short inline message on failure, and never lets an unexpected error surface as a
// broken link or a raw stack trace to the customer.
function handleCheckoutClick(e, kind) {
  try {
    const result = validateCheckout();
    if (!result.ok) {
      e.preventDefault();
      showCheckoutError(result.message);
      return;
    }
    if (kind === "whatsapp" && !WHATSAPP_CONFIGURED) {
      e.preventDefault();
      return;
    }
    clearCheckoutError();
  } catch (err) {
    console.error("Checkout failed:", err);
    e.preventDefault();
    showCheckoutError(t("checkout_error_generic"));
  }
}

function wireCart() {
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".cart-add-btn");
    if (addBtn) {
      addToCart(addBtn.dataset.id);
      return;
    }
    const stepBtn = e.target.closest(".stepper-btn");
    if (stepBtn) {
      const delta = stepBtn.dataset.action === "inc" ? 1 : -1;
      changeQty(stepBtn.dataset.id, delta);
      return;
    }
    const removeBtn = e.target.closest(".cart-row-remove");
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.id);
      return;
    }
  });

  document.getElementById("cartFab")?.addEventListener("click", openCart);
  document.getElementById("cartClose")?.addEventListener("click", closeCart);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  document.getElementById("orderModeToggle")?.addEventListener("change", (e) => {
    const radio = e.target.closest('input[name="orderMode"]');
    if (radio) setOrderMode(radio.value);
  });

  document.getElementById("deliveryAddress")?.addEventListener("input", (e) => {
    deliveryAddress = e.target.value;
    // Re-render so the WhatsApp checkout link always reflects the latest address text.
    // renderCartDrawer() never touches the textarea node itself, so typing/focus/cursor
    // position are unaffected — only the (separate) cart summary and button hrefs update.
    renderCartDrawer();
  });

  document.getElementById("cartUpiVpaCopy")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(UPI_VPA);
    } catch (err) {
      console.error("Copying UPI ID failed:", err);
    }
  });

  document.getElementById("cartWhatsappBtn")?.addEventListener("click", (e) => handleCheckoutClick(e, "whatsapp"));
  document.getElementById("cartUpiBtn")?.addEventListener("click", (e) => handleCheckoutClick(e, "upi"));

  updateCartControlsUI();
  updateCartFab();
  renderCartDrawer();
}

function wireOrderButtons() {
  // These generic "Order on WhatsApp" buttons (hero/order-banner/footer/fab) have varying
  // internal markup (icon + span, icon-only, plain text) — only toggle href/class here,
  // never textContent/innerHTML, so a missing WHATSAPP_NUMBER can't wipe out an icon.
  document.querySelectorAll("[data-order]").forEach((el) => {
    const kind = el.dataset.order;
    if (kind === "whatsapp") {
      if (WHATSAPP_CONFIGURED) {
        el.href = waLink(t("wa_default_order"));
        el.target = "_blank";
        el.rel = "noopener";
        el.classList.remove("is-disabled");
      } else {
        el.href = "#";
        el.classList.add("is-disabled");
      }
    }
  });
}

function wireNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function wireChipClickDelegation() {
  const chipsWrap = document.getElementById("categoryChips");
  if (!chipsWrap) return;

  const header = document.querySelector(".site-header");
  const catNav = document.querySelector(".category-nav");

  chipsWrap.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    e.preventDefault();
    const target = document.getElementById(chip.dataset.target);
    if (!target) return;
    const offset = (header?.offsetHeight || 0) + (catNav?.offsetHeight || 0) + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
}

function wireChipObserver() {
  const chipsWrap = document.getElementById("categoryChips");
  if (!chipsWrap) return;
  if (categoryObserver) categoryObserver.disconnect();

  const sections = document.querySelectorAll(".menu-category");
  if (!sections.length) return;
  categoryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          chipsWrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
          const activeChip = chipsWrap.querySelector(`[data-target="${entry.target.id}"]`);
          if (activeChip) {
            activeChip.classList.add("is-active");
            activeChip.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
          }
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => categoryObserver.observe(s));
}

function wireLogoFallback() {
  document.querySelectorAll(".js-logo-img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".js-logo")?.classList.add("logo-fallback");
    });
  });
}

function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initTheme();
  applyStaticTranslations();
  renderMenu();
  renderTiffin();
  wireOrderButtons();
  wireCart();
  wireNavToggle();
  wireChipClickDelegation();
  wireChipObserver();
  wireLogoFallback();
  wireThemeToggle();
  wireLangSwitch();
  setFooterYear();
});

// What this file does: renders the menu/tiffin/cart from data + i18n, and builds the WhatsApp/UPI checkout links.
// Security limits: client-side only — no backend validation, no payment verification; cart, order mode and address are in-memory and lost on reload.
// Before production: set real WHATSAPP_NUMBER / UPI_VPA / UPI_PAYEE_NAME / DELIVERY_CHARGE above, confirm the WhatsApp number is verified, and test the UPI deep link with a real UPI app.
