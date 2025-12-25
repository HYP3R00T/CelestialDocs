import type { ContentSystem } from "./types";
import { CONTENT } from "@data/config";

/**
 * Resolve a content system by ID, with proper error handling.
 * Defaults to "docs" if no collectionId is provided.
 *
 * @param collectionId - The system ID to resolve (optional, defaults to "docs")
 * @returns The resolved ContentSystem
 * @throws Error if the system is not found
 */
export function resolveSystem(collectionId?: string): ContentSystem {
  const key = collectionId ?? "docs";
  const system = CONTENT.systems.find((s) => s.id === key);

  if (!system) {
    throw new Error(`Content system not found: ${key}`);
  }

  return system;
}

/**
 * Get the base route for a content system.
 *
 * @param collectionId - The system ID (optional, defaults to "docs")
 * @returns The base route for the system (e.g., "/docs", "/notes")
 */
export function getSystemRoute(collectionId?: string): string {
  const system = resolveSystem(collectionId);
  return system.route ?? `/${system.id}`;
}
