/**
 * Fetch the stargazers count for a GitHub repository.
 * Accepts either a full repo URL (https://github.com/owner/repo) or an owner/repo string.
 */
export async function getRepoStarCount(repo: string): Promise<number> {
  try {
    // Normalize repo to 'owner/repo'
    const repoPath = repo.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");
    const url = `https://api.github.com/repos/${repoPath}`;

    // Keep the same headers as the caller used previously
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "celestialdocs-site",
    };

    const response = await fetch(url, { headers });
    if (!response.ok) return 0;
    const data = await response.json();
    return data?.stargazers_count ?? 0;
  } catch (err) {
    return 0;
  }
}

/**
 * Format the number of stars (1_234 -> '1.2k').
 */
export const formatStarCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

export const shouldShowStarCount = (count: number, threshold = 50) => count > threshold;
