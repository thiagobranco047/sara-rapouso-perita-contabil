"use client";

import { createContext, useContext } from "react";

export type SmoothScrollContextValue = {
  scrollTo: (hash: string) => void;
};

export const SmoothScrollContext =
  createContext<SmoothScrollContextValue | null>(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
