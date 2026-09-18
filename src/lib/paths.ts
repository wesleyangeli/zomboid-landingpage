const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://wesleyangeli.github.io${basePath}`;

export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}
