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
  const report = window.gtag_report_conversion;
  if (typeof report !== "function") return;

  if (opensInNewTab) {
    report();
    return;
  }

  event.preventDefault();
  report(event.currentTarget.href);
}
