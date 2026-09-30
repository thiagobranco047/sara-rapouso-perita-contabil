"use client";

import type { ComponentProps } from "react";
import { trackContactClick } from "@/lib/gtag";

type ContactAnchorProps = ComponentProps<"a"> & {
  newTab?: boolean;
};

export function ContactAnchor({
  newTab = false,
  onClick,
  target,
  rel,
  ...props
}: ContactAnchorProps) {
  const opensInNewTab = newTab || target === "_blank";

  return (
    <a
      {...props}
      target={opensInNewTab ? "_blank" : target}
      rel={opensInNewTab ? "noopener noreferrer" : rel}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          trackContactClick(event, opensInNewTab);
        }
      }}
    />
  );
}
