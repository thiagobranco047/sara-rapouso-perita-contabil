"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SmoothScrollInner = dynamic(
  () =>
    import("@/components/providers/SmoothScroll").then(
      (mod) => mod.SmoothScrollRuntime,
    ),
  { ssr: false },
);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <SmoothScrollInner>{children}</SmoothScrollInner>;
}
