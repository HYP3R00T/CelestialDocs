/**
 * Mobile menu toggle functionality
 */

function getFirstFocusable(container: HTMLElement): HTMLElement | null {
    return container.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ) as HTMLElement | null;
}

function setMenuState(isOpen: boolean): void {
    const menu = document.getElementById("mobile-menu");
    const btn = document.getElementById("mobile-menu-btn");
    const menuIcon = btn?.querySelector('[data-icon="menu"]');
    const closeIcon = btn?.querySelector('[data-icon="close"]');

    if (!menu || !btn) return;
    // Simplified sequence: ensure focus is moved before hiding the menu
    if (isOpen) {
        menu.classList.remove("hidden");
        menu.setAttribute("aria-hidden", "false");
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("data-state", "open");
        menuIcon?.classList.toggle("hidden", true);
        closeIcon?.classList.toggle("hidden", false);
        document.body.style.overflow = "hidden";

        const firstFocusable = getFirstFocusable(menu);
        if (firstFocusable) firstFocusable.focus();
        return;
    }

    // closing: move focus back to toggle first, then hide and mark aria-hidden
    btn.focus();
    menu.setAttribute("aria-hidden", "true");
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("data-state", "closed");
    menuIcon?.classList.toggle("hidden", false);
    closeIcon?.classList.toggle("hidden", true);
    document.body.style.overflow = "";
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
