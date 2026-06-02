"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap-client";
import { siteConfig, sectionIds } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/layout/NavLink";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-context";

export function Header() {
  const smoothScroll = useSmoothScroll();
  const headerBarRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const headerBar = headerBarRef.current;
    const desktopNav = desktopNavRef.current;
    const logo = logoRef.current;
    if (!headerBar || !logo) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    ensureGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logo,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 },
      );

      if (desktopNav) {
        gsap.fromTo(
          desktopNav.querySelectorAll("[data-nav-item]"),
          { autoAlpha: 0, y: -8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power2.out",
            delay: 0.2,
          },
        );
      }

      if (!prefersReduced) {
        ScrollTrigger.create({
          trigger: document.documentElement,
          start: "top -60",
          onEnter: () => setScrolled(true),
          onLeaveBack: () => setScrolled(false),
        });
      }
    }, headerBar);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScroll?.scrollTo("#inicio");
    window.history.pushState(null, "", "#inicio");
    closeMenu();
  };

  const mainNav = siteConfig.nav.filter((item) => item.href !== "#contato");
  const contactItem = siteConfig.nav.find((item) => item.href === "#contato")!;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[box-shadow] duration-300 nav-backdrop ${
          scrolled || menuOpen ? "shadow-[var(--shadow-soft)]" : ""
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div ref={headerBarRef} className="h-full">
          <Container
            as="nav"
            className="flex h-full items-center justify-between gap-3"
            aria-label="Navegação principal"
          >
            <a
              ref={logoRef}
              href="#inicio"
              onClick={handleLogoClick}
              className="relative z-[60] flex shrink-0 items-center gap-2 sm:gap-3"
              aria-label="Sara Rapouso — ir para o início"
            >
              <Image
                src="/images/logo-sr.png"
                alt=""
                width={48}
                height={48}
                className="h-9 w-auto md:h-11"
                priority
              />
              <span className="hidden flex-col lg:flex">
                <span className="text-caption text-[var(--color-navy-900)]">
                  Sara Rapouso
                </span>
                <span className="text-[0.6rem] tracking-[0.18em] text-[var(--color-muted)] uppercase">
                  Perita Contábil
                </span>
              </span>
            </a>

            <ul
              ref={desktopNavRef}
              className="hidden max-w-[52rem] flex-1 items-center justify-end gap-0.5 xl:flex"
              role="menubar"
            >
              {mainNav.map((item) => (
                <li key={item.href} role="none" data-nav-item>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={activeSection === item.href.replace("#", "")}
                  />
                </li>
              ))}
              <li role="none" data-nav-item className="ml-1">
                <NavLink
                  href={contactItem.href}
                  label={contactItem.label}
                  isActive={activeSection === "contato"}
                  className="!rounded-[var(--radius-md)] !bg-[var(--color-navy-900)] !px-4 !py-2 !text-white hover:!bg-[var(--color-blue-600)] hover:!text-white"
                />
              </li>
            </ul>

            <ul
              className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:flex xl:hidden [&::-webkit-scrollbar]:hidden"
              role="menubar"
              aria-label="Seções do site"
            >
              {siteConfig.nav.map((item) => (
                <li key={item.href} role="none" className="shrink-0">
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={activeSection === item.href.replace("#", "")}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="relative z-[60] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-navy-900)]/10 bg-white lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block h-0.5 w-5 bg-[var(--color-navy-900)] transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[var(--color-navy-900)] transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[var(--color-navy-900)] transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </Container>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-0 z-[45] bg-white pt-[var(--header-height)] transition-[visibility,opacity] duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <Container className="flex max-h-[calc(100dvh-var(--header-height))] flex-1 flex-col overflow-y-auto py-6">
          <ul className="flex flex-col gap-1" role="menu">
            {siteConfig.nav.map((item) => (
              <li key={item.href} role="none">
                <NavLink
                  href={item.href}
                  label={item.label}
                  variant="mobile"
                  isActive={activeSection === item.href.replace("#", "")}
                  onNavigate={closeMenu}
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
