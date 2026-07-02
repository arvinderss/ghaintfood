/*
 * Ghaint Food — site config & interactions.
 * Update WHATSAPP_NUMBER / ZOMATO_URL / SWIGGY_URL below when you have them —
 * every order button on the site reads from this one place.
 */
const CONFIG = {
  whatsappNumber: "919914829511", // country code + number, digits only
  zomatoUrl: "", // e.g. "https://www.zomato.com/ludhiana/ghaint-food" — leave "" to show "Coming soon"
  swiggyUrl: "" // e.g. "https://www.swiggy.com/restaurants/ghaint-food" — leave "" to show "Coming soon"
};

function waLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function rupee(n) {
  return `₹${n}`;
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
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-prices">
          <span class="price-direct">${rupee(item.direct)} <small>direct</small></span>
          <span class="price-platform">${rupee(item.platform)} <small>Zomato/Swiggy</small></span>
        </div>
      `;
      grid.appendChild(card);
    });
    section.appendChild(grid);

    const orderLink = document.createElement("a");
    orderLink.className = "category-order-link";
    orderLink.href = waLink(`Hi Ghaint Food! I'd like to order from your ${group.category} menu:\n`);
    orderLink.target = "_blank";
    orderLink.rel = "noopener";
    orderLink.textContent = `Order ${group.category} on WhatsApp →`;
    section.appendChild(orderLink);

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
  if (!list || !price || !avail) return;

  TIFFIN.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  price.textContent = rupee(TIFFIN.price);
  avail.textContent = TIFFIN.availability;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function wireOrderButtons() {
  document.querySelectorAll("[data-order]").forEach((el) => {
    const kind = el.dataset.order;

    if (kind === "whatsapp") {
      el.href = waLink("Hi Ghaint Food! I'd like to place an order.");
      el.target = "_blank";
      el.rel = "noopener";
    } else if (kind === "whatsapp-tiffin") {
      el.href = waLink("Hi Ghaint Food! I'd like to order a Tiffin.");
      el.target = "_blank";
      el.rel = "noopener";
    } else if (kind === "zomato" || kind === "swiggy") {
      const url = kind === "zomato" ? CONFIG.zomatoUrl : CONFIG.swiggyUrl;
      if (url) {
        el.href = url;
        el.target = "_blank";
        el.rel = "noopener";
      } else {
        el.href = "#";
        el.classList.add("is-disabled");
        el.setAttribute("aria-disabled", "true");
        el.title = "Coming soon";
        el.addEventListener("click", (e) => e.preventDefault());
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

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderTiffin();
  wireOrderButtons();
  wireNavToggle();
  wireChipScroll();
  wireLogoFallback();
  setFooterYear();
});
