/**
 * Layout width toggle functionality
 */

type LayoutMode = "wide" | "comfort";

const STORAGE_KEY = "layout-width-mode";

function getMode(): LayoutMode {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "comfort" ? "comfort" : "wide";
}

function applyMode(mode: LayoutMode): void {
  document.body.dataset.layout = mode;
  const toggle = document.getElementById("layout-width-toggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(mode === "wide"));
    toggle.setAttribute("title", mode === "wide" ? "Wide" : "Comfort");
  }
  localStorage.setItem(STORAGE_KEY, mode);
}

export function initLayoutToggle(): void {
  const toggle = document.getElementById("layout-width-toggle");
  if (!toggle) return;

  applyMode(getMode());

  toggle.addEventListener("click", () => {
    const current = getMode();
    applyMode(current === "wide" ? "comfort" : "wide");
  });
}
