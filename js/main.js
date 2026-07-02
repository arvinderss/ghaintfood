/*
 * Ghaint Food — site config & interactions.
 * Update WHATSAPP_NUMBER / UPI details below when you have them —
 * every order button and the cart checkout reads from this one place.
 */
const CONFIG = {
  whatsappNumber: "919914829511", // country code + number, digits only
  upiId: "kaurrajinder2618-1@okicici", // UPI VPA that receives payment
  upiPayeeName: "Ghaint Food"
};

const CART_STORAGE_KEY = "ghaintfood-cart";
let cart = loadCart();

function waLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function rupee(n) {
  return `₹${n}`;
}

function upiLink(amount, note) {
  const params = new URLSearchParams({
    pa: CONFIG.upiId,
    pn: CONFIG.upiPayeeName,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note
  });
  return `upi://pay?${params.toString()}`;
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    /* storage unavailable — cart still works for this page view */
  }
}

function renderMenu() {
  const wrap = document.getElementById("menuCategories");
  const chips = document.getElementById("categoryChips");
  if (!wrap || !chips) return;

  MENU.forEach((group, i) => {
    const slug = slugify(group.category);

    // chip
    const chip = document.createElement("a");
    chip.href = `#cat-${slug}`;
    chip.className = "chip";
    chip.dataset.target = `cat-${slug}`;
    chip.textContent = group.category;
    chips.appendChild(chip);

    // section
    const section = document.createElement("div");
    section.className = "menu-category";
    section.id = `cat-${slug}`;

    const heading = document.createElement("h3");
    heading.textContent = group.category;
    if (group.note) {
      const note = document.createElement("span");
      note.className = "category-note";
      note.textContent = group.note;
      heading.appendChild(note);
    }
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "menu-grid";
    group.items.forEach((item) => {
      const id = `${slug}-${slugify(item.name)}`;
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <img class="menu-card-img" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-price">${rupee(item.price)} <small>takeaway</small></div>
          <div class="cart-controls" data-id="${id}">
            <button class="cart-add-btn" data-id="${id}">Add +</button>
            <div class="cart-stepper" hidden>
              <button class="stepper-btn" data-action="dec" data-id="${id}" aria-label="Decrease quantity">−</button>
              <span class="stepper-qty" data-qty-for="${id}">0</span>
              <button class="stepper-btn" data-action="inc" data-id="${id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
      `;
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
  if (!list || !price || !avail) return;

  TIFFIN.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  price.textContent = rupee(TIFFIN.price);
  avail.textContent = TIFFIN.availability;
  if (image) {
    image.src = TIFFIN.image;
    image.alt = "Home-style tiffin thali";
  }
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Flat lookup of every orderable item (menu items + tiffin) by cart id.
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
  const totalEl = document.getElementById("cartTotal");
  const whatsappBtn = document.getElementById("cartWhatsappBtn");
  const upiBtn = document.getElementById("cartUpiBtn");
  if (!itemsWrap || !totalEl) return;

  itemsWrap.querySelectorAll(".cart-row").forEach((row) => row.remove());

  const ids = Object.keys(cart);
  if (emptyMsg) emptyMsg.hidden = ids.length > 0;

  ids.forEach((id) => {
    const line = cart[id];
    const row = document.createElement("div");
    row.className = "cart-row";
    row.dataset.id = id;
    row.innerHTML = `
      <div class="cart-row-info">
        <div class="cart-row-name">${line.name}</div>
        <div class="cart-row-unit">${rupee(line.price)} each</div>
      </div>
      <div class="cart-stepper">
        <button class="stepper-btn" data-action="dec" data-id="${id}" aria-label="Decrease quantity">−</button>
        <span class="stepper-qty" data-qty-for="${id}">${line.qty}</span>
        <button class="stepper-btn" data-action="inc" data-id="${id}" aria-label="Increase quantity">+</button>
      </div>
      <div class="cart-row-total">${rupee(line.qty * line.price)}</div>
      <button class="cart-row-remove" data-action="remove" data-id="${id}" aria-label="Remove ${line.name}">&times;</button>
    `;
    itemsWrap.appendChild(row);
  });

  const total = cartTotal();
  totalEl.textContent = rupee(total);

  if (whatsappBtn) whatsappBtn.href = waLink(buildOrderMessage());
  if (upiBtn) {
    upiBtn.textContent = `Pay ${rupee(total)} via UPI`;
    upiBtn.href = total > 0 ? upiLink(total, `Ghaint Food order - ${rupee(total)}`) : "#";
    upiBtn.classList.toggle("is-disabled", total === 0);
  }
}

function buildOrderMessage() {
  const ids = Object.keys(cart);
  const total = cartTotal();
  if (ids.length === 0) {
    return "Hi Ghaint Food! I'd like to place an order.";
  }
  const lines = ids.map((id, i) => {
    const line = cart[id];
    return `${i + 1}. ${line.name} x${line.qty} — ${rupee(line.qty * line.price)}`;
  });
  const upi = upiLink(total, `Ghaint Food order - ${rupee(total)}`);
  return [
    "Hi Ghaint Food! Here's my order:",
    "",
    ...lines,
    "",
    `Total Payable: ${rupee(total)}`,
    "",
    `I'll pay via UPI: ${upi}`,
    "Sending the payment confirmation screenshot next."
  ].join("\n");
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
  saveCart();
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

  document.getElementById("cartUpiBtn")?.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("is-disabled")) e.preventDefault();
  });

  updateCartControlsUI();
  updateCartFab();
  renderCartDrawer();
}

function wireOrderButtons() {
  document.querySelectorAll("[data-order]").forEach((el) => {
    const kind = el.dataset.order;
    if (kind === "whatsapp") {
      el.href = waLink("Hi Ghaint Food! I'd like to place an order.");
      el.target = "_blank";
      el.rel = "noopener";
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

function wireChipScroll() {
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

  const sections = document.querySelectorAll(".menu-category");
  if (!sections.length) return;
  const observer = new IntersectionObserver(
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
  sections.forEach((s) => observer.observe(s));
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

function sanitizeCart() {
  Object.keys(cart).forEach((id) => {
    if (!findCartItem(id)) delete cart[id];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  sanitizeCart();
  renderMenu();
  renderTiffin();
  wireOrderButtons();
  wireCart();
  wireNavToggle();
  wireChipScroll();
  wireLogoFallback();
  setFooterYear();
});
