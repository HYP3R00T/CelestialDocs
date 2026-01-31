/**
 * GitHub star count with client-side caching and rate-limit handling
 */

interface CachedStarData {
    count: number;
    timestamp: number;
}

const CACHE_KEY = "github-star-count";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

function normalizeRepo(repo: string): string | null {
    const path = repo.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");
    return path.includes("/") ? path : null;
}

function getCached(): CachedStarData | null {
    try {
        const item = localStorage.getItem(CACHE_KEY);
        return item ? JSON.parse(item) : null;
    } catch {
        return null;
    }
}

function setCache(count: number): void {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ count, timestamp: Date.now() }));
    } catch {
        return;
    }
}

export async function fetchStarCount(repo: string): Promise<number> {
    try {
        const repoPath = normalizeRepo(repo);
        if (!repoPath) return 0;

        const cached = getCached();
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
            return cached.count;
        }

        const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "celestialdocs-site",
            },
        });

        if (!response.ok) return cached?.count ?? 0;

        const count = (await response.json())?.stargazers_count ?? 0;
        setCache(count);
        return count;
    } catch {
        return getCached()?.count ?? 0;
    }
}

export function formatStarCount(count: number): string {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : String(count);
}

export function shouldShowStarCount(count: number, threshold = 0): boolean {
    return count > threshold;
}

export async function initGitHubStars(): Promise<void> {
    const button = document.getElementById("github-star-button");
    const countSpan = document.getElementById("github-star-count");

    if (!button || !countSpan) return;

    const repo = button.dataset.repo;
    const threshold = parseInt(button.dataset.threshold || "0", 10);

    if (!repo) return;

    try {
        const count = await fetchStarCount(repo);
        if (shouldShowStarCount(count, threshold)) {
            countSpan.textContent = formatStarCount(count);
            countSpan.classList.remove("hidden");
            button.classList.remove("size-9");
            button.classList.add("h-9");
        }
    } catch {
        return;
    }
}
