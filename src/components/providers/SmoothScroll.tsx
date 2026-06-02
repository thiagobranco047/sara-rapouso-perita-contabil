"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap-client";
import {
  SmoothScrollContext,
  type SmoothScrollContextValue,
} from "@/components/providers/smooth-scroll-context";

function getHeaderOffset(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-height",
  );
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 80;
}

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
  on: (event: string, callback: () => void) => void;
  scrollTo: (
    target: HTMLElement,
    options?: { offset?: number; duration?: number },
  ) => void;
};

export function SmoothScrollRuntime({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    let cancelled = false;
    let lenis: LenisInstance | null = null;
    let rafId = 0;
    let ctx: gsap.Context | null = null;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    async function init() {
      ensureGsapPlugins();
      if (cancelled) return;

      if (!reduced) {
        const { default: Lenis } = await import("lenis");
        if (cancelled) return;

        lenis = new Lenis({
          lerp: 0.14,
          duration: 1.1,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1,
        }) as LenisInstance;

        lenisRef.current = lenis;
        document.documentElement.classList.add("lenis");

        lenis.on("scroll", () => ScrollTrigger.update());

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      }

      ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("main > section");

        sections.forEach((section) => {
          if (section.id === "inicio") return;

          const content =
            section.querySelector<HTMLElement>(".container-site") ?? section;

          gsap.fromTo(
            content,
            {
              opacity: reduced ? 1 : 0,
              y: reduced ? 0 : 28,
            },
            {
              opacity: 1,
              y: 0,
              duration: reduced ? 0 : 0.65,
              ease: "power2.out",
              force3D: true,
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        });
      });

      ScrollTrigger.refresh();
    }

    void init();

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      cancelAnimationFrame(rafId);
      ctx?.revert();
      if (lenis) {
        lenis.destroy();
        lenisRef.current = null;
        document.documentElement.classList.remove("lenis");
      }
    };
  }, []);

  const scrollTo = useCallback<SmoothScrollContextValue["scrollTo"]>(
    (hash) => {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      const offset = -getHeaderOffset();

      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset, duration: 1 });
        return;
      }

      const top =
        target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    },
    [],
  );

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
