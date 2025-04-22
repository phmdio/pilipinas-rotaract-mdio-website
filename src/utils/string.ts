/**
 * Converts a title string to a URL-friendly slug
 * @param title The title to convert to a slug
 * @returns A URL-friendly slug
 */
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()                // Convert to lowercase
    .replace(/[^\w\s-]/g, '')     // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with dashes
    .replace(/--+/g, '-')         // Replace multiple dashes with single dash
    .trim()                       // Trim leading/trailing spaces
    .replace(/^-+|-+$/g, '');     // Remove leading/trailing dashes
} 