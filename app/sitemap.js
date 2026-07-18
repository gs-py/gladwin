const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gladwin-liart.vercel.app";

export default function sitemap() {
  return ["", "/services", "/resume", "/work", "/blog", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
