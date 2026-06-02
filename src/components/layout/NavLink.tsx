"use client";

import type { MouseEvent } from "react";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-context";

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  onNavigate?: () => void;
  className?: string;
  variant?: "desktop" | "mobile";
  tone?: "default" | "light";
};

export function NavLink({
  href,
  label,
  isActive = false,
  onNavigate,
  className = "",
  variant = "desktop",
  tone = "default",
}: NavLinkProps) {
  const smoothScroll = useSmoothScroll();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (smoothScroll) {
      smoothScroll.scrollTo(href);
    } else {
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.pushState(null, "", href);
    onNavigate?.();
  };

  const baseDesktop =
    "rounded-[var(--radius-sm)] px-2.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors lg:px-3";
  const baseMobile =
    "block rounded-[var(--radius-md)] px-4 py-3 text-lg leading-snug font-medium transition-colors";

  const activeDesktop =
    tone === "light"
      ? "bg-white/20 text-white"
      : "bg-[var(--color-blue-50)] text-[var(--color-blue-600)]";
  const inactiveDesktop =
    tone === "light"
      ? "text-white/90 hover:bg-white/15 hover:text-white"
      : "text-[var(--color-navy-800)] hover:bg-[var(--color-blue-50)] hover:text-[var(--color-blue-600)]";
  const activeMobile = "bg-[var(--color-blue-50)] text-[var(--color-blue-600)]";
  const inactiveMobile =
    "text-[var(--color-navy-900)] hover:bg-[var(--color-blue-50)]";

  const variantClass =
    variant === "desktop"
      ? `${baseDesktop} ${isActive ? activeDesktop : inactiveDesktop}`
      : `${baseMobile} ${isActive ? activeMobile : inactiveMobile}`;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${variantClass} ${className}`.trim()}
      aria-current={isActive ? "true" : undefined}
    >
      {label}
    </a>
  );
}
