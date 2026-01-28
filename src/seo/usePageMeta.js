import { useEffect } from "react";

export function usePageMeta({
  title,
  description,
  canonical,
  image = "https://malakus-portfolio.vercel.app/malak-udom-portfolio-preview.png", 
}) {
  useEffect(() => {
    // 1. Standard Meta
    if (title) document.title = title;
    setMetaTag("name", "description", description);

    // 2. Open Graph (Facebook / LinkedIn)
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");

    if (canonical) {
      setMetaTag("property", "og:url", canonical);
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // 3. Twitter / X
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // Helper function to find or create tags
    function setMetaTag(attrName, attrValue, content) {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}='${attrValue}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }
  }, [title, description, canonical, image]);
}