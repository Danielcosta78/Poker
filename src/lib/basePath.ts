// GitHub Pages serves this project at /pip-poker/, not at the domain root
// (see next.config.ts). Next.js prefixes its own generated assets (JS/CSS
// chunks, next/image) with that basePath automatically, but a plain
// `<img src="/foo.jpg">` or `<source src="/foo.mp4">` is just a string we
// wrote — Next never touches it. On GitHub Pages that string then resolves
// to the domain root instead of /pip-poker/, 404s, and any "falls back to a
// placeholder on error" logic silently kicks in.
//
// Use this for every hardcoded absolute path to a file in /public (images,
// video, etc). Route paths (`/game`, `/learn`, …) don't need it — those go
// through next/link, which already knows the basePath.
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
