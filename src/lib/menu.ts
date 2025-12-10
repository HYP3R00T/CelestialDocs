/**
 * Mobile menu toggle functionality
 */

function setMenuState(isOpen: boolean): void {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");
  const menuIcon = btn?.querySelector('[data-icon="menu"]');
  const closeIcon = btn?.querySelector('[data-icon="close"]');

  if (!menu || !btn) return;

  menu.classList.toggle("hidden", !isOpen);
  btn.setAttribute("aria-expanded", String(isOpen));
  menu.setAttribute("aria-hidden", String(!isOpen));
  btn.setAttribute("data-state", isOpen ? "open" : "closed");
  menuIcon?.classList.toggle("hidden", isOpen);
  closeIcon?.classList.toggle("hidden", !isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

export function initMobileMenu(): void {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");

  if (!menu || !btn) return;

  btn.addEventListener("click", () => {
    setMenuState(menu.classList.contains("hidden"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) setMenuState(false);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuState(false);
  });
}
