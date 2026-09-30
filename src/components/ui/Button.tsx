"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode } from "react";
import { trackContactClick } from "@/lib/gtag";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark" | "onDarkOutline";
  external?: boolean;
  trackContact?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-navy-800)] shadow-[var(--shadow-soft)]",
  secondary:
    "bg-white text-[var(--color-navy-900)] border border-[var(--color-navy-900)]/15 hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]",
  ghost:
    "bg-transparent text-[var(--color-navy-900)] hover:text-[var(--color-blue-600)] underline-offset-4 hover:underline",
  onDark:
    "bg-white text-[var(--color-navy-900)] hover:bg-blue-50 shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
  onDarkOutline:
    "border border-white/50 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/20",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  trackContact = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-[var(--space-md)] py-[var(--space-xs)] text-small font-medium tracking-wide transition-colors duration-200";

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  function handleContactClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!trackContact) return;
    trackContactClick(event, external);
  }

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleContactClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
