import type { MouseEvent } from "react";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function trackContactClick(
  event: MouseEvent<HTMLAnchorElement>,
  opensInNewTab: boolean,
) {
  const anchor = event.currentTarget;
  const url = new URL(anchor.href);

  const isWhatsApp =
    url.protocol === "https:" &&
    (url.hostname === "wa.me" ||
      url.hostname === "api.whatsapp.com" ||
      url.hostname === "web.whatsapp.com");

  if (!isWhatsApp || event.defaultPrevented) return;

  const report = window.gtag_report_conversion;
  if (typeof report !== "function") return;

  const preserveNavigation =
    opensInNewTab ||
    (anchor.target !== "" && anchor.target !== "_self") ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0;

  if (preserveNavigation) {
    report();
    return;
  }

  event.preventDefault();
  report(anchor.href);
}