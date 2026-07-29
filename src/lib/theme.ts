/**
 * Theme toggle functionality
 */

type Theme = "light" | "dark";

function getTheme(): Theme {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  }
  return "dark";
}

function applyTheme(theme: Theme): void {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}

export function initTheme(): void {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  applyTheme(getTheme());

  toggle.addEventListener("click", () => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}
